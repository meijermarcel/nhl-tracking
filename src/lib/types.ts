export class Standings {
	members: MemberStanding[] = [];
}

export class MemberStanding {
	name = '';
	wins = 0;
	losses = 0;
	overtimeLosses = 0;
	points = 0;
	teams: Team[] = [];
	gamesBehind = 0;
	collapsed = true;

	constructor(name: string) {
		this.name = name;
	}
}

export class Team {
	name = '';
	wins = 0;
	losses = 0;
	overtimeLosses = 0;
	points = 0;
	img = '';
}

export class Game {
	awayTeam = new GameTeam('', '');
	homeTeam = new GameTeam('', '');
	status = '';
	showScore = true;
	outcome = '';
}

export class GameTeam {
	name = '';
	memberName = '';
	score? = 0;
	logoSrc = '';

	constructor(name: string, memberName: string, logoSrc?: string) {
		this.name = name;
		this.memberName = memberName;
		this.logoSrc = logoSrc || '';
	}
}

export class Stats {
	batting: StatField[] = [];
	pitching: StatField[] = [];

	constructor() {
		this.batting.push(new StatField('Home Runs'));
		this.batting.push(new StatField('RBI'));
		this.batting.push(new StatField('AVG'));
		this.batting.push(new StatField('OBP'));
		this.batting.push(new StatField('OPS'));
		this.batting.push(new StatField('Slugging'));
		this.batting.push(new StatField('Stolen Bases'));
		this.batting.push(new StatField('Walks'));
		this.batting.push(new StatField('Strikeouts'));

		this.pitching.push(new StatField('Wins'));
		this.pitching.push(new StatField('Losses'));
		this.pitching.push(new StatField('ERA'));
		this.pitching.push(new StatField('Saves'));
		this.pitching.push(new StatField('Hits'));
		this.pitching.push(new StatField('Home Runs'));
		this.pitching.push(new StatField('Walks'));
		this.pitching.push(new StatField('Strikeouts'));
	}
}

export class StatField {
	name = '';
	members: MemberStat[] = [
		new MemberStat('Marcel'),
		new MemberStat('Nate'),
		new MemberStat('Bob'),
		new MemberStat('Tom'),
		new MemberStat('Carter')
	];

	constructor(name: string) {
		this.name = name;
	}
}

export class MemberStat {
	name = '';
	value = 0;

	constructor(name: string) {
		this.name = name;
	}
}

export class BattingStat {
	hr = 0;
	rbi = 0;
	avg = 0;
}

export class PitchingStat {
	wins = 0;
	losses = 0;
	era = 0;
	saves = 0;
	hits = 0;
	hr = 0;
	bb = 0;
	strikeouts = 0;
}

export class OddsGame {
	id = '';
	sport_key = '';
	sport_title = '';
	commence_time = new Date();
	home_team = '';
	away_team = '';
	bookmakers: OddsBookmaker[] = [];
}

export class OddsBookmaker {
	key = '';
	title = '';
	last_update = new Date();
	markets: OddsMarket[] = [];
}

export class OddsMarket {
	key = '';
	last_update = new Date();
	outcomes: OddsOutcome[] = [];
}

export class OddsOutcome {
	name = '';
	price = 0;
	point = 0;
}

export class MLBGame {
	home_team = '';
	away_team = '';
	home_spread = 0;
	away_spread = 0;
	total = 0;
	date_time = new Date();
}

export class SelectValue {
	label = '';
	value = '';
}
