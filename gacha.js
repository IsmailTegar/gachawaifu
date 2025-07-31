const kategori = document.body.dataset.kategori;

let waifus = [];
let zonk = { name: "Zonk gak terdaftar 😬", img: "/img/zonk.jpg" };

if (kategori === "pink") {
  waifus = [
    { name: "Hoshino Ojii-san 🥰", img: "pink/hoshino.jpg" },
    { name: "Bocchi Si Autis(tapi bolehlah😋)", img: "pink/bocchi.jpg" },
    { name: "Yaemiko Mommy 😳", img: "pink/yaemiko.jpg" },
    { name: "Zero Two ak mw 5", img: "pink/zerotwo.jpg" },
    { name: "Anya Chaaaann 😫", img: "pink/anya.jpg" },
    { name: "Ram uwoogh!!! 🤗", img: "pink/ram.jpg" },
    { name: "Chika imut tapi besar 😳", img: "pink/fujiwara.jpg" },
];
  zonk = { name: "Wkwkwkw. masnya loh cik 👹👻", img: "pink/ironi.jpg" };
} else if (kategori === "hitam") {
    waifus = [
        { name: "Azusa Nyan~~ 😻", img: "hitam/Azusa.jpg" },
        { name: "Megumin, Explossionnnn!!! 🎇🤯", img: "hitam/megumin.jpg" },
        { name: "Kaguya-sama, Kalau suka ngomong lah 😑", img: "hitam/kaguya.jpg" },
        { name: "Kurumi, jauh jauh Karbit 😡", img: "hitam/kurumi.jpg" },
        { name: "Waguri, Ini sih Istriku 😘😘", img: "hitam/waguri.jpg" },
        { name: "Yuuki, Insect pun Insect lah 🦗🦗 ", img: "hitam/yuki.jpg" },
    ];
        zonk = { name: "Walah, Gek piye to kang 😹", img: "hitam/gatot.jpg" };
} else if (kategori === "biru") {
    waifus = [
        { name: "Ai Idol, Semoga panjang umur 🥳", img: "biru/Ai.jpg" },
        { name: "Anna, Menang kah? ", img: "biru/Anna.jpg" },
        { name: "Aqua, Dasar Dewi Sableng 😿", img: "biru/aqua.jpg" },
        { name: "Roxy, Istri Ketiga sih 😘", img: "biru/Roxy.jpg" },
        { name: "Ryo, Penghoetank 😩", img: "biru/ryo.jpg" },
        { name: "Mikuu, Istrimu Hologram Mass 😩", img: "biru/Miku.jpg" },
        { name: "Rem, Kasihan banget, sini sama aku aja😥 ", img: "biru/Rem.jpg" },
    ];
        zonk = { name: "weladalah rek, Ksatria 300 raja iblis villain 😈😈", img: "biru/fuad.jpg" };
} else {
      waifus = [
        { name: "Zonk gak terdaftar 😬", img: "/img/zonk.jpg" }
      ];
}
    



// Pisahkan waifu biasa dari zonk
const waifuBiasa = waifus.filter(w => w.name !== zonk.name);

// Ambil 4 waifu acak dari waifuBiasa
const randomWaifus = [...waifuBiasa].sort(() => 0.5 - Math.random()).slice(0, 4);

// Gabungkan 4 waifu + 1 zonk, lalu acak posisi mereka
const shuffled = [...randomWaifus, zonk].sort(() => 0.5 - Math.random());

function revealCard(index) {
  const cards = document.querySelectorAll('.gacha-card');
  cards.forEach((card, i) => {
    card.src = shuffled[i].img;
    card.style.cursor = "default";
  });

  cards[index].style.transform = "scale(1.2)";
  cards[index].style.border = "3px solid #ff69b4";

  const resultBox = document.getElementById("result");
  const resultText = document.getElementById("result-text");
  const resultImg = document.getElementById("result-img");

  resultBox.style.display = "block";
  resultBox.classList.add("animate__fadeInUp");
  resultImg.src = shuffled[index].img;

  if (shuffled[index] === zonk) {
  resultText.innerHTML = `
  😵‍💫 Kamu ZONK! <br>
  <span class="zonk-roast">“${shuffled[index].name}”</span>
`;
  resultText.classList.add("shake-zonk");
} else {
  resultText.textContent = `🎉 Kamu mendapatkan: ${shuffled[index].name}!`;
  resultText.classList.remove("shake-zonk"); // biar gak nempel kalau sebelumnya zonk
}


  cards.forEach(card => card.onclick = null);
}

