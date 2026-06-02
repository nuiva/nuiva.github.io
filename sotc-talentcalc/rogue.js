// @ts-ignore
const data = [
    {
        name: "Assassination",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/182.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_eviscerate.jpg",
        talents: [
            [
                {
                    name: "Improved Eviscerate",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_eviscerate.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage done by your Eviscerate ability by 5%.",
                        "Increases the damage done by your Eviscerate ability by 10%.",
                        "Increases the damage done by your Eviscerate ability by 15%.",
                    ]),
                },
                {
                    name: "Remorseless Attacks",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_fiegndead.jpg",
                    text: formatUnchangedTalentTexts([
                        "After killing an opponent that yields experience or honor, gives you a 20% increased critical strike chance on your next Sinister Strike, Hemorrhage, Backstab, Mutilate, Ambush, or Ghostly Strike.  Lasts 20 sec.",
                        "After killing an opponent that yields experience or honor, gives you a 40% increased critical strike chance on your next Sinister Strike, Hemorrhage, Backstab, Mutilate, Ambush, or Ghostly Strike.  Lasts 20 sec.",
                    ]),
                },
                {
                    name: "Malice",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_racial_bloodrage.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your critical strike chance by 1%.",
                        "Increases your critical strike chance by 2%.",
                        "Increases your critical strike chance by 3%.",
                        "Increases your critical strike chance by 4%.",
                        "Increases your critical strike chance by 5%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Ruthlessness",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_disembowel.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives your melee finishing moves a 20% chance to add a combo point to your target.",
                        "Gives your melee finishing moves a 40% chance to add a combo point to your target.",
                        "Gives your melee finishing moves a 60% chance to add a combo point to your target.",
                    ]),
                },
                {
                    name: "Murder",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_deathscream.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases all damage caused against Humanoid, Giant, Beast and Dragonkin targets by 1%.",
                        "Increases all damage caused against Humanoid, Giant, Beast and Dragonkin targets by 2%.",
                    ]),
                },
                null,
                {
                    name: "Puncturing Wounds",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_backstab.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical strike chance of your Backstab ability by 10%, and the critical strike chance of your Mutilate ability by 5%.",
                        "Increases the critical strike chance of your Backstab ability by 20%, and the critical strike chance of your Mutilate ability by 10%.",
                        "Increases the critical strike chance of your Backstab ability by 30%, and the critical strike chance of your Mutilate ability by 15%.",
                    ]),
                },
            ],
            [
                {
                    name: "Relentless Strikes",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_decisivestrike.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your finishing moves have a 20% chance per combo point to restore 25 energy.",
                    ]),
                },
                {
                    name: "Improved Expose Armor",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_riposte.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the armor reduced by your Expose Armor ability by 25%.",
                        "Increases the armor reduced by your Expose Armor ability by 50%.",
                    ]),
                },
                {
                    name: "Lethality",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_criticalstrike.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, Mutilate, Shiv, and Hemorrhage abilities by 6%.",
                        "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, Mutilate, Shiv, and Hemorrhage abilities by 12%.",
                        "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, Mutilate, Shiv, and Hemorrhage abilities by 18%.",
                        "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, Mutilate, Shiv, and Hemorrhage abilities by 24%.",
                        "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, Mutilate, Shiv, and Hemorrhage abilities by 30%.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                null,
            ],
            [
                null,
                {
                    name: "Vile Poisons",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_feigndeath.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage dealt by your poisons and Envenom ability by 4% and gives your poisons an additional 8% chance to resist dispel effects.",
                        "Increases the damage dealt by your poisons and Envenom ability by 8% and gives your poisons an additional 16% chance to resist dispel effects.",
                        "Increases the damage dealt by your poisons and Envenom ability by 12% and gives your poisons an additional 24% chance to resist dispel effects.",
                        "Increases the damage dealt by your poisons and Envenom ability by 16% and gives your poisons an additional 32% chance to resist dispel effects.",
                        "Increases the damage dealt by your poisons and Envenom ability by 20% and gives your poisons an additional 40% chance to resist dispel effects.",
                    ]),
                },
                {
                    name: "Improved Poisons",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_poisons.jpg",
                    text: [
                        [
                            "Increases the chance to apply poisons to your target by ",
                            createElement("span", { className: "changed" }, ["4%."]),
                        ],
                        [
                            "Increases the chance to apply poisons to your target by ",
                            createElement("span", { className: "changed" }, ["8%."]),
                        ],
                        [
                            "Increases the chance to apply poisons to your target by ",
                            createElement("span", { className: "changed" }, ["12%."]),
                        ],
                        [
                            "Increases the chance to apply poisons to your target by ",
                            createElement("span", { className: "changed" }, ["16%."]),
                        ],
                        [
                            "Increases the chance to apply poisons to your target by ",
                            createElement("span", { className: "changed" }, ["20%."]),
                        ],
                    ],
                },
                null,
            ],
            [
                {
                    name: "Fleet Footed",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_fleetfooted.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your chance to resist movement impairing effects by 5% and increases your movement speed by 8%.  This does not stack with other movement speed increasing effects.",
                        "Increases your chance to resist movement impairing effects by 10% and increases your movement speed by 15%.  This does not stack with other movement speed increasing effects.",
                    ]),
                },
                {
                    name: "Cold Blood",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_ice_lament.jpg",
                    text: formatUnchangedTalentTexts([
                        "When activated, increases the critical strike chance of your next offensive ability by 100%.",
                    ]),
                },
                {
                    name: "Improved Kidney Shot",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_kidneyshot.jpg",
                    text: formatUnchangedTalentTexts([
                        "While affected by your Kidney Shot ability, the target receives an additional 3% damage from all sources.",
                        "While affected by your Kidney Shot ability, the target receives an additional 6% damage from all sources.",
                        "While affected by your Kidney Shot ability, the target receives an additional 9% damage from all sources.",
                    ]),
                },
                {
                    name: "Quick Recovery",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_quickrecovery.jpg",
                    text: formatUnchangedTalentTexts([
                        "All healing effects on you are increased by 10%.  In addition, your finishing moves cost 40% less Energy when they fail to hit.",
                        "All healing effects on you are increased by 20%.  In addition, your finishing moves cost 80% less Energy when they fail to hit.",
                    ]),
                },
            ],
            [
                null,
                {
                    name: "Seal Fate",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_chilltouch.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your critical strikes from abilities that add combo points have a 20% chance to add an additional combo point.",
                        "Your critical strikes from abilities that add combo points have a 40% chance to add an additional combo point.",
                        "Your critical strikes from abilities that add combo points have a 60% chance to add an additional combo point.",
                        "Your critical strikes from abilities that add combo points have a 80% chance to add an additional combo point.",
                        "Your critical strikes from abilities that add combo points have a 100% chance to add an additional combo point.",
                    ]),
                    req: "up",
                    reqDist: 1,
                },
                {
                    name: "Master Poisoner",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_creature_poison_06.jpg",
                    text: [
                        [
                            createElement("span", { className: "changed" }, [
                                "Increases the critical hit chance of all attacks made against any target you have poisoned by 1%,",
                            ]),
                            " reduces the chance your poisons will be resisted by 5%, increases your chance to resist Poison effects by an additional 15%, ",
                            createElement("span", { className: "changed" }, [
                                "and gives Envenom a 50% chance to not consume Deadly Poison.",
                            ]),
                        ],
                        [
                            createElement("span", { className: "changed" }, [
                                "Increases the critical hit chance of all attacks made against any target you have poisoned by 2%,",
                            ]),
                            " reduces the chance your poisons will be resisted by 10%, increases your chance to resist Poison effects by an additional 30%, ",
                            createElement("span", { className: "changed" }, [
                                "and gives Envenom a 100% chance to not consume Deadly Poison.",
                            ]),
                        ],
                    ],
                },
                null,
            ],
            [
                null,
                {
                    name: "Vigor",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_earthbindtotem.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your maximum Energy by 10.",
                    ]),
                },
                {
                    name: "Deadened Nerves",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_deadenednerves.jpg",
                    text: formatUnchangedTalentTexts([
                        "Decreases all physical damage taken by 1%.",
                        "Decreases all physical damage taken by 2%.",
                        "Decreases all physical damage taken by 3%.",
                        "Decreases all physical damage taken by 4%.",
                        "Decreases all physical damage taken by 5%.",
                    ]),
                },
                null,
            ],
            [
                null,
                null,
                {
                    name: "Find Weakness",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_findweakness.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your finishing moves increase the damage of all your offensive abilities by 2% for 10 sec.",
                        "Your finishing moves increase the damage of all your offensive abilities by 4% for 10 sec.",
                        "Your finishing moves increase the damage of all your offensive abilities by 6% for 10 sec.",
                        "Your finishing moves increase the damage of all your offensive abilities by 8% for 10 sec.",
                        "Your finishing moves increase the damage of all your offensive abilities by 10% for 10 sec.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Mutilate",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_shadowstrikes.jpg",
                    text: formatUnchangedTalentTexts([
                        "Instantly attacks with both weapons for an additional 44 with each weapon.  Damage is increased by 50% against Poisoned targets.  Must be behind the target.  Awards 2 combo points.",
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
        name: "Combat",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/181.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_backstab.jpg",
        talents: [
            [
                {
                    name: "Improved Gouge",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_gouge.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the effect duration of your Gouge ability by 0.5 sec.",
                        "Increases the effect duration of your Gouge ability by 1 sec.",
                        "Increases the effect duration of your Gouge ability by 1.5 sec.",
                    ]),
                },
                {
                    name: "Improved Sinister Strike",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_ritualofsacrifice.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the Energy cost of your Sinister Strike ability by 3.",
                        "Reduces the Energy cost of your Sinister Strike ability by 5.",
                    ]),
                },
                {
                    name: "Lightning Reflexes",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_invisibilty.jpg",
                    text: [
                        [
                            "Increases your Dodge chance by 1% and ",
                            createElement("span", { className: "changed" }, [
                                "increases your melee haste by 1%.",
                            ]),
                        ],
                        [
                            "Increases your Dodge chance by 2% and ",
                            createElement("span", { className: "changed" }, [
                                "increases your melee haste by 2%.",
                            ]),
                        ],
                        [
                            "Increases your Dodge chance by 3% and ",
                            createElement("span", { className: "changed" }, [
                                "increases your melee haste by 3%.",
                            ]),
                        ],
                        [
                            "Increases your Dodge chance by 4% and ",
                            createElement("span", { className: "changed" }, [
                                "increases your melee haste by 4%.",
                            ]),
                        ],
                        [
                            "Increases your Dodge chance by 5% and ",
                            createElement("span", { className: "changed" }, [
                                "increases your melee haste by 5%.",
                            ]),
                        ],
                    ],
                },
                null,
            ],
            [
                {
                    name: "Improved Slice and Dice",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_slicedice.jpg",
                    text: [
                        [
                            "Increases the duration of your Slice and Dice ability by ",
                            createElement("span", { className: "changed" }, ["17%."]),
                        ],
                        [
                            "Increases the duration of your Slice and Dice ability by ",
                            createElement("span", { className: "changed" }, ["33%."]),
                        ],
                        [
                            "Increases the duration of your Slice and Dice ability by ",
                            createElement("span", { className: "changed" }, ["50%."]),
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
                    name: "Precision",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_marksmanship.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your chance to hit with weapons by 1%.",
                        "Increases your chance to hit with weapons by 2%.",
                        "Increases your chance to hit with weapons by 3%.",
                        "Increases your chance to hit with weapons by 4%.",
                        "Increases your chance to hit with weapons by 5%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Endurance",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_shadowward.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the cooldown of your Sprint and Evasion abilities by 45 sec.",
                        "Reduces the cooldown of your Sprint and Evasion abilities by 1.5 min.",
                    ]),
                },
                {
                    name: "Riposte",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_challange.jpg",
                    text: formatUnchangedTalentTexts([
                        "A strike that becomes active after parrying an opponent's attack.  This attack deals 150% weapon damage and disarms the target for 6 sec.",
                    ]),
                    req: "up",
                    reqDist: 1,
                },
                null,
                {
                    name: "Improved Sprint",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_sprint.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives a 50% chance to remove all Movement Impairing effects when you activate your Sprint ability.",
                        "Gives a 100% chance to remove all Movement Impairing effects when you activate your Sprint ability.",
                    ]),
                },
            ],
            [
                {
                    name: "Improved Kick",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_kick.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives your Kick ability a 50% chance to silence the target for 2 sec.",
                        "Gives your Kick ability a 100% chance to silence the target for 2 sec.",
                    ]),
                },
                {
                    name: "Dagger Specialization",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_weapon_shortblade_05.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your chance to get a critical strike with Daggers by 1%.",
                        "Increases your chance to get a critical strike with Daggers by 2%.",
                        "Increases your chance to get a critical strike with Daggers by 3%.",
                        "Increases your chance to get a critical strike with Daggers by 4%.",
                        "Increases your chance to get a critical strike with Daggers by 5%.",
                    ]),
                },
                {
                    name: "Dual Wield Specialization",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_dualwield.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage done by your offhand weapon by 10%.",
                        "Increases the damage done by your offhand weapon by 20%.",
                        "Increases the damage done by your offhand weapon by 30%.",
                        "Increases the damage done by your offhand weapon by 40%.",
                        "Increases the damage done by your offhand weapon by 50%.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                null,
            ],
            [
                {
                    name: "Mace Specialization",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_mace_01.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage dealt by your critical strikes with maces by 1%, and gives you a 1% chance to stun your target for 3 sec with a mace.",
                        "Increases the damage dealt by your critical strikes with maces by 2%, and gives you a 2% chance to stun your target for 3 sec with a mace.",
                        "Increases the damage dealt by your critical strikes with maces by 3%, and gives you a 3% chance to stun your target for 3 sec with a mace.",
                        "Increases the damage dealt by your critical strikes with maces by 4%, and gives you a 4% chance to stun your target for 3 sec with a mace.",
                        "Increases the damage dealt by your critical strikes with maces by 5%, and gives you a 6% chance to stun your target for 3 sec with a mace.",
                    ]),
                },
                {
                    name: "Blade Flurry",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_punishingblow.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your attack speed by 20%.  In addition, attacks strike an additional nearby opponent.  Lasts 15 sec.",
                    ]),
                },
                {
                    name: "Sword Specialization",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_sword_27.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives you a 1% chance to get an extra attack on the same target after hitting your target with your Sword.",
                        "Gives you a 2% chance to get an extra attack on the same target after hitting your target with your Sword.",
                        "Gives you a 3% chance to get an extra attack on the same target after hitting your target with your Sword.",
                        "Gives you a 4% chance to get an extra attack on the same target after hitting your target with your Sword.",
                        "Gives you a 5% chance to get an extra attack on the same target after hitting your target with your Sword.",
                    ]),
                },
                {
                    name: "Fist Weapon Specialization",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_gauntlets_04.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your chance to get a critical strike with Fist Weapons by 1%.",
                        "Increases your chance to get a critical strike with Fist Weapons by 2%.",
                        "Increases your chance to get a critical strike with Fist Weapons by 3%.",
                        "Increases your chance to get a critical strike with Fist Weapons by 4%.",
                        "Increases your chance to get a critical strike with Fist Weapons by 5%.",
                    ]),
                },
            ],
            [
                {
                    name: "Blade Twisting",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_bladetwisting.jpg",
                    text: [
                        [
                            createElement("span", { className: "changed" }, [
                                "Increases the damage dealt by Sinister Strike and Backstab by 5%,",
                            ]),
                            " and gives your Sinister Strike, Backstab, Gouge and Shiv abilities a 10% chance to Daze the target for 8 sec.",
                        ],
                        [
                            createElement("span", { className: "changed" }, [
                                "Increases the damage dealt by Sinister Strike and Backstab by 10%,",
                            ]),
                            " and gives your Sinister Strike, Backstab, Gouge and Shiv abilities a 20% chance to Daze the target for 8 sec.",
                        ],
                    ],
                },
                {
                    name: "Weapon Expertise",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_blessingofstrength.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your expertise by 5.",
                        "Increases your expertise by 10.",
                    ]),
                    req: "up",
                    reqDist: 1,
                },
                {
                    name: "Aggression",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_racial_avatar.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 2%.",
                        "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 4%.",
                        "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by 6%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Vitality",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_revenge.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your total Stamina by 2% and your total Agility by 1%.",
                        "Increases your total Stamina by 4% and your total Agility by 2%.",
                    ]),
                },
                {
                    name: "Adrenaline Rush",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_shadowworddominate.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your Energy regeneration rate by 100% for 15 sec.",
                    ]),
                },
                {
                    name: "Nerves of Steel",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_nervesofsteel.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your chance to resist Stun and Fear effects by an additional 5%.",
                        "Increases your chance to resist Stun and Fear effects by an additional 10%.",
                    ]),
                },
                null,
            ],
            [
                null,
                null,
                {
                    name: "Combat Potency",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_weapon_shortblade_38.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives your successful off-hand melee attacks a 20% chance to generate 3 Energy.",
                        "Gives your successful off-hand melee attacks a 20% chance to generate 6 Energy.",
                        "Gives your successful off-hand melee attacks a 20% chance to generate 9 Energy.",
                        "Gives your successful off-hand melee attacks a 20% chance to generate 12 Energy.",
                        "Gives your successful off-hand melee attacks a 20% chance to generate 15 Energy.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Surprise Attacks",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_surpriseattack.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your finishing moves can no longer be dodged, and the damage dealt by your Sinister Strike, Backstab, Shiv and Gouge abilities is increased by 10%.",
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
        name: "Subtlety",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/183.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_stealth.jpg",
        talents: [
            [
                null,
                {
                    name: "Master of Deception",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_charm.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the chance enemies have to detect you while in Stealth mode.",
                        "Reduces the chance enemies have to detect you while in Stealth mode.  More effective than Master of Deception (Rank 1).",
                        "Reduces the chance enemies have to detect you while in Stealth mode.  More effective than Master of Deception (Rank 2).",
                        "Reduces the chance enemies have to detect you while in Stealth mode.  More effective than Master of Deception (Rank 3).",
                        "Reduces the chance enemies have to detect you while in Stealth mode.  More effective than Master of Deception (Rank 4).",
                    ]),
                },
                {
                    name: "Opportunity",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_warrior_warcry.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage dealt when striking from behind with your Backstab, Mutilate, Garrote and Ambush abilities by 4%.",
                        "Increases the damage dealt when striking from behind with your Backstab, Mutilate, Garrote and Ambush abilities by 8%.",
                        "Increases the damage dealt when striking from behind with your Backstab, Mutilate, Garrote and Ambush abilities by 12%.",
                        "Increases the damage dealt when striking from behind with your Backstab, Mutilate, Garrote and Ambush abilities by 16%.",
                        "Increases the damage dealt when striking from behind with your Backstab, Mutilate, Garrote and Ambush abilities by 20%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Sleight of Hand",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_feint.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the chance you are critically hit by melee and ranged attacks by 1% and increases the threat reduction of your Feint ability by 10%.",
                        "Reduces the chance you are critically hit by melee and ranged attacks by 2% and increases the threat reduction of your Feint ability by 20%.",
                    ]),
                },
                {
                    name: "Dirty Tricks",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_sap.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the range of your Blind and Sap abilities by 2 yards and reduces the energy cost of your Blind and Sap abilities by 25%.",
                        "Increases the range of your Blind and Sap abilities by 5 yards and reduces the energy cost of your Blind and Sap abilities by 50%.",
                    ]),
                },
                {
                    name: "Camouflage",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_stealth.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your speed while stealthed by 3% and reduces the cooldown of your Stealth ability by 1 sec.",
                        "Increases your speed while stealthed by 6% and reduces the cooldown of your Stealth ability by 2 sec.",
                        "Increases your speed while stealthed by 9% and reduces the cooldown of your Stealth ability by 3 sec.",
                        "Increases your speed while stealthed by 12% and reduces the cooldown of your Stealth ability by 4 sec.",
                        "Increases your speed while stealthed by 15% and reduces the cooldown of your Stealth ability by 5 sec.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Initiative",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_fumble.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives you a 25% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
                        "Gives you a 50% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
                        "Gives you a 75% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
                    ]),
                },
                {
                    name: "Ghostly Strike",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_curse.jpg",
                    text: [
                        [
                            "A strike that deals 125% weapon damage ",
                            change("(180% if a dagger is equipped)"),
                            " and increases your chance to dodge by 15% for 7 sec.  Awards 1 combo point;.",
                        ],
                    ],
                },
                {
                    name: "Improved Ambush",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_ambush.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical strike chance of your Ambush ability by 15%.",
                        "Increases the critical strike chance of your Ambush ability by 30%.",
                        "Increases the critical strike chance of your Ambush ability by 45%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Setup",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_mirrorimage.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives you a 15% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.",
                        "Gives you a 30% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.",
                        "Gives you a 45% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.",
                    ]),
                },
                {
                    name: "Elusiveness",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_magic_lesserinvisibilty.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the cooldown of your Vanish and Blind abilities by 45 sec.",
                        "Reduces the cooldown of your Vanish and Blind abilities by 90 sec.",
                    ]),
                },
                null, // Move serrated blades one right because I cba writing corner arrows
                {
                    name: "Serrated Blades",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_sword_17.jpg",
                    text: formatUnchangedTalentTexts([
                        "Causes your attacks to ignore 2.67 of your target's Armor and increases the damage dealt by your Rupture ability by 10%.  The amount of Armor reduced increases with your level.",
                        "Causes your attacks to ignore 5.34 of your target's Armor and increases the damage dealt by your Rupture ability by 20%.  The amount of Armor reduced increases with your level.",
                        "Causes your attacks to ignore 8 of your target's Armor and increases the damage dealt by your Rupture ability by 30%.  The amount of Armor reduced increases with your level.",
                    ]),
                },
            ],
            [
                {
                    name: "Heightened Senses",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_ambush.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by 2%.",
                        "Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by 4%.  More effective than Heightened Senses (Rank 1).",
                    ]),
                },
                {
                    name: "Preparation",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_antishadow.jpg",
                    text: formatUnchangedTalentTexts([
                        "When activated, this ability immediately finishes the cooldown on your Evasion, Sprint, Vanish, Cold Blood, Shadowstep and Premeditation abilities.",
                    ]),
                },
                {
                    name: "Dirty Deeds",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_summonsuccubus.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the Energy cost of your Cheap Shot and Garrote abilities by 10.  Additionally, your special abilities cause 10% more damage against targets below 35% health.",
                        "Reduces the Energy cost of your Cheap Shot and Garrote abilities by 20.  Additionally, your special abilities cause 20% more damage against targets below 35% health.",
                    ]),
                },
                {
                    name: "Hemorrhage",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_lifedrain.jpg",
                    text: formatUnchangedTalentTexts([
                        "An instant strike that deals 110% weapon damage and causes the target to hemorrhage, increasing any Physical damage dealt to the target by up to 13.  Lasts 10 charges or 15 sec.  Awards 1 combo point.",
                    ]),
                    req: "up",
                    reqDist: 1,
                },
            ],
            [
                {
                    name: "Master of Subtlety",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_masterofsubtlety.jpg",
                    text: formatUnchangedTalentTexts([
                        "Attacks made while stealthed and for 6 seconds after breaking stealth cause an additional 4% damage.",
                        "Attacks made while stealthed and for 6 seconds after breaking stealth cause an additional 7% damage.",
                        "Attacks made while stealthed and for 6 seconds after breaking stealth cause an additional 10% damage.",
                    ]),
                },
                null,
                {
                    name: "Deadliness",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_weapon_crossbow_11.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your attack power by 2%.",
                        "Increases your attack power by 4%.",
                        "Increases your attack power by 6%.",
                        "Increases your attack power by 8%.",
                        "Increases your attack power by 10%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Enveloping Shadows",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_envelopingshadows.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your chance to avoid area of effect attacks by an additional 5%.",
                        "Increases your chance to avoid area of effect attacks by an additional 10%.",
                        "Increases your chance to avoid area of effect attacks by an additional 15%.",
                    ]),
                },
                {
                    name: "Premeditation",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_possession.jpg",
                    text: [
                        [
                            "When used, adds 2 combo points to your target.  You must add to or use those combo points within 10 sec or the combo points are lost. Cooldown: ",
                            change("20 sec.", "2 min"),
                        ],
                    ],
                    req: "up",
                    reqDist: 2,
                },
                {
                    name: "Cheat Death",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_cheatdeath.jpg",
                    text: formatUnchangedTalentTexts([
                        "You have a 33% chance that an attack which would otherwise kill you will instead reduce you to 10% of your maximum health. In addition, all damage taken will be reduced by up to 90% for 3 sec (modified by resilience).  This effect cannot occur more than once per minute.",
                        "You have a 66% chance that an attack which would otherwise kill you will instead reduce you to 10% of your maximum health. In addition, all damage taken will be reduced by up to 90% for 3 sec (modified by resilience).  This effect cannot occur more than once per minute.",
                        "You have a 100% chance that an attack which would otherwise kill you will instead reduce you to 10% of your maximum health. In addition, all damage taken will be reduced by up to 90% for 3 sec (modified by resilience).  This effect cannot occur more than once per minute.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Sinister Calling",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_sinistercalling.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your total Agility by 3% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 1%.",
                        "Increases your total Agility by 6% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 2%.",
                        "Increases your total Agility by 9% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 3%.",
                        "Increases your total Agility by 12% and increases the percentage damage bonus of Backstab and Hemorrhage by an additional 4%.",
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
                    name: "Shadowstep",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_rogue_shadowstep.jpg",
                    text: formatUnchangedTalentTexts([
                        "Attempts to step through the shadows and reappear behind your enemy and increases movement speed by 70% for 3 sec.  The damage of your next ability is increased by 20% and the threat caused is reduced by 50%.  Lasts 10 sec.",
                    ]),
                },
                null,
                null,
            ],
        ],
    },
];
