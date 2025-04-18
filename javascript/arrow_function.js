const summonAnimal = (namaHewan) => {
	let kalimat = `Kamu sudah mensummon hewan ${namaHewan}`;

	return kalimat;
};

const respawn = (koordinat) => `Respawned at ${koordinat}`;

console.log(summonAnimal('Cow'));
console.log(respawn(1.1872987897));
