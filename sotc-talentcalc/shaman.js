// @ts-ignore
const data = [
    {
        name: "Elemental",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/261.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_lightning.jpg",
        talents: [
            [
                null,
                {
                    name: "Convection",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_wispsplode.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by 2%.",
                        "Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by 4%.",
                        "Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by 6%.",
                        "Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by 8%.",
                        "Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by 10%.",
                    ]),
                },
                {
                    name: "Concussion",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_fireball.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by 1%.",
                        "Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by 2%.",
                        "Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by 3%.",
                        "Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by 4%.",
                        "Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by 5%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Earth's Grasp",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_stoneclawtotem.jpg",
                    text: [
                        [
                            "Increases the health of your Stoneclaw Totem by 25% and the radius of your Earthbind Totem by 10%, ",
                            change("and reduces the cooldowns of both totems by 15%."),
                        ],
                        [
                            "Increases the health of your Stoneclaw Totem by 50% and the radius of your Earthbind Totem by 20%, ",
                            change("and reduces the cooldowns of both totems by 30%."),
                        ],
                    ],
                },
                {
                    name: "Elemental Warding",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_spiritarmor.jpg",
                    text: [
                        [
                            "Reduces ",
                            change("spell", "Fire, Frost and Nature"),
                            " damage taken by 4%.",
                        ],
                        [
                            "Reduces ",
                            change("spell", "Fire, Frost and Nature"),
                            " damage taken by ",
                            change("8%", "7%"),
                            ".",
                        ],
                        [
                            "Reduces ",
                            change("spell", "Fire, Frost and Nature"),
                            " damage taken by ",
                            change("12%", "10%"),
                            ".",
                        ],
                    ],
                },
                {
                    name: "Call of Flame",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_immolation.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage done by your Fire Totems by 5%.",
                        "Increases the damage done by your Fire Totems by 10%.",
                        "Increases the damage done by your Fire Totems by 15%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Elemental Focus",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_manaburn.jpg",
                    text: [
                        [
                            "After landing a critical strike with a Fire, Frost, or Nature damage spell, you enter a Clearcasting state.  The Clearcasting state reduces the mana cost of your next 2 damage ",
                            change("or healing"),
                            " spells by 40%.",
                        ],
                    ],
                },
                {
                    name: "Reverberation",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_frostward.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the cooldown of your Shock spells by 0.2 sec.",
                        "Reduces the cooldown of your Shock spells by 0.4 sec.",
                        "Reduces the cooldown of your Shock spells by 0.6 sec.",
                        "Reduces the cooldown of your Shock spells by 0.8 sec.",
                        "Reduces the cooldown of your Shock spells by 1 sec.",
                    ]),
                },
                {
                    name: "Call of Thunder",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_callstorm.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional 1%.",
                        "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional 2%.",
                        "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional 3%.",
                        "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional 4%.",
                        "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional 5%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Improved Fire Totems",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_sealoffire.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the delay before your Fire Nova Totem activates by 1 sec. and decreases the threat generated by your Magma Totem by 25%.",
                        "Reduces the delay before your Fire Nova Totem activates by 2 sec. and decreases the threat generated by your Magma Totem by 50%.",
                    ]),
                },
                {
                    name: "Eye of the Storm",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_soulleech_2.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives you a 33% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a melee or ranged critical strike.  The Focused Casting effect prevents you from losing casting time on Shaman spells when taking damage.",
                        "Gives you a 66% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a melee or ranged critical strike.  The Focused Casting effect prevents you from losing casting time on Shaman spells when taking damage.",
                        "Gives you a 100% chance to gain the Focused Casting effect that lasts for 6 sec after being the victim of a melee or ranged critical strike.  The Focused Casting effect prevents you from losing casting time on Shaman spells when taking damage.",
                    ]),
                },
                null,
                {
                    name: "Elemental Devastation",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_elementaldevastation.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your offensive spell crits will increase your chance to get a critical strike with melee attacks by 3% for 10 sec.",
                        "Your offensive spell crits will increase your chance to get a critical strike with melee attacks by 6% for 10 sec.",
                        "Your offensive spell crits will increase your chance to get a critical strike with melee attacks by 9% for 10 sec.",
                    ]),
                },
            ],
            [
                {
                    name: "Storm Reach",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_stormreach.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the range of your Lightning Bolt and Chain Lightning spells by 3 yards.",
                        "Increases the range of your Lightning Bolt and Chain Lightning spells by 6 yards.",
                    ]),
                },
                {
                    name: "Elemental Fury",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_volcano.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical strike damage bonus of your Searing, Magma, and Fire Nova Totems and your Fire, Frost, and Nature spells by 100%.",
                    ]),
                },
                null,
                {
                    name: "Unrelenting Storm",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_unrelentingstorm.jpg",
                    text: formatUnchangedTalentTexts([
                        "Regenerate mana equal to 2% of your Intellect every 5 sec, even while casting.",
                        "Regenerate mana equal to 4% of your Intellect every 5 sec, even while casting.",
                        "Regenerate mana equal to 6% of your Intellect every 5 sec, even while casting.",
                        "Regenerate mana equal to 8% of your Intellect every 5 sec, even while casting.",
                        "Regenerate mana equal to 10% of your Intellect every 5 sec, even while casting.",
                    ]),
                },
            ],
            [
                {
                    name: "Elemental Precision",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_elementalprecision_1.jpg",
                    text: [
                        [
                            "Increases your chance to hit with Fire, Frost and Nature spells by 2% and reduces the threat caused by Fire, Frost and Nature spells by ",
                            change("10", "4"),
                            "%.",
                        ],
                        [
                            "Increases your chance to hit with Fire, Frost and Nature spells by 4% and reduces the threat caused by Fire, Frost and Nature spells by ",
                            change("20", "7"),
                            "%.",
                        ],
                        [
                            "Increases your chance to hit with Fire, Frost and Nature spells by 6% and reduces the threat caused by Fire, Frost and Nature spells by ",
                            change("30", "10"),
                            "%.",
                        ],
                    ],
                },
                null,
                {
                    name: "Lightning Mastery",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_lightning_lightningbolt01.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the cast time of your Lightning Bolt and Chain Lightning spells by 0.1 sec.",
                        "Reduces the cast time of your Lightning Bolt and Chain Lightning spells by 0.2 sec.",
                        "Reduces the cast time of your Lightning Bolt and Chain Lightning spells by 0.3 sec.",
                        "Reduces the cast time of your Lightning Bolt and Chain Lightning spells by 0.4 sec.",
                        "Reduces the cast time of your Lightning Bolt and Chain Lightning spells by 0.5 sec.",
                    ]),
                    req: "up",
                    reqDist: 3,
                },
                null,
            ],
            [
                null,
                {
                    name: "Elemental Mastery",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_wispheal.jpg",
                    text: formatUnchangedTalentTexts([
                        "When activated, this spell gives your next Fire, Frost, or Nature damage spell a 100% critical strike chance and reduces the mana cost by 100%.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                {
                    name: "Elemental Shields",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_elementalshields.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the chance you will be critically hit by melee and ranged attacks by 2%.",
                        "Reduces the chance you will be critically hit by melee and ranged attacks by 4%.",
                        "Reduces the chance you will be critically hit by melee and ranged attacks by 6%.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Lightning Overload",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_lightningoverload.jpg",
                    text: [
                        [
                            "Gives your Lightning Bolt and Chain Lightning spells a ",
                            change("6", "4"),
                            "% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
                        ],
                        [
                            "Gives your Lightning Bolt and Chain Lightning spells a ",
                            change("13", "8"),
                            "% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
                        ],
                        [
                            "Gives your Lightning Bolt and Chain Lightning spells a ",
                            change("20", "12"),
                            "% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
                        ],
                        [
                            "Gives your Lightning Bolt and Chain Lightning spells a ",
                            change("26", "16"),
                            "% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
                        ],
                        [
                            "Gives your Lightning Bolt and Chain Lightning spells a ",
                            change("33", "20"),
                            "% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
                        ],
                    ],
                },
                null,
                null,
            ],
            [
                null,
                {
                    name: "Totem of Wrath",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_totemofwrath.jpg",
                    text: formatUnchangedTalentTexts([
                        "Summons a Totem of Wrath with 5 health at the feet of the caster.  The totem increases the chance to hit and critically strike with spells by 3% for all party members within 20 yards.  Lasts 2 min.",
                    ]),
                    req: "up",
                    reqDist: 1,
                },
                null,
                null,
            ],
        ],
    },
    {
        name: "Enhancement",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/263.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_lightningshield.jpg",
        talents: [
            [
                null,
                {
                    name: "Ancestral Knowledge",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_grimward.jpg",
                    text: [
                        [
                            "Increases your ",
                            change("Intellect", "maximum mana"),
                            " by ",
                            change("2", "1"),
                            "%.",
                        ],
                        [
                            "Increases your ",
                            change("Intellect", "maximum mana"),
                            " by ",
                            change("4", "2"),
                            "%.",
                        ],
                        [
                            "Increases your ",
                            change("Intellect", "maximum mana"),
                            " by ",
                            change("6", "3"),
                            "%.",
                        ],
                        [
                            "Increases your ",
                            change("Intellect", "maximum mana"),
                            " by ",
                            change("8", "4"),
                            "%.",
                        ],
                        [
                            "Increases your ",
                            change("Intellect", "maximum mana"),
                            " by ",
                            change("10", "5"),
                            "%.",
                        ],
                    ],
                },
                {
                    name: "Shield Specialization",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_shield_06.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your chance to block attacks with a shield by 1% and increases the amount blocked by 5%.",
                        "Increases your chance to block attacks with a shield by 2% and increases the amount blocked by 10%.",
                        "Increases your chance to block attacks with a shield by 3% and increases the amount blocked by 15%.",
                        "Increases your chance to block attacks with a shield by 4% and increases the amount blocked by 20%.",
                        "Increases your chance to block attacks with a shield by 5% and increases the amount blocked by 25%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Guardian Totems",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_stoneskintotem.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the amount of damage reduced by your Stoneskin Totem and Windwall Totem by 10% and reduces the cooldown of your Grounding Totem by 1 sec.",
                        "Increases the amount of damage reduced by your Stoneskin Totem and Windwall Totem by 20% and reduces the cooldown of your Grounding Totem by 2 sec.",
                    ]),
                },
                {
                    name: "Thundering Strikes",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_thunderbolt.jpg",
                    text: formatUnchangedTalentTexts([
                        "Improves your chance to get a critical strike with your weapon attacks by 1%.",
                        "Improves your chance to get a critical strike with your weapon attacks by 2%.",
                        "Improves your chance to get a critical strike with your weapon attacks by 3%.",
                        "Improves your chance to get a critical strike with your weapon attacks by 4%.",
                        "Improves your chance to get a critical strike with your weapon attacks by 5%.",
                    ]),
                },
                {
                    name: "Improved Ghost Wolf",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_spiritwolf.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the cast time of your Ghost Wolf spell by 1 sec.",
                        "Reduces the cast time of your Ghost Wolf spell by 2 sec.",
                    ]),
                },
                {
                    name: "Improved Shields (old Improved Lightning Shield)",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_lightningshield.jpg",
                    text: [
                        [
                            "Increases the damage done by your Lightning Shield orbs, ",
                            change("the amount of mana gained from your Water Shield orbs, and the amount of healing done by your Earth Shield orbs and Ancestral Shield"),
                            " by 5%.",
                            change(" Increases the number of charges of your shields by 1."),
                        ],
                        [
                            "Increases the damage done by your Lightning Shield orbs, ",
                            change("the amount of mana gained from your Water Shield orbs, and the amount of healing done by your Earth Shield orbs and Ancestral Shield"),
                            " by 10%.",
                            change(" Increases the number of charges of your shields by 2."),
                        ],
                        [
                            "Increases the damage done by your Lightning Shield orbs, ",
                            change("the amount of mana gained from your Water Shield orbs, and the amount of healing done by your Earth Shield orbs and Ancestral Shield"),
                            " by 15%.",
                            change(" Increases the number of charges of your shields by 3."),
                        ],
                    ],
                },
            ],
            [
                {
                    name: "Enhancing Totems",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_earthbindtotem.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the effect of your Strength of Earth and Grace of Air Totems by 8%.",
                        "Increases the effect of your Strength of Earth and Grace of Air Totems by 15%.",
                    ]),
                },
                null,
                {
                    name: "Shamanistic Focus",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_elementalabsorption.jpg",
                    text: formatUnchangedTalentTexts([
                        "After landing a melee critical strike, you enter a Focused state.  The Focused state reduces the mana cost of your next Shock spell by 60%.",
                    ]),
                },
                {
                    name: "Anticipation",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_mirrorimage.jpg",
                    text: [
                        [
                            "Increases your ",
                            change("Defense skill", "chance to dodge"),
                            " by ",
                            change("4", "1%"),
                            ".",
                        ],
                        [
                            "Increases your ",
                            change("Defense skill", "chance to dodge"),
                            " by ",
                            change("8", "2%"),
                            ".",
                        ],
                        [
                            "Increases your ",
                            change("Defense skill", "chance to dodge"),
                            " by ",
                            change("12", "3%"),
                            ".",
                        ],
                        [
                            "Increases your ",
                            change("Defense skill", "chance to dodge"),
                            " by ",
                            change("16", "4%"),
                            ".",
                        ],
                        [
                            "Increases your ",
                            change("Defense skill", "chance to dodge"),
                            " by ",
                            change("20", "5%"),
                            ".",
                        ],
                    ],
                },
            ],
            [
                null,
                {
                    name: "Flurry",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_ghoulfrenzy.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your attack speed by 10% for your next 3 swings after dealing a critical strike.",
                        "Increases your attack speed by 15% for your next 3 swings after dealing a critical strike.",
                        "Increases your attack speed by 20% for your next 3 swings after dealing a critical strike.",
                        "Increases your attack speed by 25% for your next 3 swings after dealing a critical strike.",
                        "Increases your attack speed by 30% for your next 3 swings after dealing a critical strike.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                {
                    name: "Toughness",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_devotion.jpg",
                    text: [
                        [
                            "Increase Armor by ",
                            change("3", "2"),
                            "% and ",
                            change("Stamina by 2%."),
                        ],
                        [
                            "Increase Armor by ",
                            change("6", "4"),
                            "% and ",
                            change("Stamina by 4%."),
                        ],
                        [
                            "Increase Armor by ",
                            change("9", "6"),
                            "% and ",
                            change("Stamina by 6%."),
                        ],
                        [
                            "Increase Armor by ",
                            change("12", "8"),
                            "% and ",
                            change("Stamina by 8%."),
                        ],
                        [
                            "Increase Armor by ",
                            change("15", "10"),
                            "% and ",
                            change("Stamina by 10%."),
                        ],
                    ],
                },
                null,
            ],
            [
                {
                    name: "Improved Weapon Totems",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_enchantweapon.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the melee attack power bonus of your Windfury Totem by 15% and increases the damage caused by your Flametongue Totem by 6%.",
                        "Increases the melee attack power bonus of your Windfury Totem by 30% and increases the damage caused by your Flametongue Totem by 12%.",
                    ]),
                },
                {
                    name: "Spirit Weapons",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_parry.jpg",
                    text: [
                        [
                            change("Increases your Attack Power by 100% of your Intellect"),
                            ", ",
                            change("", "Gives a chance to parry enemy melee attacks"),
                            " and reduces the threat generated by your melee attacks by 30% ",
                            change("while dual wielding or wielding a two-handed weapon"),
                            ".",
                        ],
                    ],
                },
                {
                    name: "Elemental Weapons",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_flametounge.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage caused by your Rockbiter Weapon by 7%, your Windfury Weapon effect by 13% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by 5%.",
                        "Increases the damage caused by your Rockbiter Weapon by 14%, your Windfury Weapon effect by 27% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by 10%.",
                        "Increases the damage caused by your Rockbiter Weapon by 20%, your Windfury Weapon effect by 40% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by 15%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Mental Quickness",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_mentalquickness.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the mana cost of your instant cast Shaman spells by 2% and increases your spell damage and healing by an amount equal to 10% of your attack power.",
                        "Reduces the mana cost of your instant cast Shaman spells by 4% and increases your spell damage and healing by an amount equal to 20% of your attack power.",
                        "Reduces the mana cost of your instant cast Shaman spells by 6% and increases your spell damage and healing by an amount equal to 30% of your attack power.",
                    ]),
                },
                null,
                null,
                {
                    name: "Weapon Mastery",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_swiftstrike.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage you deal with all weapons by 2%.",
                        "Increases the damage you deal with all weapons by 4%.",
                        "Increases the damage you deal with all weapons by 6%.",
                        "Increases the damage you deal with all weapons by 8%.",
                        "Increases the damage you deal with all weapons by 10%.",
                    ]),
                },
            ],
            [
                {
                    name: "Dual Wield Specialization",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_dualwieldspecialization.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your chance to hit while dual wielding by an additional 2%.",
                        "Increases your chance to hit while dual wielding by an additional 4%.",
                        "Increases your chance to hit while dual wielding by an additional 6%.",
                    ]),
                    req: "right",
                    reqDist: 1,
                },
                {
                    name: "Dual Wield",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_dualwield.jpg",
                    text: formatUnchangedTalentTexts([
                        "Allows one-hand and off-hand weapons to be equipped in the off-hand.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                {
                    name: "Stormstrike",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_shaman_stormstrike.jpg",
                    text: [
                        [
                            "Instantly attack with both weapons. ",
                            change("If wielding a shield, strike the target with your shield, dealing damage based on shield block value and causing a high amount of threat."),
                            "  In addition, the next 2 sources of Nature damage dealt to the target are increased by 20%.  Lasts 12 sec.",
                        ],
                    ],
                    req: "up",
                    reqDist: 2,
                },
                null,
            ],
            [
                null,
                {
                    name: "Unleashed Rage",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_unleashedrage.jpg",
                    text: [
                        [
                            change("Increases your expertise by 1"),
                            ", and causes your critical hits with melee attacks to increase all party members' melee attack power by 2% if within 20 yards of the Shaman.  Lasts 10 sec.",
                        ],
                        [
                            change("Increases your expertise by 2"),
                            ", and causes your critical hits with melee attacks to increase all party members' melee attack power by 4% if within 20 yards of the Shaman.  Lasts 10 sec.",
                        ],
                        [
                            change("Increases your expertise by 3"),
                            ", and causes your critical hits with melee attacks to increase all party members' melee attack power by 6% if within 20 yards of the Shaman.  Lasts 10 sec.",
                        ],
                        [
                            change("Increases your expertise by 4"),
                            ", and causes your critical hits with melee attacks to increase all party members' melee attack power by 8% if within 20 yards of the Shaman.  Lasts 10 sec.",
                        ],
                        [
                            change("Increases your expertise by 5"),
                            ", and causes your critical hits with melee attacks to increase all party members' melee attack power by 10% if within 20 yards of the Shaman.  Lasts 10 sec.",
                        ],
                    ],
                },
                null,
                null,
            ],
            [
                null,
                {
                    name: "Shamanistic Rage",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_shamanrage.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces all damage taken by 30% and gives your successful melee attacks a chance to regenerate mana equal to 30% of your attack power.  Lasts 15 sec.",
                    ]),
                },
                null,
                null,
            ],
        ],
    },
    {
        name: "Restoration",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/262.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_magicimmunity.jpg",
        talents: [
            [
                null,
                {
                    name: "Improved Healing Wave",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_magicimmunity.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the casting time of your Healing Wave spell by 0.1 sec.",
                        "Reduces the casting time of your Healing Wave spell by 0.2 sec.",
                        "Reduces the casting time of your Healing Wave spell by 0.3 sec.",
                        "Reduces the casting time of your Healing Wave spell by 0.4 sec.",
                        "Reduces the casting time of your Healing Wave spell by 0.5 sec.",
                    ]),
                },
                {
                    name: "Tidal Focus",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_manarecharge.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the mana cost of your healing spells by 1%.",
                        "Reduces the mana cost of your healing spells by 2%.",
                        "Reduces the mana cost of your healing spells by 3%.",
                        "Reduces the mana cost of your healing spells by 4%.",
                        "Reduces the mana cost of your healing spells by 5%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Improved Reincarnation",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_reincarnation.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the cooldown of your Reincarnation spell by 10 min and increases the amount of health and mana you reincarnate with by an additional 10%.",
                        "Reduces the cooldown of your Reincarnation spell by 20 min and increases the amount of health and mana you reincarnate with by an additional 20%.",
                    ]),
                },
                {
                    name: "Ancestral Healing",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_undyingstrength.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your target's armor value by 8% for 15 sec after getting a critical effect from one of your healing spells.",
                        "Increases your target's armor value by 16% for 15 sec after getting a critical effect from one of your healing spells.",
                        "Increases your target's armor value by 25% for 15 sec after getting a critical effect from one of your healing spells.",
                    ]),
                },
                {
                    name: "Totemic Focus",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_moonglow.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the mana cost of your totems by 5%.",
                        "Reduces the mana cost of your totems by 10%.",
                        "Reduces the mana cost of your totems by 15%.",
                        "Reduces the mana cost of your totems by 20%.",
                        "Reduces the mana cost of your totems by 25%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Nature's Guidance",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_stun.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your chance to hit with melee attacks and spells by 1%.",
                        "Increases your chance to hit with melee attacks and spells by 2%.",
                        "Increases your chance to hit with melee attacks and spells by 3%.",
                    ]),
                },
                {
                    name: "Healing Focus",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_healingwavelesser.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives you a 14% chance to avoid interruption caused by damage while casting any Shaman healing spell.",
                        "Gives you a 28% chance to avoid interruption caused by damage while casting any Shaman healing spell.",
                        "Gives you a 42% chance to avoid interruption caused by damage while casting any Shaman healing spell.",
                        "Gives you a 56% chance to avoid interruption caused by damage while casting any Shaman healing spell.",
                        "Gives you a 70% chance to avoid interruption caused by damage while casting any Shaman healing spell.",
                    ]),
                },
                {
                    name: "Totemic Mastery",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_nullward.jpg",
                    text: formatUnchangedTalentTexts([
                        "The radius of your totems that affect friendly targets is increased to 30 yards.",
                    ]),
                },
                {
                    name: "Healing Grace",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_healingtouch.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the threat generated by your healing spells by 5% and reduces the chance your spells will be dispelled by 10%.",
                        "Reduces the threat generated by your healing spells by 10% and reduces the chance your spells will be dispelled by 20%.",
                        "Reduces the threat generated by your healing spells by 15% and reduces the chance your spells will be dispelled by 30%.",
                    ]),
                },
            ],
            [
                null,
                {
                    name: "Restorative Totems",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_manaregentotem.jpg",
                    text: [
                        [
                            "Increases the effect of your Mana Spring Totem by 5% and your Healing Stream Totem by ",
                            change("10", "5"),
                            "%.",
                        ],
                        [
                            "Increases the effect of your Mana Spring Totem by 10% and your Healing Stream Totem by ",
                            change("20", "10"),
                            "%.",
                        ],
                        [
                            "Increases the effect of your Mana Spring Totem by 15% and your Healing Stream Totem by ",
                            change("30", "15"),
                            "%.",
                        ],
                        [
                            "Increases the effect of your Mana Spring Totem by 20% and your Healing Stream Totem by ",
                            change("40", "20"),
                            "%.",
                        ],
                        [
                            "Increases the effect of your Mana Spring Totem by 25% and your Healing Stream Totem by ",
                            change("50", "25"),
                            "%.",
                        ],
                    ],
                },
                {
                    name: "Tidal Mastery",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_tranquility.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical effect chance of your healing and lightning spells by 1%.",
                        "Increases the critical effect chance of your healing and lightning spells by 2%.",
                        "Increases the critical effect chance of your healing and lightning spells by 3%.",
                        "Increases the critical effect chance of your healing and lightning spells by 4%.",
                        "Increases the critical effect chance of your healing and lightning spells by 5%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Healing Way",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_healingway.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your Healing Wave spells have a 33% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec.  This effect will stack up to 3 times.",
                        "Your Healing Wave spells have a 66% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec.  This effect will stack up to 3 times.",
                        "Your Healing Wave spells have a 100% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec.  This effect will stack up to 3 times.",
                    ]),
                },
                null,
                {
                    name: "Nature's Swiftness",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_ravenform.jpg",
                    text: formatUnchangedTalentTexts([
                        "When activated, your next Nature spell with a casting time less than 10 sec. becomes an instant cast spell.",
                    ]),
                },
                {
                    name: "Focused Mind",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_focusedmind.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the duration of any Silence or Interrupt effects used against the Shaman by 10%. This effect does not stack with other similar effects.",
                        "Reduces the duration of any Silence or Interrupt effects used against the Shaman by 20%. This effect does not stack with other similar effects.",
                        "Reduces the duration of any Silence or Interrupt effects used against the Shaman by 30%. This effect does not stack with other similar effects.",
                    ]),
                },
            ],
            [
                null,
                null,
                {
                    name: "Purification",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_wizardmark.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the effectiveness of your healing spells by 2%.",
                        "Increases the effectiveness of your healing spells by 4%.",
                        "Increases the effectiveness of your healing spells by 6%.",
                        "Increases the effectiveness of your healing spells by 8%.",
                        "Increases the effectiveness of your healing spells by 10%.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Mana Tide Totem",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_summonwaterelemental.jpg",
                    text: [
                        [
                            "Summons a Mana Tide Totem with 5 health at the feet of the caster for 12 sec that restores ",
                            change("7", "6"),
                            "% of total mana every 3 seconds to group members within 20 yards.",
                        ],
                    ],
                    req: "up",
                    reqDist: 3,
                },
                {
                    name: "Nature's Guardian",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_natureguardian.jpg",
                    text: formatUnchangedTalentTexts([
                        "Whenever a damaging attack is taken that reduces you below 30% health, you have a 10% chance to heal 10% of your total health and reduce your threat level on that target.  5 second cooldown.",
                        "Whenever a damaging attack is taken that reduces you below 30% health, you have a 20% chance to heal 10% of your total health and reduce your threat level on that target.  5 second cooldown.",
                        "Whenever a damaging attack is taken that reduces you below 30% health, you have a 30% chance to heal 10% of your total health and reduce your threat level on that target.  5 second cooldown.",
                        "Whenever a damaging attack is taken that reduces you below 30% health, you have a 40% chance to heal 10% of your total health and reduce your threat level on that target.  5 second cooldown.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Nature's Blessing",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_natureblessing.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your spell damage and healing by an amount equal to 10% of your Intellect.",
                        "Increases your spell damage and healing by an amount equal to 20% of your Intellect.",
                        "Increases your spell damage and healing by an amount equal to 30% of your Intellect.",
                    ]),
                },
                {
                    name: "Improved Chain Heal",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_healingwavegreater.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the amount healed by your Chain Heal spell by 10%.",
                        "Increases the amount healed by your Chain Heal spell by 20%.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Earth Shield",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_skinofearth.jpg",
                    text: formatUnchangedTalentTexts([
                        "Protects the target with an earthen shield, giving a 30% chance of ignoring spell interruption when damaged and causing attacks to heal the shielded target for 150.  This effect can only occur once every few seconds.  6 charges.  Lasts 10 min.  Earth Shield can only be placed on one target at a time and only one Elemental Shield can be active on a target at a time.",
                    ]),
                    req: "up",
                    reqDist: 1,
                },
                null,
                null,
            ],
        ],
    },
];
