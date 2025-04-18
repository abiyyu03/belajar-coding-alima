const perkalian = function (nilai1, nilai2) {
	return nilai1 * nilai2;
};

const weatherInMinecraft = function (kondisi, waktu) {
	return `Cuaca ${waktu} ini sedang ${kondisi}`;
};

console.log(perkalian(12, 12));
console.log(weatherInMinecraft('Hujan', 'Siang'));
