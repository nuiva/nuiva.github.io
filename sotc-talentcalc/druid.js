// @ts-ignore
const data = [
    {
        name: "Balance",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/283.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_starfall.jpg",
        talents: [
            [
                {
                    name: "Starlight Wrath",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_abolishmagic.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the cast time of your Wrath and Starfire spells by 0.1 sec.",
                        "Reduces the cast time of your Wrath and Starfire spells by 0.2 sec.",
                        "Reduces the cast time of your Wrath and Starfire spells by 0.3 sec.",
                        "Reduces the cast time of your Wrath and Starfire spells by 0.4 sec.",
                        "Reduces the cast time of your Wrath and Starfire spells by 0.5 sec.",
                    ]),
                },
                {
                    name: "Nature's Grasp",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_natureswrath.jpg",
                    text: formatUnchangedTalentTexts([
                        "While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 1).  Only useable outdoors.  1 charge.  Lasts 45 sec.",
                    ]),
                },
                {
                    name: "Improved Nature's Grasp",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_natureswrath.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the chance for your Nature's Grasp to entangle an enemy by 15%.",
                        "Increases the chance for your Nature's Grasp to entangle an enemy by 30%.",
                        "Increases the chance for your Nature's Grasp to entangle an enemy by 45%.",
                        "Increases the chance for your Nature's Grasp to entangle an enemy by 65%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Control of Nature",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_stranglevines.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives you a 40% chance to avoid interruption caused by damage while casting Entangling Roots and Cyclone.",
                        "Gives you a 70% chance to avoid interruption caused by damage while casting Entangling Roots and Cyclone.",
                        "Gives you a 100% chance to avoid interruption caused by damage while casting Entangling Roots and Cyclone.",
                    ]),
                },
                {
                    name: "Focused Starlight",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_staff_01.jpg",
                    text: [
                        [
                            "Increases the critical strike chance of your Wrath, Starfire, ",
                            createElement("span", { className: "changed" }, [
                                "and Healing Touch",
                            ]),
                            " spells by 2%.",
                        ],
                        [
                            "Increases the critical strike chance of your Wrath, Starfire, ",
                            createElement("span", { className: "changed" }, [
                                "and Healing Touch",
                            ]),
                            " spells by 4%.",
                        ],
                    ],
                },
                {
                    name: "Improved Moonfire",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_starfall.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage and critical strike chance of your Moonfire spell by 5%.",
                        "Increases the damage and critical strike chance of your Moonfire spell by 10%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Brambles",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_thorns.jpg",
                    text: [
                        [
                            "Increases damage caused by your Thorns and Entangling Roots spells by 25%",
                            createElement("span", { className: "changed" }, [
                                " and the damage done by your Treants by 5%.",
                            ]),
                        ],
                        [
                            "Increases damage caused by your Thorns and Entangling Roots spells by 50%",
                            createElement("span", { className: "changed" }, [
                                " and the damage done by your Treants by 10%.",
                            ]),
                        ],
                        [
                            "Increases damage caused by your Thorns and Entangling Roots spells by 75%",
                            createElement("span", { className: "changed" }, [
                                " and the damage done by your Treants by 15%.",
                            ]),
                        ],
                    ],
                },
                null,
                {
                    name: "Insect Swarm",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_insectswarm.jpg",
                    text: formatUnchangedTalentTexts([
                        "The enemy target is swarmed by insects, decreasing their chance to hit by 2% and causing 108 Nature damage over 12 sec.",
                    ]),
                },
                {
                    name: "Nature's Reach",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_naturetouchgrow.jpg",
                    text: [
                        [
                            "Increases the range of your Balance spells and Faerie Fire (Feral) ability by 10%,",
                            createElement("span", { className: "changed" }, [
                                " and reduces the threat generated by your Balance spells by 15%.",
                            ]),
                        ],
                        [
                            "Increases the range of your Balance spells and Faerie Fire (Feral) ability by 20%,",
                            createElement("span", { className: "changed" }, [
                                " and reduces the threat generated by your Balance spells by 30%.",
                            ]),
                        ],
                    ],
                },
            ],
            [
                null,
                {
                    name: "Vengeance",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_purge.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 20%.",
                        "Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 40%.",
                        "Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 60%.",
                        "Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 80%.",
                        "Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by 100%.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                {
                    name: "Celestial Focus",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_arcane_starfire.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives your Starfire spell a 5% chance to stun the target for 3 sec and increases the chance you'll resist spell interruption when casting your Wrath spell by 25%.",
                        "Gives your Starfire spell a 10% chance to stun the target for 3 sec and increases the chance you'll resist spell interruption when casting your Wrath spell by 50%.",
                        "Gives your Starfire spell a 15% chance to stun the target for 3 sec and increases the chance you'll resist spell interruption when casting your Wrath spell by 70%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Lunar Guidance",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_lunarguidance.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your spell damage and healing by 8% of your total Intellect.",
                        "Increases your spell damage and healing by 16% of your total Intellect.",
                        "Increases your spell damage and healing by 25% of your total Intellect.",
                    ]),
                },
                {
                    name: "Nature's Grace",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_naturesblessing.jpg",
                    text: formatUnchangedTalentTexts([
                        "All spell criticals grace you with a blessing of nature, reducing the casting time of your next spell by 0.5 sec.",
                    ]),
                },
                {
                    name: "Moonglow",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_sentinal.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 3%.",
                        "Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 6%.",
                        "Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 9%.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Moonfury",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_moonglow.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage done by your Starfire, Moonfire and Wrath spells by 2%.",
                        "Increases the damage done by your Starfire, Moonfire and Wrath spells by 4%.",
                        "Increases the damage done by your Starfire, Moonfire and Wrath spells by 6%.",
                        "Increases the damage done by your Starfire, Moonfire and Wrath spells by 8%.",
                        "Increases the damage done by your Starfire, Moonfire and Wrath spells by 10%.",
                    ]),
                    req: "up",
                    reqDist: 1,
                },
                {
                    name: "Balance of Power",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_balanceofpower.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your chance to hit with all spells and reduces the chance you'll be hit by spells by 2%.",
                        "Increases your chance to hit with all spells and reduces the chance you'll be hit by spells by 4%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Dreamstate",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_dreamstate.jpg",
                    text: formatUnchangedTalentTexts([
                        "Regenerate mana equal to 4% of your Intellect every 5 sec, even while casting.",
                        "Regenerate mana equal to 7% of your Intellect every 5 sec, even while casting.",
                        "Regenerate mana equal to 10% of your Intellect every 5 sec, even while casting.",
                    ]),
                },
                {
                    name: "Moonkin Form",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_forceofnature.jpg",
                    text: formatUnchangedTalentTexts([
                        "Shapeshift into Moonkin Form.  While in this form the armor contribution from items is increased by 400%, attack power is increased by 150% of your level and all party members within 30 yards have their spell critical chance increased by 5%.  Melee attacks in this form have a chance on hit to regenerate mana based on attack power.  The Moonkin can only cast Balance and Remove Curse spells while shapeshifted.\n\nThe act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.",
                    ]),
                },
                {
                    name: "Improved Faerie Fire",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_faeriefire.jpg",
                    text: [
                        [
                            "Your Faerie Fire spell also increases the chance the target will be hit by melee, ranged,",
                            createElement("span", { className: "changed" }, [" and spell"]),
                            " attacks by 1%.",
                        ],
                        [
                            "Your Faerie Fire spell also increases the chance the target will be hit by melee, ranged,",
                            createElement("span", { className: "changed" }, [" and spell"]),
                            " attacks by 2%.",
                        ],
                        [
                            "Your Faerie Fire spell also increases the chance the target will be hit by melee, ranged,",
                            createElement("span", { className: "changed" }, [" and spell"]),
                            " attacks by 3%.",
                        ],
                    ],
                },
                null,
            ],
            [
                null,
                {
                    name: "Wrath of Cenarius",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_twilightswrath.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your Starfire spell gains an additional 4% and your Wrath gains an additional 2% of your bonus damage effects.",
                        "Your Starfire spell gains an additional 8% and your Wrath gains an additional 4% of your bonus damage effects.",
                        "Your Starfire spell gains an additional 12% and your Wrath gains an additional 6% of your bonus damage effects.",
                        "Your Starfire spell gains an additional 16% and your Wrath gains an additional 8% of your bonus damage effects.",
                        "Your Starfire spell gains an additional 20% and your Wrath gains an additional 10% of your bonus damage effects.",
                    ]),
                },
                null,
                null,
            ],
            [
                null,
                {
                    name: "Force of Nature",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_forceofnature.jpg",
                    text: formatUnchangedTalentTexts([
                        "Summons 3 treants to attack enemy targets for 30 sec.",
                    ]),
                },
                null,
                null,
            ],
        ],
    },
    {
        name: "Feral Combat",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/281.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_racial_bearform.jpg",
        talents: [
            [
                null,
                {
                    name: "Ferocity",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_hyena.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 1 Rage or Energy.",
                        "Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 2 Rage or Energy.",
                        "Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 3 Rage or Energy.",
                        "Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 4 Rage or Energy.",
                        "Reduces the cost of your Maul, Swipe, Claw, Rake and Mangle abilities by 5 Rage or Energy.",
                    ]),
                },
                {
                    name: "Feral Aggression",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_demoralizingroar.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the attack power reduction of your Demoralizing Roar by 8% and the damage caused by your Ferocious Bite by 3%.",
                        "Increases the attack power reduction of your Demoralizing Roar by 16% and the damage caused by your Ferocious Bite by 6%.",
                        "Increases the attack power reduction of your Demoralizing Roar by 24% and the damage caused by your Ferocious Bite by 9%.",
                        "Increases the attack power reduction of your Demoralizing Roar by 32% and the damage caused by your Ferocious Bite by 12%.",
                        "Increases the attack power reduction of your Demoralizing Roar by 40% and the damage caused by your Ferocious Bite by 15%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Feral Instinct",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_ambush.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases threat caused in Bear and Dire Bear Form by 5% and reduces the chance enemies have to detect you while Prowling.",
                        "Increases threat caused in Bear and Dire Bear Form by 10% and reduces the chance enemies have to detect you while Prowling.",
                        "Increases threat caused in Bear and Dire Bear Form by 15% and reduces the chance enemies have to detect you while Prowling.",
                    ]),
                },
                {
                    name: "Brutal Impact",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_bash.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the stun duration of your Bash and Pounce abilities by 0.5 sec.",
                        "Increases the stun duration of your Bash and Pounce abilities by 1 sec.",
                    ]),
                },
                {
                    name: "Thick Hide",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_misc_pelt_bear_03.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your Armor contribution from items by 4%.",
                        "Increases your Armor contribution from items by 7%.",
                        "Increases your Armor contribution from items by 10%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Feral Swiftness",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_spiritwolf.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your movement speed by 15% while outdoors in Cat Form and increases your chance to dodge while in Cat Form, Bear Form and Dire Bear Form by 2%.",
                        "Increases your movement speed by 30% while outdoors in Cat Form and increases your chance to dodge while in Cat Form, Bear Form and Dire Bear Form by 4%.",
                    ]),
                },
                {
                    name: "Feral Charge",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_bear.jpg",
                    text: [
                        [
                            createElement("span", { className: "changed" }, [
                                "Teaches Feral Charge (Bear) and Feral Charge (Cat).",
                            ]),
                            createElement("br"),
                            "Feral Charge (Bear): Causes you to charge an enemy, immobilizing and interrupting any spell being cast for 4 sec.",
                            createElement("br"),
                            createElement("span", { className: "changed" }, [
                                "Feral Charge (Cat): Causes you to leap behind an enemy, dazing them for 3 sec. 30 second cooldown.",
                            ]),
                        ],
                    ],
                },
                {
                    name: "Sharpened Claws",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_misc_monsterclaw_04.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 2%.",
                        "Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 4%.",
                        "Increases your critical strike chance while in Bear, Dire Bear or Cat Form by 6%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Shredding Attacks",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_vampiricaura.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the energy cost of your Shred ability by 9 and the rage cost of your Lacerate ability by 1.",
                        "Reduces the energy cost of your Shred ability by 18 and the rage cost of your Lacerate ability by 2.",
                    ]),
                },
                {
                    name: "Predatory Strikes",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_cat.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your melee attack power in Cat, Bear, Dire Bear and Moonkin Forms by 50% of your level.",
                        "Increases your melee attack power in Cat, Bear, Dire Bear and Moonkin Forms by 100% of your level.",
                        "Increases your melee attack power in Cat, Bear, Dire Bear and Moonkin Forms by 150% of your level.",
                    ]),
                },
                {
                    name: "Primal Fury",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_racial_cannibalize.jpg",
                    text: formatUnchangedTalentTexts([
                        "Gives you a 50% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form and your critical strikes from Cat Form abilities that add combo points  have a 50% chance to add an additional combo point.",
                        "Gives you a 100% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form and your critical strikes from Cat Form abilities that add combo points  have a 100% chance to add an additional combo point.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Savage Fury",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_ravage.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the damage caused by your Claw, Rake, and Mangle (Cat) abilities by 10%.",
                        "Increases the damage caused by your Claw, Rake, and Mangle (Cat) abilities by 20%.",
                    ]),
                },
                null,
                {
                    name: "Faerie Fire (Feral)",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_faeriefire.jpg",
                    text: formatUnchangedTalentTexts([
                        "Decrease the armor of the target by 175 for 40 sec.  While affected, the target cannot stealth or turn invisible.",
                    ]),
                },
                {
                    name: "Nurturing Instinct",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_healinginstincts.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your healing spells by up to 50% of your Agility, and increases healing done to you by 10% while in Cat form.",
                        "Increases your healing spells by up to 100% of your Agility, and increases healing done to you by 20% while in Cat form.",
                    ]),
                },
            ],
            [
                null,
                {
                    name: "Heart of the Wild",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_blessingofagility.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your Intellect by 4%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 4% and while in Cat Form your attack power is increased by 2%.",
                        "Increases your Intellect by 8%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 8% and while in Cat Form your attack power is increased by 4%.",
                        "Increases your Intellect by 12%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 12% and while in Cat Form your attack power is increased by 6%.",
                        "Increases your Intellect by 16%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 16% and while in Cat Form your attack power is increased by 8%.",
                        "Increases your Intellect by 20%.  In addition, while in Bear or Dire Bear Form your Stamina is increased by 20% and while in Cat Form your attack power is increased by 10%.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                {
                    name: "Survival of the Fittest",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_enrage.jpg",
                    text: [
                        [
                            "Increases all attributes by 1% and reduces the chance you'll be critically hit by melee attacks by ",
                            createElement("span", { className: "changed" }, ["2%."]),
                        ],
                        [
                            "Increases all attributes by 2% and reduces the chance you'll be critically hit by melee attacks by ",
                            createElement("span", { className: "changed" }, ["4%."]),
                        ],
                        [
                            "Increases all attributes by 3% and reduces the chance you'll be critically hit by melee attacks by ",
                            createElement("span", { className: "changed" }, ["6%."]),
                        ],
                    ],
                },
                null,
            ],
            [
                {
                    name: "Primal Tenacity",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_primaltenacity.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your chance to resist Stun and Fear mechanics by 5%.",
                        "Increases your chance to resist Stun and Fear mechanics by 10%.",
                        "Increases your chance to resist Stun and Fear mechanics by 15%.",
                    ]),
                },
                {
                    name: "Leader of the Pack",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_unyeildingstamina.jpg",
                    text: formatUnchangedTalentTexts([
                        "While in Cat, Bear or Dire Bear Form, the Leader of the Pack increases ranged and melee critical chance of all party members within 45 yards by 5%.",
                    ]),
                },
                {
                    name: "Improved Leader of the Pack",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_unyeildingstamina.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your Leader of the Pack ability also causes affected targets to have a 100% chance to heal themselves for 2% of their total health when they critically hit with a melee or ranged attack.  The healing effect cannot occur more than once every 6 sec.",
                        "Your Leader of the Pack ability also causes affected targets to have a 100% chance to heal themselves for 4% of their total health when they critically hit with a melee or ranged attack.  The healing effect cannot occur more than once every 6 sec.",
                    ]),
                    req: "left",
                    reqDist: 1,
                },
                null,
            ],
            [
                null,
                null,
                {
                    name: "Predatory Instincts",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_predatoryinstincts.jpg",
                    text: formatUnchangedTalentTexts([
                        "While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 2% and your chance to avoid area effect attacks by 3%.",
                        "While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 4% and your chance to avoid area effect attacks by 6%.",
                        "While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 6% and your chance to avoid area effect attacks by 9%.",
                        "While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 8% and your chance to avoid area effect attacks by 12%.",
                        "While in Cat Form, Bear Form, or Dire Bear Form, increases your damage from melee critical strikes by 10% and your chance to avoid area effect attacks by 15%.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Mangle",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_mangle2.jpg",
                    text: formatUnchangedTalentTexts([
                        "Mangle the target, inflicting damage and causing the target to take additional damage from bleed effects for 12 sec.  This ability can be used in Cat Form or Dire Bear Form.",
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
        name: "Restoration",
        bg: "https://wow.zamimg.com/images/wow/talents/backgrounds/tbc/282.jpg",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_healingtouch.jpg",
        talents: [
            [
                null,
                {
                    name: "Improved Mark of the Wild",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_regeneration.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the effects of your Mark of the Wild and Gift of the Wild spells by 7%.",
                        "Increases the effects of your Mark of the Wild and Gift of the Wild spells by 14%.",
                        "Increases the effects of your Mark of the Wild and Gift of the Wild spells by 21%.",
                        "Increases the effects of your Mark of the Wild and Gift of the Wild spells by 28%.",
                        "Increases the effects of your Mark of the Wild and Gift of the Wild spells by 35%.",
                    ]),
                },
                {
                    name: "Furor",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_blessingofstamina.jpg",
                    text: [
                        [
                            "Gives you 20% chance to gain ",
                            createElement("span", { className: "changed" }, ["15"]),
                            " Rage when you shapeshift into Bear and Dire Bear Form or ",
                            createElement("span", { className: "changed" }, ["60"]),
                            " Energy when you shapeshift into Cat Form, ",
                            createElement("span", { className: "changed" }, [
                                "and increases your total Intellect while in Moonkin form by 2%.",
                            ]),
                        ],
                        [
                            "Gives you 40% chance to gain ",
                            createElement("span", { className: "changed" }, ["15"]),
                            " Rage when you shapeshift into Bear and Dire Bear Form or ",
                            createElement("span", { className: "changed" }, ["60"]),
                            " Energy when you shapeshift into Cat Form, ",
                            createElement("span", { className: "changed" }, [
                                "and increases your total Intellect while in Moonkin form by 4%.",
                            ]),
                        ],
                        [
                            "Gives you 60% chance to gain ",
                            createElement("span", { className: "changed" }, ["15"]),
                            " Rage when you shapeshift into Bear and Dire Bear Form or ",
                            createElement("span", { className: "changed" }, ["60"]),
                            " Energy when you shapeshift into Cat Form, ",
                            createElement("span", { className: "changed" }, [
                                "and increases your total Intellect while in Moonkin form by 6%.",
                            ]),
                        ],
                        [
                            "Gives you 80% chance to gain ",
                            createElement("span", { className: "changed" }, ["15"]),
                            " Rage when you shapeshift into Bear and Dire Bear Form or ",
                            createElement("span", { className: "changed" }, ["60"]),
                            " Energy when you shapeshift into Cat Form, ",
                            createElement("span", { className: "changed" }, [
                                "and increases your total Intellect while in Moonkin form by 8%.",
                            ]),
                        ],
                        [
                            "Gives you 100% chance to gain ",
                            createElement("span", { className: "changed" }, ["15"]),
                            " Rage when you shapeshift into Bear and Dire Bear Form or ",
                            createElement("span", { className: "changed" }, ["60"]),
                            " Energy when you shapeshift into Cat Form, ",
                            createElement("span", { className: "changed" }, [
                                "and increases your total Intellect while in Moonkin form by 10%.",
                            ]),
                        ],
                    ],
                },
                null,
            ],
            [
                {
                    name: "Naturalist",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_healingtouch.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the cast time of your Healing Touch spell by 0.1 sec and increases the damage you deal with physical attacks in all forms by 2%.",
                        "Reduces the cast time of your Healing Touch spell by 0.2 sec and increases the damage you deal with physical attacks in all forms by 4%.",
                        "Reduces the cast time of your Healing Touch spell by 0.3 sec and increases the damage you deal with physical attacks in all forms by 6%.",
                        "Reduces the cast time of your Healing Touch spell by 0.4 sec and increases the damage you deal with physical attacks in all forms by 8%.",
                        "Reduces the cast time of your Healing Touch spell by 0.5 sec and increases the damage you deal with physical attacks in all forms by 10%.",
                    ]),
                },
                {
                    name: "Nature's Focus",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_healingwavegreater.jpg",
                    text: [
                        [
                            "Gives you a 14% chance to avoid interruption caused by damage while casting Healing Touch, Regrowth, Tranquility, ",
                            createElement("span", { className: "changed" }, [
                                "Wrath, Entangling Roots, and Cyclone.",
                            ]),
                        ],
                        [
                            "Gives you a 28% chance to avoid interruption caused by damage while casting Healing Touch, Regrowth, Tranquility, ",
                            createElement("span", { className: "changed" }, [
                                "Wrath, Entangling Roots, and Cyclone.",
                            ]),
                        ],
                        [
                            "Gives you a 42% chance to avoid interruption caused by damage while casting Healing Touch, Regrowth, Tranquility, ",
                            createElement("span", { className: "changed" }, [
                                "Wrath, Entangling Roots, and Cyclone.",
                            ]),
                        ],
                        [
                            "Gives you a 56% chance to avoid interruption caused by damage while casting Healing Touch, Regrowth, Tranquility, ",
                            createElement("span", { className: "changed" }, [
                                "Wrath, Entangling Roots, and Cyclone.",
                            ]),
                        ],
                        [
                            "Gives you a 70% chance to avoid interruption caused by damage while casting Healing Touch, Regrowth, Tranquility, ",
                            createElement("span", { className: "changed" }, [
                                "Wrath, Entangling Roots, and Cyclone.",
                            ]),
                        ],
                    ],
                },
                {
                    name: "Natural Shapeshifter",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_wispsplode.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the mana cost of all shapeshifting by 10%.",
                        "Reduces the mana cost of all shapeshifting by 20%.",
                        "Reduces the mana cost of all shapeshifting by 30%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Intensity",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_frost_windwalkon.jpg",
                    text: formatUnchangedTalentTexts([
                        "Allows 10% of your Mana regeneration to continue while casting and causes your Enrage ability to instantly generate 4 rage.",
                        "Allows 20% of your Mana regeneration to continue while casting and causes your Enrage ability to instantly generate 7 rage.",
                        "Allows 30% of your Mana regeneration to continue while casting and causes your Enrage ability to instantly generate 10 rage.",
                    ]),
                },
                {
                    name: "Subtlety",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_eyeoftheowl.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the threat generated by your spells by 4% and reduces the chance your spells will be dispelled by 6%.",
                        "Reduces the threat generated by your spells by 8% and reduces the chance your spells will be dispelled by 12%.",
                        "Reduces the threat generated by your spells by 12% and reduces the chance your spells will be dispelled by 18%.",
                        "Reduces the threat generated by your spells by 16% and reduces the chance your spells will be dispelled by 24%.",
                        "Reduces the threat generated by your spells by 20% and reduces the chance your spells will be dispelled by 30%.",
                    ]),
                },
                {
                    name: "Omen of Clarity",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_crystalball.jpg",
                    text: formatUnchangedTalentTexts([
                        "Imbues the Druid with natural energy.  Each of the Druid's melee attacks has a chance of causing the caster to enter a Clearcasting state.  The Clearcasting state reduces the Mana, Rage or Energy cost of your next damage or healing spell or offensive ability by 100%.  Lasts 30 min.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Tranquil Spirit",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_holy_elunesgrace.jpg",
                    text: formatUnchangedTalentTexts([
                        "Reduces the mana cost of your Healing Touch and Tranquility spells by 2%.",
                        "Reduces the mana cost of your Healing Touch and Tranquility spells by 4%.",
                        "Reduces the mana cost of your Healing Touch and Tranquility spells by 6%.",
                        "Reduces the mana cost of your Healing Touch and Tranquility spells by 8%.",
                        "Reduces the mana cost of your Healing Touch and Tranquility spells by 10%.",
                    ]),
                },
                {
                    name: "Improved Rejuvenation",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_rejuvenation.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the effect of your Rejuvenation spell by 5%.",
                        "Increases the effect of your Rejuvenation spell by 10%.",
                        "Increases the effect of your Rejuvenation spell by 15%.",
                    ]),
                },
                null,
            ],
            [
                {
                    name: "Nature's Swiftness",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_ravenform.jpg",
                    text: formatUnchangedTalentTexts([
                        "When activated, your next Nature spell becomes an instant cast spell.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                {
                    name: "Gift of Nature",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_protectionformnature.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the effect of all healing spells by 2%.",
                        "Increases the effect of all healing spells by 4%.",
                        "Increases the effect of all healing spells by 6%.",
                        "Increases the effect of all healing spells by 8%.",
                        "Increases the effect of all healing spells by 10%.",
                    ]),
                },
                null,
                {
                    name: "Improved Tranquility",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_tranquility.jpg",
                    text: [
                        [
                            "Reduces threat caused by Tranquility by 50%, ",
                            createElement("span", { className: "changed" }, [
                                "and reduces the cooldown by 30%.",
                            ]),
                        ],
                        [
                            "Reduces threat caused by Tranquility by 100%, ",
                            createElement("span", { className: "changed" }, [
                                "and reduces the cooldown by 60%.",
                            ]),
                        ],
                    ],
                },
            ],
            [
                {
                    name: "Empowered Touch",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_empoweredtouch.jpg",
                    text: [
                        [
                            "Your Healing Touch spell gains an additional ",
                            createElement("span", { className: "changed" }, ["20%"]),
                            " of your bonus healing effects.",
                        ],
                        [
                            "Your Healing Touch spell gains an additional ",
                            createElement("span", { className: "changed" }, ["40%"]),
                            " of your bonus healing effects.",
                        ],
                    ],
                },
                null,
                {
                    name: "Improved Regrowth",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_resistnature.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases the critical effect chance of your Regrowth spell by 10%.",
                        "Increases the critical effect chance of your Regrowth spell by 20%.",
                        "Increases the critical effect chance of your Regrowth spell by 30%.",
                        "Increases the critical effect chance of your Regrowth spell by 40%.",
                        "Increases the critical effect chance of your Regrowth spell by 50%.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                null,
            ],
            [
                {
                    name: "Living Spirit",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/spell_nature_giftofthewaterspirit.jpg",
                    text: formatUnchangedTalentTexts([
                        "Increases your total Spirit by 5%.",
                        "Increases your total Spirit by 10%.",
                        "Increases your total Spirit by 15%.",
                    ]),
                },
                {
                    name: "Swiftmend",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/inv_relics_idolofrejuvenation.jpg",
                    text: formatUnchangedTalentTexts([
                        "Consumes a Rejuvenation or Regrowth effect on a friendly target to instantly heal them an amount equal to 12 sec. of Rejuvenation or 18 sec. of Regrowth.",
                    ]),
                    req: "up",
                    reqDist: 2,
                },
                {
                    name: "Natural Perfection",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_naturalperfection.jpg",
                    text: formatUnchangedTalentTexts([
                        "Your critical strike chance with all spells is increased by 1% and critical strikes against you give you the Natural Perfection effect reducing all damage taken by 2%.  Stacks up to 3 times.  Lasts 8 sec.",
                        "Your critical strike chance with all spells is increased by 2% and critical strikes against you give you the Natural Perfection effect reducing all damage taken by 3%.  Stacks up to 3 times.  Lasts 8 sec.",
                        "Your critical strike chance with all spells is increased by 3% and critical strikes against you give you the Natural Perfection effect reducing all damage taken by 4%.  Stacks up to 3 times.  Lasts 8 sec.",
                    ]),
                },
                null,
            ],
            [
                null,
                {
                    name: "Empowered Rejuvenation",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_empoweredrejuvination.jpg",
                    text: formatUnchangedTalentTexts([
                        "The bonus healing effects of your healing over time spells is increased by 4%.",
                        "The bonus healing effects of your healing over time spells is increased by 8%.",
                        "The bonus healing effects of your healing over time spells is increased by 12%.",
                        "The bonus healing effects of your healing over time spells is increased by 16%.",
                        "The bonus healing effects of your healing over time spells is increased by 20%.",
                    ]),
                },
                null,
                null,
            ],
            [
                null,
                {
                    name: "Tree of Life",
                    icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_treeoflife.jpg",
                    text: formatUnchangedTalentTexts([
                        "Shapeshift into the Tree of Life.  While in this form you increase healing received by 25% of your total Spirit for all party members within 45 yards, your movement speed is reduced by 20%, and you can only cast Swiftmend, Innervate, Nature's Swiftness, Rebirth, Barkskin, poison removing and healing over time spells, but the mana cost of these spells is reduced by 20%.\n\nThe act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.",
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
const otherChanges = [
    {
        name: "Revive",
        icon: "https://wow.zamimg.com/images/wow/icons/medium/ability_druid_lunarguidance.jpg",
        text: [
            "Druids now have access to Revive from WotLK (a normal revive). Trainable at level 12.",
        ],
    },
];
