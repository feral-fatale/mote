export default function Footer(){
    return(
        <footer style={{ 
            borderTop: "1px solid #2a0018",
            padding: "32px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            position: "relative",
            zIndex: 1,
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
                src="/icons/planet.png"
                alt="Mote Logo"
                style={{ width: '16px'}}
            />
            <span
                style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: 9,
                color: "#6b1a3a",
                letterSpacing: 3,
                }}
            >
                MOTE.TECH © 2025
            </span>
            </div>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "#3a0020" }}>
            Built in the void between stars.
            </span>
        </footer>
    )

}