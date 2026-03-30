"use client";
export default function Hero() {

  return (
    <>
    {/* Radial glow backdrop */}
    <div
      style={{
        position: "absolute",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        width: 600,
        height: 600,
        background: "radial-gradient(ellipse, #e8527a18 0%, transparent 70%)",
        pointerEvents: "none",
      }}
    />

    {/* Orbiting mini planet */}
    <div style={{ position: "absolute", top: "25%", left: "50%", width: 0, height: 0 }}>
      <div style={{ animation: "orbit 12s linear infinite" }}>
        <svg width="5" height="5" viewBox="0 0 10 10" 
          style={{
            imageRendering: "pixelated",
            animation: "growShrink 12s linear infinite" 
          }}>
          <defs>
            <radialGradient id="sphereGradient" cx="0.3" cy="0.3" r="0.7">
              <stop offset="0%" stopColor="#54cea7" />
              <stop offset="100%" stopColor="#0d2147" /> 
            </radialGradient>
            <filter id="innerShadow" x="0%" y="0%" width="100%" height="100%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="0.2" result="blur"/>
              <feOffset in="blur" dx="0.3" dy="0.3" result="offset"/>
              <feFlood floodColor="rgba(0,0,0,0.3)" result="flood"/>
              <feComposite in="flood" in2="offset" operator="in" result="shadow"/>
              <feComposite in="shadow" in2="SourceGraphic" operator="over"/>
            </filter>
          </defs>
          <circle cx="4" cy="4" r="3.2" fill="url(#sphereGradient)" filter="url(#innerShadow)"/>
        </svg>
      </div>
    </div>

    {/* Main floating planet */}
    <div style={{ animation: "floatPlanet 6s ease-in-out infinite", marginBottom: 40 }}>
      <img src="/main-planet.svg" alt="Main Planet" />
    </div>

    

    {/* Eyebrow */}
    <div
      style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: "clamp(9px, 1.5vw, 12px)",
        color: "#ff69b4",
        letterSpacing: 8,
        marginBottom: 24,
        opacity: 0.8,
        animation: "fadeIn 0.8s ease both",
      }}
    >
      TRANSMISSION FROM THE FUTURE
    </div>

    {/* Headline */}
    <h1
      style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: "clamp(36px, 7vw, 80px)",
        fontWeight: 900,
        lineHeight: 1.1,
        color: "#ffe0ef",
        animation: "fadeIn 0.8s 0.2s ease both, glitch 8s 2s infinite",
        textShadow: "0 0 40px #ff69b460, 0 0 80px #e8527a20",
        marginBottom: 28,
      }}
    >
      WE BUILD
      <br />
      <span style={{ color: "#ff69b4" }}>BEYOND</span>
      <br />
      ORBIT
    </h1>

    {/* Subheading */}
    <p
      style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "clamp(12px, 1.8vw, 15px)",
        color: "#a06080",
        lineHeight: 2,
        maxWidth: 520,
        marginBottom: 48,
        animation: "fadeIn 0.8s 0.4s ease both",
      }}
    >
      Full-stack digital studio crafting pixel-perfect experiences, AI-powered systems, and
      interfaces that feel like the future.
    </p>

    {/* CTAs */}
    <div
      style={{
        display: "flex",
        gap: 16,
        flexWrap: "wrap",
        justifyContent: "center",
        animation: "fadeIn 0.8s 0.6s ease both",
      }}
    >
      <a
      href={"#contact"}
        style={{
          background: "linear-gradient(90deg, #e8527a, #c0144a)",
          border: "none",
          color: "#ffe0ef",
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 10,
          padding: "18px 36px",
          cursor: "pointer",
          letterSpacing: 3,
          animation: "pulseGlow 3s ease infinite",
          transition: "filter 0.2s, transform 0.1s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = "brightness(1.2)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = "none";
          e.currentTarget.style.transform = "none";
        }}
      >
        START MISSION
      </a>
      <a
      href={"#work"}
        style={{
          background: "transparent",
          border: "2px solid #6b1a3a",
          color: "#ff69b4",
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 10,
          padding: "18px 36px",
          cursor: "pointer",
          letterSpacing: 3,
          transition: "border-color 0.2s, background 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#ff69b4";
          e.currentTarget.style.background = "#ff69b410";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#6b1a3a";
          e.currentTarget.style.background = "transparent";
        }}
      >
        VIEW WORK ↓
      </a>
    </div>
    
      {/* Scroll indicator */}
    <div
      style={{
        margin: "100px 0 0 0",
        transform: "translateX(-50%)",
        fontFamily: "'Press Start 2P', monospace",
        fontSize: 7,
        color: "#6b1a3a",
        letterSpacing: 4,
        animation: "fadeIn 1s 1s ease both",
      }}
    >
      ▼ SCROLL ▼
    </div>
    </>
  )
}