const angka1 = document.querySelector(".angka1");
const angka2 = document.querySelector(".angka2");
const tambah = document.querySelector(".tambah");
const kurang = document.querySelector(".kurang");
const bagi = document.querySelector(".bagi");
const kali = document.querySelector(".kali");
const hasil = document.querySelector(".hasil");

angkaPertama = 0;
angkaKedua = 0;
let operatorHitung = "";

angka1.addEventListener("input", (e) => (angkaPertama = e.target.value));
angka2.addEventListener("input", (e) => (angkaKedua = e.target.value));
kurang.addEventListener("click", () => operator("kurang"));
bagi.addEventListener("click", () => operator("bagi"));
kali.addEventListener("click", () => operator("kali"));
tambah.addEventListener("click", () => operator("tambah"));

function operator(value) {
  operatorHitung = value;

  switch (operatorHitung) {
    case "kurang":
      hasil.innerHTML = parseInt(angkaPertama) - parseInt(angkaKedua);
      break;
    case "bagi":
      hasil.innerHTML = parseInt(angkaPertama) / parseInt(angkaKedua);

      break;
    case "kali":
      hasil.innerHTML = parseInt(angkaPertama) * parseInt(angkaKedua);

      break;
    case "tambah":
      hasil.innerHTML = parseInt(angkaPertama) + parseInt(angkaKedua);

      break;
  }
}