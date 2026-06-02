// @ts-ignore
const data = [
    {
        name: "Beast Mastery",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/361.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_beasttaming.jpg",
        talents: [
            [
                null,
                {
                    name: "Improved Aspect of the Hawk",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_ravenform.jpg",
                    text: formatUnchangedTalentTexts([
                        "While Aspect of the Hawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 3% for 12 sec.",
                        "While Aspect of the Hawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 6% for 12 sec.",
                        "While Aspect of the Hawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 9% for 12 sec.",
                        "While Aspect of the Hawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 12% for 12 sec.",
                        "While Aspect of the Hawk is active, all normal ranged attacks have a 10% chance of increasing ranged attack speed by 15% for 12 sec.",
                    ]),
                },
                {
                    name: "Endurance Training",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_reincarnation.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the Health of your pet by 2% and your total health by 1%.",
                        "Increases the Health of your pet by 4% and your total health by 2%.",
                        "Increases the Health of your pet by 6% and your total health by 3%.",
                        "Increases the Health of your pet by 8% and your total health by 4%.",
                        "Increases the Health of your pet by 10% and your total health by 5%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Focused Fire",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_silenthunter.jpg",
                    text: formatUnchangedTalentTexts([
                        "All damage caused by you is increased by 1% while your pet is active and the critical strike chance of your Kill Command ability is increased by 10%.",
                        "All damage caused by you is increased by 2% while your pet is active and the critical strike chance of your Kill Command ability is increased by 20%.",
                    ]),
                },
                {
                    name: "Improved Aspect of the Monkey",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_aspectofthemonkey.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the Dodge bonus of your Aspect of the Monkey by 2%.",
                        "Increases the Dodge bonus of your Aspect of the Monkey by 4%.",
                        "Increases the Dodge bonus of your Aspect of the Monkey by 6%.",
                    ]),
                },
                {
                    name: "Thick Hide",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_misc_pelt_bear_03.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the armor rating of your pets by 7% and your armor contribution from items by 4%.",
                        "Increases the armor rating of your pets by 14% and your armor contribution from items by 7%.",
                        "Increases the armor rating of your pets by 20% and your armor contribution from items by 10%.",
                    ]),
                },
                {
                    name: "Improved Revive Pet",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_beastsoothe.jpg",
                    text: formatUnchangedTalentTexts([
                        "Revive Pet's casting time is reduced by 3 sec, mana cost is reduced by 20%, and increases the health your pet returns with by an additional 15%.",
                        "Revive Pet's casting time is reduced by 6 sec, mana cost is reduced by 40%, and increases the health your pet returns with by an additional 30%.",
                    ]),
                },
            ],
            [
                {
                    name: "Pathfinding",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_mount_jungletiger.jpg",
                    text: [
                        [
                            "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 4%.",
                            createElement("span", { className: "changed" }, [
                                " Increases your speed while mounted by 4%. The mounted movement speed increase does not stack with other effects.",
                            ]),
                        ],
                        [
                            "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by 8%.",
                            createElement("span", { className: "changed" }, [
                                " Increases your speed while mounted by 8%. The mounted movement speed increase does not stack with other effects.",
                            ]),
                        ],
                    ],
                },
                {
                    name: "Bestial Swiftness",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_dash.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the outdoor movement speed of your pets by 30%.",
                    ]),
                },
                {
                    name: "Unleashed Fury",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_bullrush.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage done by your pets by 4%.",
                        "Increases the damage done by your pets by 8%.",
                        "Increases the damage done by your pets by 12%.",
                        "Increases the damage done by your pets by 16%.",
                        "Increases the damage done by your pets by 20%.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Improved Mend Pet",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_mendpet.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the mana cost of your Mend Pet spell by 10% and gives the Mend Pet spell a 25% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick.",
                        "Reduces the mana cost of your Mend Pet spell by 20% and gives the Mend Pet spell a 50% chance of cleansing 1 Curse, Disease, Magic or Poison effect from the pet each tick.",
                    ]),
                },
                {
                    name: "Ferocity",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_misc_monsterclaw_04.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical strike chance of your pet by 2%.",
                        "Increases the critical strike chance of your pet by 4%.",
                        "Increases the critical strike chance of your pet by 6%.",
                        "Increases the critical strike chance of your pet by 8%.",
                        "Increases the critical strike chance of your pet by 10%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Spirit Bond",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_demoralizingroar.jpg",
                    text: [
                        [
                            "While your pet is active, you and your pet will regenerate 1% of total health every 10 sec., ",
                            createElement("span", { className: "changed" }, [
                                "and increases healing done to you and your pet by 5%.",
                            ]),
                        ],
                        [
                            "While your pet is active, you and your pet will regenerate 2% of total health every 10 sec., ",
                            createElement("span", { className: "changed" }, [
                                "and increases healing done to you and your pet by 10%.",
                            ]),
                        ],
                    ],
                },
                {
                    name: "Intimidation",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_devour.jpg",
                    text: formatUnchangedTalentTexts([
                        "Command your pet to intimidate the target on the next successful melee attack, causing a high amount of threat and stunning the target for 3 sec.",
                    ]),
                },
                null,
                {
                    name: "Bestial Discipline",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_abolishmagic.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the Focus regeneration of your pets by 50%.",
                        "Increases the Focus regeneration of your pets by 100%.",
                    ]),
                },
            ],
            [
                {
                    name: "Animal Handler",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_animalhandler.jpg",
                    text: [
                        [
                            "Increases your pet's chance to hit by 2% ",
                            createElement("span", { className: "changed" }, [
                                "and increases your pet's attack power by 5%.",
                            ]),
                        ],
                        [
                            "Increases your pet's chance to hit by 4% ",
                            createElement("span", { className: "changed" }, [
                                "and increases your pet's attack power by 10%.",
                            ]),
                        ],
                    ],
                },
                null,
                {
                    name: "Frenzy",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_misc_monsterclaw_03.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives your pet a 20% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
                        "Gives your pet a 40% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
                        "Gives your pet a 60% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
                        "Gives your pet a 80% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
                        "Gives your pet a 100% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                null,
            ],
            [
                {
                    name: "Ferocious Inspiration",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_ferociousinspiration.jpg",
                    text: formatUnchangedTalentTexts([
                        "When your pet scores a critical hit, all party members have all damage increased by 1% for 10 sec.",
                        "When your pet scores a critical hit, all party members have all damage increased by 2% for 10 sec.",
                        "When your pet scores a critical hit, all party members have all damage increased by 3% for 10 sec.",
                    ]),
                },
                {
                    name: "Bestial Wrath",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_ferociousbite.jpg",
                    text: formatUnchangedTalentTexts([
                        "Send your pet into a rage causing 50% additional damage for 18 sec.  While enraged, the beast does not feel pity or remorse or fear and it cannot be stopped unless killed.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                {
                    name: "Catlike Reflexes",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_catlikereflexes.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your chance to dodge by 1% and your pet's chance to dodge by an additional 3%.",
                        "Increases your chance to dodge by 2% and your pet's chance to dodge by an additional 6%.",
                        "Increases your chance to dodge by 3% and your pet's chance to dodge by an additional 9%.",
                    ]),
                },
                null,
            ],
            [
                null,
                null,
                {
                    name: "Serpent's Swiftness",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_serpentswiftness.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases ranged combat attack speed by 4% and your pet's melee attack speed by 4%.",
                        "Increases ranged combat attack speed by 8% and your pet's melee attack speed by 8%.",
                        "Increases ranged combat attack speed by 12% and your pet's melee attack speed by 12%.",
                        "Increases ranged combat attack speed by 16% and your pet's melee attack speed by 16%.",
                        "Increases ranged combat attack speed by 20% and your pet's melee attack speed by 20%.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "The Beast Within",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_beastwithin.jpg",
                    text: formatUnchangedTalentTexts([
                        "When your pet is under the effects of Bestial Wrath, you also go into a rage causing 10% additional damage and reducing mana costs of all spells by 20% for 18 sec.  While enraged, you do not feel pity or remorse or fear and you cannot be stopped unless killed.",
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
        name: "Marksmanship",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/363.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg",
        talents: [
            [
                null,
                {
                    name: "Improved Concussive Shot",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_stun.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives your Concussive Shot a 4% chance to stun the target for 3 sec.",
                        "Gives your Concussive Shot a 8% chance to stun the target for 3 sec.",
                        "Gives your Concussive Shot a 12% chance to stun the target for 3 sec.",
                        "Gives your Concussive Shot a 16% chance to stun the target for 3 sec.",
                        "Gives your Concussive Shot a 20% chance to stun the target for 3 sec.",
                    ]),
                },
                {
                    name: "Lethal Shots",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_searingarrow.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your critical strike chance with ranged weapons by 1%.",
                        "Increases your critical strike chance with ranged weapons by 2%.",
                        "Increases your critical strike chance with ranged weapons by 3%.",
                        "Increases your critical strike chance with ranged weapons by 4%.",
                        "Increases your critical strike chance with ranged weapons by 5%.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Improved Hunter's Mark",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_snipershot.jpg",
                    text: formatUnchangedTalentTexts([
                        "Causes 20% of your Hunter's Mark ability's base attack power to apply to melee attack power as well.",
                        "Causes 40% of your Hunter's Mark ability's base attack power to apply to melee attack power as well.",
                        "Causes 60% of your Hunter's Mark ability's base attack power to apply to melee attack power as well.",
                        "Causes 80% of your Hunter's Mark ability's base attack power to apply to melee attack power as well.",
                        "Causes 100% of your Hunter's Mark ability's base attack power to apply to melee attack power as well.",
                    ]),
                },
                {
                    name: "Efficiency",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_wizardmark.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the Mana cost of your Shots and Stings by 2%.",
                        "Reduces the Mana cost of your Shots and Stings by 4%.",
                        "Reduces the Mana cost of your Shots and Stings by 6%.",
                        "Reduces the Mana cost of your Shots and Stings by 8%.",
                        "Reduces the Mana cost of your Shots and Stings by 10%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Go for the Throat",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_goforthethroat.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your ranged critical hits cause your pet to generate 25 Focus.",
                        "Your ranged critical hits cause your pet to generate 50 Focus.",
                    ]),
                },
                {
                    name: "Improved Arcane Shot",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_impalingbolt.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the cooldown of your Arcane Shot by 0.2 sec.",
                        "Reduces the cooldown of your Arcane Shot by 0.4 sec.",
                        "Reduces the cooldown of your Arcane Shot by 0.6 sec.",
                        "Reduces the cooldown of your Arcane Shot by 0.8 sec.",
                        "Reduces the cooldown of your Arcane Shot by 1 sec.",
                    ]),
                },
                {
                    name: "Aimed Shot",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_spear_07.jpg",
                    text: formatUnchangedTalentTexts([
                        "An aimed shot that increases ranged damage by 70 and reduces healing done to that target by 50%.  Lasts 10 sec.",
                    ]),
                },
                {
                    name: "Rapid Killing",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_rapidkilling.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the cooldown of your Rapid Fire ability by 1 min.  In addition, after killing an opponent that yields experience or honor, your next Aimed Shot, Arcane Shot or Auto Shot causes 10% additional damage.  Lasts 20 sec.",
                        "Reduces the cooldown of your Rapid Fire ability by 2 min.  In addition, after killing an opponent that yields experience or honor, your next Aimed Shot, Arcane Shot or Auto Shot causes 20% additional damage.  Lasts 20 sec.",
                    ]),
                },
            ],
            [
                null,
                {
                    name: "Improved Stings",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_quickshot.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage done by your Serpent Sting and Wyvern Sting by 6% and the mana drained by your Viper Sting by 6%.  In addition, reduces the chance your Stings will be dispelled by 6%.",
                        "Increases the damage done by your Serpent Sting and Wyvern Sting by 12% and the mana drained by your Viper Sting by 12%.  In addition, reduces the chance your Stings will be dispelled by 12%.",
                        "Increases the damage done by your Serpent Sting and Wyvern Sting by 18% and the mana drained by your Viper Sting by 18%.  In addition, reduces the chance your Stings will be dispelled by 18%.",
                        "Increases the damage done by your Serpent Sting and Wyvern Sting by 24% and the mana drained by your Viper Sting by 24%.  In addition, reduces the chance your Stings will be dispelled by 24%.",
                        "Increases the damage done by your Serpent Sting and Wyvern Sting by 30% and the mana drained by your Viper Sting by 30%.  In addition, reduces the chance your Stings will be dispelled by 30%.",
                    ]),
                },
                {
                    name: "Mortal Shots",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_piercedamage.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your ranged weapon critical strike damage bonus by 6%.",
                        "Increases your ranged weapon critical strike damage bonus by 12%.",
                        "Increases your ranged weapon critical strike damage bonus by 18%.",
                        "Increases your ranged weapon critical strike damage bonus by 24%.",
                        "Increases your ranged weapon critical strike damage bonus by 30%.",
                    ]),
                    req: "up",
                    reqDist: 1,
                },
                null,
            ],
            [
                {
                    name: "Concussive Barrage",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_arcane_starfire.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your successful Auto Shot attacks have a 2% chance to Daze the target for 4 sec.",
                        "Your successful Auto Shot attacks have a 4% chance to Daze the target for 4 sec.",
                        "Your successful Auto Shot attacks have a 6% chance to Daze the target for 4 sec.",
                    ]),
                },
                {
                    name: "Scatter Shot",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_golemstormbolt.jpg",
                    text: formatUnchangedTalentTexts([
                        "A short-range shot that deals 50% weapon damage and disorients the target for 4 sec.  Any damage caused will remove the effect.  Turns off your attack when used.",
                    ]),
                },
                {
                    name: "Barrage",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_upgrademoonglaive.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage done by your Multi-Shot and Volley spells by 4%.",
                        "Increases the damage done by your Multi-Shot and Volley spells by 8%.",
                        "Increases the damage done by your Multi-Shot and Volley spells by 12%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Combat Experience",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_combatexperience.jpg",
                    text: [
                        [
                            "Increases your total ",
                            createElement("span", { className: "changed" }, [
                                "Agility and Intellect by 2%.",
                            ]),
                        ],
                        [
                            "Increases your total ",
                            createElement("span", { className: "changed" }, [
                                "Agility and Intellect by 4%.",
                            ]),
                        ],
                    ],
                },
                null,
                null,
                {
                    name: "Ranged Weapon Specialization",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_weapon_rifle_06.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage you deal with ranged weapons by 1%.",
                        "Increases the damage you deal with ranged weapons by 2%.",
                        "Increases the damage you deal with ranged weapons by 3%.",
                        "Increases the damage you deal with ranged weapons by 4%.",
                        "Increases the damage you deal with ranged weapons by 5%.",
                    ]),
                },
            ],
            [
                {
                    name: "Careful Aim",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_zenarchery.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your ranged attack power by an amount equal to 15% of your total Intellect.",
                        "Increases your ranged attack power by an amount equal to 30% of your total Intellect.",
                        "Increases your ranged attack power by an amount equal to 45% of your total Intellect.",
                    ]),
                },
                {
                    name: "Trueshot Aura",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_trueshot.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the attack power of party members within 45 yards by 50.  Lasts 0 sec.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                {
                    name: "Improved Barrage",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_upgrademoonglaive.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical strike chance of your Multi-Shot ability by 4% and gives you a 33% chance to avoid interruption caused by damage while channeling Volley.",
                        "Increases the critical strike chance of your Multi-Shot ability by 8% and gives you a 66% chance to avoid interruption caused by damage while channeling Volley.",
                        "Increases the critical strike chance of your Multi-Shot ability by 12% and gives you a 100% chance to avoid interruption caused by damage while channeling Volley.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                null,
            ],
            [
                null,
                {
                    name: "Master Marksman",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_mastermarksman.jpg",
                    text: [
                        [
                            createElement("span", { className: "changed" }, [
                                "Increases your critical strike chance by 1%, and reduces the Mana cost of your Steady Shot and Aimed Shot by 5%.",
                            ]),
                        ],
                        [
                            createElement("span", { className: "changed" }, [
                                "Increases your critical strike chance by 2%, and reduces the Mana cost of your Steady Shot and Aimed Shot by 10%.",
                            ]),
                        ],
                        [
                            createElement("span", { className: "changed" }, [
                                "Increases your critical strike chance by 3%, and reduces the Mana cost of your Steady Shot and Aimed Shot by 15%.",
                            ]),
                        ],
                        [
                            createElement("span", { className: "changed" }, [
                                "Increases your critical strike chance by 4%, and reduces the Mana cost of your Steady Shot and Aimed Shot by 20%.",
                            ]),
                        ],
                        [
                            createElement("span", { className: "changed" }, [
                                "Increases your critical strike chance by 5%, and reduces the Mana cost of your Steady Shot and Aimed Shot by 25%.",
                            ]),
                        ],
                    ],
                },
                null,
                null,
            ],
            [
                null,
                {
                    name: "Silencing Shot",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_theblackarrow.jpg",
                    text: formatUnchangedTalentTexts([
                        "A shot that deals 50% weapon damage and Silences the target for 3 sec.",
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
        name: "Survival",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/362.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_swiftstrike.jpg",
        talents: [
            [
                {
                    name: "Monster Slaying",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_misc_head_dragon_black.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases all damage caused against Beasts, Giants and Dragonkin targets by 1% and increases critical damage caused against Beasts, Giants and Dragonkin targets by an additional 1%.",
                        "Increases all damage caused against Beasts, Giants and Dragonkin targets by 2% and increases critical damage caused against Beasts, Giants and Dragonkin targets by an additional 2%.",
                        "Increases all damage caused against Beasts, Giants and Dragonkin targets by 3% and increases critical damage caused against Beasts, Giants and Dragonkin targets by an additional 3%.",
                    ]),
                },
                {
                    name: "Humanoid Slaying",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_prayerofhealing.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases all damage caused against Humanoid targets by 1% and increases critical damage caused against Humanoid targets by an additional 1%.",
                        "Increases all damage caused against Humanoid targets by 2% and increases critical damage caused against Humanoid targets by an additional 2%.",
                        "Increases all damage caused against Humanoid targets by 3% and increases critical damage caused against Humanoid targets by an additional 3%.",
                    ]),
                },
                {
                    name: "Hawk Eye",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_townwatch.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the range of your ranged weapons by 2 yards.",
                        "Increases the range of your ranged weapons by 4 yards.",
                        "Increases the range of your ranged weapons by 6 yards.",
                    ]),
                },
                {
                    name: "Savage Strikes",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_racial_bloodrage.jpg",
                    text: [
                        [
                            "Increases the critical strike chance of Raptor Strike, Mongoose Bite ",
                            createElement("span", { className: "changed" }, [
                                "and Counterattack",
                            ]),
                            " by 10%.",
                        ],
                        [
                            "Increases the critical strike chance of Raptor Strike, Mongoose Bite ",
                            createElement("span", { className: "changed" }, [
                                "and Counterattack",
                            ]),
                            " by 20%.",
                        ],
                    ],
                },
            ],
            [
                {
                    name: "Entrapment",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_stranglevines.jpg",
                    text: [
                        [
                            createElement("span", { className: "changed" }, ["When"]),
                            " your Immolation Trap, Frost Trap, Explosive Trap, and Snake Trap ",
                            createElement("span", { className: "changed" }, [
                                " are triggered, you entrap all afflicted targets, preventing them from moving for 2 sec.",
                            ]),
                        ],
                        [
                            createElement("span", { className: "changed" }, ["When"]),
                            " your Immolation Trap, Frost Trap, Explosive Trap, and Snake Trap ",
                            createElement("span", { className: "changed" }, [
                                " are triggered, you entrap all afflicted targets, preventing them from moving for 4 sec.",
                            ]),
                        ],
                        [
                            createElement("span", { className: "changed" }, ["When"]),
                            " your Immolation Trap, Frost Trap, Explosive Trap, and Snake Trap ",
                            createElement("span", { className: "changed" }, [
                                " are triggered, you entrap all afflicted targets, preventing them from moving for 6 sec.",
                            ]),
                        ],
                    ],
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
                {
                    name: "Improved Wing Clip",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_trip.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives your Wing Clip ability a 7% chance to immobilize the target for 5 sec.",
                        "Gives your Wing Clip ability a 14% chance to immobilize the target for 5 sec.",
                        "Gives your Wing Clip ability a 20% chance to immobilize the target for 5 sec.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Clever Traps",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_timestop.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the duration of Freezing and Frost Trap effects by 15%, the damage of Immolation and Explosive Trap effects by 15%, and the number of snakes summoned from Snake Traps by 15%.",
                        "Increases the duration of Freezing and Frost Trap effects by 30%, the damage of Immolation and Explosive Trap effects by 30%, and the number of snakes summoned from Snake Traps by 30%.",
                    ]),
                },
                {
                    name: "Survivalist",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_twilight.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases total health by 2%.",
                        "Increases total health by 4%.",
                        "Increases total health by 6%.",
                        "Increases total health by 8%.",
                        "Increases total health by 10%.",
                    ]),
                },
                {
                    name: "Deterrence",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_whirlwind.jpg",
                    text: formatUnchangedTalentTexts([
                        "When activated, increases your Dodge and Parry chance by 25% for 10 sec.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Trap Mastery",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_ensnare.jpg",
                    text: formatUnchangedTalentTexts([
                        "Decreases the chance enemies will resist trap effects by 5%.",
                        "Decreases the chance enemies will resist trap effects by 10%.",
                    ]),
                },
                {
                    name: "Surefooted",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_kick.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases hit chance by 1% and increases the chance movement impairing effects will be resisted by an additional 5%.",
                        "Increases hit chance by 2% and increases the chance movement impairing effects will be resisted by an additional 10%.",
                        "Increases hit chance by 3% and increases the chance movement impairing effects will be resisted by an additional 15%.",
                    ]),
                },
                null,
                {
                    name: "Improved Feign Death",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_feigndeath.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the chance your Feign Death ability will be resisted by 2%.",
                        "Reduces the chance your Feign Death ability will be resisted by 4%.",
                    ]),
                },
            ],
            [
                {
                    name: "Survival Instincts",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_survivalinstincts.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces all damage taken by 2% and increases attack power by 2%.",
                        "Reduces all damage taken by 4% and increases attack power by 4%.",
                    ]),
                },
                {
                    name: "Killer Instinct",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_blessingofstamina.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your critical strike chance with all attacks by 1%.",
                        "Increases your critical strike chance with all attacks by 2%.",
                        "Increases your critical strike chance with all attacks by 3%.",
                    ]),
                },
                {
                    name: "Counterattack",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_challange.jpg",
                    text: formatUnchangedTalentTexts([
                        "A strike that becomes active after parrying an opponent's attack.  This attack deals 40 damage and immobilizes the target for 5 sec.  Counterattack cannot be blocked, dodged, or parried.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                null,
            ],
            [
                {
                    name: "Resourcefulness",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_resourcefulness.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the mana cost of all traps and melee abilities by 20% and reduces the cooldown of all traps by 2 sec.",
                        "Reduces the mana cost of all traps and melee abilities by 40% and reduces the cooldown of all traps by 4 sec.",
                        "Reduces the mana cost of all traps and melee abilities by 60% and reduces the cooldown of all traps by 6 sec.",
                    ]),
                },
                null,
                {
                    name: "Lightning Reflexes",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_invisibilty.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your Agility by 3%.",
                        "Increases your Agility by 6%.",
                        "Increases your Agility by 9%.",
                        "Increases your Agility by 12%.",
                        "Increases your Agility by 15%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Thrill of the Hunt",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_thrillofthehunt.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives you a 33% chance to regain 40% of the mana cost of any shot when it critically hits.",
                        "Gives you a 66% chance to regain 40% of the mana cost of any shot when it critically hits.",
                        "Gives you a 100% chance to regain 40% of the mana cost of any shot when it critically hits.",
                    ]),
                },
                {
                    name: "Wyvern Sting",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_spear_02.jpg",
                    text: formatUnchangedTalentTexts([
                        "A stinging shot that puts the target to sleep for 12 sec.  Any damage will cancel the effect.  When the target wakes up, the Sting causes 300 Nature damage over 12 sec.  Only one Sting per Hunter can be active on the target at a time.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                {
                    name: "Expose Weakness",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_findweakness.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your ranged criticals have a 33% chance to apply an Expose Weakness effect to the target. Expose Weakness increases the attack power of all attackers against that target by 25% of your Agility for 7 sec.",
                        "Your ranged criticals have a 66% chance to apply an Expose Weakness effect to the target. Expose Weakness increases the attack power of all attackers against that target by 25% of your Agility for 7 sec.",
                        "Your ranged criticals have a 100% chance to apply an Expose Weakness effect to the target. Expose Weakness increases the attack power of all attackers against that target by 25% of your Agility for 7 sec.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Master Tactician",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_mastertactitian.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 2% for 8 sec.",
                        "Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 4% for 8 sec.",
                        "Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 6% for 8 sec.",
                        "Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 8% for 8 sec.",
                        "Your successful ranged attacks have a 6% chance to increase your critical strike chance with all attacks by 10% for 8 sec.",
                    ]),
                },
                null,
                null,
            ],
            [
                null,
                {
                    name: "Readiness",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_readiness.jpg",
                    text: formatUnchangedTalentTexts([
                        "When activated, this ability immediately finishes the cooldown on your other Hunter abilities.",
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
// @ts-ignore
const otherchanges = [];
