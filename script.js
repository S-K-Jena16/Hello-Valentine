const params = new URLSearchParams(window.location.search);
const from = params.get("name") || "Someone";
const to = params.get("valentineName") || "You";

document.getElementById("title").innerText =
  `${to}, will you be my Valentine? ❤️`;

const music = document.getElementById("bgMusic");

// Auto play after interaction
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

// Photo Preview
document.getElementById("photoInput").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const img = document.getElementById("preview");
      img.src = reader.result;
      img.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

// YES Button Effects
document.querySelector(".yes").onclick = () => {
  music.play();

  confetti({
    particleCount: 200,
    spread: 90,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    confetti({
      particleCount: 300,
      spread: 120,
      shapes: ['circle'],
      colors: ['#ff4d6d', '#ffffff', '#ffb3c6']
    });
  }, 400);

  alert(`💖 YESSS! ${from} & ${to} forever 💖`);
};
