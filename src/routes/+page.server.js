import { SECRET_RAWG_API_KEY } from '$env/static/private';

const rnd = (max) => Math.floor(Math.random() * max);

export const load = async ({ fetch }) => {
	const baseUrl = 'https://api.rawg.io/api';
	const gamesUrl = `${baseUrl}/games?key=${SECRET_RAWG_API_KEY}`;
    const ordering = ["name", "released", "added", "created", "updated", "rating", "metacritic"]

	const randomPage = rnd(1335) + 1;
    const gameIndex = rnd(5);
    const ord = rnd(ordering.length);

	const games = await fetch(`${gamesUrl}&page_size=5&page=${randomPage}&metacritic=1,100&ordering=${ordering[ord]}`);
    const allGames = (await games.json()).results;
	const game = allGames[gameIndex];
	const snapshots = await fetch(
		`${baseUrl}/games/${game.id}/screenshots?key=${SECRET_RAWG_API_KEY}`
	)
    const allSnapshots = (await snapshots.json()).results;

	return {
        answer: game.name,
		gameNames: allGames.map((gm) => gm.name),
		snapshot: allSnapshots[rnd(allSnapshots.length)].image
	};
};
