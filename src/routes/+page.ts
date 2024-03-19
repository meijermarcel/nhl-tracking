import { Game, GameTeam, MemberStanding } from '$lib/types';
import axios from 'axios';
import cheerio from 'cheerio';
import { members } from '$lib/global-var';

let standings: MemberStanding[] = [];

const url = 'https://www.cbssports.com/nhl/standings/regular/division/';
// export const load = (async ({ fetch, params }) => {
// 	return { members: standings };
// }) satisfies Standings;

// function to reset standings
const resetStandings = () => {
	standings = [
		new MemberStanding('Marcel'),
		new MemberStanding('Nate'),
		new MemberStanding('Bob'),
		new MemberStanding('Tom'),
		new MemberStanding('Carter')
	];
};

export const load = async () => {
	resetStandings();

	return axios.get(url).then((response) => {
		// Load HTML we fetched in the previous line
		const $ = cheerio.load(response.data);

		const listItems = $('tbody > tr');

		listItems.each((index, element) => {
			const teamFull = $(element).find('td').eq(0).text();
			const team = teamFull.split(' - ')[0];
			if (team) {
				const wins = $(element).find('td').eq(2).text().trim();
				const losses = $(element).find('td').eq(3).text().trim();
				const overtimeLosses = $(element).find('td').eq(4).text().trim();
				const points = $(element).find('td').eq(5).text().trim();
				const member = members.find((member) => member.teams.includes(team));
				const teamImg = $(element).find('td').eq(0).find('img').attr('data-lazy') || '';
				if (member) {
					const memberStanding = standings.find((standing) => standing.name === member.name);
					if (memberStanding) {
						memberStanding.wins += parseInt(wins);
						memberStanding.losses += parseInt(losses);
						memberStanding.overtimeLosses += parseInt(overtimeLosses);
						memberStanding.points += parseInt(points);
						memberStanding.teams.push({
							name: team,
							wins: parseInt(wins),
							losses: parseInt(losses),
							overtimeLosses: parseInt(overtimeLosses),
							points: parseInt(points),
							img: teamImg
						});
					}
				}
			}
		});

		// sort standings by points
		standings.sort((a, b) => b.points - a.points);

		// sort each member's teams by points, name
		standings.forEach((member) => {
			member.teams.sort((a, b) => b.points - a.points || a.name.localeCompare(b.name));
		});

		// calculate games behind
		standings.forEach((member, index) => {
			if (index === 0) {
				member.gamesBehind = 0;
			} else {
				const leader = standings[0];
				member.gamesBehind = leader.points - member.points;
			}
		});

		return { members: standings };
	});
};
