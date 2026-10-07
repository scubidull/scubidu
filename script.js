var STATIONS = [
  { tab:"妥",      emoji:"", image:"images/foto1.jpg", sub:"Estação 01", title:"abauti scubidu", text:"she/her - 2007 - scubidu ama só molieres - PR", tag:"67.0 FM" },

  { tab:"羞",    emoji:"", image:"images/foto2.jpg", sub:"Estação 02", title:"naosei", text:"scubidu fala de qualquer assunto, puxa assunto até de marca de miojo, fala demais, escreve as cosa todo erado tambe. Axo que so legau, tire suas coclusoes se quizé.", tag:"90.5 FM" },

  { tab:"夜",   emoji:"", image:"images/foto3.jpg", sub:"Estação 03", title:"coisa de assitir", text:"Gosto de anime, ja assisti alguns ai, desenho animado, principalmente jovens titãs e apenas um show, sou fã de ninjago também. Assisto bastante séries de médico e coisa policial, gosto bastante de O Mentalista. Tenho um hiperfoco na DC e não acompanho muita coisa da Marvel. Assisto F1 e todas as outras categorias e sou team REDBULL 3 VERSTAPI <3", tag:"93.3 FM" },

  { tab:"熱",  emoji:"", image:"images/foto4.jpg", sub:"Estação 04", title:"musga", text:"Escuto váriosestilos de música, não acompanho quase nenhum artista o hiperfoco fica só pra menina Lisa <3. Music so good even the devil may cry", tag:"96.7 FM" },

  { tab:"彡", emoji:"", image:"images/foto5.jpg", sub:"Estação 05", title:"jogus", text:"Ghost of Tsushima, Forza 5, todos os MK, GTAs, Gran Turismo, F1 simulador, Fortnite, Minecraft, Fogo gratis, God of War, Tekken, TODOS OS DA FRANQUIA LEGO!", tag:"99.9 FM" },

  { tab:"熱",  emoji:"", image:"images/foto6.jpg", sub:"Estação 06", title:"perfius", text:"outras contas ai, e tem a rant @scubidubidull", tag:"104.5 FM",

    links:[
      { icon:"instagram", url:"https://www.instagram.com/scubidull?stkn=bWlzdDNyeXc2dXB2" },
      { icon:"github",    url:"https://github.com/scubidull" },
      { icon:"telegram",  url:"https://t.me/scubidull" },
      { icon:"tiktok",    url:"https://www.tiktok.com/@redebullrace" },
      { icon:"spotify",   url:"https://open.spotify.com/user/313dqpjo5mpbnxw5s7l7hlbw7d3e?si=f1b18a1067204927" }
    ]
  }
];

var ICONS = {
  instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>',
  github:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  telegram:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
  tiktok:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
  spotify:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>'
};

var tabs = document.getElementById("tabs");
var card = document.getElementById("card");
var eq = document.getElementById("eq");
var led = document.getElementById("led");
var cass = document.getElementById("cass");
var pic = document.getElementById("pic");
var on = true;

for (var i = 0; i < 16; i++) { eq.appendChild(document.createElement("i")); }

STATIONS.forEach(function (s, i) {
  var b = document.createElement("button");
  b.className = "tab";
  b.textContent = s.tab;
  b.onclick = function () { tune(i); };
  tabs.appendChild(b);
});

function showPlaceholder(s) {
  pic.innerHTML = s.emoji + "<small>🖼️ coloque sua foto em<br>" + (s.image || "images/...") + "</small>";
}

function renderLinks(s) {
  var old = document.getElementById("links");
  if (old) old.remove();
  if (!s.links || !s.links.length) return;

  var box = document.createElement("div");
  box.id = "links";
  box.className = "links";

  s.links.forEach(function (l) {
    var a = document.createElement("a");
    var vazio = !l.url || l.url.indexOf("COLE_SEU_LINK") === 0;
    a.className = "social" + (vazio ? " vazio" : "");
    a.title = l.icon;
    a.setAttribute("aria-label", l.icon);
    a.innerHTML = ICONS[l.icon] || l.icon;
    if (vazio) {
      a.href = "#";
      a.onclick = function (e) { e.preventDefault(); };
    } else {
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    box.appendChild(a);
  });

  document.getElementById("tag").insertAdjacentElement("afterend", box);
}

function tune(i) {
  var s = STATIONS[i];
  [].forEach.call(tabs.children, function (b, k) { b.classList.toggle("on", k === i); });

  pic.innerHTML = "";
  if (s.image) {
    var img = new Image();
    img.alt = s.title;
    img.onload = function () { pic.innerHTML = ""; pic.appendChild(img); };
    img.onerror = function () { showPlaceholder(s); };
    img.src = s.image;
    showPlaceholder(s);
  } else {
    showPlaceholder(s);
  }

  document.getElementById("sub").textContent = s.sub;
  document.getElementById("h").textContent = s.title;
  document.getElementById("t").textContent = s.text;
  document.getElementById("tag").textContent = s.tag;
  document.getElementById("freq").textContent = "FM " + s.tag.replace(" FM", "");
  renderLinks(s);

  card.classList.remove("tune");
  void card.offsetWidth;
  card.classList.add("tune");
}

led.onclick = function () {
  on = !on;
  led.classList.toggle("on-led", on);
  cass.classList.toggle("playing", on);
  card.style.opacity = on ? 1 : 0.25;
};
cass.classList.add("playing");

setInterval(function () {
  [].forEach.call(eq.children, function (b) {
    var h = on ? Math.random() * 100 : 5;
    b.style.height = h + "%";
    b.classList.toggle("hot", h > 85);
  });
}, 130);

tune(0);