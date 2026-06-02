// @ts-ignore
const data = [
    {
        name: "Holy",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/382.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_holybolt.jpg",
        talents: [
            [
                null,
                {
                    name: "Divine Strength",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_golemthunderclap.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your total Strength by 2%.",
                        "Increases your total Strength by 4%.",
                        "Increases your total Strength by 6%.",
                        "Increases your total Strength by 8%.",
                        "Increases your total Strength by 10%.",
                    ]),
                },
                {
                    name: "Divine Intellect",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_sleep.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your total Intellect by 2%.",
                        "Increases your total Intellect by 4%.",
                        "Increases your total Intellect by 6%.",
                        "Increases your total Intellect by 8%.",
                        "Increases your total Intellect by 10%.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Spiritual Focus",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_arcane_blink.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives your Flash of Light and Holy Light spells a 14% chance to not lose casting time when you take damage.",
                        "Gives your Flash of Light and Holy Light spells a 28% chance to not lose casting time when you take damage.",
                        "Gives your Flash of Light and Holy Light spells a 42% chance to not lose casting time when you take damage.",
                        "Gives your Flash of Light and Holy Light spells a 56% chance to not lose casting time when you take damage.",
                        "Gives your Flash of Light and Holy Light spells a 70% chance to not lose casting time when you take damage.",
                    ]),
                },
                {
                    name: "Improved Seal of Righteousness",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_thunderbolt.jpg",
                    text: [
                        [
                            "Increases the damage done by your Seal of Righteousness, ",
                            createElement("span", { className: "changed" }, [
                                "Seal of Vengeance",
                            ]),
                            " and their Judgement effects by 3%.",
                        ],
                        [
                            "Increases the damage done by your Seal of Righteousness, ",
                            createElement("span", { className: "changed" }, [
                                "Seal of Vengeance",
                            ]),
                            " and their Judgement effects by 6%.",
                        ],
                        [
                            "Increases the damage done by your Seal of Righteousness, ",
                            createElement("span", { className: "changed" }, [
                                "Seal of Vengeance",
                            ]),
                            " and their Judgement effects by 9%.",
                        ],
                        [
                            "Increases the damage done by your Seal of Righteousness, ",
                            createElement("span", { className: "changed" }, [
                                "Seal of Vengeance",
                            ]),
                            " and their Judgement effects by 12%.",
                        ],
                        [
                            "Increases the damage done by your Seal of Righteousness, ",
                            createElement("span", { className: "changed" }, [
                                "Seal of Vengeance",
                            ]),
                            " and their Judgement effects by 15%.",
                        ],
                    ],
                },
                null,
            ],
            [
                {
                    name: "Healing Light",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_holybolt.jpg",
                    text: [
                        [
                            "Increases the amount healed by your Holy Light, Flash of Light, and ",
                            createElement("span", { className: "changed" }, ["Holy Shock"]),
                            " spells by 4%.",
                        ],
                        [
                            "Increases the amount healed by your Holy Light, Flash of Light, and ",
                            createElement("span", { className: "changed" }, ["Holy Shock"]),
                            " spells by 8%.",
                        ],
                        [
                            "Increases the amount healed by your Holy Light, Flash of Light, and ",
                            createElement("span", { className: "changed" }, ["Holy Shock"]),
                            " spells by 12%.",
                        ],
                    ],
                },
                {
                    name: "Aura Mastery",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auramastery.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the radius of your Auras to 40 yards.",
                    ]),
                },
                {
                    name: "Improved Lay on Hands",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_layonhands.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives the target of your Lay on Hands spell a 15% bonus to their armor value from items for 2 min.  In addition, the cooldown for your Lay on Hands spell is reduced by 10 min.",
                        "Gives the target of your Lay on Hands spell a 30% bonus to their armor value from items for 2 min.  In addition, the cooldown for your Lay on Hands spell is reduced by 20 min.",
                    ]),
                },
                {
                    name: "Unyielding Faith",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_unyieldingfaith.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your chance to resist Fear and Disorient effects by an additional 5%.",
                        "Increases your chance to resist Fear and Disorient effects by an additional 10%.",
                    ]),
                },
            ],
            [
                null,
                {
                    name: "Illumination",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_greaterheal.jpg",
                    text: formatUnchangedTalentTexts([
                        "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 20% chance to gain mana equal to 60% of the base cost of the spell.",
                        "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 40% chance to gain mana equal to 60% of the base cost of the spell.",
                        "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 60% chance to gain mana equal to 60% of the base cost of the spell.",
                        "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 80% chance to gain mana equal to 60% of the base cost of the spell.",
                        "After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 100% chance to gain mana equal to 60% of the base cost of the spell.",
                    ]),
                },
                {
                    name: "Improved Blessing of Wisdom",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_sealofwisdom.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the effect of your Blessing of Wisdom spell by 10%.",
                        "Increases the effect of your Blessing of Wisdom spell by 20%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Pure of Heart",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_pureofheart.jpg",
                    text: [
                        [
                            "Increases your resistance to Curse, Disease, and ",
                            createElement("span", { className: "changed" }, ["Poison"]),
                            " effects by 5%.",
                        ],
                        [
                            "Increases your resistance to Curse, Disease, and ",
                            createElement("span", { className: "changed" }, ["Poison"]),
                            " effects by 10%.",
                        ],
                        [
                            "Increases your resistance to Curse, Disease, and ",
                            createElement("span", { className: "changed" }, ["Poison"]),
                            " effects by 15%.",
                        ],
                    ],
                },
                {
                    name: "Divine Favor",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_heal.jpg",
                    text: formatUnchangedTalentTexts([
                        "When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance.",
                    ]),
                    req: "up",
                    reqDist: 1,
                },
                {
                    name: "Sanctified Light",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_healingaura.jpg",
                    text: [
                        [
                            "Increases the critical effect chance of your Holy Light ",
                            createElement("span", { className: "changed" }, [
                                "and Holy Shock",
                            ]),
                            " spells by 2%.",
                        ],
                        [
                            "Increases the critical effect chance of your Holy Light ",
                            createElement("span", { className: "changed" }, [
                                "and Holy Shock",
                            ]),
                            " spells by 4%.",
                        ],
                        [
                            "Increases the critical effect chance of your Holy Light ",
                            createElement("span", { className: "changed" }, [
                                "and Holy Shock",
                            ]),
                            " spells by 6%.",
                        ],
                    ],
                },
                null,
            ],
            [
                {
                    name: "Purifying Power",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_purifyingpower.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the mana cost of your Cleanse, Purify and Consecration spells by 5% and increases the critical strike chance of your Exorcism and Holy Wrath spells by 10%.",
                        "Reduces the mana cost of your Cleanse, Purify and Consecration spells by 10% and increases the critical strike chance of your Exorcism and Holy Wrath spells by 20%.",
                    ]),
                },
                null,
                {
                    name: "Holy Power",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_power.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical effect chance of your Holy spells by 1%.",
                        "Increases the critical effect chance of your Holy spells by 2%.",
                        "Increases the critical effect chance of your Holy spells by 3%.",
                        "Increases the critical effect chance of your Holy spells by 4%.",
                        "Increases the critical effect chance of your Holy spells by 5%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Light's Grace",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_lightsgrace.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives your Holy Light spell a 33% chance to reduce the cast time of your next Holy Light spell by 0.5 sec.  This effect lasts 15 sec.",
                        "Gives your Holy Light spell a 66% chance to reduce the cast time of your next Holy Light spell by 0.5 sec.  This effect lasts 15 sec.",
                        "Gives your Holy Light spell a 100% chance to reduce the cast time of your next Holy Light spell by 0.5 sec.  This effect lasts 15 sec.",
                    ]),
                },
                {
                    name: "Holy Shock",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_searinglight.jpg",
                    text: formatUnchangedTalentTexts([
                        "Blasts the target with Holy energy, causing 277 to 300 Holy damage to an enemy, or 351 to 380 healing to an ally.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                {
                    name: "Blessed Life",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_blessedlife.jpg",
                    text: formatUnchangedTalentTexts([
                        "All attacks against you have a 4% chance to cause half damage.",
                        "All attacks against you have a 7% chance to cause half damage.",
                        "All attacks against you have a 10% chance to cause half damage.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Holy Guidance",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_holyguidance.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your spell damage and healing by 7% of your total Intellect.",
                        "Increases your spell damage and healing by 14% of your total Intellect.",
                        "Increases your spell damage and healing by 21% of your total Intellect.",
                        "Increases your spell damage and healing by 28% of your total Intellect.",
                        "Increases your spell damage and healing by 35% of your total Intellect.",
                    ]),
                },
                null,
                null,
            ],
            [
                null,
                {
                    name: "Divine Illumination",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_divineillumination.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the mana cost of all spells by 50% for 15 sec.",
                    ]),
                },
                null,
                null,
            ],
        ],
    },
    {
        name: "Protection",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/383.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_devotionaura.jpg",
        talents: [
            [
                null,
                {
                    name: "Improved Devotion Aura",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_devotionaura.jpg",
                    text: [
                        [
                            "Increases the armor bonus of your Devotion Aura by 8% ",
                            createElement("span", { className: "changed" }, [
                                "and increases the amount healed on any target affected by your Devotion Aura by 1%.",
                            ]),
                        ],
                        [
                            "Increases the armor bonus of your Devotion Aura by 16% ",
                            createElement("span", { className: "changed" }, [
                                "and increases the amount healed on any target affected by your Devotion Aura by 2%.",
                            ]),
                        ],
                        [
                            "Increases the armor bonus of your Devotion Aura by 24% ",
                            createElement("span", { className: "changed" }, [
                                "and increases the amount healed on any target affected by your Devotion Aura by 3%.",
                            ]),
                        ],
                        [
                            "Increases the armor bonus of your Devotion Aura by 32% ",
                            createElement("span", { className: "changed" }, [
                                "and increases the amount healed on any target affected by your Devotion Aura by 4%.",
                            ]),
                        ],
                        [
                            "Increases the armor bonus of your Devotion Aura by 40% ",
                            createElement("span", { className: "changed" }, [
                                "and increases the amount healed on any target affected by your Devotion Aura by 5%.",
                            ]),
                        ],
                    ],
                },
                {
                    name: "Redoubt",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_defend.jpg",
                    text: formatUnchangedTalentTexts([
                        "Damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 6%.  Lasts 10 sec or 5 blocks.",
                        "Damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 12%.  Lasts 10 sec or 5 blocks.",
                        "Damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 18%.  Lasts 10 sec or 5 blocks.",
                        "Damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 24%.  Lasts 10 sec or 5 blocks.",
                        "Damaging melee and ranged attacks against you have a 10% chance to increase your chance to block by 30%.  Lasts 10 sec or 5 blocks.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Precision",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_ambush.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your chance to hit with melee weapons and spells by 1%.",
                        "Increases your chance to hit with melee weapons and spells by 2%.",
                        "Increases your chance to hit with melee weapons and spells by 3%.",
                    ]),
                },
                {
                    name: "Guardian's Favor",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_sealofprotection.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the cooldown of your Blessing of Protection by 60 sec and increases the duration of your Blessing of Freedom by 2 sec.",
                        "Reduces the cooldown of your Blessing of Protection by 120 sec and increases the duration of your Blessing of Freedom by 4 sec.",
                    ]),
                },
                null,
                {
                    name: "Toughness",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_devotion.jpg",
                    text: [
                        [
                            "Increases your armor value from items by 2%, ",
                            createElement("span", { className: "changed" }, [
                                "and reduces the duration of movement slowing effects on you by 6%.",
                            ]),
                        ],
                        [
                            "Increases your armor value from items by 4%, ",
                            createElement("span", { className: "changed" }, [
                                "and reduces the duration of movement slowing effects on you by 12%.",
                            ]),
                        ],
                        [
                            "Increases your armor value from items by 6%, ",
                            createElement("span", { className: "changed" }, [
                                "and reduces the duration of movement slowing effects on you by 18%.",
                            ]),
                        ],
                        [
                            "Increases your armor value from items by 8%, ",
                            createElement("span", { className: "changed" }, [
                                "and reduces the duration of movement slowing effects on you by 24%.",
                            ]),
                        ],
                        [
                            "Increases your armor value from items by 10%, ",
                            createElement("span", { className: "changed" }, [
                                "and reduces the duration of movement slowing effects on you by 30%.",
                            ]),
                        ],
                    ],
                },
            ],
            [
                {
                    name: "Blessing of Kings",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_magic_magearmor.jpg",
                    text: formatUnchangedTalentTexts([
                        "Places a Blessing on the friendly target, increasing total stats by 10% for 10 min.  Players may only have one Blessing on them per Paladin at any one time.",
                    ]),
                },
                {
                    name: "Improved Righteous Fury",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_sealoffury.jpg",
                    text: formatUnchangedTalentTexts([
                        "While Righteous Fury is active, all damage taken is reduced by 2% and increases the amount of threat generated by your Righteous Fury spell by 16%.",
                        "While Righteous Fury is active, all damage taken is reduced by 4% and increases the amount of threat generated by your Righteous Fury spell by 33%.",
                        "While Righteous Fury is active, all damage taken is reduced by 6% and increases the amount of threat generated by your Righteous Fury spell by 50%.",
                    ]),
                },
                {
                    name: "Shield Specialization",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_shield_06.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the amount of damage absorbed by your shield by 10%.",
                        "Increases the amount of damage absorbed by your shield by 20%.",
                        "Increases the amount of damage absorbed by your shield by 30%.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                {
                    name: "Anticipation",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_magic_lesserinvisibilty.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your Defense skill by 4.",
                        "Increases your Defense skill by 8.",
                        "Increases your Defense skill by 12.",
                        "Increases your Defense skill by 16.",
                        "Increases your Defense skill by 20.",
                    ]),
                },
            ],
            [
                {
                    name: "Stoicism",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_stoicism.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your resistance to Stun effects by an additional 5% and reduces the chance your spells will be dispelled by an additional 15%.",
                        "Increases your resistance to Stun effects by an additional 10% and reduces the chance your spells will be dispelled by an additional 30%.",
                    ]),
                },
                {
                    name: "Improved Hammer of Justice",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_sealofmight.jpg",
                    text: formatUnchangedTalentTexts([
                        "Decreases the cooldown of your Hammer of Justice spell by 5 sec.",
                        "Decreases the cooldown of your Hammer of Justice spell by 10 sec.",
                        "Decreases the cooldown of your Hammer of Justice spell by 15 sec.",
                    ]),
                },
                {
                    name: "Improved Concentration Aura",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_mindsooth.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the effect of your Concentration Aura by an additional 5% and reduces the duration of any Silence or Interrupt effect used against an affected group member by 10%.  The duration reduction does not stack with any other effects.",
                        "Increases the effect of your Concentration Aura by an additional 10% and reduces the duration of any Silence or Interrupt effect used against an affected group member by 20%.  The duration reduction does not stack with any other effects.",
                        "Increases the effect of your Concentration Aura by an additional 15% and reduces the duration of any Silence or Interrupt effect used against an affected group member by 30%.  The duration reduction does not stack with any other effects.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Spell Warding",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_improvedresistanceauras.jpg",
                    text: formatUnchangedTalentTexts([
                        "All spell damage taken is reduced by 2%.",
                        "All spell damage taken is reduced by 4%.",
                    ]),
                },
                {
                    name: "Blessing of Sanctuary",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_lightningshield.jpg",
                    text: formatUnchangedTalentTexts([
                        "Places a Blessing on the friendly target, reducing damage dealt from all sources by up to 10 for 10 min.  In addition, when the target blocks a melee attack the attacker will take 14 Holy damage.  Players may only have one Blessing on them per Paladin at any one time.",
                    ]),
                },
                {
                    name: "Reckoning",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_blessingofstrength.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives you a 2% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
                        "Gives you a 4% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
                        "Gives you a 6% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
                        "Gives you a 8% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
                        "Gives you a 10% chance after being hit by any damaging attack that the next 4 weapon swings within 8 sec will generate an additional attack.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Sacred Duty",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_divineintervention.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your total Stamina by 3%, reduces the cooldown of your Divine Shield spell by 30 sec and reduces the attack speed penalty by 50%.",
                        "Increases your total Stamina by 6%, reduces the cooldown of your Divine Shield spell by 60 sec and reduces the attack speed penalty by 100%.",
                    ]),
                },
                null,
                {
                    name: "One-Handed Weapon Specialization",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_sword_20.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases all damage you deal when a one-handed melee weapon is equipped by 1%.",
                        "Increases all damage you deal when a one-handed melee weapon is equipped by 2%.",
                        "Increases all damage you deal when a one-handed melee weapon is equipped by 3%.",
                        "Increases all damage you deal when a one-handed melee weapon is equipped by 4%.",
                        "Increases all damage you deal when a one-handed melee weapon is equipped by 5%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Improved Holy Shield",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_blessingofprotection.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases damage caused by your Holy Shield by 10% and increases the number of charges of your Holy Shield by 2.",
                        "Increases damage caused by your Holy Shield by 20% and increases the number of charges of your Holy Shield by 4.",
                    ]),
                    req: "right",
                    reqDist: 1,
                },
                {
                    name: "Holy Shield",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_blessingofprotection.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases chance to block by 30% for 10 sec and deals 59 Holy damage for each attack blocked while active.  Damage caused by Holy Shield causes 35% additional threat.  Each block expends a charge.  4 charges.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                {
                    name: "Ardent Defender",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_ardentdefender.jpg",
                    text: formatUnchangedTalentTexts([
                        "When you have less than 35% health, all damage taken is reduced by 6%.",
                        "When you have less than 35% health, all damage taken is reduced by 12%.",
                        "When you have less than 35% health, all damage taken is reduced by 18%.",
                        "When you have less than 35% health, all damage taken is reduced by 24%.",
                        "When you have less than 35% health, all damage taken is reduced by 30%.",
                    ]),
                },
                null,
            ],
            [
                null,
                null,
                {
                    name: "Combat Expertise",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_weaponmastery.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your expertise by 1 and your total Stamina by 2%.",
                        "Increases your expertise by 2 and your total Stamina by 4%.",
                        "Increases your expertise by 3 and your total Stamina by 6%.",
                        "Increases your expertise by 4 and your total Stamina by 8%.",
                        "Increases your expertise by 5 and your total Stamina by 10%.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Avenger's Shield",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_avengersshield.jpg",
                    text: formatUnchangedTalentTexts([
                        "HHurls a holy shield at the enemy, dealing 270 to 331 Holy damage, Dazing them and then jumping to additional nearby enemies.  Affects 3 total targets.  Lasts 6 sec.",
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
        name: "Retribution",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/381.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auraoflight.jpg",
        talents: [
            [
                null,
                {
                    name: "Improved Blessing of Might",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_fistofjustice.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the attack power bonus of your Blessing of Might by 4%.",
                        "Increases the attack power bonus of your Blessing of Might by 8%.",
                        "Increases the attack power bonus of your Blessing of Might by 12%.",
                        "Increases the attack power bonus of your Blessing of Might by 16%.",
                        "Increases the attack power bonus of your Blessing of Might by 20%.",
                    ]),
                },
                {
                    name: "Benediction",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_windwalkon.jpg",
                    text: [
                        [
                            "Reduces the mana cost of ",
                            createElement("span", { className: "changed" }, [
                                "all instant cast spells by 2%.",
                            ]),
                        ],
                        [
                            "Reduces the mana cost of ",
                            createElement("span", { className: "changed" }, [
                                "all instant cast spells by 4%.",
                            ]),
                        ],
                        [
                            "Reduces the mana cost of ",
                            createElement("span", { className: "changed" }, [
                                "all instant cast spells by 6%.",
                            ]),
                        ],
                        [
                            "Reduces the mana cost of ",
                            createElement("span", { className: "changed" }, [
                                "all instant cast spells by 8%.",
                            ]),
                        ],
                        [
                            "Reduces the mana cost of ",
                            createElement("span", { className: "changed" }, [
                                "all instant cast spells by 10%.",
                            ]),
                        ],
                    ],
                },
                null,
            ],
            [
                {
                    name: "Improved Judgement",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_righteousfury.jpg",
                    text: formatUnchangedTalentTexts([
                        "Decreases the cooldown of your Judgement spell by 1 sec.",
                        "Decreases the cooldown of your Judgement spell by 2 sec.",
                    ]),
                },
                {
                    name: "Improved Seal of the Crusader",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_holysmite.jpg",
                    text: formatUnchangedTalentTexts([
                        "In addition to the normal effect, your Judgement of the Crusader spell will also increase the critical strike chance of all attacks made against that target by an additional 1%.",
                        "In addition to the normal effect, your Judgement of the Crusader spell will also increase the critical strike chance of all attacks made against that target by an additional 2%.",
                        "In addition to the normal effect, your Judgement of the Crusader spell will also increase the critical strike chance of all attacks made against that target by an additional 3%.",
                    ]),
                },
                {
                    name: "Deflection",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_parry.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your Parry chance by 1%.",
                        "Increases your Parry chance by 2%.",
                        "Increases your Parry chance by 3%.",
                        "Increases your Parry chance by 4%.",
                        "Increases your Parry chance by 5%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Vindication",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_vindication.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives the Paladin's damaging melee attacks a chance to reduce the target's attributes by 5% for 15 sec.",
                        "Gives the Paladin's damaging melee attacks a chance to reduce the target's attributes by 10% for 15 sec.",
                        "Gives the Paladin's damaging melee attacks a chance to reduce the target's attributes by 15% for 15 sec.",
                    ]),
                },
                {
                    name: "Conviction",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_retributionaura.jpg",
                    text: [
                        [
                            "Increases your chance to get a critical strike with ",
                            createElement("span", { className: "changed" }, [
                                "all spells and",
                            ]),
                            " attacks by 1%.",
                        ],
                        [
                            "Increases your chance to get a critical strike with ",
                            createElement("span", { className: "changed" }, [
                                "all spells and",
                            ]),
                            " attacks by 2%.",
                        ],
                        [
                            "Increases your chance to get a critical strike with ",
                            createElement("span", { className: "changed" }, [
                                "all spells and",
                            ]),
                            " attacks by 3%.",
                        ],
                        [
                            "Increases your chance to get a critical strike with ",
                            createElement("span", { className: "changed" }, [
                                "all spells and",
                            ]),
                            " attacks by 4%.",
                        ],
                        [
                            "Increases your chance to get a critical strike with ",
                            createElement("span", { className: "changed" }, [
                                "all spells and",
                            ]),
                            " attacks by 5%.",
                        ],
                    ],
                },
                {
                    name: "Seal of Command",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_innerrage.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives the Paladin a chance to deal additional Holy damage equal to 70% of normal weapon damage.  Only one Seal can be active on the Paladin at any one time.  Lasts 30 sec.\n\nUnleashing this Seal's energy will judge an enemy, instantly causing 46.5 to 55.5 Holy damage, 93 to 102 if the target is stunned or incapacitated.",
                    ]),
                },
                {
                    name: "Pursuit of Justice",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_persuitofjustice.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the chance you'll be hit by spells by 1% and increases movement and mounted movement speed by 5%.  This does not stack with other movement speed increasing effects.",
                        "Reduces the chance you'll be hit by spells by 2% and increases movement and mounted movement speed by 10%.  This does not stack with other movement speed increasing effects.",
                        "Reduces the chance you'll be hit by spells by 3% and increases movement and mounted movement speed by 15%.  This does not stack with other movement speed increasing effects.",
                    ]),
                },
            ],
            [
                {
                    name: "Eye for an Eye",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_eyeforaneye.jpg",
                    text: formatUnchangedTalentTexts([
                        "All spell criticals against you cause 15% of the damage taken to the caster as well.  The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.",
                        "All spell criticals against you cause 30% of the damage taken to the caster as well.  The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.",
                    ]),
                },
                null,
                {
                    name: "Improved Retribution Aura",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_auraoflight.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage done by your Retribution Aura by 25%.",
                        "Increases the damage done by your Retribution Aura by 50%.",
                    ]),
                },
                {
                    name: "Crusade",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_crusade.jpg",
                    text: [
                        [
                            createElement("span", { className: "changed" }, [
                                "Increases all damage caused by 1% ",
                            ]),
                            "and all damage caused against Humanoids, Demons, Undead and Elementals by an additional 1%.",
                        ],
                        [
                            createElement("span", { className: "changed" }, [
                                "Increases all damage caused by 2% ",
                            ]),
                            "and all damage caused against Humanoids, Demons, Undead and Elementals by an additional 2%.",
                        ],
                        [
                            createElement("span", { className: "changed" }, [
                                "Increases all damage caused by 3% ",
                            ]),
                            "and all damage caused against Humanoids, Demons, Undead and Elementals by an additional 3%.",
                        ],
                    ],
                },
            ],
            [
                {
                    name: "Two-Handed Weapon Specialization",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_hammer_04.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage you deal with two-handed melee weapons by 2%.",
                        "Increases the damage you deal with two-handed melee weapons by 4%.",
                        "Increases the damage you deal with two-handed melee weapons by 6%.",
                    ]),
                },
                null,
                {
                    name: "Sanctity Aura",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_mindvision.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases Holy damage done by party members within 30 yards by 10%.  Players may only have one Aura on them per Paladin at any one time.",
                    ]),
                },
                {
                    name: "Improved Sanctity Aura",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_mindvision.jpg",
                    text: formatUnchangedTalentTexts([
                        "The amount of damage caused by targets affected by Sanctity Aura is increased by 1%.",
                        "The amount of damage caused by targets affected by Sanctity Aura is increased by 2%.",
                    ]),
                    req: "left",
                    reqDist: 1,
                },
            ],
            [
                null,
                {
                    name: "Vengeance",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_racial_avatar.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives you a 1% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell, or ability.  This effect stacks up to 3 times.",
                        "Gives you a 2% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell, or ability.  This effect stacks up to 3 times.",
                        "Gives you a 3% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell, or ability.  This effect stacks up to 3 times.",
                        "Gives you a 4% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell, or ability.  This effect stacks up to 3 times.",
                        "Gives you a 5% bonus to Physical and Holy damage you deal for 30 sec after dealing a critical strike from a weapon swing, spell, or ability.  This effect stacks up to 3 times.",
                    ]),
                    req: "up",
                    reqDist: 3,
                },
                {
                    name: "Sanctified Judgement",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_righteousfury.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives your Judgement spell a 33% chance to return 80% of the mana cost of the judged seal.",
                        "Gives your Judgement spell a 66% chance to return 80% of the mana cost of the judged seal.",
                        "Gives your Judgement spell a 100% chance to return 80% of the mana cost of the judged seal.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Sanctified Seals",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_holysmite.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your chance to critically hit with all spells and melee attacks by 1% and reduces the chance your Seals will be dispelled by 33%.",
                        "Increases your chance to critically hit with all spells and melee attacks by 2% and reduces the chance your Seals will be dispelled by 66%.",
                        "Increases your chance to critically hit with all spells and melee attacks by 3% and reduces the chance your Seals will be dispelled by 100%.",
                    ]),
                },
                {
                    name: "Repentance",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_prayerofhealing.jpg",
                    text: formatUnchangedTalentTexts([
                        "Puts the enemy target in a state of meditation, incapacitating them for up to 6 sec.  Any damage caused will awaken the target.  Only works against Humanoids.",
                    ]),
                },
                {
                    name: "Divine Purpose",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_divinepurpose.jpg",
                    text: formatUnchangedTalentTexts([
                        "Melee and ranged critical strikes against you cause 4% less damage.",
                        "Melee and ranged critical strikes against you cause 7% less damage.",
                        "Melee and ranged critical strikes against you cause 10% less damage.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Fanaticism",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_fanaticism.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical strike chance of all Judgements capable of a critical hit by 3% and reduces threat caused by all actions by 6% except when under the effects of Righteous Fury.",
                        "Increases the critical strike chance of all Judgements capable of a critical hit by 6% and reduces threat caused by all actions by 12% except when under the effects of Righteous Fury.",
                        "Increases the critical strike chance of all Judgements capable of a critical hit by 9% and reduces threat caused by all actions by 18% except when under the effects of Righteous Fury.",
                        "Increases the critical strike chance of all Judgements capable of a critical hit by 12% and reduces threat caused by all actions by 24% except when under the effects of Righteous Fury.",
                    ]),
                    req: "up",
                    reqDist: 1,
                },
                null,
                null,
            ],
            [
                null,
                {
                    name: "Crusader Strike",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_crusaderstrike.jpg",
                    text: formatUnchangedTalentTexts([
                        "An instant strike that causes 110% weapon damage and refreshes all Judgements on the target.",
                    ]),
                },
                null,
                null,
            ],
        ],
    },
];
