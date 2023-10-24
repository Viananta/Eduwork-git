// Membuat variabel pertama dengan angka 10
var angkaPertama = 10;

// Membuat variabel kedua dengan teks "saya belajar javascript"
var teksKedua = "saya belajar javascript";

// Menjumlahkan variabel pertama dan kedua
var hasil = angkaPertama + teksKedua;

// Mengecek apakah hasil adalah angka atau tidak
if (isNaN(hasil)) {
    // Jika hasil bukan angka, maka menjumlahkan variabel pertama dengan angka 21
    hasil = angkaPertama + 21;
}

console.log("Hasil: " + hasil);