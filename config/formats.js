// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

	// XY Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Battle",
		section: "ORAS Singles",

		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Unrated Random Battle",
		section: "ORAS Singles",

		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3521201/\">OU Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/ou/\">OU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3536420/\">OU Viability Ranking</a>"
		],
		section: "ORAS Singles",

		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Soul Dew']
	},
	{
		name: "OU (no Mega)",
		section: "ORAS Singles",

		ruleset: ['OU'],
		onBegin: function () {
			for (var i = 0; i < this.p1.pokemon.length; i++) {
				this.p1.pokemon[i].canMegaEvo = false;
			}
			for (var i = 0; i < this.p2.pokemon.length; i++) {
				this.p2.pokemon[i].canMegaEvo = false;
			}
		}
	},
	{
		name: "Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3522911/\">Ubers Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3535106/\">Ubers Viability Ranking</a>"
		],
		section: "ORAS Singles",

		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Team Preview', 'Mega Rayquaza Clause'],
		banlist: []
	},
	{
		name: "UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3546077/\">np: UU Stage 4</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/uu/\">UU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3541343/\">UU Viability Ranking</a>"
		],
		section: "ORAS Singles",

		ruleset: ['OU'],
		banlist: ['OU', 'BL', 'Drizzle', 'Drought', 'Shadow Tag']
	},
	{
		name: "RU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3549031/\">np: RU Stage 11</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/ru/\">RU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3538036/\">RU Viability Ranking</a>"
		],
		section: "ORAS Singles",

		ruleset: ['UU'],
		banlist: ['UU', 'BL2']
	},
	{
		name: "NU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3545983/\">np: NU Stage 8</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/nu/\">NU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3545276/\">NU Viability Ranking</a>"
		],
		section: "ORAS Singles",

		ruleset: ['RU'],
		banlist: ['RU', 'BL3']
	},
	{
		name: "LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3505710/\">LC Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3490462/\">LC Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547566/\">LC Viability Ranking</a>"
		],
		section: "ORAS Singles",

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['LC Uber', 'Gligar', 'Misdreavus', 'Scyther', 'Sneasel', 'Tangela', 'Dragon Rage', 'Sonic Boom', 'Swagger']
	},
	{
		name: "Anything Goes",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3523229/\">Anything Goes</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3548945/\">Anything Goes Resources</a>"
		],
		section: "ORAS Singles",

		ruleset: ['Pokemon', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal']
	},
	/*{
		name: "CAP Naviathan Playtest",
		section: "ORAS Singles",

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Allow CAP', 'Syclant', 'Revenankh', 'Pyroak', 'Fidgit', 'Stratagem', 'Arghonaut', 'Kitsunoh', 'Cyclohm', 'Colossoil', 'Krilowatt', 'Voodoom',
			'Tomohawk', 'Necturna', 'Mollux', 'Aurumoth', 'Malaconda', 'Cawmodore', 'Volkraken', 'Plasmanta',
			'Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Genesect',
			'Giratina', 'Giratina-Origin', 'Greninja', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia',
			'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom',
			'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Salamencite', 'Soul Dew'
		]
	},*/
	{
		name: "Battle Spot Singles",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3527960/\">Battle Spot Singles Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3528947/\">Battle Spot Singles Viability Ranking</a>"
		],
		section: "ORAS Singles",

		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
		banlist: [],
		onValidateTeam: function (team, format) {
			if (team.length < 3) return ['You must bring at least three Pok\u00e9mon.'];
		},
		onBegin: function () {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0, 3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Battle Spot Special 12",
		section: "ORAS Singles",

		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
		banlist: ['Tornadus + Defiant', 'Thundurus + Defiant', 'Landorus + Sheer Force'],
		requirePentagon: true,
		onValidateTeam: function (team, format) {
			if (team.length < 3) return ['You must bring at least three Pok\u00e9mon.'];
		},
		onBegin: function () {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0, 3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Custom Game",
		section: "ORAS Singles",

		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
	},

	// XY Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Doubles Battle",
		section: "ORAS Doubles",

		gameType: 'doubles',
		team: 'randomDoubles',
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Doubles OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3545903/\">np: Doubles OU Stage 3</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3498688/\">Doubles OU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3535930/\">Doubles OU Viability Ranking</a>"
		],
		section: "ORAS Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Team Preview'],
		banlist: ['Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo',
			'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom', 'Salamencite', 'Soul Dew', 'Dark Void',
			'Gravity ++ Grass Whistle', 'Gravity ++ Hypnosis', 'Gravity ++ Lovely Kiss', 'Gravity ++ Sing', 'Gravity ++ Sleep Powder', 'Gravity ++ Spore'
		]
	},
	{
		name: "Doubles Ubers",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3542746/\">Doubles Ubers</a>"],
		section: "ORAS Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Species Clause', 'Moody Clause', 'OHKO Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void']
	},
	{
		name: "Doubles UU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3542755/\">Doubles UU</a>"],
		section: "ORAS Doubles",

		gameType: 'doubles',
		ruleset: ['Doubles OU'],
		banlist: ['Abomasnow', 'Aegislash', 'Amoonguss', 'Azumarill', 'Bisharp', 'Breloom', 'Charizard', 'Conkeldurr', 'Cresselia',
			'Diancie', 'Dragonite', 'Excadrill', 'Ferrothorn', 'Garchomp', 'Gardevoir', 'Gengar', 'Greninja', 'Gyarados', 'Heatran',
			'Hitmontop', 'Hoopa', 'Hoopa-Unbound', 'Hydreigon', 'Jirachi', 'Kangaskhan', 'Keldeo', 'Kyurem-Black', 'Landorus', 'Landorus-Therian', 'Latios', 'Ludicolo',
			'Metagross', 'Mew', 'Milotic', 'Ninetales', 'Politoed', 'Rotom-Wash', 'Sableye', 'Scizor', 'Scrafty', 'Serperior', 'Shaymin-Sky', 'Suicune',
			'Sylveon', 'Talonflame', 'Terrakion', 'Thundurus', 'Thundurus-Therian', 'Togekiss', 'Tyranitar', 'Venusaur', 'Volcarona', 'Weavile', 'Whimsicott', 'Zapdos'
		]
	},
	{
		name: "Doubles NU",
		section: "ORAS Doubles",

		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Doubles UU'],
		banlist: ['Snorlax', 'Machamp', 'Lopunny', 'Galvantula', 'Mienshao', 'Infernape', 'Aromatisse', 'Clawitzer', 'Kyurem', 'Flygon',
			'Lucario', 'Alakazam', 'Gastrodon', 'Bronzong', 'Chandelure', 'Dragalge', 'Mamoswine', 'Genesect', 'Arcanine', 'Volcarona',
			'Aggron', 'Manectric', 'Salamence', 'Tornadus', 'Porygon2', 'Latias', 'Meowstic', 'Ninetales', 'Crobat', 'Blastoise',
			'Darmanitan', 'Sceptile', 'Jirachi', 'Goodra', 'Deoxys-Attack', 'Milotic', 'Victini', 'Hariyama', 'Crawdaunt', 'Aerodactyl',
			'Abomasnow', 'Krookodile', 'Cofagrigus', 'Druddigon', 'Escavalier', 'Dusclops', 'Slowbro', 'Slowking', 'Eelektross', 'Spinda',
			'Cloyster', 'Raikou', 'Thundurus-Therian', 'Swampert', 'Nidoking', 'Aurorus', 'Granbull', 'Braviary'
		]
	},
	{
		name: "VGC 2015",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3524352/\">VGC 2015 Rules</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3530547/\">VGC 2015 Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3500650/\">VGC Learning Resources</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3526666/\">Sample Teams for VGC 2015</a>"
		],
		section: "ORAS Doubles",

		gameType: 'doubles',
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
		banlist: ['Tornadus + Defiant', 'Thundurus + Defiant', 'Landorus + Sheer Force'],
		requirePentagon: true,
		onValidateTeam: function (team, format) {
			if (team.length < 4) return ['You must bring at least four Pok\u00e9mon.'];
		},
		onBegin: function () {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0, 4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Battle Spot Doubles",
		section: "ORAS Doubles",

		gameType: 'doubles',
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
		banlist: [],
		onValidateTeam: function (team, format) {
			if (team.length < 4) return ['You must bring at least four Pok\u00e9mon.'];
		},
		onBegin: function () {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0, 4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Spooky Cup",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3551484/\">Spooky Cup</a>"],
		section: "ORAS Doubles",

		gameType: 'doubles',
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Cancel Mod', 'Team Preview VGC'],
		banlist: ['Illegal', 'Unreleased'],
		requirePentagon: true,
		onValidateTeam: function (team, format) {
			if (team.length < 4) return ['You must bring at least four Pok\u00e9mon.'];
		},
		onValidateSet: function (set) {
			var allowedPokemon = {
				"Rattata":1, "Raticate":1, "Ekans":1, "Arbok":1, "Pikachu":1, "Zubat":1, "Golbat":1, "Paras":1, "Parasect":1, "Grimer":1, "Muk":1, "Gastly":1, "Haunter":1, "Gengar":1, "Cubone":1, "Marowak":1, "Koffing":1, "Weezing":1, "Tangela":1, "Mr. Mime":1, "Ditto":1, "Kabuto":1, "Kabutops":1, "Hoothoot":1, "Noctowl":1, "Spinarak":1, "Ariados":1, "Crobat":1, "Umbreon":1, "Murkrow":1, "Misdreavus":1, "Unown":1, "Gligar":1, "Granbull":1, "Sneasel":1, "Houndour":1, "Houndoom":1, "Mightyena":1, "Dustox":1, "Shiftry":1, "Shedinja":1, "Whismur":1, "Loudred":1, "Exploud":1, "Sableye":1, "Mawile":1, "Gulpin":1, "Swalot":1, "Carvanha":1, "Sharpedo":1, "Cacnea":1, "Cacturne":1, "Seviper":1, "Lunatone":1, "Baltoy":1, "Claydol":1, "Shuppet":1, "Banette":1, "Duskull":1, "Dusclops":1, "Absol":1, "Snorunt":1, "Glalie":1, "Drifloon":1, "Drifblim":1, "Mismagius":1, "Honchkrow":1, "Stunky":1, "Skuntank":1, "Spiritomb":1, "Skorupi":1, "Drapion":1, "Croagunk":1, "Toxicroak":1, "Weavile":1, "Tangrowth":1, "Gliscor":1, "Dusknoir":1, "Froslass":1, "Rotom":1, "Purrloin":1, "Liepard":1, "Woobat":1, "Swoobat":1, "Venipede":1, "Whirlipede":1, "Scolipede":1, "Basculin":1, "Krokorok":1, "Krookodile":1, "Sigilyph":1, "Yamask":1, "Cofagrigus":1, "Garbodor":1, "Zorua":1, "Zoroark":1, "Gothita":1, "Gothorita":1, "Gothitelle":1, "Frillish":1, "Jellicent":1, "Joltik":1, "Galvantula":1, "Elgyem":1, "Beheeyem":1, "Litwick":1, "Lampent":1, "Chandelure":1, "Golurk":1, "Zweilous":1, "Hydreigon":1, "Volcarona":1, "Espurr":1, "Meowstic":1, "Honedge":1, "Doublade":1, "Aegislash":1, "Malamar":1, "Phantump":1, "Trevenant":1, "Pumpkaboo":1, "Gourgeist":1, "Noibat":1, "Noivern":1
			};
			var pokemon = Tools.getTemplate(set.species).baseSpecies;
			if (!(pokemon in allowedPokemon)) {
				return [pokemon + " is not usable in Spooky Cup."];
			}
			var item = Tools.getItem(set.item);
			if (item.megaStone) {
				return ["Mega Stones are not permitted in Spooky Cup."];
			}
		},
		onBegin: function () {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0, 4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Doubles Hackmons Cup",
		section: "ORAS Doubles",

		gameType: 'doubles',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Doubles Custom Game",
		section: "ORAS Doubles",

		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
	},

	// XY Triples
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Triples Battle",
		section: "ORAS Triples",

		gameType: 'triples',
		team: 'randomDoubles',
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Smogon Triples",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3511522/\">Smogon Triples</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3540390/\">Smogon Triples Viability Ranking</a>"
		],
		section: "ORAS Triples",

		gameType: 'triples',
		ruleset: ['Pokemon', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased', 'Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White',
			'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Xerneas', 'Yveltal', 'Zekrom',
			'Soul Dew', 'Dark Void', 'Perish Song'
		]
	},
	{
		name: "Battle Spot Triples",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3533914/\">Battle Spot Triples Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3549201/\">Battle Spot Triples Viability Ranking</a>"
		],
		section: "ORAS Triples",

		gameType: 'triples',
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: [],
		onValidateTeam: function (team, format) {
			if (team.length < 6) return ['You must have six Pok\u00e9mon.'];
		}
	},
	{
		name: "Triples Hackmons Cup",
		section: "ORAS Triples",

		gameType: 'triples',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Triples Custom Game",
		section: "ORAS Triples",

		gameType: 'triples',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		name: "Highest Stat Meta",
		desc: [
			"All Pok&eacute;mon on a team must share the same highest stat.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3509940/\">Highest Stat Meta</a>"
		],
		section: "OM of the Month",
		column: 2,

		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Soul Dew'],
		onValidateTeam: function (team) {
			var highest = [];
			for (var i = 0; i < team.length; i++) {
				var template = this.getTemplate(team[i].species);
				var stats = template.baseStats;
				var max = Math.max.apply(Math, Object.values(stats));
				var h = [];
				for (var j in stats) {
					if (stats[j] === max) h.push(j);
				}
				if (i === 0) {
					highest = h;
					continue;
				}
				highest = highest.intersect(h);
				if (!highest.length) {
					return ["Your team must share the same highest stat."];
				}
			}
		}
	},
	{
		name: "No Guard Galaxy",
		desc: [
			"Every move will never miss.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3514582/\">No Guard Galaxy</a>"
		],
		section: "OM of the Month",

		ruleset: ['OU'],
		banlist: ['Dynamic Punch'],
		onAccuracy: function (accuracy, target, source, move) {
			return true;
		}
	},
	{
		name: "[Seasonal] Spoopy Party",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3491902/\">Seasonal Ladder</a>"],
		section: "OM of the Month",

		team: 'randomSpoopy',
		ruleset: ['HP Percentage Mod', 'Sleep Clause Mod', 'Cancel Mod'],
		onSwitchIn: function (pokemon) {
			if (pokemon.species === 'Magikarp') {
				this.boost({spe:4, spd:2, def:2}, pokemon, pokemon, 'the power of dank');
			}
		},
		onModifyMove: function (move) {
			if (move.id === 'hyperbeam') {
				move.type = 'Water';
				move.accuracy = true;
				delete move.self;
				move.onTryHit = function (target, source) {
					this.add('-message', target.name + "'s fuel cannot melt " + source.name + " beams!");
				};
			}
			if (move.id === 'trickortreat') {
				switch (this.random(7)) {
				case 0:
					move.category = 'Special';
					move.type = 'Fire';
					move.basePower = 200;
					move.onTryHit = function () {
						this.add('-message', "Pumpkin bomb!");
					};
					move.onHit = function () {};
					break;
				case 1:
					move.category = 'Physical';
					move.type = 'Poison';
					move.basePower = 25;
					move.multihit = 4;
					move.onTryHit = function () {
						this.add('-message', "Toilet paper missile attack!");
					};
					move.onHit = function () {};
					break;
				case 2:
					move.onTryHit = function () {
						this.add('-message', "Yum! Chocolate!");
					};
					move.onHit = function (target, source) {
						this.heal(Math.ceil(target.maxhp * 0.5));
					};
					break;
				case 3:
					move.onTryHit = function () {
						this.add('-message', "This is a rather bland candy.");
					};
					move.onHit = function (target, source) {
						this.heal(Math.ceil(target.maxhp * 0.25));
						target.setStatus('par');
						target.addVolatile('confusion');
					};
					break;
				case 4:
					move.onTryHit = function () {
						this.add('-message', "You are about to be rotten-egged on!");
					};
					move.onHit = function (target, source) {
						target.setStatus('tox');
						target.addVolatile('torment');
					};
					break;
				case 5:
					move.category = 'Special';
					move.type = 'Dark';
					move.basePower = 500;
					move.self = {volatileStatus: 'mustrecharge'};
					move.onTryHit = function () {
						this.add('-message', "Ultimate Super Hiper Mega Awesome Beam destroyer of worlds!");
					};
					move.onHit = function (target, source) {
						this.add('-message', source.name + " caught himself in the explosion!");
						source.setStatus('brn');
						source.addVolatile('disabled');
						source.addVolatile('confusion');
					};
					break;
				case 6:
					move.onTryHit = function () {
						this.add('-message', "Have some refreshment, my fellow.");
					};
					move.onHit = function (target, source) {
						target.addVolatile('aquaring');
					};
					break;
				}
			}
		}
	},
	{
		name: "CAP",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3537407/\">CAP Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/formats/cap/\">CAP Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3545628/\">CAP Viability Ranking</a>"
		],
		section: "Other Metagames",
		column: 2,

		ruleset: ['OU'],
		banlist: ['Allow CAP']
	},
	{
		name: "Battle Factory",
		section: "Other Metagames",

		team: 'randomFactory',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause']
	},
	{
		name: "Challenge Cup 1v1",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview 1v1'],
		onBegin: function () {
			this.debug('Cutting down to 1');
			this.p1.pokemon = this.p1.pokemon.slice(0, 1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Balanced Hackmons",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3489849/\">Balanced Hackmons</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3515725/\">Balanced Hackmons Suspect Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547823/\">Balanced Hackmons Viability Ranking</a>"
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Ability Clause', '-ate Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Groudon-Primal', 'Kyogre-Primal', 'Arena Trap', 'Huge Power', 'Parental Bond', 'Pure Power', 'Shadow Tag', 'Wonder Guard', 'Assist', 'Chatter']
	},
	{
		name: "Classic Hackmons",
		section: "Other Metagames",

		searchShow: false,
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		validateSet: function (set) {
			var template = this.getTemplate(set.species);
			var item = this.getItem(set.item);
			var problems = [];

			if (set.species === set.name) delete set.name;
			if (template.isNonstandard) {
				problems.push(set.species + ' is not a real Pokemon.');
			}
			if (item.isNonstandard) {
				problems.push(item.name + ' is not a real item.');
			}
			var ability = {};
			if (set.ability) ability = this.getAbility(set.ability);
			if (ability.isNonstandard) {
				problems.push(ability.name + ' is not a real ability.');
			}
			if (set.moves) {
				for (var i = 0; i < set.moves.length; i++) {
					var move = this.getMove(set.moves[i]);
					if (move.isNonstandard) {
						problems.push(move.name + ' is not a real move.');
					}
				}
				if (set.moves.length > 4) {
					problems.push((set.name || set.species) + ' has more than four moves.');
				}
			}
			if (set.level && set.level > 100) {
				problems.push((set.name || set.species) + ' is higher than level 100.');
			}
			return problems;
		}
	},
	{
		name: "1v1",
		desc: [
			"Bring three Pok&eacute;mon to Team Preview and choose one to battle.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3496773/\">1v1</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3536109/\">1v1 Viability Ranking</a>"
		],
		section: 'Other Metagames',

		ruleset: ['Pokemon', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Swagger Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview 1v1'],
		banlist: ['Illegal', 'Unreleased', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky',
			'Xerneas', 'Yveltal', 'Zekrom', 'Focus Sash', 'Kangaskhanite', 'Soul Dew', 'Perish Song'
		],
		onValidateTeam: function (team, format) {
			if (team.length > 3) return ['You may only bring up to three Pok\u00e9mon.'];
		},
		onBegin: function () {
			this.p1.pokemon = this.p1.pokemon.slice(0, 1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Tier Shift",
		desc: [
			"Pok&eacute;mon below OU/BL get all their stats boosted. UU/BL2 get +5, RU/BL3 get +10, and NU or lower get +15.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3532973/\">Tier Shift</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3536719/\">Tier Shift Viability Ranking</a>"
		],
		section: "Other Metagames",

		mod: 'tiershift',
		ruleset: ['OU'],
		banlist: ['Shadow Tag', 'Swift Swim', 'Chatter']
	},
	{
		name: "PU",
		desc: [
			"The unofficial tier below NU.",
			"&bullet; <a href=\"https://www.smogon.com/forums/forums/pu.327/\">PU</a>"
		],
		section: "Other Metagames",

		ruleset: ['NU'],
		banlist: ['NU', 'BL4', 'Chatter', 'Shell Smash + Baton Pass']
	},
	{
		name: "FU",
		section: "Other Metagames",

		ruleset: ['PU'],
		banlist: ['Vigoroth', 'Chatot', 'Fraxure', 'Sticky Web', 'Heat Rock', 'Piloswine', 'Zebstrika', 'Roselia', 'Kadabra', 'Raichu', 'Machoke',
		         'Togetic', 'Misdreavus', 'Stoutland', 'Armaldo', 'Lickilicky', 'Pelipper', 'Ninetales', 'Golem', 'Rapidash', 'Gourgeist-Super',
		         'Probopass', 'Leafeon', 'Torterra', 'Dusknoir', 'Aurorus', 'Ursaring', 'Jumpluff', 'Tangela', 'Mr. Mime', 'Monferno', 'Arbok',
		         'Grumpig', 'Rotom-Frost', 'Torkoal', 'Carracosta', 'Beheeyem', 'Avalugg', 'Barbaracle', 'Flareon', 'Dodrio', 'Marowak', 'Floatzel',
		         'Simipour', 'Basculin', 'Victreebel', 'Mightyena', 'Leavanny', 'Volbeat', 'Articuno', 'Sawsbuck', 'Drifblim', 'Ninjask', 'Lapras',
		         'Electrode', 'Meowstic', 'Luxray', 'Gigalith', 'Clefairy'
		]
	},
	{
		name: "Inverse Battle",
		desc: [
			"Battle with an inverted type chart.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3518146/\">Inverse Battle</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3526371/\">Inverse Battle Viability Ranking</a>"
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Diggersby', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Serperior',
			'Shaymin-Sky', 'Snorlax', 'Xerneas', 'Yveltal', 'Zekrom', 'Gengarite', 'Kangaskhanite', 'Salamencite', 'Soul Dew'
		],
		onNegateImmunity: function (pokemon, type) {
			if (type in this.data.TypeChart && this.runEvent('Immunity', pokemon, null, null, type)) return false;
		},
		onEffectiveness: function (typeMod, target, type, move) {
			// The effectiveness of Freeze Dry on Water isn't reverted
			if (move && move.id === 'freezedry' && type === 'Water') return;
			if (move && !this.getImmunity(move, type)) return 1;
			return -typeMod;
		}
	},
	{
		name: "Almost Any Ability",
		desc: [
			"Pok&eacute;mon can use any ability, barring the few that are banned.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3528058/\">Almost Any Ability</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3538917/\">Almost Any Ability Viability Ranking</a>"
		],
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Ability Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Ignore Illegal Abilities',
			'Arceus', 'Archeops', 'Bisharp', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Hoopa-Unbound', 'Keldeo', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Mamoswine', 'Mewtwo', 'Palkia',
			'Rayquaza', 'Regigigas', 'Reshiram', 'Shedinja', 'Slaking', 'Smeargle', 'Terrakion', 'Weavile', 'Xerneas', 'Yveltal',
			'Zekrom',
			'Blazikenite', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Salamencite', 'Soul Dew', 'Chatter'
		],
		onValidateSet: function (set) {
			var bannedAbilities = {'Aerilate': 1, 'Arena Trap': 1, 'Contrary': 1, 'Fur Coat': 1, 'Huge Power': 1, 'Imposter': 1, 'Parental Bond': 1, 'Protean': 1, 'Pure Power': 1, 'Shadow Tag': 1, 'Simple':1, 'Speed Boost': 1, 'Wonder Guard': 1};
			if (set.ability in bannedAbilities) {
				var template = this.getTemplate(set.species || set.name);
				var legalAbility = false;
				for (var i in template.abilities) {
					if (set.ability === template.abilities[i]) legalAbility = true;
				}
				if (!legalAbility) return ['The ability ' + set.ability + ' is banned on Pok\u00e9mon that do not naturally have it.'];
			}
		}
	},
	{
		name: "STABmons",
		desc: [
			"Pok&eacute;mon gain access to either Attacking moves or Status moves of their typing, but not both at the same time.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547279/\">STABmons</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3548559/\">STABmons Viability Ranking</a>"
		],
		section: "Other Metagames",

		ruleset: ['OU'],
		banlist: ['Diggersby', 'Keldeo', 'Porygon-Z', 'Sylveon', 'Aerodactylite', 'Altarianite', "King's Rock", 'Lopunnite', 'Metagrossite', 'Razor Fang'],
		validateSet: function (set, teamHas) {
			var statusProblems = this.validateSet(set, teamHas, {ignorestabmoves: {'Status':1}});
			if (!statusProblems.length) return;
			var attackProblems = this.validateSet(set, teamHas, {ignorestabmoves: {'Physical':1, 'Special':1}});
			if (!attackProblems.length) return;

			var problems = [];
			for (var i = 0; i < statusProblems.length; i++) {
				problems.push('(Status) ' + statusProblems[i]);
			}
			for (var i = 0; i < attackProblems.length; i++) {
				problems.push('(Attack) ' + attackProblems[i]);
			}
			return problems;
		}
	},
	{
		name: "LC UU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3523929/\">LC UU</a>"],
		section: "Other Metagames",

		maxLevel: 5,
		ruleset: ['LC'],
		banlist: ['Abra', 'Aipom', 'Archen', 'Bunnelby', 'Carvanha', 'Chinchou', 'Cottonee', 'Croagunk', 'Diglett',
			'Drilbur', 'Dwebble', 'Elekid', 'Ferroseed', 'Fletchling', 'Foongus', 'Gastly', 'Gothita', 'Honedge', 'Larvesta',
			'Lileep', 'Magnemite', 'Mienfoo', 'Munchlax', 'Omanyte', 'Onix', 'Pawniard', 'Ponyta', 'Porygon', 'Scraggy',
			'Shellder', 'Snivy', 'Snubbull', 'Spritzee', 'Staryu', 'Stunky', 'Surskit', 'Timburr', 'Tirtouga', 'Vullaby',
			'Shell Smash', 'Corphish', 'Pancham', 'Vulpix', 'Zigzagoon'
		]
	},
	{
		name: "Hackmons Cup",
		section: "Other Metagames",

		team: 'randomHC',
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "2v2 Doubles",
		desc: [
			"Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547040/\">2v2 Doubles</a>"
		],
		section: "Other Metagames",

		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Doubles OU'],
		banlist: ['Perish Song'],
		onValidateTeam: function (team, format) {
			if (team.length > 4) return ['You may only bring up to four Pok\u00e9mon.'];
		},
		onBegin: function () {
			this.p1.pokemon = this.p1.pokemon.slice(0, 2);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 2);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Averagemons",
		desc: [
			"Every Pok&eacute;mon has a stat spread of 100/100/100/100/100/100.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3526481/\">Averagemons</a>"
		],
		section: "Other Metagames",

		searchShow: false,
		mod: 'averagemons',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Sableye + Prankster', 'Shedinja', 'Smeargle', 'Venomoth',
			'DeepSeaScale', 'DeepSeaTooth', 'Eviolite', 'Gengarite', 'Kangaskhanite', 'Light Ball', 'Mawilite', 'Medichamite', 'Soul Dew', 'Thick Club',
			'Arena Trap', 'Huge Power', 'Pure Power', 'Shadow Tag', 'Chatter'
		]
	},
	{
		name: "Hidden Type",
		desc: [
			"Pok&eacute;mon have an added type determined by their IVs. Same as the Hidden Power type.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3516349/\">Hidden Type</a>"
		],
		section: "Other Metagames",

		searchShow: false,
		mod: 'hiddentype',
		ruleset: ['OU']
	},
	{
		name: "Middle Cup",
		section: "Other Metagames",

		searchShow: false,
		maxLevel: 50,
		defaultLevel: 50,
		validateSet: function (set) {
			var template = this.getTemplate(set.species || set.name);
			if (!template.evos || template.evos.length === 0 || !template.prevo) {
				return [set.species + " is not the middle Pokémon in an evolution chain."];
			}
		},
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Chansey', 'Frogadier', 'Eviolite']
	},
	{
		name: "Alphabet Cup",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Soul Dew', 'Gengarite', 'Mawilite', 'Salamencite', 'Kangaskhanite', 'Mewtwonite X', 'Mewtwonite Y', 'Swoobat',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying',
			'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Blaziken', 'Blaziken-Mega', 'Aegislash', 'Greninja', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre',
			'Kyurem-White', 'Lugia', 'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom'
		],
		validateTeam: function(team, format) {
			var letters = {};
			var letter = '';
			for (var i = 0; i < team.length; i++) {
				letter = Tools.getTemplate(team[i]).species.slice(0,1).toUpperCase();
				if (letter in letters) return ['Your team cannot have more that one Pokémon starting with the letter "' + letter + '".'];
				letters[letter] = 1;
			}
		}
	},
	{
		name: "OU Theorymon",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3541537/\">OU Theorymon</a>"],
		section: "Other Metagames",

		mod: 'theorymon',
		searchShow: false,
		ruleset: ['OU']
	},
	{
		name: "Gen-NEXT OU",
		section: "Other Metagames",

		mod: 'gennext',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber']
	},
	
	// Monotype
	///////////////////////////////////////////////////////////////////
	
	{
		name: "Monotype Random Battle",
		section: "Monotype",
		column: 2,

		team: 'randomMonotype',
		searchShow: false,
		ruleset: ['Pokemon', 'Same Type Clause', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "Monotype",
		desc: [
			"All Pok&eacute;mon on a team must share a type.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3544507/\">Monotype</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3550310/\">Monotype Resources</a>"
		],
		section: "Monotype",
		column: 2,

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Same Type Clause', 'Team Preview'],
		banlist: ['Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Giratina', 'Giratina-Origin', 'Greninja', 'Groudon', 'Ho-Oh',
			'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Talonflame', 'Xerneas', 'Yveltal', 'Zekrom',
			'Altarianite', 'Charizardite X', 'Damp Rock', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Metagrossite', 'Salamencite', 'Slowbronite', 'Smooth Rock', 'Soul Dew'
		]
	},
	{
		name: "Duotype",
		section: "Monotype",
		column: 2,

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Duo Type Clause', 'Team Preview'],
		banlist: ['Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Giratina',
			'Giratina-O', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia','Mewtwo','Palkia','Rayquaza','Reshiram',
			'Shaymin-Sky','Talonflame','Xerneas','Yveltal','Zekrom','Damp Rock','Gengarite','Kangaskanite','Lucarionite',
			'Mawilite','Salamencite','Slowbronite','Soul Dew','Double Team','Minimize','Swagger'
		]
	},
	{
		name: "Tier Shift Monotype",
		section: "Monotype",
		column: 2,

		mod: 'tiershift',
		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Same Type Clause', 'Team Preview'],
		banlist: ['Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Talonflame', 'Xerneas', 'Yveltal', 'Zekrom',
			'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Salamencite', 'Shaymin-Sky', 'Slowbronite', 'Soul Dew'
		]
	},
	{
		name: "Ubers Monotype",
		section: "Monotype",

		ruleset: ['Pokemon', 'Standard Ubers', 'Same Type Clause'],
		banlist: []
	},
	{
		name: "UU Monotype",
		section: "Monotype",

		ruleset: ['OU', 'Same Type Clause'],
		banlist: ['OU', 'BL', 'Heracronite', 'Medichamite', 'Gardevoirite', 'Drizzle', 'Drought']
	},
	{
		name: "RU Monotype",
		section: "Monotype",

		ruleset: ['UU', 'Same Type Clause'],
		banlist: ['UU', 'BL2']
	},
	{
		name: "NU Monotype",
		section: "Monotype",

		ruleset: ['RU', 'Same Type Clause'],
		banlist: ['RU', 'BL3']
	},
	{
		name: "LC Monotype",
		section: "Monotype",

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Little Cup', 'Same Type Clause'],
		banlist: ['Dragon Rage', 'Sonic Boom', 'Swagger', 'LC Uber', 'Gligar']
	},
	{
		name: "PU Monotype",
		section: "Monotype",
		

		ruleset: ['NU', 'Same Type Clause'],
		banlist: ['NU', 'BL4', 'Chatter', 'Shell Smash + Baton Pass']
	},
	
	// Past VGC
	///////////////////////////////////////////////////////////////////
	
	{
		name: "VGC 2010",
		section: "Past VGC",
		gameType: 'doubles',
		searchShow: true,
		
		mod: 'gen4',
		maxForcedLevel: 50,
		ruleset: ['Species Clause', 'Item Clause'],
		banlist: ['Unreleased', 'Illegal', 'Soul Dew', 'Huntail + Shell Smash + Sucker Punch', 'Manaphy', 'Mew', 'Arceus', 'Shaymin', 'Darkrai', 'Celebi', 'Jirachi', 'Deoxys', 'Phione'],
		onBegin: function () {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0, 4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		validateTeam: function (team) {
			if (team.length < 4) return ['You must bring at least four Pokémon.'];
			var legendCount = 0;
			for (var i = 0; i < 4; i++) {
				var pokemon = Tools.getTemplate(team[i].species || team[i].name);
				if (pokemon.species in {'Mewtwo': 1, 'Lugia': 1, 'Ho-Oh': 1, 'Rayquaza': 1, 'Kyogre': 1, 'Groudon': 1, 'Dialga': 1, 'Palkia': 1, 'Giratina': 1}) legendCount ++;
			}
			if (legendCount > 2) return ['You can\'t use more than two of these pokemon: Mewtwo, Lugia, Ho-Oh, Rayquaza, Kyogre, Groudon, Dialga, Palkia, Giratina.'];
		}
	},
	
	{
		name: "VGC 2013",
		section: "Past VGC",

		mod: 'gen5',
		gameType: 'doubles',
		onBegin: function() {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0,4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Team Preview VGC', 'Species Clause', 'Item Clause'],
		banlist: ['Unreleased', 'Illegal', 'Sky Drop', 'Dark Void', 'Soul Dew',
			'Mewtwo',
			'Mew',
			'Lugia',
			'Ho-Oh',
			'Celebi',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Jirachi',
			'Deoxys', 'Deoxys-Attack', 'Deoxys-Speed', 'Deoxys-Defense',
			'Chatot',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Phione',
			'Manaphy',
			'Darkrai',
			'Shaymin', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Victini',
			'Reshiram',
			'Zekrom',
			'Kyurem', 'Kyurem-Black', 'Kyurem-White',
			'Keldeo', 'Keldeo-Resolute',
			'Meloetta',
			'Genesect'],
		validateTeam: function (team, format) {
		if (team.length < 4) return ['You must bring at least four Pok\u00e9mon.'];
			
	        }
	},
		
	{
		name: "VGC 2014",
		section: "Past VGC",

		gameType: 'doubles',
		onBegin: function () {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0, 4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC', 'Kalos Pokedex'],
		requirePentagon: true,
		banlist: [], // The neccessary bans are in Standard GBU
		validateTeam: function (team, format) {
			if (team.length < 4) return ['You must bring at least 4 Pokemon.'];
		}
	},
	
	// Random Metagames
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Haxmons",
		section: "Random Metagames",
		column: 2,

		searchShow: false,
		team: 'random',
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Sleep Clause Mod', 'Freeze Clause'],
		onModifyMovePriority: -100,
		onModifyMove: function (move) {
			if (move.accuracy !== true && move.accuracy < 100) move.accuracy = 0;
			move.willCrit = true;
			if (move.secondaries) {
				for (var i = 0; i < move.secondaries.length; i++) {
					move.secondaries[i].chance = 100;
				}
			}
		}
	},
	{
		name: "Random Inverse Battle",
		section: "Random Metagames",
		mod: 'inverse',

		searchShow: false,
		team: 'random',
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Sleep Clause Mod']
	},
	{
		name: "Random Sky Battle",
		section: "Random Metagames",
		mod: 'randoms',

		searchShow: true,
		team: 'randomSky',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Random Ubers",
		section: "Random Metagames",
		mod: 'randoms',

		searchShow: true,
		team: 'randomUber',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Random LC",
		section: "Random Metagames",
		mod: 'randoms',

		searchShow: true,
		team: 'randomLC',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Random CAP",
		section: "Random Metagames",
		mod: 'randoms',

		searchShow: true,
		team: 'randomCap',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Random MonoGen",
		section: "Random Metagames",
		mod: 'randoms',

		searchShow: true,
		team: 'randomMonoGen',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Challenge Cup 2-vs-2",
		section: "Random Metagames",
		mod: 'randoms',

		gameType: 'doubles',
		team: 'randomCC',
		searchShow: true,
		ruleset: ['Pokemon', 'Team Preview 2v2', 'HP Percentage Mod'],
		onBegin: function () {
			this.debug('Cutting down to 2');
			this.p1.pokemon = this.p1.pokemon.slice(0, 2);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 2);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Challenge Cup Metronome",
		section: "Random Metagames",
		mod: 'randoms',

		searchShow: true,
		team: 'randomMetro',
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	
	// Local Metagames
	///////////////////////////////////////////////////////////////////

	{
		name: "1v1 (No Team Preview)",
		section: 'Local Metagames',
		column: 3,

		ruleset: ['Pokemon', 'Standard', 'Swagger Clause'],
		banlist: ['Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal',
			'Zekrom', 'Focus Sash', 'Kangaskhanite', 'Soul Dew'
		],
		onBegin: function () {
			this.p1.pokemon = this.p1.pokemon.slice(0, 1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Mega Tier",
		section: "Local Metagames",
		mod: 'megatier',
		ruleset: ['OU']
	},
	{
		name: "Ball Cup",
		section: "Local Metagames",
		mod: 'ballcup',
		ruleset: ['OU']
	},
	{
		name: "Move Equality",
		section: "Local Metagames",
		
		mod: "moveequality",
		ruleset: ["OU"],
		banlist: ["Greninja", "Dynamic Punch"]
	},
	{
		name: "Noble Items",
		section: "Local Metagames",
		
		mod: "nobleitems",
		ruleset: ["OU"],
	},
	{
		name: "Level Balance",
		section: "Local Metagames",
		
		ruleset: ['Pokemon', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: [],
		validateSet: function (set) {
			var template = this.getTemplate(set.species || set.name);
			if(!template.isMega || this.getItem(set.item).megaStone) template = this.getTemplate(this.getItem(set.item).megaStone);
			var levelScale = {
				LC: 94,
				'LC Uber': 92,
				NFE: 90,
				Limbo: 86,
				NU: 86,
				BL3: 84,
				RU: 82,
				BL2: 80,
				UU: 78,
				BL: 76,
				OU: 74,
				Unreleased: 74,
				Uber: 70
			};
			var customScale = {
				// bad mons
				caterpie:99,metapod:99,weedle:99,kakuna:99,magikarp:99,pichu:99,cleffa:99,igglybuff:99,tyrogue:99,sentret:99,ledyba:99,hoppip:99,sunkern:99,unown:99,azurill:99,ralts:99,zigzagoon:99,wurmple:99,silcoon:99,cascoon:99,slakoth:99,feebas:99,burmy:99,combee:99,mimejr:99,happiny:99,kricketot:99,tynamo:99,
				
				// Eviolite
				Ferroseed: 95, Misdreavus: 95, Munchlax: 95, Murkrow: 95, Natu: 95,
				Gligar: 90, Metang: 90, Monferno: 90, Roselia: 90, Seadra: 90, Togetic: 90, Wartortle: 90, Whirlipede: 90,
				Dusclops: 84, Porygon2: 82, Chansey: 78,

				// Weather or teammate dependent
				Snover: 95, Vulpix: 95, Ninetales: 78, Tentacruel: 78, Toxicroak: 78,
			
				// Banned mega
				"Kangaskhan-Mega": 72, "Gengar-Mega": 72, "Blaziken-Mega": 72, "Lucario-Mega": 72,

				// Holistic judgment
				Carvanha: 90, Genesect: 72, Kyurem: 78, Sigilyph: 74, Xerneas: 68
			};
			var level = levelScale[template.tier] || 90;
			var eviolite = (template.evos.length > 0 && set.item === "Eviolite") ? true : false;
			
			if (customScale[template.name]) level = customScale[template.name];
			
			if (eviolite && !customScale[template.name]) level = levelScale[this.getTemplate(template.evos[0]).tier];
			else if(eviolite) level = 80;
			
			if (set.level) set.forcedLevel = level;
			return [];
		}
	},
	{
		name: "Immunimons",
		section: "Local Metagames",

		ruleset: ['OU'],
		banlist: [],
		onTryHit: function (target, source, move) {
			if (target === source || move.type === '???' || move.id === 'struggle') return;
			if (target.hasType(move.type)) {
				this.add('-debug','immunimons immunity [' + move.id + ']');
				return null;
			}
		},
		onDamage: function (damage, target, source, effect) {
			if ((source.hasType('Rock') && effect.id === 'stealthrock') || (source.hasType('Ground') && effect.id === 'spikes')) {
				this.add('-debug','immunimons immunity [' + effect.id + ']');
				return false;
			}
		},
	},
	{
		name: "Reliablemons",
		section: "Local Metagames",

		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite'],
		onModifyMove: function(move, pokemon) {
			var moves = pokemon.moves;
			if (move.id === moves[0]) {
				var cheese = 0;
				var crackers = true;
			} else if (move.id === moves[1] && pokemon.typesData[1]) {
				var cheese = 1;
				var crackers = true;
			} else {
				var crackers = false;
			}
			if (crackers) {
				move.type = pokemon.typesData[cheese].type;
			}
		}
	},
	{
		name: "Metagamiate",
		section: "Local Metagames",

		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Gengarite', 'Kangaskhanite', 'Lucarionite', 'Soul Dew',
			'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Genesect', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Kyogre', 'Ho-Oh', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram',
			'Shaymin-Sky', 'Kyurem-White', 'Xerneas', 'Yveltal', 'Zekrom'
		],
		onModifyMove: function(move, pokemon) {
			if (move.type === 'Normal' && move.id !== 'hiddenpower' && !pokemon.hasAbility(['aerilate', 'pixilate', 'refrigerate'])) {
				var types = pokemon.getTypes();
				if (!types[0] || types[0] === '???') return;
				move.type = types[0];
				move.isMetagamiate = true;
			}
		},
		onBasePowerPriority: 9,
		onBasePower: function(basePower, attacker, defender, move) {
			if (!move.isMetagamiate) return;
			return this.chainModify([0x14CD, 0x1000]);
		}
	},
	{
		name: "Same Type Stealth Rock",
		section: "Local Metagames",
		mod: 'stsr',
		ruleset: ['OU']
	},
	{
		name: "Startermons",
		section: 'Local Metagames',

		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Soul Dew', 'Charizardite X', 'Charizardite Y', 'Venusaurite', 'Blastoisinite', 'Blazikenite', 'Blaziken + Speed Boost'],
		validateSet: function (set) {
			var validStarters = {
				"Bulbasaur":1, "Ivysaur":1, "Venusaur":1, "Charmander":1, "Charmeleon":1, "Charizard":1, "Squirtle":1, "Wartortle":1, "Blastoise":1,
				"Chikorita":1, "Bayleef":1, "Meganium":1, "Cyndaquil":1, "Quilava":1, "Typhlosion":1, "Totodile":1, "Croconaw":1, "Feraligatr":1,
				"Treecko":1, "Grovyle":1, "Sceptile":1, "Torchic":1, "Combusken":1, "Blaziken":1, "Mudkip":1, "Marshtomp":1, "Swampert":1,
				"Turtwig":1, "Grotle":1, "Torterra":1, "Chimchar":1, "Monferno":1, "Infernape":1, "Piplup":1, "Prinplup":1, "Empoleon":1,
				"Snivy":1, "Servine":1, "Serperior":1, "Tepig":1, "Pignite":1, "Emboar":1, "Oshawott":1, "Dewott":1, "Samurott":1,
				"Chespin":1, "Quilladin":1, "Chesnaught":1, "Fennekin":1, "Braixen":1, "Delphox":1, "Froakie":1, "Frogadier":1, "Greninja":1,
				"Pikachu":1, "Raichu":1
			};
			if (!(set.species in validStarters)) {
				return [set.species + " is not a starter."];
			}
		},
		validateTeam: function (team) {
			var problems = [];
			var hasOneOfEach = true;
			var gens = [0, 0, 0, 0, 0, 0];
			for (var i = 0; i < team.length; i++) {
				var pokemon = Tools.getTemplate(team[i].species || team[i].name);
				if (pokemon.num <= 151) ++gens[0];
				else if (pokemon.num <= 251) ++gens[1];
				else if (pokemon.num <= 386) ++gens[2];
				else if (pokemon.num <= 494) ++gens[3];
				else if (pokemon.num <= 649) ++gens[4];
				else if (pokemon.num <= 721) ++gens[5];
			}
			for (var j in gens) {
				if (gens[j] > 1) hasOneOfEach = false;
			}
			if (!hasOneOfEach) problems.push('You must bring a Pokemon of each gen.');
			return problems;
		}
	},
	{
		name: "Galaxy LC",
		section: "Local Metagames",

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Gligar', 'Misdreavus', 'Swirlix', 'Meditite', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Dragon Rage', 'Sonic Boom', 'Swagger']
	},
	{
		name: "C&E",
		section: "Other Metagames",

		searchShow: false,
		maxLevel: 100,
		ruleset: ['Team Preview']
	},
	{
		name: "Balanced Hackmons (Doubles)",
		section: "Local Metagames",
		gameType: 'doubles',

		ruleset: ['Pokemon', 'Ability Clause', '-ate Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Arena Trap', 'Huge Power', 'Parental Bond', 'Pure Power', 'Shadow Tag', 'Wonder Guard', 'Assist', 'Chatter']
	},

	// BW2 Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] OU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3509218/#post-5522693\">BW Resources</a>"],
		section: "BW2 Singles",
		column: 3,

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush', 'Soul Dew']
	},
	{
		name: "[Gen 5] Ubers",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3509218/#post-5522693\">BW Resources</a>"],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
		banlist: []
	},
	{
		name: "[Gen 5] UU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3509218/#post-5522693\">BW Resources</a>"],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream', 'Snow Warning']
	},
	{
		name: "[Gen 5] RU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3509218/#post-5522693\">BW Resources</a>"],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning']
	},
	{
		name: "[Gen 5] NU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3509218/#post-5522693\">BW Resources</a>"],
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU', 'BL3', 'Prankster + Assist']
	},
	{
		name: "[Gen 5] LC",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3509218/#post-5522693\">BW Resources</a>"],
		section: "BW2 Singles",

		mod: 'gen5',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Berry Juice', 'Soul Dew', 'Dragon Rage', 'Sonic Boom', 'LC Uber', 'Gligar', 'Scyther', 'Sneasel', 'Tangela']
	},
	{
		name: "[Gen 5] GBU Singles",
		section: "BW2 Singles",

		mod: 'gen5',
		searchShow: false,
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
		banlist: ['Dark Void', 'Sky Drop'],
		onBegin: function () {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0, 3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "[Gen 5] Custom Game",
		section: "BW2 Singles",

		mod: 'gen5',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
	},

	// BW2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] Doubles OU",
		section: 'BW2 Doubles',
		column: 3,

		mod: 'gen5',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo',
			'Palkia', 'Rayquaza', 'Reshiram', 'Zekrom', 'Soul Dew', 'Dark Void', 'Sky Drop'
		]
	},
	{
		name: "[Gen 5] GBU Doubles",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
		banlist: ['Dark Void', 'Sky Drop'],
		onBegin: function () {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0, 4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "[Gen 5] Doubles Custom Game",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod']
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 4] OU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3509218/#post-5522692\">DPP Resources</a>"],
		section: "Past Generations",
		column: 3,

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 4] Ubers",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3509218/#post-5522692\">DPP Resources</a>"],
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Arceus']
	},
	{
		name: "[Gen 4] UU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3509218/#post-5522692\">DPP Resources</a>"],
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'OU', 'BL']
	},
	{
		name: "[Gen 4] LC",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3509218/#post-5522692\">DPP Resources</a>"],
		section: "Past Generations",

		mod: 'gen4',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Little Cup'],
		banlist: ['Berry Juice', 'DeepSeaTooth', 'Dragon Rage', 'Sonic Boom', 'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma']
	},
	{
		name: "[Gen 4] Custom Game",
		section: "Past Generations",

		mod: 'gen4',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod']
	},
	{
		name: "[Gen 4] Doubles Custom Game",
		section: 'Past Generations',

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod']
	},
	{
		name: "[Gen 3] OU",
		section: "Past Generations",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3509218/#post-5522690\">ADV Resources</a>"],

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Smeargle + Ingrain']
	},
	{
		name: "[Gen 3] Ubers",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3509218/#post-5522690\">ADV Resources</a>"],
		section: "Past Generations",

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Wobbuffet + Leftovers']
	},
	{
		name: "[Gen 3] Custom Game",
		section: "Past Generations",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "[Gen 2] OU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3509218/#post-5522689\">GSC Resources</a>"],
		section: "Past Generations",

		mod: 'gen2',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 2] Ubers",
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard']
	},
	{
		name: "[Gen 2] Random Battle",
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		team: 'random',
		ruleset: ['Pokemon', 'Standard']
	},
	{
		name: "[Gen 2] Custom Game",
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "[Gen 1] OU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3509218/#post-5522688\">RBY Resources</a>"],
		section: "Past Generations",

		mod: 'gen1',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 1] Ubers",
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
		banlist: []
	},
	{
		name: "[Gen 1] OU (tradeback)",
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Uber', 'Unreleased', 'Illegal',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember'
		]
	},
	{
		name: "[Gen 1] Random Battle",
		section: "Past Generations",

		mod: 'gen1',
		team: 'random',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "[Gen 1] Challenge Cup",
		section: "Past Generations",

		mod: 'gen1',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod']
	},
	{
		name: "[Gen 1] Stadium",
		section: "Past Generations",

		mod: 'stadium',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember'
		]
	},
	{
		name: "[Gen 1] Custom Game",
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod']
	}
];
