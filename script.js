// componen header
const logo = document.querySelector("#logo");
const menu = document.querySelector(".navbar .menu");
const teksMenu = document.querySelector(".navbar .menu .teks");
const nav = document.querySelector(".navbar .nav");
const navbar = document.querySelector(".navbar");
// Componen tools
const stalkInstagram = document.getElementById("stalkInstagram");
const modalStalk = document.querySelector(".tools #modalStalk");
const modalNasihat = document.querySelector(".tools #modalNasihat");
const closeWarna = document.querySelector(".tools #closeWarna");
const closeInstagram = document.querySelector(".tools #closeStalk");
const closeNasihat = document.querySelector(".tools #closeNasihat");
const nasihatGenerator = document.getElementById("nasihatGenerator");
const warnaGenerator = document.getElementById("warnaGenerator");
// Componen Tools INstagram
const user = document.getElementById("user");
const profile = document.getElementById("profile");
const username = document.getElementById("username");
const nickname = document.getElementById("nickname");
const bio = document.getElementById("bio");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const video = document.getElementById("video");
const likes = document.getElementById("likes");
const getUser = document.getElementById("getUsername");
const totalFollowers = document.getElementById("followers");
const boxResult = document.querySelector(".result");
// Componen Nasihat Generator
const idNasehat = document.getElementById("no");
const nasihat = document.getElementById("nasihat");
const getNasihat = document.getElementById("getNasihat");
// Componen Warna Generator
const preview = document.querySelector(".preview");
const getWarna = document.querySelector("#getWarna");
const hex = document.querySelector("#hex");
const rgb = document.querySelector("#rgb");
const hsl = document.querySelector("#hsl");
// Componen Contact
const namaUser = document.getElementById("namaUser");
const emailUser = document.getElementById("emailUser");
const pesanUser = document.getElementById("pesanUser");
const send = document.getElementById("send");
const reset = document.getElementById("reset");

/* ------------------------------------------------------------------------ */

// api key
let key = atob("S2V5Vmllbnpl");

// logow
logo.addEventListener("click", ()=> {
  window.location.href = "index.html";
});


// toggle menu
menu.addEventListener("click", () => {
  nav.classList.toggle("swap");

  // ganti nama
  if (nav.classList.contains("swap")) {
    teksMenu.innerText = "Close";
  } else {
    teksMenu.innerText = "Menu";
  }
})

// card
stalkInstagram.addEventListener("click", ()=> {
  modalStalk.style.display = "flex";
  stalkInstagram.style.display = "none";
});

nasihatGenerator.addEventListener("click", ()=> {
  modalNasihat.style.display = "flex";
  nasihatGenerator.style.display = "none";
  showNasehat();
});

warnaGenerator.addEventListener("click", ()=> {
  modalWarna.style.display = "flex";
  warnaGenerator.style.display = "none";
  getColor();
});

closeWarna.addEventListener("click", ()=> {
  modalWarna.style.display = "none";
  warnaGenerator.style.display = "flex";
});
closeNasihat.addEventListener("click", ()=> {
  modalNasihat.style.display = "none";
  nasihatGenerator.style.display = "flex";
});

closeInstagram.addEventListener("click", ()=> {
  modalStalk.style.display = "none";
  stalkInstagram.style.display = "flex";
});

// Tools Stalk Instagram
getUser.addEventListener("click", stalkTiktok);

function stalkTiktok() {
  if (user.value === "") {
    alert("Username tidak boleh kosong")
  } else {
    getUser.innerText = "Memuat Data..";

    fetch(`https://api.lolhuman.xyz/api/stalktiktok/${user.value}?apikey=${key}`)
    .then(rsp => rsp.json())
    .then(data => {
      user.value = ""
      getUser.innerText = "Stalk";

      boxResult.style.display = "block";

      profile.src = data.result.user_picture;

      if (data.result.username === "") {
        username.innerText = "Tidak ada Username";
      } else {
        username.innerText = data.result.username;
      }

      if (data.result.nickname === "") {
        nickname.innerText = "Tidak ada Nickname";
      } else {
        nickname.innerText = data.result.nickname;
      }

      if (data.result.bio === "") {
        bio.innerText = "Tidak ada Bio";
      } else {
        bio.innerText = data.result.bio;
      }

      followers.innerText = data.result.followers;

      following.innerText = data.result.followings;

      video.innerText = data.result.video;

      likes.innerText = data.result.likes;
    })
  }
}

// tools nasihat

getNasihat.addEventListener("click", showNasehat)

// fungsi nasihat
function showNasehat() {
  idNasehat.innerHTML = ".";
  nasihat.innerHTML = "Mohon tunggu...";
  fetch("https://api.adviceslip.com/advice")
  .then(rsp => rsp.json())
  .then(data => {
    idNasehat.innerHTML = data.slip.id;
    toIndo(data.slip.advice, nasihat);
  })
}

// translate
function toIndo (data, element) {
  fetch(`https://betabotz-api.herokuapp.com/api/other/translate?kata=${data}&apikey=BetaBotz`)
  .then(rsp => rsp.json())
  .then(data1 => {
    element.innerHTML = data1.result.text;
  })
}

// tools warna generator
getWarna.addEventListener("click", getColor);

async function getColor() {
  getWarna.innerText = "Memuat...";
  fetch("https://x-colors.herokuapp.com/api/random")
  .then(rsp => rsp.json())
  .then(data => {
    getWarna.innerText = "Generate";
    preview.style.backgroundColor = data.hex;
    hex.innerHTML = data.hex;
    rgb.innerHTML = data.rgb;
    hsl.innerHTML = data.hsl;
    love.style.color = data.hex;
    link.style.color = data.hex
  })
}


/* Contact */

send.addEventListener("click", kirim);
reset.addEventListener("click", ulang);

const noWA = 6285156225852;

function kirim() {

  if (namaUser.value === "") {
    alert("Periksa lagi Nama, Email, dan Pesan Anda ");
  } else if (pesanUser.value === "") {
    alert("Periksa lagi Nama, Email, dan Pesan Anda ");
  } else if (emailUser.value === "") {
    alert("Periksa lagi Nama, Email, dan Pesan Anda ");
  } else {
    //      const format = {
    //     pembatas: "---------------------------------------------------",
    //     enter: "\n\n",
    //     asal : "📥 *Pesan dari Website*",
    //     detail: "🔎 *Detail Pesan",
    //     akhir: "👾 Jangan Lupa di Balas",
    //     nama: `Nama  :     ${namaUser.value}`,
    //     email: `Email  :     ${emailUser.value}`,
    //     pesan: `pesan  :     "${pesanUser.value}"`,
    // }

    // let group = `${format.pembatas} ${format.enter} ${format.asal} ${format.enter} ${format.pembatas} ${format.enter} ${format.detail} ${format.enter} ${format.nama} ${format.enter} ${format.email} ${format.enter} ${format.pesan} ${format.enter} ${format.pembatas} ${format.enter} ${format.akhir} ${format.enter} ${format.pembatas}`;

    //buat pesan
    let pembatas = "---------------------------------------------------";
    let enter = "\n\n";
    let asal = "📥 *Pesan dari Website*";
    let detail = "🔎 *Detail Pesan";
    let akhir = "👾 Jangan Lupa di Balas";
    let nama = "Nama  :  " + namaUser.value;
    let email = "Email :   " + emailUser.value;
    let pesan = "Pesan :   "+ enter + '" '+pesanUser.value+' "';

    //gabungin pesan jadi satu
    let group = pembatas + enter + asal + enter + pembatas + enter + detail + enter + nama + enter + email + enter + pesan + enter + pembatas + enter + akhir + enter + pembatas;


    let enc = encodeURIComponent(group);
    let createLink = `https://wa.me/${noWA}?text=${enc}`

    send.innerText = "Tunggu...";
    setTimeout(function() {
      window.open(createLink);
      ulang();
    }, 1500);
  }

}

function ulang() {
  namaUser.value = "";
  emailUser.value = "";
  pesanUser.value = "";
  send.innerText = "Kirim";
}
/* end Contact */