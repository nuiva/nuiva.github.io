// @ts-ignore
const data = [
    {
        name: "Affliction",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/302.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_deathcoil.jpg",
        talents: [
            [
                null,
                {
                    name: "Suppression",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_unsummonbuilding.jpg",
                    text: [
                        [
                            "Reduces the chance for enemies to resist your Affliction spells by 2% ",
                            change("and reduces the mana cost of your Affliction spells by 1%"),
                            ".",
                        ],
                        [
                            "Reduces the chance for enemies to resist your Affliction spells by 4% ",
                            change("and reduces the mana cost of your Affliction spells by 2%"),
                            ".",
                        ],
                        [
                            "Reduces the chance for enemies to resist your Affliction spells by 6% ",
                            change("and reduces the mana cost of your Affliction spells by 3%"),
                            ".",
                        ],
                        [
                            "Reduces the chance for enemies to resist your Affliction spells by 8% ",
                            change("and reduces the mana cost of your Affliction spells by 4%"),
                            ".",
                        ],
                        [
                            "Reduces the chance for enemies to resist your Affliction spells by 10% ",
                            change("and reduces the mana cost of your Affliction spells by 5%"),
                            ".",
                        ],
                    ],
                },
                {
                    name: "Improved Corruption",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_abominationexplosion.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the casting time of your Corruption spell by 0.4 sec.",
                        "Reduces the casting time of your Corruption spell by 0.8 sec.",
                        "Reduces the casting time of your Corruption spell by 1.2 sec.",
                        "Reduces the casting time of your Corruption spell by 1.6 sec.",
                        "Reduces the casting time of your Corruption spell by 2 sec.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Improved Curse of Weakness",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_curseofmannoroth.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the effect of your Curse of Weakness by 10%.",
                        "Increases the effect of your Curse of Weakness by 20%.",
                    ]),
                },
                {
                    name: "Improved Drain Soul",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_haunting.jpg",
                    text: [
                        [
                            "Returns 7% of your maximum mana if the target is killed by you while you drain its soul.  In addition, your Affliction spells generate ",
                            change("10", "5"),
                            "% less threat.",
                        ],
                        [
                            "Returns 15% of your maximum mana if the target is killed by you while you drain its soul.  In addition, your Affliction spells generate ",
                            change("20", "10"),
                            "% less threat.",
                        ],
                    ],
                },
                {
                    name: "Improved Life Tap",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_burningspirit.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the amount of Mana awarded by your Life Tap spell by 10%.",
                        "Increases the amount of Mana awarded by your Life Tap spell by 20%.",
                    ]),
                },
                {
                    name: "Soul Siphon",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_lifedrain02.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the amount drained by your Drain Life spell by an additional 2% for each Affliction effect on the target, up to a maximum of 24% additional effect.",
                        "Increases the amount drained by your Drain Life spell by an additional 4% for each Affliction effect on the target, up to a maximum of 60% additional effect.",
                    ]),
                },
            ],
            [
                {
                    name: "Improved Curse of Agony",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_curseofsargeras.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage done by your Curse of Agony by 5%.",
                        "Increases the damage done by your Curse of Agony by 10%.",
                    ]),
                },
                {
                    name: "Fel Concentration",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_fingerofdeath.jpg",
                    text: [
                        [
                            "Gives you a 14% chance to avoid interruption caused by damage while channeling Drain Life, Drain Mana, Drain Soul, or ",
                            change("Unstable Affliction"),
                            ".",
                        ],
                        [
                            "Gives you a 28% chance to avoid interruption caused by damage while channeling Drain Life, Drain Mana, Drain Soul, or ",
                            change("Unstable Affliction"),
                            ".",
                        ],
                        [
                            "Gives you a 42% chance to avoid interruption caused by damage while channeling Drain Life, Drain Mana, Drain Soul, or ",
                            change("Unstable Affliction"),
                            ".",
                        ],
                        [
                            "Gives you a 56% chance to avoid interruption caused by damage while channeling Drain Life, Drain Mana, Drain Soul, or ",
                            change("Unstable Affliction"),
                            ".",
                        ],
                        [
                            "Gives you a 70% chance to avoid interruption caused by damage while channeling Drain Life, Drain Mana, Drain Soul, or ",
                            change("Unstable Affliction"),
                            ".",
                        ],
                    ],
                },
                {
                    name: "Amplify Curse",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_contagion.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the effect of your next Curse of Doom or Curse of Agony by 50%, or your next Curse of Exhaustion by an additional 20%.  Lasts 30 sec.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Grim Reach",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_callofbone.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the range of your Affliction spells by 10%.",
                        "Increases the range of your Affliction spells by 20%.",
                    ]),
                },
                {
                    name: "Nightfall",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_twilight.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives your Corruption and Drain Life spells a 2% chance to cause you to enter a Shadow Trance state after damaging the opponent.  The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.",
                        "Gives your Corruption and Drain Life spells a 4% chance to cause you to enter a Shadow Trance state after damaging the opponent.  The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.",
                    ]),
                },
                null,
                {
                    name: "Empowered Corruption",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_abominationexplosion.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your Corruption spell gains an additional 12% of your bonus spell damage effects.",
                        "Your Corruption spell gains an additional 24% of your bonus spell damage effects.",
                        "Your Corruption spell gains an additional 36% of your bonus spell damage effects.",
                    ]),
                },
            ],
            [
                {
                    name: "Shadow Embrace",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_shadowembrace.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your Corruption, Curse of Agony, Siphon Life and Seed of Corruption spells also cause the Shadow Embrace effect, which reduces physical damage caused by 1%.",
                        "Your Corruption, Curse of Agony, Siphon Life and Seed of Corruption spells also cause the Shadow Embrace effect, which reduces physical damage caused by 2%.",
                        "Your Corruption, Curse of Agony, Siphon Life and Seed of Corruption spells also cause the Shadow Embrace effect, which reduces physical damage caused by 3%.",
                        "Your Corruption, Curse of Agony, Siphon Life and Seed of Corruption spells also cause the Shadow Embrace effect, which reduces physical damage caused by 4%.",
                        "Your Corruption, Curse of Agony, Siphon Life and Seed of Corruption spells also cause the Shadow Embrace effect, which reduces physical damage caused by 5%.",
                    ]),
                },
                {
                    name: "Siphon Life",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_requiem.jpg",
                    text: formatUnchangedTalentTexts([
                        "Transfers 15 health from the target to the caster every 3 sec.  Lasts 30 sec.",
                    ]),
                },
                {
                    name: "Curse of Exhaustion",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_grimward.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the target's movement speed by 30% for 12 sec.  Only one Curse per Warlock can be active on any one target.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                null,
            ],
            [
                null,
                {
                    name: "Shadow Mastery",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_shadetruesight.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage dealt or life drained by your Shadow spells by 2%.",
                        "Increases the damage dealt or life drained by your Shadow spells by 4%.",
                        "Increases the damage dealt or life drained by your Shadow spells by 6%.",
                        "Increases the damage dealt or life drained by your Shadow spells by 8%.",
                        "Increases the damage dealt or life drained by your Shadow spells by 10%.",
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
                    name: "Contagion",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_painfulafflictions.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 1% and reduces the chance your Affliction spells will be dispelled by an additional 6%.",
                        "Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 2% and reduces the chance your Affliction spells will be dispelled by an additional 12%.",
                        "Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 3% and reduces the chance your Affliction spells will be dispelled by an additional 18%.",
                        "Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 4% and reduces the chance your Affliction spells will be dispelled by an additional 24%.",
                        "Increases the damage of Curse of Agony, Corruption and Seed of Corruption by 5% and reduces the chance your Affliction spells will be dispelled by an additional 30%.",
                    ]),
                },
                {
                    name: "Dark Pact",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_darkritual.jpg",
                    text: formatUnchangedTalentTexts([
                        "Drains 305 of your pet's Mana, returning 100% to you.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Improved Howl of Terror",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_deathscream.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the casting time of your Howl of Terror spell by 0.8 sec.",
                        "Reduces the casting time of your Howl of Terror spell by 1.5 sec.",
                    ]),
                },
                null,
                {
                    name: "Malediction",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_curseofachimonde.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage bonus effect of your Curse of the Elements spell by an additional 1%.",
                        "Increases the damage bonus effect of your Curse of the Elements spell by an additional 2%.",
                        "Increases the damage bonus effect of your Curse of the Elements spell by an additional 3%.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Unstable Affliction",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_unstableaffliction_3.jpg",
                    text: formatUnchangedTalentTexts([
                        "Shadow energy slowly destroys the target, causing 660 damage over 18 sec.  In addition, if the Unstable Affliction is dispelled it will cause 990 damage to the dispeller and silence them for 5 sec.",
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
        name: "Demonology",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/303.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_metamorphosis.jpg",
        talents: [
            [
                {
                    name: "Improved Healthstone",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_stone_04.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the amount of Health restored by your Healthstone by 10%.",
                        "Increases the amount of Health restored by your Healthstone by 20%.",
                    ]),
                },
                {
                    name: "Improved Imp",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_summonimp.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 10%.",
                        "Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 20%.",
                        "Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 30%.",
                    ]),
                },
                {
                    name: "Demonic Embrace",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_metamorphosis.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your total Stamina by 3% but reduces your total Spirit by 1%.",
                        "Increases your total Stamina by 6% but reduces your total Spirit by 2%.",
                        "Increases your total Stamina by 9% but reduces your total Spirit by 3%.",
                        "Increases your total Stamina by 12% but reduces your total Spirit by 4%.",
                        "Increases your total Stamina by 15% but reduces your total Spirit by 5%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Improved Health Funnel",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_lifedrain.jpg",
                    text: [
                        [
                            "Increases the amount of Health transferred by your Health Funnel spell by 10% and reduces the initial health cost by 10%.",
                            change(" In addition, your summoned Demon takes 15% less damage while under the effects of your Health Funnel."),
                        ],
                        [
                            "Increases the amount of Health transferred by your Health Funnel spell by 20% and reduces the initial health cost by 20%.",
                            change(" In addition, your summoned Demon takes 30% less damage while under the effects of your Health Funnel."),
                        ],
                    ],
                },
                {
                    name: change("Demonic Brutality", "Improved Voidwalker"),
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_summonvoidwalker.jpg",
                    text: [
                        [
                            "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 10%,",
                            change(" and increases the attack power bonus on your Felguard's Demonic Frenzy effect by 1%."),
                        ],
                        [
                            "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 20%,",
                            change(" and increases the attack power bonus on your Felguard's Demonic Frenzy effect by 2%."),
                        ],
                        [
                            "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by 30%,",
                            change(" and increases the attack power bonus on your Felguard's Demonic Frenzy effect by 3%."),
                        ],
                    ],
                },
                {
                    name: "Fel Intellect",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_magicalsentry.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the Intellect of your Imp, Voidwalker, Succubus, Felhunter and Felguard by 5% and increases your maximum mana by 1%.",
                        "Increases the Intellect of your Imp, Voidwalker, Succubus, Felhunter and Felguard by 10% and increases your maximum mana by 2%.",
                        "Increases the Intellect of your Imp, Voidwalker, Succubus, Felhunter and Felguard by 15% and increases your maximum mana by 3%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Improved Succubus",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_summonsuccubus.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the effect of your Succubus' Lash of Pain and Soothing Kiss spells by 10%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by 10%.",
                        "Increases the effect of your Succubus' Lash of Pain and Soothing Kiss spells by 20%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by 20%.",
                        "Increases the effect of your Succubus' Lash of Pain and Soothing Kiss spells by 30%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by 30%.",
                    ]),
                },
                {
                    name: "Fel Domination",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_removecurse.jpg",
                    text: [
                        [
                            "Your next Imp, Voidwalker, Succubus, Felhunter or Felguard Summon spell has its casting time reduced by 5.5 sec and its Mana cost reduced by 50%. Cooldown: ",
                            change("5", "15"),
                            " min.",
                        ],
                    ],
                },
                {
                    name: "Fel Stamina",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_antishadow.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the Stamina of your Imp, Voidwalker, Succubus, Felhunter and Felguard by 5% and increases your maximum health by 1%.",
                        "Increases the Stamina of your Imp, Voidwalker, Succubus, Felhunter and Felguard by 10% and increases your maximum health by 2%.",
                        "Increases the Stamina of your Imp, Voidwalker, Succubus, Felhunter and Felguard by 15% and increases your maximum health by 3%.",
                    ]),
                },
                {
                    name: "Demonic Aegis",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_ragingscream.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the effectiveness of your Demon Armor and Fel Armor spells by 10%.",
                        "Increases the effectiveness of your Demon Armor and Fel Armor spells by 20%.",
                        "Increases the effectiveness of your Demon Armor and Fel Armor spells by 30%.",
                    ]),
                },
            ],
            [
                null,
                {
                    name: "Master Summoner",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_impphaseshift.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the casting time of your Imp, Voidwalker, Succubus, Felhunter and Fel Guard Summoning spells by 2 sec and the Mana cost by 20%.",
                        "Reduces the casting time of your Imp, Voidwalker, Succubus, Felhunter and Fel Guard Summoning spells by 4 sec and the Mana cost by 40%.",
                    ]),
                    req: "up",
                    reqDist: 1,
                },
                {
                    name: "Unholy Power",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_shadowworddominate.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 4%.",
                        "Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 8%.",
                        "Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 12%.",
                        "Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 16%.",
                        "Increases the damage done by your Voidwalker, Succubus, Felhunter and Felguard's melee attacks and your Imp's Firebolt by 20%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Improved Enslave Demon",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_enslavedemon.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the Attack Speed and Casting Speed penalty of your Enslave Demon spell by 5% and reduces the resist chance by 5%.",
                        "Reduces the Attack Speed and Casting Speed penalty of your Enslave Demon spell by 10% and reduces the resist chance by 10%.",
                    ]),
                },
                {
                    name: "Demonic Sacrifice",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_psychicscream.jpg",
                    text: formatUnchangedTalentTexts([
                        "When activated, sacrifices your summoned demon to grant you an effect that lasts 30 min.  The effect is canceled if any Demon is summoned.\n\nImp: Increases your Fire damage by 15%.\n\nVoidwalker: Restores 2% of total health every 4 sec.\n\nSuccubus: Increases your Shadow damage by 15%.\n\nFelhunter: Restores 3% of total mana every 4 sec.\n\nFelguard: Increases your Shadow damage by 10% and restores 2% of total mana every 4 sec.",
                    ]),
                },
                null,
                {
                    name: "Master Conjuror",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_ammo_firetar.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the bonus Fire damage from Firestones and the Firestone effect by 15% and increases the spell critical strike rating bonus of your Spellstone by 15%.",
                        "Increases the bonus Fire damage from Firestones and the Firestone effect by 30% and increases the spell critical strike rating bonus of your Spellstone by 30%.",
                    ]),
                },
            ],
            [
                {
                    name: "Mana Feed",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_manafeed.jpg",
                    text: formatUnchangedTalentTexts([
                        "When you gain mana from Drain Mana or Life Tap spells, your pet gains 33% of the mana you gain.",
                        "When you gain mana from Drain Mana or Life Tap spells, your pet gains 66% of the mana you gain.",
                        "When you gain mana from Drain Mana or Life Tap spells, your pet gains 100% of the mana you gain.",
                    ]),
                },
                null,
                {
                    name: "Master Demonologist",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_shadowpact.jpg",
                    text: [
                        [
                            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.",
                            createElement("br"),
                            createElement("br"),
                            "Imp - ",
                            change("Increases your Fire damage by 1% and increases the critical effect chance of your Fire spells by 1%."),
                            change("", "Reduces threat caused by 4%."),
                            createElement("br"),
                            createElement("br"),
                            "Voidwalker - Reduces physical damage taken by 2%.",
                            createElement("br"),
                            createElement("br"),
                            "Succubus - ",
                            change("Increases your Shadow damage by 1% and increases the critical effect chance of your Shadow spells by 1%."),
                            change("", "Increases all damage caused by 2%."),
                            createElement("br"),
                            createElement("br"),
                            "Felhunter - ",
                            change("Reduces all spell damage taken by 2%.", "Increases all resistances by .2 per level."),
                            createElement("br"),
                            createElement("br"),
                            "Felguard - Increases all damage caused by 1% and ",
                            change("reduces all damage taken by 1%", "all resistances by .1 per level"),
                            ".",
                        ],
                        [
                            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.",
                            createElement("br"),
                            createElement("br"),
                            "Imp - ",
                            change("Increases your Fire damage by 2% and increases the critical effect chance of your Fire spells by 2%."),
                            change("", "Reduces threat caused by 8%."),
                            createElement("br"),
                            createElement("br"),
                            "Voidwalker - Reduces physical damage taken by 4%.",
                            createElement("br"),
                            createElement("br"),
                            "Succubus - ",
                            change("Increases your Shadow damage by 2% and increases the critical effect chance of your Shadow spells by 2%."),
                            change("", "Increases all damage caused by 4%."),
                            createElement("br"),
                            createElement("br"),
                            "Felhunter - ",
                            change("Reduces all spell damage taken by 4%.", "Increases all resistances by .4 per level."),
                            createElement("br"),
                            createElement("br"),
                            "Felguard - Increases all damage caused by 2% and ",
                            change("reduces all damage taken by 2%", "all resistances by .2 per level"),
                            ".",
                        ],
                        [
                            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.",
                            createElement("br"),
                            createElement("br"),
                            "Imp - ",
                            change("Increases your Fire damage by 3% and increases the critical effect chance of your Fire spells by 3%."),
                            change("", "Reduces threat caused by 12%."),
                            createElement("br"),
                            createElement("br"),
                            "Voidwalker - Reduces physical damage taken by 6%.",
                            createElement("br"),
                            createElement("br"),
                            "Succubus - ",
                            change("Increases your Shadow damage by 3% and increases the critical effect chance of your Shadow spells by 3%."),
                            change("", "Increases all damage caused by 6%."),
                            createElement("br"),
                            createElement("br"),
                            "Felhunter - ",
                            change("Reduces all spell damage taken by 6%.", "Increases all resistances by .6 per level."),
                            createElement("br"),
                            createElement("br"),
                            "Felguard - Increases all damage caused by 3% and ",
                            change("reduces all damage taken by 3%", "all resistances by .3 per level"),
                            ".",
                        ],
                        [
                            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.",
                            createElement("br"),
                            createElement("br"),
                            "Imp - ",
                            change("Increases your Fire damage by 4% and increases the critical effect chance of your Fire spells by 4%."),
                            change("", "Reduces threat caused by 16%."),
                            createElement("br"),
                            createElement("br"),
                            "Voidwalker - Reduces physical damage taken by 8%.",
                            createElement("br"),
                            createElement("br"),
                            "Succubus - ",
                            change("Increases your Shadow damage by 4% and increases the critical effect chance of your Shadow spells by 4%."),
                            change("", "Increases all damage caused by 8%."),
                            createElement("br"),
                            createElement("br"),
                            "Felhunter - ",
                            change("Reduces all spell damage taken by 8%.", "Increases all resistances by .8 per level."),
                            createElement("br"),
                            createElement("br"),
                            "Felguard - Increases all damage caused by 4% and ",
                            change("reduces all damage taken by 4%", "all resistances by .4 per level"),
                            ".",
                        ],
                        [
                            "Grants both the Warlock and the summoned demon an effect as long as that demon is active.",
                            createElement("br"),
                            createElement("br"),
                            "Imp - ",
                            change("Increases your Fire damage by 5% and increases the critical effect chance of your Fire spells by 5%."),
                            change("", "Reduces threat caused by 20%."),
                            createElement("br"),
                            createElement("br"),
                            "Voidwalker - Reduces physical damage taken by 10%.",
                            createElement("br"),
                            createElement("br"),
                            "Succubus - ",
                            change("Increases your Shadow damage by 5% and increases the critical effect chance of your Shadow spells by 5%."),
                            change("", "Increases all damage caused by 10%."),
                            createElement("br"),
                            createElement("br"),
                            "Felhunter - ",
                            change("Reduces all spell damage taken by 10%.", "Increases all resistances by 1 per level."),
                            createElement("br"),
                            createElement("br"),
                            "Felguard - Increases all damage caused by 5% and ",
                            change("reduces all damage taken by 5%", "all resistances by .5 per level"),
                            ".",
                        ],
                    ],
                    req: "up",
                    reqDist: 2,
                },
                null,
            ],
            [
                {
                    name: "Demonic Resilience",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_demonicfortitude.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the chance you'll be critically hit by melee and spells by 1% and reduces all damage your summoned demon takes by 5%.",
                        "Reduces the chance you'll be critically hit by melee and spells by 2% and reduces all damage your summoned demon takes by 10%.",
                        "Reduces the chance you'll be critically hit by melee and spells by 3% and reduces all damage your summoned demon takes by 15%.",
                    ]),
                },
                {
                    name: "Soul Link",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_gathershadows.jpg",
                    text: formatUnchangedTalentTexts([
                        "When active, 20% of all damage taken by the caster is taken by your Imp, Voidwalker, Succubus, Felhunter, Felguard, or enslaved demon instead.  That damage cannot be prevented.  In addition, both the demon and master will inflict 5% more damage.  Lasts as long as the demon is active and controlled.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                {
                    name: "Demonic Knowledge",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_improvedvampiricembrace.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your spell damage by an amount equal to 4% of the total of your active demon's Stamina plus Intellect.",
                        "Increases your spell damage by an amount equal to 8% of the total of your active demon's Stamina plus Intellect.",
                        "Increases your spell damage by an amount equal to 12% of the total of your active demon's Stamina plus Intellect.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Demonic Tactics",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_demonictactics.jpg",
                    text: [
                        [
                            "Increases melee and spell critical strike chance for you and your summoned demon by ",
                            change("2", "1"),
                            "%.",
                        ],
                        [
                            "Increases melee and spell critical strike chance for you and your summoned demon by ",
                            change("4", "2"),
                            "%.",
                        ],
                        [
                            "Increases melee and spell critical strike chance for you and your summoned demon by ",
                            change("6", "3"),
                            "%.",
                        ],
                        [
                            "Increases melee and spell critical strike chance for you and your summoned demon by ",
                            change("8", "4"),
                            "%.",
                        ],
                        [
                            "Increases melee and spell critical strike chance for you and your summoned demon by ",
                            change("10", "5"),
                            "%.",
                        ],
                    ],
                },
                null,
                null,
            ],
            [
                null,
                {
                    name: "Summon Felguard",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_summonfelguard.jpg",
                    text: formatUnchangedTalentTexts([
                        "Summons a Felguard under the command of the Warlock.",
                    ]),
                },
                null,
                null,
            ],
        ],
    },
    {
        name: "Destruction",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/301.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_rainoffire.jpg",
        talents: [
            [
                null,
                {
                    name: "Improved Shadow Bolt",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_shadowbolt.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 4% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 sec.",
                        "Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 8% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 sec.",
                        "Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 12% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 sec.",
                        "Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 16% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 sec.",
                        "Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by 20% until 4 non-periodic damage sources are applied.  Effect lasts a maximum of 12 sec.",
                    ]),
                },
                {
                    name: "Cataclysm",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_windsofwoe.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the Mana cost of your Destruction spells by 1%.",
                        "Reduces the Mana cost of your Destruction spells by 2%.",
                        "Reduces the Mana cost of your Destruction spells by 3%.",
                        "Reduces the Mana cost of your Destruction spells by 4%.",
                        "Reduces the Mana cost of your Destruction spells by 5%.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Bane",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_deathpact.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the casting time of your Shadow Bolt and Immolate spells by 0.1 sec and your Soul Fire spell by 0.4 sec.",
                        "Reduces the casting time of your Shadow Bolt and Immolate spells by 0.2 sec and your Soul Fire spell by 0.8 sec.",
                        "Reduces the casting time of your Shadow Bolt and Immolate spells by 0.3 sec and your Soul Fire spell by 1.2 sec.",
                        "Reduces the casting time of your Shadow Bolt and Immolate spells by 0.4 sec and your Soul Fire spell by 1.6 sec.",
                        "Reduces the casting time of your Shadow Bolt and Immolate spells by 0.5 sec and your Soul Fire spell by 2 sec.",
                    ]),
                },
                {
                    name: "Aftermath",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_fire.jpg",
                    text: [
                        [
                            change("Increases the periodic damage done by your Immolate by 1%, and "),
                            "gives your Destruction spells a 2% chance to daze the target for 5 sec.",
                        ],
                        [
                            change("Increases the periodic damage done by your Immolate by 2%, and "),
                            "gives your Destruction spells a 4% chance to daze the target for 5 sec.",
                        ],
                        [
                            change("Increases the periodic damage done by your Immolate by 3%, and "),
                            "gives your Destruction spells a 6% chance to daze the target for 5 sec.",
                        ],
                        [
                            change("Increases the periodic damage done by your Immolate by 4%, and "),
                            "gives your Destruction spells a 8% chance to daze the target for 5 sec.",
                        ],
                        [
                            change("Increases the periodic damage done by your Immolate by 5%, and "),
                            "gives your Destruction spells a 10% chance to daze the target for 5 sec.",
                        ],
                    ],
                },
                null,
            ],
            [
                {
                    name: "Improved Firebolt",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_firebolt.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the casting time of your Imp's Firebolt spell by 0.25 sec.",
                        "Reduces the casting time of your Imp's Firebolt spell by 0.5 sec.",
                    ]),
                },
                {
                    name: "Improved Lash of Pain",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_curse.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the cooldown of your Succubus' Lash of Pain spell by 3 sec.",
                        "Reduces the cooldown of your Succubus' Lash of Pain spell by 6 sec.",
                    ]),
                },
                {
                    name: "Devastation",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_flameshock.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical strike chance of your Destruction spells by 1%.",
                        "Increases the critical strike chance of your Destruction spells by 2%.",
                        "Increases the critical strike chance of your Destruction spells by 3%.",
                        "Increases the critical strike chance of your Destruction spells by 4%.",
                        "Increases the critical strike chance of your Destruction spells by 5%.",
                    ]),
                },
                {
                    name: "Shadowburn",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_scourgebuild.jpg",
                    text: formatUnchangedTalentTexts([
                        "Instantly blasts the target for 87 to 100 Shadow damage.  If the target dies within 5 sec of Shadowburn, and yields experience or honor, the caster gains a Soul Shard.",
                    ]),
                },
            ],
            [
                {
                    name: "Intensity",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_lavaspawn.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives you a 35% chance to resist interruption caused by damage while casting or channeling any Destruction spell.",
                        "Gives you a 70% chance to resist interruption caused by damage while casting or channeling any Destruction spell.",
                    ]),
                },
                {
                    name: "Destructive Reach",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_corpseexplode.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the range of your Destruction spells by 10% and reduces threat caused by Destruction spells by 5%.",
                        "Increases the range of your Destruction spells by 20% and reduces threat caused by Destruction spells by 10%.",
                    ]),
                },
                null,
                {
                    name: "Improved Searing Pain",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_soulburn.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical strike chance of your Searing Pain spell by 4%.",
                        "Increases the critical strike chance of your Searing Pain spell by 7%.",
                        "Increases the critical strike chance of your Searing Pain spell by 10%.",
                    ]),
                },
            ],
            [
                {
                    name: "Pyroclasm",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_volcano.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives your Rain of Fire, Hellfire, and Soul Fire spells a 13% chance to stun the target for 3 sec.",
                        "Gives your Rain of Fire, Hellfire, and Soul Fire spells a 26% chance to stun the target for 3 sec.",
                    ]),
                    req: "up",
                    reqDist: 1,
                },
                {
                    name: "Improved Immolate",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_immolation.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the initial damage of your Immolate spell by 5%.",
                        "Increases the initial damage of your Immolate spell by 10%.",
                        "Increases the initial damage of your Immolate spell by 15%.",
                        "Increases the initial damage of your Immolate spell by 20%.",
                        "Increases the initial damage of your Immolate spell by 25%.",
                    ]),
                },
                {
                    name: "Ruin",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_shadowwordpain.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical strike damage bonus of your Destruction spells by 100%.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                null,
            ],
            [
                {
                    name: "Nether Protection",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_netherprotection.jpg",
                    text: formatUnchangedTalentTexts([
                        "After being hit with a Shadow or Fire spell, you have a 10% chance to become immune to Shadow and Fire spells for 4 sec.",
                        "After being hit with a Shadow or Fire spell, you have a 20% chance to become immune to Shadow and Fire spells for 4 sec.",
                        "After being hit with a Shadow or Fire spell, you have a 30% chance to become immune to Shadow and Fire spells for 4 sec.",
                    ]),
                },
                null,
                {
                    name: "Emberstorm",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_selfdestruct.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage done by your Fire spells by 2% and reduces the cast time of your Incinerate spell by 2%.",
                        "Increases the damage done by your Fire spells by 4%, and reduces the cast time of your Incinerate spell by 4%.",
                        "Increases the damage done by your Fire spells by 6%, and reduces the cast time of your Incinerate spell by 6%.",
                        "Increases the damage done by your Fire spells by 8%, and reduces the cast time of your Incinerate spell by 8%.",
                        "Increases the damage done by your Fire spells by 10%, and reduces the cast time of your Incinerate spell by 10%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Backlash",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_playingwithfire.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your critical strike chance with spells by an additional 1% and gives you a 8% chance when hit by a physical attack to reduce the cast time of your next Shadow Bolt or Incinerate spell by 100%.  This effect lasts 8 sec and will not occur more than once every 8 seconds.",
                        "Increases your critical strike chance with spells by an additional 2% and gives you a 16% chance when hit by a physical attack to reduce the cast time of your next Shadow Bolt or Incinerate spell by 100%.  This effect lasts 8 sec and will not occur more than once every 8 seconds.",
                        "Increases your critical strike chance with spells by an additional 3% and gives you a 25% chance when hit by a physical attack to reduce the cast time of your next Shadow Bolt or Incinerate spell by 100%.  This effect lasts 8 sec and will not occur more than once every 8 seconds.",
                    ]),
                },
                {
                    name: "Conflagrate",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_fire_fireball.jpg",
                    text: formatUnchangedTalentTexts([
                        "Ignites a target that is already afflicted by your Immolate, dealing 240 to 307 Fire damage and consuming the Immolate spell.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                {
                    name: "Soul Leech",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_soulleech_3.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives your Shadow Bolt, Shadowburn, Soul Fire, Incinerate, Searing Pain and Conflagrate spells a 10% chance to return health equal to 20% of the damage caused.",
                        "Gives your Shadow Bolt, Shadowburn, Soul Fire, Incinerate, Searing Pain and Conflagrate spells a 20% chance to return health equal to 20% of the damage caused.",
                        "Gives your Shadow Bolt, Shadowburn, Soul Fire, Incinerate, Searing Pain and Conflagrate spells a 30% chance to return health equal to 20% of the damage caused.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Shadow and Flame",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_shadowandflame.jpg",
                    text: [
                        [
                            "Your Shadow Bolt, ",
                            change("Shadowburn"),
                            ", and Incinerate spells gain an additional 4% of your bonus spell damage effects.",
                        ],
                        [
                            "Your Shadow Bolt, ",
                            change("Shadowburn"),
                            ", and Incinerate spells gain an additional 8% of your bonus spell damage effects.",
                        ],
                        [
                            "Your Shadow Bolt, ",
                            change("Shadowburn"),
                            ", and Incinerate spells gain an additional 12% of your bonus spell damage effects.",
                        ],
                        [
                            "Your Shadow Bolt, ",
                            change("Shadowburn"),
                            ", and Incinerate spells gain an additional 16% of your bonus spell damage effects.",
                        ],
                        [
                            "Your Shadow Bolt, ",
                            change("Shadowburn"),
                            ", and Incinerate spells gain an additional 20% of your bonus spell damage effects.",
                        ],
                    ],
                },
                null,
                null,
            ],
            [
                null,
                {
                    name: "Shadowfury",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_shadowfury.jpg",
                    text: formatUnchangedTalentTexts([
                        "Shadowfury is unleashed, causing 343 to 408 Shadow damage and stunning all enemies within 8 yds for 2 sec.",
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
