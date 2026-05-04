import React, { useEffect, useRef } from "react";

const CONFIG = {
  PARTICLE_COUNT_DESKTOP: 80,
  PARTICLE_COUNT_MOBILE: 40,
  PARTICLE_COLOR: "rgba(255,255,255,0.1)",
  PARTICLE_SIZE: 2,
  MOUSE_RADIUS: 100,
  RETURN_SPEED: 0.09,
  DRAG: 0.3,
  FORCE_MULTIPLIER: 5,
};

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  const mouse = useRef({
    x: null,
    y: null,
    radius: CONFIG.MOUSE_RADIUS,
  });

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let particles = [];

    // =========================
    // Resize Canvas
    // =========================
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initParticles();
    };

    // =========================
    // Particle Class
    // =========================
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.offsetWidth;
        this.y = Math.random() * canvas.offsetHeight;
        this.floatX = (Math.random() - 0.5) * 0.3;
        this.floatY = (Math.random() - 0.5) * 0.3;
        this.angle = Math.random() * Math.PI * 2;

        this.floatRadius = Math.random() * 15 + 5;

        this.floatSpeed = Math.random() * 0.01 + 0.005;

        this.baseX = this.x;
        this.baseY = this.y;

        this.vx = 0;
        this.vy = 0;

        this.size = CONFIG.PARTICLE_SIZE;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = CONFIG.PARTICLE_COLOR;
        ctx.fill();
      }

      update() {
        const mouseX = mouse.current.x;
        const mouseY = mouse.current.y;
        this.angle += this.floatSpeed;

        const floatX = Math.cos(this.angle) * this.floatRadius;

        const floatY = Math.sin(this.angle) * this.floatRadius;

        this.vx += Math.cos(this.angle) * 0.02;
        this.vy += Math.sin(this.angle) * 0.02;

        // =========================
        // Mouse Interaction
        // =========================
        if (mouseX !== null && mouseY !== null) {
          let dx = mouseX - this.x;
          let dy = mouseY - this.y;

          let distance = Math.sqrt(dx * dx + dy * dy);

          // Prevent divide by zero
          if (distance === 0) distance = 0.01;

          if (distance < mouse.current.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;

            const force =
              (mouse.current.radius - distance) / mouse.current.radius;

            this.vx -= forceDirectionX * force * CONFIG.FORCE_MULTIPLIER;

            this.vy -= forceDirectionY * force * CONFIG.FORCE_MULTIPLIER;
          }
        }

        // =========================
        // Return To Origin
        // =========================
        this.vx += (this.baseX + floatX - this.x) * CONFIG.RETURN_SPEED;
        this.vy += (this.baseY + floatY - this.y) * CONFIG.RETURN_SPEED;

        // =========================
        // Drag / Smooth Motion
        // =========================
        this.vx *= CONFIG.DRAG;
        this.vy *= CONFIG.DRAG;

        this.x += this.vx;
        this.y += this.vy;

        this.draw();
      }
    }

    // =========================
    // Init Particles
    // =========================
    const initParticles = () => {
      particles = [];

      const count =
        window.innerWidth < 768
          ? CONFIG.PARTICLE_COUNT_MOBILE
          : CONFIG.PARTICLE_COUNT_DESKTOP;

      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    // =========================
    // Animation Loop
    // =========================
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particles.forEach((particle) => particle.update());

      animationFrameId = requestAnimationFrame(animate);
    };

    // =========================
    // Mouse Events
    // =========================
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();

      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    // =========================
    // Events
    // =========================
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // =========================
    // Start
    // =========================
    resizeCanvas();
    animate();

    // =========================
    // Cleanup
    // =========================
    return () => {
      window.removeEventListener("resize", resizeCanvas);

      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("mouseleave", handleMouseLeave);

      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />;
};

export default ParticleBackground;