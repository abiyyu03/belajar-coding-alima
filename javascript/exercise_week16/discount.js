// TODO: Buat total belanja = 150000
// TODO: Jika belanja di atas 100000, dapat diskon 10%
// TODO: Hitung dan cetak total bayar setelah diskon

let total = 1000;
let bayar = total;

if (total > 100000) {
	diskon = total * (10 / 100);
	bayar = total - diskon;
}

// TODO: Jika perlu, kurangi 10%
console.log('Total bayar:', bayar);
