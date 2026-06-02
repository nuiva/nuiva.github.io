// @ts-ignore
const data = [
    {
        name: "Arcane",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/81.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_magicalsentry.jpg",
        talents: [
            [
                {
                    name: "Arcane Subtlety",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_dispelmagic.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces your target's resistance to all your spells by 5 and reduces the threat caused by your Arcane spells by 20%.",
                        "Reduces your target's resistance to all your spells by 10 and reduces the threat caused by your Arcane spells by 40%.",
                    ]),
                },
                {
                    name: "Arcane Focus",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_devotion.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the chance that the opponent can resist your Arcane spells by 2%.",
                        "Reduces the chance that the opponent can resist your Arcane spells by 4%.",
                        "Reduces the chance that the opponent can resist your Arcane spells by 6%.",
                        "Reduces the chance that the opponent can resist your Arcane spells by 8%.",
                        "Reduces the chance that the opponent can resist your Arcane spells by 10%.",
                    ]),
                },
                {
                    name: "Arcane Stability (old Improved Arcane Missiles)",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_starfall.jpg",
                    text: [
                        [
                            "Gives you a 20% chance to avoid interruption caused by damage while casting Arcane Missiles ",
                            createElement("span", { className: "changed" }, [
                                "and Arcane Blast.",
                            ]),
                        ],
                        [
                            "Gives you a 40% chance to avoid interruption caused by damage while casting Arcane Missiles ",
                            createElement("span", { className: "changed" }, [
                                "and Arcane Blast.",
                            ]),
                        ],
                        [
                            "Gives you a 60% chance to avoid interruption caused by damage while casting Arcane Missiles ",
                            createElement("span", { className: "changed" }, [
                                "and Arcane Blast.",
                            ]),
                        ],
                        [
                            "Gives you a 80% chance to avoid interruption caused by damage while casting Arcane Missiles ",
                            createElement("span", { className: "changed" }, [
                                "and Arcane Blast.",
                            ]),
                        ],
                        [
                            "Gives you a 100% chance to avoid interruption caused by damage while casting Arcane Missiles ",
                            createElement("span", { className: "changed" }, [
                                "and Arcane Blast.",
                            ]),
                        ],
                    ],
                },
                null,
            ],
            [
                {
                    name: "Wand Specialization",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_wand_01.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your damage with Wands by 13%.",
                        "Increases your damage with Wands by 25%.",
                    ]),
                },
                {
                    name: "Magic Absorption",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_astralrecalgroup.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases all resistances by 2 and causes all spells you fully resist to restore 1% of your total mana.  1 sec. cooldown.",
                        "Increases all resistances by 4 and causes all spells you fully resist to restore 2% of your total mana.  1 sec. cooldown.",
                        "Increases all resistances by 6 and causes all spells you fully resist to restore 3% of your total mana.  1 sec. cooldown.",
                        "Increases all resistances by 8 and causes all spells you fully resist to restore 4% of your total mana.  1 sec. cooldown.",
                        "Increases all resistances by 10 and causes all spells you fully resist to restore 5% of your total mana.  1 sec. cooldown.",
                    ]),
                },
                {
                    name: "Arcane Concentration",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_manaburn.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives you a 2% chance of entering a Clearcasting state after any damage spell hits a target.  The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
                        "Gives you a 4% chance of entering a Clearcasting state after any damage spell hits a target.  The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
                        "Gives you a 6% chance of entering a Clearcasting state after any damage spell hits a target.  The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
                        "Gives you a 8% chance of entering a Clearcasting state after any damage spell hits a target.  The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
                        "Gives you a 10% chance of entering a Clearcasting state after any damage spell hits a target.  The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Magic Attunement",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_abolishmagic.jpg",
                    text: [
                        [
                            createElement("span", { className: "changed" }, [
                                "Increases the range of your Arcane spells by 3 yards and ",
                            ]),
                            "the effect of your Amplify Magic and Dampen Magic spells by 25%.",
                        ],
                        [
                            createElement("span", { className: "changed" }, [
                                "Increases the range of your Arcane spells by 6 yards and ",
                            ]),
                            "the effect of your Amplify Magic and Dampen Magic spells by 50%.",
                        ],
                    ],
                },
                {
                    name: "Spell Impact (old Arcane Impact)",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_wispsplode.jpg",
                    text: [
                        [
                            "Increases the ",
                            createElement("span", { className: "changed" }, ["damage"]),
                            " chance of your Arcane Explosion, Arcane Blast, ",
                            createElement("span", { className: "changed" }, [
                                "Blast Wave, Fire Blast, Scorch, Fireball, Ice Lance, and Cone of Cold",
                            ]),
                            " spells by an additional 2%.",
                        ],
                        [
                            "Increases the ",
                            createElement("span", { className: "changed" }, ["damage"]),
                            " chance of your Arcane Explosion, Arcane Blast, ",
                            createElement("span", { className: "changed" }, [
                                "Blast Wave, Fire Blast, Scorch, Fireball, Ice Lance, and Cone of Cold",
                            ]),
                            " spells by an additional 4%.",
                        ],
                        [
                            "Increases the ",
                            createElement("span", { className: "changed" }, ["damage"]),
                            " chance of your Arcane Explosion, Arcane Blast, ",
                            createElement("span", { className: "changed" }, [
                                "Blast Wave, Fire Blast, Scorch, Fireball, Ice Lance, and Cone of Cold",
                            ]),
                            " spells by an additional 6%.",
                        ],
                    ],
                },
                null,
                {
                    name: "Arcane Fortitude",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_arcane_arcaneresilience.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your armor by an amount equal to 100% of your Intellect.",
                    ]),
                },
            ],
            [
                {
                    name: "Arcane Shielding (old Improved Mana Shield)",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_detectlesserinvisibility.jpg",
                    text: [
                        [
                            "Decreases the mana lost per point of damage taken when Mana Shield is active by ",
                            createElement("span", { className: "changed" }, [
                                "17% and increases the resistances granted by Mage Armor by 25%.",
                            ]),
                        ],
                        [
                            "Decreases the mana lost per point of damage taken when Mana Shield is active by ",
                            createElement("span", { className: "changed" }, [
                                "33% and increases the resistances granted by Mage Armor by 50%.",
                            ]),
                        ],
                    ],
                },
                {
                    name: "Improved Counterspell",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_iceshock.jpg",
                    text: [
                        [
                            "Gives your Counterspell a ",
                            createElement("span", { className: "changed" }, ["100%"]),
                            " chance to silence the target for ",
                            createElement("span", { className: "changed" }, ["2"]),
                            " sec.",
                        ],
                        [
                            "Gives your Counterspell a 100% chance to silence the target for 4 sec.",
                        ],
                    ],
                },
                null,
                {
                    name: "Arcane Meditation",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_siphonmana.jpg",
                    text: [
                        [
                            "Allows ",
                            createElement("span", { className: "changed" }, ["17%"]),
                            " of your mana regeneration to continue while casting.",
                        ],
                        [
                            "Allows ",
                            createElement("span", { className: "changed" }, ["33%"]),
                            " of your mana regeneration to continue while casting.",
                        ],
                        [
                            "Allows ",
                            createElement("span", { className: "changed" }, ["50%"]),
                            " of your mana regeneration to continue while casting.",
                        ],
                    ],
                },
            ],
            [
                {
                    name: "Improved Blink",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_arcane_blink.jpg",
                    text: [
                        [
                            createElement("span", { className: "changed" }, [
                                "Reduces the mana cost of Blink by 25% and ",
                            ]),
                            "for 4 sec after casting Blink, your chance to be hit by all attacks and spells is reduced by ",
                            createElement("span", { className: "changed" }, ["15%."]),
                        ],
                        [
                            createElement("span", { className: "changed" }, [
                                "Reduces the mana cost of Blink by 50% and ",
                            ]),
                            "for 4 sec after casting Blink, your chance to be hit by all attacks and spells is reduced by ",
                            createElement("span", { className: "changed" }, ["30%."]),
                        ],
                    ],
                },
                {
                    name: "Presence of Mind",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_enchantarmor.jpg",
                    text: formatUnchangedTalentTexts([
                        "When activated, your next Mage spell with a casting time less than 10 sec becomes an instant cast spell.",
                    ]),
                },
                null,
                {
                    name: "Arcane Mind",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_charm.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your total Intellect by 3%.",
                        "Increases your total Intellect by 6%.",
                        "Increases your total Intellect by 9%.",
                        "Increases your total Intellect by 12%.",
                        "Increases your total Intellect by 15%.",
                    ]),
                },
            ],
            [
                {
                    name: "Prismatic Cloak",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_arcane_prismaticcloak.jpg",
                    text: [
                        [
                            "Reduces all damage taken by 2% ",
                            createElement("span", { className: "changed" }, [
                                "and reduces the fade time of your Invisibility spell by 1 sec.",
                            ]),
                        ],
                        [
                            "Reduces all damage taken by 4% ",
                            createElement("span", { className: "changed" }, [
                                "and reduces the fade time of your Invisibility spell by 2 sec.",
                            ]),
                        ],
                    ],
                },
                {
                    name: "Arcane Instability",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_teleport.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your spell damage and critical strike chance by 1%.",
                        "Increases your spell damage and critical strike chance by 2%.",
                        "Increases your spell damage and critical strike chance by 3%.",
                    ]),
                    req: "up",
                    reqDist: 1,
                },
                {
                    name: "Arcane Potency",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_arcane_arcanepotency.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical strike chance of any spell cast while Clearcasting by 10%.",
                        "Increases the critical strike chance of any spell cast while Clearcasting by 20%.",
                        "Increases the critical strike chance of any spell cast while Clearcasting by 30%.",
                    ]),
                    req: "up",
                    reqDist: 4,
                },
                null,
            ],
            [
                {
                    name: "Empowered Arcane Missiles",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_starfall.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your Arcane Missiles spell gains an additional 15% of your bonus spell damage effects, but mana cost is increased by 2%.",
                        "Your Arcane Missiles spell gains an additional 30% of your bonus spell damage effects, but mana cost is increased by 4%.",
                        "Your Arcane Missiles spell gains an additional 45% of your bonus spell damage effects, but mana cost is increased by 6%.",
                    ]),
                },
                {
                    name: "Arcane Power",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_lightning.jpg",
                    text: formatUnchangedTalentTexts([
                        "When activated, your spells deal 30% more damage while costing 30% more mana to cast.  This effect lasts 15 sec.",
                    ]),
                    req: "up",
                    reqDist: 1,
                },
                {
                    name: "Spell Power",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_arcane_arcanetorrent.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases critical strike damage bonus of all spells by 25%.",
                        "Increases critical strike damage bonus of all spells by 50%.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Mind Mastery",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_arcane_mindmastery.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases spell damage by up to 5% of your total Intellect.",
                        "Increases spell damage by up to 10% of your total Intellect.",
                        "Increases spell damage by up to 15% of your total Intellect.",
                        "Increases spell damage by up to 20% of your total Intellect.",
                        "Increases spell damage by up to 25% of your total Intellect.",
                    ]),
                },
                null,
                null,
            ],
            [
                null,
                {
                    name: "Slow",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_slow.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces target's movement speed by 50%, increases the time between ranged attacks by 50% and increases casting time by 50%.  Lasts 15 sec.  Slow can only affect one target at a time.",
                    ]),
                },
                null,
                null,
            ],
        ],
    },
    {
        name: "Fire",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/41.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_firebolt02.jpg",
        talents: [
            [
                null,
                {
                    name: "Improved Fireball",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_flamebolt.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the casting time of your Fireball spell by 0.1 sec.",
                        "Reduces the casting time of your Fireball spell by 0.2 sec.",
                        "Reduces the casting time of your Fireball spell by 0.3 sec.",
                        "Reduces the casting time of your Fireball spell by 0.4 sec.",
                        "Reduces the casting time of your Fireball spell by 0.5 sec.",
                    ]),
                },
                {
                    name: "Impact",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_meteorstorm.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives your Fire spells a 2% chance to stun the target for 2 sec.",
                        "Gives your Fire spells a 4% chance to stun the target for 2 sec.",
                        "Gives your Fire spells a 6% chance to stun the target for 2 sec.",
                        "Gives your Fire spells a 8% chance to stun the target for 2 sec.",
                        "Gives your Fire spells a 10% chance to stun the target for 2 sec.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Ignite",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_incinerate.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your critical strikes from Fire damage spells cause the target to burn for an additional 8% of your spell's damage over 4 sec.",
                        "Your critical strikes from Fire damage spells cause the target to burn for an additional 16% of your spell's damage over 4 sec.",
                        "Your critical strikes from Fire damage spells cause the target to burn for an additional 24% of your spell's damage over 4 sec.",
                        "Your critical strikes from Fire damage spells cause the target to burn for an additional 32% of your spell's damage over 4 sec.",
                        "Your critical strikes from Fire damage spells cause the target to burn for an additional 40% of your spell's damage over 4 sec.",
                    ]),
                },
                {
                    name: "Flame Throwing",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_flare.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the range of your Fire spells by 3 yards.",
                        "Increases the range of your Fire spells by 6 yards.",
                    ]),
                },
                {
                    name: "Improved Fire Blast",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_fireball.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the cooldown of your Fire Blast spell by 0.5 sec.",
                        "Reduces the cooldown of your Fire Blast spell by 1 sec.",
                        "Reduces the cooldown of your Fire Blast spell by 1.5 sec.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Incineration",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_flameshock.jpg",
                    text: [
                        [
                            "Increases the critical strike chance of your Fire Blast, Scorch, ",
                            createElement("span", { className: "changed" }, [
                                "Arcane Blast and Cone of Cold",
                            ]),
                            " spells by 2%.",
                        ],
                        [
                            "Increases the critical strike chance of your Fire Blast, Scorch, ",
                            createElement("span", { className: "changed" }, [
                                "Arcane Blast and Cone of Cold",
                            ]),
                            " spells by 4%.",
                        ],
                    ],
                },
                {
                    name: "Improved Flamestrike",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_selfdestruct.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical strike chance of your Flamestrike spell by 5%.",
                        "Increases the critical strike chance of your Flamestrike spell by 10%.",
                        "Increases the critical strike chance of your Flamestrike spell by 15%.",
                    ]),
                },
                {
                    name: "Pyroblast",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_fireball02.jpg",
                    text: formatUnchangedTalentTexts([
                        "Hurls an immense fiery boulder that causes 141 to 188 Fire damage and an additional 56 Fire damage over 12 sec.",
                    ]),
                },
                {
                    name: "Burning Soul",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_fire.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives your Fire spells a 35% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by 5%.",
                        "Gives your Fire spells a 70% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by 10%.",
                    ]),
                },
            ],
            [
                {
                    name: "Improved Scorch",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_soulburn.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your Scorch spells have a 33% chance to cause your target to be vulnerable to Fire damage.  This vulnerability increases the Fire damage dealt to your target by 3% and lasts 30 sec.  Stacks up to 5 times.",
                        "Your Scorch spells have a 66% chance to cause your target to be vulnerable to Fire damage.  This vulnerability increases the Fire damage dealt to your target by 3% and lasts 30 sec.  Stacks up to 5 times.",
                        "Your Scorch spells have a 100% chance to cause your target to be vulnerable to Fire damage.  This vulnerability increases the Fire damage dealt to your target by 3% and lasts 30 sec.  Stacks up to 5 times.",
                    ]),
                },
                {
                    name: "Molten Shields",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_firearmor.jpg",
                    text: formatUnchangedTalentTexts([
                        "Causes your Fire Ward to have a 10% chance to reflect Fire spells while active. In addition, your Molten Armor has a 50% chance to affect ranged and spell attacks.",
                        "Causes your Fire Ward to have a 20% chance to reflect Fire spells while active. In addition, your Molten Armor has a 100% chance to affect ranged and spell attacks.",
                    ]),
                },
                null,
                {
                    name: "Master of Elements",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_masterofelements.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your Fire and Frost spell criticals will refund 10% of their base mana cost.",
                        "Your Fire and Frost spell criticals will refund 20% of their base mana cost.",
                        "Your Fire and Frost spell criticals will refund 30% of their base mana cost.",
                    ]),
                },
            ],
            [
                {
                    name: "Playing with Fire",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_playingwithfire.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases all spell damage caused by 1% and all spell damage taken by 1%.",
                        "Increases all spell damage caused by 2% and all spell damage taken by 2%.",
                        "Increases all spell damage caused by 3% and all spell damage taken by 3%.",
                    ]),
                },
                {
                    name: "Critical Mass",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_wispheal.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical strike chance of your Fire spells by 2%.",
                        "Increases the critical strike chance of your Fire spells by 4%.",
                        "Increases the critical strike chance of your Fire spells by 6%.",
                    ]),
                },
                {
                    name: "Blast Wave",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_excorcism_02.jpg",
                    text: formatUnchangedTalentTexts([
                        "A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for 154 to 187 Fire damage, and Dazing them for 6 sec.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                null,
            ],
            [
                {
                    name: "Blazing Speed",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_burningspeed.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives you a 5% chance when hit by a melee or ranged attack to increase your movement speed by 50% and dispel all movement impairing effects.  This effect lasts 8 sec.",
                        "Gives you a 10% chance when hit by a melee or ranged attack to increase your movement speed by 50% and dispel all movement impairing effects.  This effect lasts 8 sec.",
                    ]),
                },
                null,
                {
                    name: "Fire Power",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_immolation.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage done by your Fire spells by 2%.",
                        "Increases the damage done by your Fire spells by 4%.",
                        "Increases the damage done by your Fire spells by 6%.",
                        "Increases the damage done by your Fire spells by 8%.",
                        "Increases the damage done by your Fire spells by 10%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Pyromaniac",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_burnout.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases chance to critically hit and reduces the mana cost of all Fire spells by an additional 1%.",
                        "Increases chance to critically hit and reduces the mana cost of all Fire spells by an additional 2%.",
                        "Increases chance to critically hit and reduces the mana cost of all Fire spells by an additional 3%.",
                    ]),
                },
                {
                    name: "Combustion",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_sealoffire.jpg",
                    text: formatUnchangedTalentTexts([
                        "When activated, this spell causes each of your Fire damage spell hits to increase your critical strike chance with Fire damage spells by 10%.  This effect lasts until you have caused 3 critical strikes with Fire spells.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                {
                    name: "Molten Fury",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_moltenblood.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases damage of all spells against targets with less than 20% health by 10%.",
                        "Increases damage of all spells against targets with less than 20% health by 20%.",
                    ]),
                },
                null,
            ],
            [
                null,
                null,
                {
                    name: "Empowered Fireball",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_flamebolt.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your Fireball spell gains an additional 3% of your bonus spell damage effects.",
                        "Your Fireball spell gains an additional 6% of your bonus spell damage effects.",
                        "Your Fireball spell gains an additional 9% of your bonus spell damage effects.",
                        "Your Fireball spell gains an additional 12% of your bonus spell damage effects.",
                        "Your Fireball spell gains an additional 15% of your bonus spell damage effects.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Dragon's Breath",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_misc_head_dragon_01.jpg",
                    text: formatUnchangedTalentTexts([
                        "Targets in a cone in front of the caster take 370 to 431 Fire damage and are Disoriented for 3 sec.  Any direct damaging attack will revive targets.  Turns off your attack when used.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                null,
                null,
            ],
        ],
    },
    {
        name: "Frost",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/61.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_frostbolt02.jpg",
        talents: [
            [
                {
                    name: "Frost Warding",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_frostward.jpg",
                    text: [
                        [
                            "Increases the armor and resistances given by your Frost Armor and Ice Armor spells by ",
                            createElement("span", { className: "changed" }, ["25%"]),
                            ".  In addition, gives your Frost Ward a ",
                            createElement("span", { className: "changed" }, ["15%"]),
                            " chance to reflect Frost spells and effects while active.",
                        ],
                        [
                            "Increases the armor and resistances given by your Frost Armor and Ice Armor spells by ",
                            createElement("span", { className: "changed" }, ["50%"]),
                            ".  In addition, gives your Frost Ward a ",
                            createElement("span", { className: "changed" }, ["30%"]),
                            " chance to reflect Frost spells and effects while active.",
                        ],
                    ],
                },
                {
                    name: "Improved Frostbolt",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_frostbolt02.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the casting time of your Frostbolt spell by 0.1 sec.",
                        "Reduces the casting time of your Frostbolt spell by 0.2 sec.",
                        "Reduces the casting time of your Frostbolt spell by 0.3 sec.",
                        "Reduces the casting time of your Frostbolt spell by 0.4 sec.",
                        "Reduces the casting time of your Frostbolt spell by 0.5 sec.",
                    ]),
                },
                {
                    name: "Precision (old Elemental Precision)",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_ice_magicdamage.jpg",
                    text: [
                        [
                            "Reduces the mana cost and ",
                            createElement("span", { className: "changed" }, [
                                "increases your chance to hit with spells",
                            ]),
                            " by 1%.",
                        ],
                        [
                            "Reduces the mana cost and ",
                            createElement("span", { className: "changed" }, [
                                "increases your chance to hit with spells",
                            ]),
                            " by 2%.",
                        ],
                        [
                            "Reduces the mana cost and ",
                            createElement("span", { className: "changed" }, [
                                "increases your chance to hit with spells",
                            ]),
                            " by 3%.",
                        ],
                    ],
                },
                null,
            ],
            [
                {
                    name: "Ice Shards",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_iceshard.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical strike damage bonus of your Frost spells by 20%.",
                        "Increases the critical strike damage bonus of your Frost spells by 40%.",
                        "Increases the critical strike damage bonus of your Frost spells by 60%.",
                        "Increases the critical strike damage bonus of your Frost spells by 80%.",
                        "Increases the critical strike damage bonus of your Frost spells by 100%.",
                    ]),
                },
                {
                    name: "Frostbite",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_frostarmor.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives your Chill effects a 5% chance to freeze the target for 5 sec.",
                        "Gives your Chill effects a 10% chance to freeze the target for 5 sec.",
                        "Gives your Chill effects a 15% chance to freeze the target for 5 sec.",
                    ]),
                },
                {
                    name: "Improved Frost Nova",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_freezingbreath.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the cooldown of your Frost Nova spell by 2 sec.",
                        "Reduces the cooldown of your Frost Nova spell by 4 sec.",
                    ]),
                },
                {
                    name: "Permafrost",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_wisp.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the duration of your Chill effects by 1 sec; and reduces the target's speed by an additional 4%.",
                        "Increases the duration of your Chill effects by 2 secs; and reduces the target's speed by an additional 7%.",
                        "Increases the duration of your Chill effects by 3 secs; and reduces the target's speed by an additional 10%.",
                    ]),
                },
            ],
            [
                {
                    name: "Piercing Ice",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_frostbolt.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage done by your Frost spells by 2%.",
                        "Increases the damage done by your Frost spells by 4%.",
                        "Increases the damage done by your Frost spells by 6%.",
                    ]),
                },
                {
                    name: "Icy Veins",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_coldhearted.jpg",
                    text: formatUnchangedTalentTexts([
                        "Hastens your spellcasting, increasing spell casting speed by 20% and gives you 100% chance to avoid interruption caused by damage while casting.  Lasts 20 sec.",
                    ]),
                },
                null,
                {
                    name: "Improved Blizzard",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_icestorm.jpg",
                    text: formatUnchangedTalentTexts([
                        "Adds a chill effect to your Blizzard spell.  This effect lowers the target's movement speed by 30%.  Lasts 1 sec.",
                        "Adds a chill effect to your Blizzard spell.  This effect lowers the target's movement speed by 50%.  Lasts 1 sec.",
                        "Adds a chill effect to your Blizzard spell.  This effect lowers the target's movement speed by 65%.  Lasts 1 sec.",
                    ]),
                },
            ],
            [
                {
                    name: "Arctic Reach",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_darkritual.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the range of your Frostbolt, Ice Lance and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 10%.",
                        "Increases the range of your Frostbolt, Ice Lance and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by 20%.",
                    ]),
                },
                {
                    name: "Frost Channeling",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_stun.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the mana cost of your Frost spells by 5% and reduces the threat caused by your Frost spells by 4%.",
                        "Reduces the mana cost of your Frost spells by 10% and reduces the threat caused by your Frost spells by 7%.",
                        "Reduces the mana cost of your Frost spells by 15% and reduces the threat caused by your Frost spells by 10%.",
                    ]),
                },
                {
                    name: "Shatter",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_frostshock.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical strike chance of all your spells against frozen targets by 10%.",
                        "Increases the critical strike chance of all your spells against frozen targets by 20%.",
                        "Increases the critical strike chance of all your spells against frozen targets by 30%.",
                        "Increases the critical strike chance of all your spells against frozen targets by 40%.",
                        "Increases the critical strike chance of all your spells against frozen targets by 50%.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                null,
            ],
            [
                {
                    name: "Frozen Core",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_frozencore.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the damage taken by Frost and Fire effects by 2%.",
                        "Reduces the damage taken by Frost and Fire effects by 4%.",
                        "Reduces the damage taken by Frost and Fire effects by 6%.",
                    ]),
                },
                {
                    name: "Cold Snap",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_wizardmark.jpg",
                    text: formatUnchangedTalentTexts([
                        "When activated, this spell finishes the cooldown on all Frost spells you recently cast.",
                    ]),
                },
                {
                    name: "Improved Cone of Cold",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_glacier.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage dealt by your Cone of Cold spell by 15%.",
                        "Increases the damage dealt by your Cone of Cold spell by 25%.",
                        "Increases the damage dealt by your Cone of Cold spell by 35%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Ice Floes",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_icefloes.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the cooldown of your Cone of Cold, Cold Snap, Ice Barrier and Ice Block spells by 10%.",
                        "Reduces the cooldown of your Cone of Cold, Cold Snap, Ice Barrier and Ice Block spells by 20%.",
                    ]),
                },
                null,
                {
                    name: "Winter's Chill",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_chillingblast.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives your Frost damage spells a 20% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec.  Stacks up to 5 times.",
                        "Gives your Frost damage spells a 40% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec.  Stacks up to 5 times.",
                        "Gives your Frost damage spells a 60% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec.  Stacks up to 5 times.",
                        "Gives your Frost damage spells a 80% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec.  Stacks up to 5 times.",
                        "Gives your Frost damage spells a 100% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec.  Stacks up to 5 times.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Ice Barrier",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_ice_lament.jpg",
                    text: formatUnchangedTalentTexts([
                        "Instantly shields you, absorbing 438 damage.  Lasts 1 min.  While the shield holds, spells will not be interrupted.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                {
                    name: "Arctic Winds",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_arcticwinds.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases all Frost damage you cause by 1% and reduces the chance melee and ranged attacks will hit you by 1%.",
                        "Increases all Frost damage you cause by 2% and reduces the chance melee and ranged attacks will hit you by 2%.",
                        "Increases all Frost damage you cause by 3% and reduces the chance melee and ranged attacks will hit you by 3%.",
                        "Increases all Frost damage you cause by 4% and reduces the chance melee and ranged attacks will hit you by 4%.",
                        "Increases all Frost damage you cause by 5% and reduces the chance melee and ranged attacks will hit you by 5%.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Empowered Frostbolt",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_frostbolt02.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your Frostbolt spell gains an additional 2% of your bonus spell damage effects and an additional 1% chance to critically strike.",
                        "Your Frostbolt spell gains an additional 4% of your bonus spell damage effects and an additional 2% chance to critically strike.",
                        "Your Frostbolt spell gains an additional 6% of your bonus spell damage effects and an additional 3% chance to critically strike.",
                        "Your Frostbolt spell gains an additional 8% of your bonus spell damage effects and an additional 4% chance to critically strike.",
                    ]),
                },
                null,
                null,
            ],
            [
                null,
                {
                    name: "Summon Water Elemental",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_summonwaterelemental_2.jpg",
                    text: formatUnchangedTalentTexts([
                        "Summon a Water Elemental to fight for the caster for 45 sec.",
                    ]),
                },
                null,
                null,
            ],
        ],
    },
];
