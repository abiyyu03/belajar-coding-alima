// buatlah array berisi 4 nama-nama game
// array tersebut dibuat di dalam fungsi bernama listGame
// kemudian di dalam fungsi tersebut, tambahkan
// ...1 value tambahan nama game favorit kamu

// buatlah argumen / parameter dari function tersebut,
// yang mana argument tersebut diletakan di dalam fungsi push()
// jadi yang ditambahkan ke array adalah
// argumen dari function tersebut
function daftarGame(namaGame) {
	const list = ['plant vs zombie garden warfare 2', 'Outlast 2', 'adventure of zelda', 'battlefield 1'];
	list.push(namaGame);
	console.log(list);
}

daftarGame('farcry');
