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
function updateUrlFragment() {
    location.hash = Array.from(document
        .querySelectorAll(".tree")
        .values()
        .map((tree) => Array.from(tree.querySelectorAll(".talent"))
        .map((t) => t.points)
        .join("")
        .replace(/0+$/, "")))
        .join("-")
        .replace(/-+$/, "");
}
function* zip(a, b) {
    const aIterator = a[Symbol.iterator]();
    const bIterator = b[Symbol.iterator]();
    while (true) {
        const aValue = aIterator.next();
        const bValue = bIterator.next();
        if (aValue.done || bValue.done)
            return [aValue.value, bValue.value];
        yield [aValue.value, bValue.value];
    }
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
                        createElement("p", { id: "tooltipFooter", className: "req-can-increment" }, ["Click to learn"]),
                    ]
                    : [
                        createElement("p", { id: "tooltipText" }, talent.text[t.points - 1]),
                        ...(t.points < talent.text.length
                            ? [
                                createElement("br"),
                                createElement("p", {}, ["Next rank:"]),
                                createElement("p", { id: "tooltipText" }, talent.text[t.points]),
                            ]
                            : []),
                        createElement("p", { id: "tooltipFooter" }, [
                            createElement("p", { className: "req-can-increment" }, [
                                "Click to learn",
                            ]),
                            createElement("p", { className: "req-can-decrement" }, [
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
    const totalPointsLeft = (function () {
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
            get current() {
                return current;
            },
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
    function refreshTalentClasses() {
        for (const tree of document.querySelectorAll(".tree")) {
            let currentRow = 0;
            let currentRowPoints = 0;
            let pointsAbove = 0;
            let blockDecrementAboveRow;
            for (const talent of tree.querySelectorAll(".talent")) {
                talent.classList.toggle("has-talent-points", talent.points > 0);
                talent.classList.toggle("can-increment", totalPointsLeft.current > 0 &&
                    talent.points < talent.maxPoints &&
                    tree.treePoints.current >= talent.requiredPoints &&
                    (!talent.req ||
                        tree
                            .querySelectorAll(".talent")
                            .values()
                            .some((t) => t.pos.x === talent.req.x &&
                            t.pos.y === talent.req.y &&
                            t.points === t.maxPoints)));
                if (talent.pos.y > currentRow) {
                    currentRow = talent.pos.y;
                    pointsAbove += currentRowPoints;
                    currentRowPoints = 0;
                }
                currentRowPoints += talent.points;
                if (talent.points && talent.requiredPoints >= pointsAbove) {
                    blockDecrementAboveRow = currentRow;
                }
                talent.classList.toggle("can-decrement", talent.points > 0 &&
                    !tree
                        .querySelectorAll(".talent")
                        .values()
                        .some((t) => t.points &&
                        t.req?.x === talent.pos.x &&
                        t.req?.y === talent.pos.y));
            }
            if (blockDecrementAboveRow) {
                for (const talent of tree.querySelectorAll(".talent")) {
                    if (talent.pos.y < blockDecrementAboveRow) {
                        talent.classList.remove("can-decrement");
                    }
                }
            }
        }
    }
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
                    if (totalPointsLeft.decrement()) {
                        current += 1;
                        refresh();
                        return true;
                    }
                },
                decrement() {
                    if (current > 0 && totalPointsLeft.increment()) {
                        current -= 1;
                        refresh();
                        return true;
                    }
                },
            };
        })();
        treecontainer.appendChild(createElement("div", { className: "singletreecontainer" }, [
            treePoints.header,
            createElement("div", { className: "tree", treePoints }, [
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
                        className: `talent`,
                        points: 0,
                        maxPoints: talent.text.length,
                        requiredPoints: talentRowIndex * 5,
                        pos: { x: talentColumnIndex, y: talentRowIndex },
                        req: talent.req === "up"
                            ? {
                                x: talentColumnIndex,
                                y: talentRowIndex - talent.reqDist,
                            }
                            : talent.req === "left"
                                ? {
                                    x: talentColumnIndex - talent.reqDist,
                                    y: talentRowIndex,
                                }
                                : talent.req === "right"
                                    ? {
                                        x: talentColumnIndex + talent.reqDist,
                                        y: talentRowIndex,
                                    }
                                    : undefined,
                    }, [], {
                        gridRow: `${talentRowIndex + 1}`,
                        gridColumn: `${talentColumnIndex + 1}`,
                    });
                    const anchorName = talent.req
                        ? `--talent-${talent.name.replace(/\W+/g, "-")}`
                        : undefined;
                    talentElement.append(createElement("button", {
                        onclick(ev) {
                            if (talentElement.classList.contains("can-increment") &&
                                treePoints.increment()) {
                                spent.textContent = `${++talentElement.points}`;
                                refreshTooltip(talentElement, talent);
                                refreshTalentClasses();
                                updateUrlFragment();
                            }
                            ev.preventDefault();
                        },
                        oncontextmenu(ev) {
                            if (talentElement.classList.contains("can-decrement") &&
                                treePoints.decrement()) {
                                spent.textContent = `${--talentElement.points}`;
                                refreshTooltip(talentElement, talent);
                                refreshTalentClasses();
                                updateUrlFragment();
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
    refreshTalentClasses();
    if (location.hash) {
        for (const [treeSegment, tree] of zip(location.hash.replace("#", "").split("-"), document.querySelectorAll(".tree"))) {
            for (const [talentSegment, talent] of zip(treeSegment.split(""), tree.querySelectorAll(".talent button"))) {
                for (let i = 0; i < parseInt(talentSegment); ++i) {
                    talent.click();
                }
            }
        }
    }
};
document.body.appendChild(script);
