
  // 🌟 Mostrar carta y hacer scroll suave
  function mostrarCarta() {
    const carta = document.getElementById("carta");
    carta.style.display = "block";

    // Scroll suave hasta la carta
    setTimeout(() => {
      carta.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  }

  // ✨ Partículas mágicas de fondo
  const canvas = document.getElementById("particulas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random()
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    }
    requestAnimationFrame(drawParticles);
  }

  drawParticles();

  // 💌 Enviar mensaje sin redirección y mostrar aviso
  document.getElementById("formularioRomantico").addEventListener("submit", function (e) {
    e.preventDefault();

    const confirmar = confirm("💌 ¿Quieres enviar este mensaje especial?");
    if (!confirmar) return;

    const form = e.target;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/reydihuallparttupa8@gmail.com", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        document.getElementById("mensaje-exito").style.display = "block";
        form.reset();
      } else {
        alert("❌ Ocurrió un error. Intenta más tarde.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("❌ No se pudo enviar el mensaje.");
    });
  });


