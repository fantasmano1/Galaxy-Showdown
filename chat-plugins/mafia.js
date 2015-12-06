var plugins = exports.plugins = {
		

	 mafia: {
		status: 'off',
		stage: 'day',
		totals: {},
		roles: ["Villager", "Doctor", "Mafia Goon", "Villager", "Mafia Goon", "Cop", "Villager", "Werewolf", "Pretty Lady", "Villager", "Mafia Goon", "Mayor", "Villager", "Mafia Pretty Lady", "1-Shot Vigilante", "1-Shot Bulletproof Townie", "Mafia Seer", "Villager", "Werewolf", "Bomb", "Miller", "Mafia Goon", "Jailkeeper", "Traitor", "Villager", "1-Shot Vigilante", "Mafia Godfather", "Villager", "Bodyguard", "1-Shot Lynchproof Townie"],
		participants: {},
		nightactors: ["Doctor", "Cop", "Werewolf", "Pretty Lady", "Mafia Pretty Lady", "1-Shot Vigilante", "Mafia Seer", "Jailkeeper", "Bodyguard"],
		nightactions: {Mafia: {}},
		inspectionresults: {},
		votes: {},
		
commands: {
			sm: 'startmafia',
			startmafia: function(target, room, user) {
				if (!this.can('ban', null, room)) return false;
				if (room.id !== 'game') return this.sendReply('You can only start mafia games in the Game room.');
				if (plugins.mafia.status !== 'off') return this.sendReply('There is already an active mafia game.');
				plugins.mafia.status = 'signups';
				if (Rooms.rooms.game) Rooms.rooms.game.add(
					'|raw|<div class="broadcast-blue"><strong>A new mafia game has been started!'
					+ ' Type /joinmafia to sign up</strong></div>'
				);
			},

			esgn: 'endsignups',
			endsignups: function(target, room, user) {
				if (!this.can('ban', null, room)) return false;
				if (plugins.mafia.status !== 'signups') return this.sendReply('Signups are not currently active');
				if (Object.keys(plugins.mafia.participants).length < 3) return this.sendReply('There are not enough participants so signups cannot end. (minimum 3 players)')
				plugins.mafia.status = 'on';

				/**
				* to assign roles randomly we create an array of unique, incrementing and
				* shuffled integers of length equal to the number of participants, and assign roles
				* based on what the value of the array is for that participants index compared to that of
				* the "roles" array.
				*/
				var keys = Object.keys(plugins.mafia.participants);
				var len = keys.length;
				var rlen = plugins.mafia.roles.length;
				var randomizer = [];

				for (var i = 0; i < len; i++) {
					randomizer[i] = i;
				}

				// Fisher-Yates shuffle
				for (var i = len - 1; i > 0; i--) {
        			var j = Math.floor(Math.random() * (i + 1));
        			var temp = randomizer[i];
        			randomizer[i] = randomizer[j];
        			randomizer[j] = temp;
    			}

    			for (var i = 0; i < len; i++) {
    				var role = plugins.mafia.roles[randomizer[i%rlen]];
    				var player = keys[i];
    				plugins.mafia.participants[player] = role;

    				if (role in plugins.mafia.totals) {
    					plugins.mafia.totals[role]++;
    				} else {
    					plugins.mafia.totals[role] = 1;
    				}
    			}

				if (Rooms.rooms.game) Rooms.rooms.game.add(
					'|raw|<div class="broadcast-blue"><strong>Signups for the mafia game have now ended!'
					+ ' It is ' + plugins.mafia.stage + ' and there are: ' + require("util").inspect(plugins.mafia.totals) + '. type "/myrole" to see your role</strong></div>'
				);
			},

			myrole: function(target, room, user) {
				if (plugins.mafia.status !== 'on') return this.sendReply('A mafia game hasn\'t started yet');
				if (!(user.userid in plugins.mafia.participants)) return this.sendReply('You are not participating in the current mafia game.');

				var role = plugins.mafia.participants[user.userid];
				var mafia = [];

				for (var key in plugins.mafia.participants) {
					if (plugins.mafia.participants[key].indexOf('Mafia') !== -1) {
						mafia.push(key);
					}
				}

				if (role.indexOf('Mafia') !== -1) {
					return this.sendReply('(You are a Mafia with: ' + mafia + ')');
				}

				return this.sendReply('(You are a: ' + plugins.mafia.participants[user.userid] + ')');
			},

			jm: 'joinmafia',
			joinmafia: function(target, room, user) {
				if (plugins.mafia.status !== 'signups') return this.sendReply('Signups are not happening right now');
				if (room.id !== 'game') return this.sendReply('You can only join mafia games in the Game room.');
				if (user.userid in plugins.mafia.participants) return this.sendReply('You are already participating in the current mafia game.');
				plugins.mafia.participants[user.userid] = '';
				if (Rooms.rooms.game) Rooms.rooms.game.add(user + ' has joined! Total players: ' + Object.keys(plugins.mafia.participants).length);
				return this.sendReply('(You joined the mafia game!)');
			},

			lm: 'leavemafia',
			leavemafia: function(target, room, user) {
				if (plugins.mafia.status !== 'signups') return this.sendReply('You can only leave during signups');
				if (!(user.userid in plugins.mafia.participants)) return this.sendReply('You are not signed up in the current mafia game.');
				delete plugins.mafia.participants[user.userid];
				if (Rooms.rooms.game) Rooms.rooms.game.add(user + ' has left!');
				return this.sendReply('(You left the mafia game!)');
			},

			ly: 'lynch',
			lynch: function(target, room, user) {
				if (plugins.mafia.status !== 'on') return this.sendReply('A mafia game hasn\'t started yet');
				if (!(user.userid in plugins.mafia.participants)) return this.sendReply('You are not participating in the current mafia game.');
				if (plugins.mafia.stage !== 'day') return this.sendReply('You can only lynch during the day');

				target = this.splitTarget(target);
				var targetUser = this.targetUser;
				var targetUserid = toId(this.targetUsername);

				if (!(targetUserid in plugins.mafia.participants)) {
					if (targetUserid === '') {
						targetUser = 'no lynch';
					} else {
						return this.sendReply(this.targetUsername + ' is not participating in this mafia game or has died');
					}
				}

				plugins.mafia.votes[user.userid] = targetUser;

				if (targetUser === 'no lynch') {
					if (Rooms.rooms.game) Rooms.rooms.game.add(user + ' has voted to lynch: no lynch');
				} else {
					if (Rooms.rooms.game) Rooms.rooms.game.add(user + ' has voted to lynch: ' + this.targetUsername);
				}

				var keys = Object.keys(plugins.mafia.votes);
				var totals = {};

				for (var key in plugins.mafia.votes) {
					if (plugins.mafia.votes[key] in totals) {
						totals[plugins.mafia.votes[key]]++;
					} else {
						totals[plugins.mafia.votes[key]] = 1;
					}
					// mayors vote counts as 2
					if (plugins.mafia.participants[key.userid] === 'Mayor') {
						totals[plugins.mafia.votes[key]]++;
					}
				}

				if (totals[targetUser] >= (Math.floor(Object.keys(plugins.mafia.participants).length / 2) +1)) {
					plugins.mafia.stage = 'night';
					if (targetUser === 'no lynch') {
						if (Rooms.rooms.game) Rooms.rooms.game.add('|raw|<div class="broadcast-blue"><strong>No one was lynched!</strong></div>');
					} else if (target === '1-Shot Lynchproof Townie') {
						if (Rooms.rooms.game) Rooms.rooms.game.add('|raw|<div class="broadcast-blue"><strong>No one was lynched!</strong></div>');
						plugins.mafia.participants[target] = 'Villager';
					} else {
						if (Rooms.rooms.game) Rooms.rooms.game.add('|raw|<div class="broadcast-blue"><strong>' + this.targetUsername + ' was lynched and was a ' + plugins.mafia.participants[targetUserid] + '!');
						delete plugins.mafia.participants[targetUserid];

						var winner = [];

						for (var key in plugins.mafia.participants) {
							role = plugins.mafia.participants[key];

							if (role === 'Werewolf') {
								if (winner.indexOf('Werewolf') === -1) winner.push('Werewolf');
							} else if (role.indexOf('Mafia') !== -1 || role === 'Traitor') {
								if (winner.indexOf('Mafia') === -1) winner.push('Mafia');
							} else {
								if (winner.indexOf('Town') === -1) winner.push('Town');
							}

							if (winner.length > 1) break; // if more than 1 faction remains there is no winner
						}

						if (winner.length === 1) {
							if (Rooms.rooms.game) Rooms.rooms.game.add('|raw|<div class="broadcast-blue"><strong>' + winner[0] + ' Have won!</strong></div>');
							// reset everything to starting values

							plugins.mafia.status = 'off';
							plugins.mafia.stage = 'day';
							plugins.mafia.totals = {};
							plugins.mafia.participants = {};
							plugins.mafia.inspectionresults = {};
							plugins.mafia.votes = {};
							return;
						}
					}
					if (Rooms.rooms.game) Rooms.rooms.game.add('|raw|<div class="broadcast-blue"><strong>It is now ' + plugins.mafia.stage + '. If you have a nightaction you can use it using "/nightaction target"</strong></div>');
					room.modchat = '+';
					plugins.mafia.votes = {};

					for (var key in plugins.mafia.participants) {
						var role = plugins.mafia.participants[key];

						if (plugins.mafia.nightactors.indexOf(role) !== -1) {

							if (!(role in plugins.mafia.nightactions)) {
								plugins.mafia.nightactions[role] = {};
							}

    						plugins.mafia.nightactions[role][key] = '';
    					}
					}
					return;
				}

				if (keys.length === Object.keys(plugins.mafia.participants).length) {
					plugins.mafia.stage = 'night';
					if (Rooms.rooms.game) Rooms.rooms.game.add('|raw|<div class="broadcast-blue"><strong>No one was lynched! </strong></div>');
					plugins.mafia.votes = {};

					for (var key in plugins.mafia.participants) {
						var role = plugins.mafia.participants[key];

						if (plugins.mafia.nightactors.indexOf(role) !== -1) {

							if (!(role in plugins.mafia.nightactions)) {
								plugins.mafia.nightactions[role] = {};
							}

    						plugins.mafia.nightactions[role][key] = '';
    					}
					}
					if (Rooms.rooms.game) Rooms.rooms.game.add('|raw|<div class="broadcast-blue"><strong>It is now ' + plugins.mafia.stage + '</strong></div>');
					room.modchat = '+';
				}
			},

			na: 'nightaction',
			nightaction: function(target, room, user) {
				if (plugins.mafia.status !== 'on') return this.sendReply('A mafia game hasn\'t started yet');
				if (plugins.mafia.stage !== 'night') return this.sendReply('It is not currently night');
				if (!(user.userid in plugins.mafia.participants)) return this.sendReply('You are not participating in the current mafia game.');

				target = this.splitTarget(target);
				var targetUser = this.targetUser;
				var targetUserid = toId(this.targetUsername);

				if (!(targetUserid in plugins.mafia.participants)) {
					if (targetUserid === '') {
						targetUser = 'no one';
					} else {
						return this.sendReply(this.targetUsername + ' is not participating in this mafia game or has died');
					}
				}

				var role = plugins.mafia.participants[user.userid];

				if (role === 'Mafia Pretty Lady' || role === 'Mafia Seer') {
					if (target.indexOf('kill') !== -1) {
						plugins.mafia.nightactions[role] = 'no one';
						role = 'Mafia';
					}
				}

				if (plugins.mafia.nightactors.indexOf(role) === -1 && role.indexOf("Mafia") === -1) return this.sendReply('You do not have a night action');

				if (role.indexOf("Mafia") !== -1 && (role !== 'Mafia Pretty Lady' || role !== 'Mafia Seer')) {
					if (targetUser === 'no one') {
						plugins.mafia.nightactions['Mafia'][user.userid] = targetUser;
					} else if (plugins.mafia.participants[targetUserid].indexOf("Mafia") === -1) {
						plugins.mafia.nightactions['Mafia'][user.userid] = targetUser;
					} else {
						return this.sendReply(targetUser + ' is mafia and so cannot be targeted');
					}
				} else {
					plugins.mafia.nightactions[role][user.userid] = targetUser;
				}

				this.sendReply('You have used your nightaction on: ' + this.targetUsername);

				// check if everyone has done their night action yet
				for (var roles in plugins.mafia.nightactions) {
					for (var player in plugins.mafia.nightactions[roles]) {
						if (plugins.mafia.nightactions[roles][player] === '') return;
					}
				}

				if (Object.keys(plugins.mafia.nightactions.Mafia).length === 0) return;

				// some helper functions

				function getTargets(player) {
					var targets = {};

					role = plugins.mafia.participants[player];
					if (role.indexOf('Mafia') !== -1 && role !== 'Mafia Pretty Lady' && role !== 'Mafia Seer') {
						role = 'Mafia';
					}

					targets['targetUser'] = plugins.mafia.nightactions[role][player];
					if (targets['targetUser'] === 'no one') return targets;
					targets['targetRole'] = plugins.mafia.participants[targets['targetUser']];

					if (targets['targetRole'].indexOf('Mafia') !== -1 && targets['targetRole'] !== 'Mafia Pretty Lady' && targets['targetRole'] !== 'Mafia Seer' && targets['targetRole'] !== 'Mafia Godfather') {
						targets['targetRole'] = 'Mafia';
					}

					return targets;
				}

				function whores(key, targetRole, targetUser) {
					if (targetRole === 'Werewolf') {
						plugins.mafia.nightactions[targetRole][targetUser] = key;
					} else if (targetRole === 'Mafia' || plugins.mafia.nightactors.indexOf(targetRole) !== -1) {
						plugins.mafia.nightactions[targetRole][targetUser] = 'no one';

					}
				}

				// loop through every role to determine how they interact with a night action
				// that is not killing

				var safe = {};

				for (var key in plugins.mafia.nightactions['Jailkeeper']) {
					var targets = getTargets(key);
					if (targets['targetUser'] === 'no one') continue;

					if (plugins.mafia.nightactions[targets['targetRole']][targets['targetUser']]) {
						plugins.mafia.nightactions[targets['targetRole']][targets['targetUser']] = 'no one';
					}
					safe[key] = targets['targetUser'];
				}

				for (var key in plugins.mafia.nightactions['Pretty Lady']) {
					var targets = getTargets(key);
					if (targets['targetUser'] === 'no one') continue;

					whores(key, targets['targetRole'], targets['targetUser']);
				}

				for (var key in plugins.mafia.nightactions['Mafia Pretty Lady']) {
					var targets = getTargets(key);
					if (targets['targetUser'] === 'no one') continue;

					whores(key, targets['targetRole'], targets['targetUser']);
				}

				for (var key in plugins.mafia.nightactions['Doctor']) {
					var targets = getTargets(key);
					if (targets['targetUser'] === 'no one') continue;

					safe[key] = targets['targetUser'];
				}

				for (var key in plugins.mafia.nightactions['Bodyguard']) {
					var targets = getTargets(key);
					if (targets['targetUser'] === 'no one') continue;

					safe[key] = targets['targetUser'];
				}

				for (var key in plugins.mafia.nightactions['Cop']) {
					var targets = getTargets(key);
					if (targets['targetUser'] === 'no one') continue;

					var result;

					if (targets['targetRole'] === 'Werewolf') {
						result = 'Werewolf';
					} else if (targets['targetRole'].indexOf("Mafia") !== -1 || targets['targetRole'] === 'Traitor' || targets['targetRole'] === 'Miller' && targets['targetRole'] !== 'Mafia Godfather') {
						result = 'Mafia';
					} else {
						result = 'Town';
					}

					if (!(key in plugins.mafia.inspectionresults)) {
						plugins.mafia.inspectionresults[key] = {};
					}

					plugins.mafia.inspectionresults[key][targets['targetUser']] = result;
				}

				for (var key in plugins.mafia.nightactions['Mafia Seer']) {
					var targets = getTargets(key);
					if (targets['targetUser'] === 'no one') continue;

					if (!(key in plugins.mafia.inspectionresults)) {
						plugins.mafia.inspectionresults[key] = {};
					}

					if (targetRole === 'Werewolf') {
						plugins.mafia.inspectionresults[key][targets['targetUser']] = 'Werewolf';
					} else {
						plugins.mafia.inspectionresults[key][targets['targetUser']] = 'Human';
					}
				}

				// Now sort out who kills who. Werewolves have priority, then Vigilantes and finally Mafia

				var deaths = {};

				function kill(targetUser, killer) {
					if (deaths.targetUser) return;

					for (var key in safe) {
						if (safe[key] === targetUser) {
							if (plugins.mafia.participants[key] === 'Bodyguard') {
								deaths[key] = 'Bodyguard';
								delete safe[key]; // Bodyguards only save from 1 death
								delete plugins.mafia.participants[key];
							}
							return;
						}
					}
					if (plugins.mafia.participants[targetUser] === '1-Shot Bulletproof Townie') {
						plugins.mafia.participants[targetUser] = 'Villager';
						return;
					}
					if (plugins.mafia.participants[targetUser] === 'Bomb') {
						deaths[killer] = plugins.mafia.participants[killer];
						delete plugins.mafia.participants[killer];
					}
					deaths[targetUser] = plugins.mafia.participants[targetUser];
					delete plugins.mafia.participants[targetUser];
					plugins.mafia.nightactions[targetUser] = 'no one'; // incase wereworlf kills mafia killer
				}

				for (var key in plugins.mafia.nightactions['Werewolf']) {
					var targets = getTargets(key);
					if (targets['targetUser'] === 'no one') continue;

					kill(targets['targetUser'], key);
				}

				for (var key in plugins.mafia.nightactions['1-Shot Vigilante']) {
					var targets = getTargets(key);
					if (targets['targetUser'] === 'no one') continue;

					kill(targets['targetUser'], key);
					plugins.mafia.participants[key] = 'Villager';
				}

				for (var key in plugins.mafia.nightactions['Mafia']) {
					var targets = getTargets(key);
					if (targets['targetUser'] === 'no one') continue;

					kill(targets['targetUser'], key);
					break; // only first mafia can get a kill
				}

				var message = '';

				for (var key in deaths) {
					message += key + ' the ' + deaths[key] + ', ';
				}

				if (message === '') {
					if (Rooms.rooms.game) Rooms.rooms.game.add('|raw|<div class="broadcast-blue"><strong>No one was killed!</strong></div>');
				} else {
					if (Rooms.rooms.game) Rooms.rooms.game.add('|raw|<div class="broadcast-blue"><strong>The deaths tonight are: ' + message + '</strong></div>');
				}

				// check if any side has won

				var winner = [];

				for (var key in plugins.mafia.participants) {
					role = plugins.mafia.participants[key];

					if (role === 'Werewolf') {
						if (winner.indexOf('Werewolf') === -1) winner.push('Werewolf');
					} else if (role.indexOf('Mafia') !== -1 || role === 'Traitor') {
						if (winner.indexOf('Mafia') === -1) winner.push('Mafia');
					} else {
						if (winner.indexOf('Town') === -1) winner.push('Town');
					}

					if (winner.length > 1) break; // if more than 1 faction remains there is no winner
				}

				if (winner.length === 1) {
					if (Rooms.rooms.game) Rooms.rooms.game.add('|raw|<div class="broadcast-blue"><strong>' + winner[0] + ' Have won!</strong></div>');
					// reset everything to starting values

					plugins.mafia.status = 'off';
					plugins.mafia.totals = {};
					plugins.mafia.participants = {};
					plugins.mafia.inspectionresults = {};
					plugins.mafia.votes = {};

				} else {
					if (Rooms.rooms.game) Rooms.rooms.game.add('|raw|<div class="broadcast-blue"><strong>It is now day! The remaining players are: ' + Object.keys(plugins.mafia.participants).join(' ') + '</strong></div>');
				}

				plugins.mafia.nightactions = {Mafia: {}};
				plugins.mafia.stage = 'day';
				room.modchat = false;
			},

			mkill: 'modkill',
			modkill: function(target, room, user) {
				if (!this.can('ban', null, room)) return false;
				if (room.id !== 'game') return this.sendReply('You can only modkill in the Mafia room.');
				if (plugins.mafia.status !== 'on') return this.sendReply('There is no active mafia game.');
				target = this.splitTarget(target);
				var targetUser = this.targetUser;
				var targetUserid = toId(this.targetUsername);
				if (targetUserid === '' || !(targetUserid in plugins.mafia.participants)) return this.sendReply(this.targetUsername + ' is not participating in this mafia game or has died');
				var role = plugins.mafia.participants[targetUserid];

				if (role.indexOf('Mafia') !== -1 && role !== 'Mafia Pretty Lady' && role !== 'Mafia Seer') {
					role = 'Mafia';
				}

				delete plugins.mafia.participants[targetUserid];

				if (plugins.mafia.nightactions.role) {
					delete plugins.mafia.nightactions.role[targetUserid];
				}

				if (Rooms.rooms.game) Rooms.rooms.game.add('|raw|<div class="broadcast-blue"><strong>' + this.targetUsername + ' the ' + role + ' was killed by a mod!</strong></div>');

				var winner = [];

				for (var key in plugins.mafia.participants) {
					role = plugins.mafia.participants[key];

					if (role === 'Werewolf') {
						if (winner.indexOf('Werewolf') === -1) winner.push('Werewolf');
					} else if (role.indexOf('Mafia') !== -1 || role === 'Traitor') {
						if (winner.indexOf('Mafia') === -1) winner.push('Mafia');
					} else {
						if (winner.indexOf('Town') === -1) winner.push('Town');
					}

					if (winner.length > 1) break; // if more than 1 faction remains there is no winner
				}

				if (winner.length === 1) {
					if (Rooms.rooms.game) Rooms.rooms.game.add('|raw|<div class="broadcast-blue"><strong>' + winner[0] + ' Have won!</strong></div>');
					// reset everything to starting values

					plugins.mafia.status = 'off';
					plugins.mafia.stage = 'day';
					plugins.mafia.totals = {};
					plugins.mafia.participants = {};
					plugins.mafia.nightactions = {Mafia: {}};
					plugins.mafia.inspectionresults = {};
					plugins.mafia.votes = {};
					room.modchat = false;
				}
			},

			insp: 'inspections',
			inspections: function(target, room, user) {
				if (room.id !== 'game') return this.sendReply('You can only see mafia votes in the Mafia room.');
				if (plugins.mafia.status !== 'on') return this.sendReply('A mafia game hasn\'t started yet');
				if (plugins.mafia.participants[user.userid] !== 'Cop' && plugins.mafia.participants[user.userid] !== 'Mafia Seer') return this.sendReply('You are not a cop or mafia seer');
				if (!(user.userid in plugins.mafia.inspectionresults)) return this.sendReply('You dont have any inspections yet');

				return this.sendReply('The results of your inspections are: ' + require("util").inspect(plugins.mafia.inspectionresults[user.userid]));
			},

			mvotes: function(target, room, user) {
				if (room.id !== 'game') return this.sendReply('You can only see mafia votes in the Mafia room.');
				if (plugins.mafia.status !== 'on') return this.sendReply('A mafia game hasn\'t started yet');
				if (plugins.mafia.stage !== 'day') return this.sendReply('You can only have votes during the day');
				if (!this.canBroadcast()) return;

				var totals = {};

				for (var key in plugins.mafia.votes) {
					if (plugins.mafia.votes[key] in totals) {
						totals[plugins.mafia.votes[key]]++;
					} else {
						totals[plugins.mafia.votes[key]] = 1;
					}
				}

				return this.sendReply('There are currently ' + Object.keys(plugins.mafia.participants).length + ' active players. Current votes are: ' + require("util").inspect(totals));
			},

			players: function(target, room, user) {
				if (room.id !== 'game') return this.sendReply('You can only use this command in the Mafia room.');
				if (plugins.mafia.status !== 'on') return this.sendReply('A mafia game hasn\'t started yet');
				if (!this.canBroadcast()) return;
				return this.sendReply('There are currently ' + Object.keys(plugins.mafia.participants).length + ' active players. Current players are: ' + Object.keys(plugins.mafia.participants).join(' '));
			},

			roles: function(target, room, user) {
				if (room.id !== 'game') return this.sendReply('You can only use this command in the Mafia room.');
				if (plugins.mafia.status !== 'on') return this.sendReply('A mafia game hasn\'t started yet');
				if (!this.canBroadcast()) return;

				var totals = {};

				for (var key in plugins.mafia.participants) {
					var role = plugins.mafia.participants[key];

					if (role in totals) {
						totals[role]++;
					} else {
						totals[role] = 1;
					}
				}

				return this.sendReply('Current roles are: ' + require("util").inspect(totals));
			},

			mafiahelp: function(target, room, user) {
				if (room.id !== 'game') return this.sendReply('You can only use this command in the Mafia room.');
				if (!this.canBroadcast()) return;
				this.sendReplyBox(
					'<strong>Player commands:</strong><br />' +
					'- /joinmafia: Join the current mafia game (only available during signups)<br />' +
					'- /leavemafia: leave the current mafia game (only available during signups)<br />' +
					'- /lynch <em>name</em>: Vote to lynch the target. If a target is not given then it is no lynch. Only available during the day<br />' +
					'- /votes: See current lynch votes<br />' +
					'- /players: See the current living players<br />' +
					'- /roles: See what roles are still alive<br />' +
					'- /inspections: See the results of your inspections. Only available to Cop and Mafia Seer<br />' +
					'- /nightaction <em>name</em>: Use your nightaction on the target. Only available to roles with nightactions and only during the night<br />' +
					'<br />' +
					'<strong>Admin commands:</strong><br />' +
					'- /startmafia: Start signups for a mafia game<br />' +
					'- /endsignups: End signups with current players and start a mafia game. Minimum 3 players<br />' +
					'- /modkill <em>name</em>: Kill a target<br />'
				);
			}
		}
	 }
};