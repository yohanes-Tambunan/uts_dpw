const tombolSelengkapnya = document.getElementById("tombol-selengkapnya");
const teksTambahn = document.getElementById("teks tambahan");

tombolSelengkapnya.addEventListener("click", function() {
    teksTambahn.classList.toggle("sembunyi");

    if (teksTambahn.classList.contains("sembunyi")){
        tombolSelengkapnya.textContent = "Selengkapnya";
    }   else {
        tombolSelengkapnya.textContent = "Sembunyikan";
    }
});


const formKontak = document.getElementById("form-kontak");
const inputNama = document.getElementById("nama");
const pesanTerimaKasih = document.getElementById("pesan-terima-kasih");

formKontak.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama =inputNama.ariaValueMax;

    pesanTerimaKasih.textContent = "Terima Kasih, " + nama + "|";

    formKontak.reset();
});