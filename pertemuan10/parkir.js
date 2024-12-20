// Menghitung biaya parkur
function hitungParkir() {
    let jamMasuk = document.getElementById("jam_masuk").value;
    let jamKeluar = document.getElementById("jam_keluar").value;
    let lamaParkir = jamKeluar - jamMasuk;
    console.log(lamaParkir);

    // Biaya 2 jam Pertama
    let biayaParkir = 3000;
    lamaParkir -= 2;

    // Hitung sisa jam
    if (lamaParkir > 0) {
        biayaParkir = biayaParkir + (lamaParkir * 1000);
    }

    console.log(biayaParkir);

    // Tampilkan hasil
    document.getElementById("waktu").innerHTML= lamaParkir + 2;
    document.getElementById("biaya_parkir").innerHTML =biayaParkir;

}