export default function Heading({title, subheading} ){
    return(
    <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span
        style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "clamp(9px, 1.5vw, 12px)",
            color: "#ff69b4",
            letterSpacing: 4,
            textTransform: "uppercase",
            display: "block",
            marginBottom: 12,
            opacity: 0.7,
        }}
        >
        {subheading}
        </span>
        <h2
        style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(22px, 4vw, 38px)",
            fontWeight: 900,
            color: "#ffe0ef",
            margin: 0,
            textShadow: "0 0 20px #ff69b480",
        }}
        >
        {title}
        </h2>
    </div>
    )

}