function createElement(tagName, properties, children, style) {
    const e = document.createElement(tagName);
    if (properties)
        Object.assign(e, properties);
    if (children)
        e.append(...children);
    if (style)
        Object.assign(e.style, style);
    return e;
}
function formatUnchangedTalentTexts(texts) {
    return texts.map((t) => [t]);
}
function change(newValue, oldValue) {
    return createElement("span", { className: "changed" }, oldValue
        ? [
            createElement("ruby", {}, [
                newValue,
                createElement("rt", {}, [oldValue]),
            ]),
        ]
        : [newValue]);
}
const script = document.createElement("script");
script.src = location.pathname.match(/(\w+)(?:\.html)?$/)[1] + ".js";
script.onload = () => {
    function refreshTooltip(t, talent) {
        t.querySelector("#tooltip")?.remove();
        t.append(createElement("div", { id: "tooltip" }, [
            createElement("div", {}, [
                createElement("p", { id: "tooltipTitle" }, [talent.name]),
                ...(t.points == 0
                    ? [
                        createElement("p", { id: "tooltipText" }, talent.text[0]),
                        createElement("p", { id: "tooltipFooter", className: "needs-points" }, ["Click to learn"]),
                    ]
                    : [
                        createElement("p", { id: "tooltipText" }, talent.text[t.points - 1]),
                        ...(t.points < talent.text.length
                            ? [
                                createElement("br"),
                                createElement("p", {}, ["Next rank:"]),
                                createElement("p", { id: "tooltipText" }, talent.text[t.points]),
                                createElement("p", { id: "tooltipFooter" }, [
                                    createElement("p", { className: "needs-points" }, [
                                        "Click to learn",
                                    ]),
                                    createElement("p", {}, ["Right-click to unlearn"]),
                                ]),
                            ]
                            : [
                                createElement("p", { id: "tooltipFooter" }, [
                                    "Right-click to unlearn",
                                ]),
                            ]),
                    ]),
            ]),
            createElement("div"),
            createElement("div"),
            createElement("div"),
        ]));
    }
    const totalPoints = (function () {
        const pointsleft = createElement("span", { id: "pointsleft" });
        document.body.appendChild(createElement("p", {}, ["Points left: ", pointsleft]));
        let current = 61;
        function refresh() {
            if (current)
                pointsleft.classList.add("gotpoints");
            else
                pointsleft.classList.remove("gotpoints");
            pointsleft.textContent = current.toString();
        }
        refresh();
        return {
            increment() {
                current += 1;
                refresh();
                return true;
            },
            decrement() {
                if (current > 0) {
                    current -= 1;
                    refresh();
                    return true;
                }
            },
        };
    })();
    const treecontainer = document.body.appendChild(createElement("div", { id: "treecontainer" }));
    for (const tree of data) {
        const treePoints = (() => {
            let current = 0;
            const counter = createElement("span", { className: "treepoints" });
            function refresh() {
                counter.textContent = current.toString();
                for (let i = 0; i <= 8 * 5; i += 5) {
                    if (current >= i)
                        counter.classList.add(`gotpts-${i}`);
                    else
                        counter.classList.remove(`gotpts-${i}`);
                }
            }
            refresh();
            return {
                get current() {
                    return current;
                },
                header: createElement("div", { className: "treeheader" }, [
                    createElement("img", { src: tree.icon }),
                    createElement("span", { className: "treename" }, [tree.name]),
                    counter,
                ]),
                increment() {
                    if (totalPoints.decrement()) {
                        current += 1;
                        refresh();
                        return true;
                    }
                },
                decrement() {
                    if (current > 0 && totalPoints.increment()) {
                        current -= 1;
                        refresh();
                        return true;
                    }
                },
            };
        })();
        treecontainer.appendChild(createElement("div", { className: "singletreecontainer" }, [
            treePoints.header,
            createElement("div", { className: "tree" }, [
                createElement("div", { className: "talentgrid" }, tree.talents.flatMap((talentRow, talentRowIndex) => talentRow.flatMap((talent, talentColumnIndex) => {
                    if (talent === null)
                        return [];
                    const spent = createElement("span", { className: "spent" }, [
                        "0",
                    ]);
                    const max = createElement("span", { className: "max" }, [
                        talent.text.length.toString(),
                    ]);
                    const talentElement = createElement("div", {
                        className: `talent needspts-${5 * talentRowIndex}`,
                        points: 0,
                        requiredPoints: talentRowIndex * 5,
                    }, [], {
                        gridRow: `${talentRowIndex + 1}`,
                        gridColumn: `${talentColumnIndex + 1}`,
                    });
                    const anchorName = talent.req
                        ? `--talent-${talent.name.replace(/\W+/g, "-")}`
                        : undefined;
                    talentElement.append(createElement("button", {
                        onclick(ev) {
                            if (talentElement.points < talent.text.length &&
                                treePoints.current >= 5 * talentRowIndex &&
                                treePoints.increment()) {
                                spent.textContent = `${++talentElement.points}`;
                                refreshTooltip(talentElement, talent);
                            }
                            ev.preventDefault();
                        },
                        oncontextmenu(ev) {
                            if (talentElement.points > 0 &&
                                treePoints.decrement()) {
                                const allTalents = talentElement
                                    .closest(".tree")
                                    .querySelectorAll(".talent")
                                    .values();
                                const spentPoints = allTalents
                                    .map((t) => t.points)
                                    .reduce((a, b) => a + b);
                                if (allTalents.every((t) => t.requiredPoints < spentPoints)) {
                                    spent.textContent = `${--talentElement.points}`;
                                    refreshTooltip(talentElement, talent);
                                }
                            }
                            ev.preventDefault();
                        },
                    }, [
                        createElement("div", { className: "talenttexture" }),
                        createElement("span", { className: "points" }, [
                            spent,
                            "/",
                            max,
                        ]),
                    ], Object.assign({
                        backgroundImage: `url("${talent.icon}")`,
                    }, anchorName ? { anchorName } : {})));
                    refreshTooltip(talentElement, talent);
                    return talent.req
                        ? [
                            talentElement,
                            createElement("div", { className: `arrow-${talent.req}` }, [], Object.assign({ positionAnchor: anchorName }, talent.req === "up"
                                ? { height: `${talent.reqDist * 60 - 44}px` }
                                : { width: `${talent.reqDist * 60 - 44}px` })),
                        ]
                        : [talentElement];
                }))),
            ], { backgroundImage: `url("${tree.bg}")` }),
        ]));
    }
};
document.body.appendChild(script);
