export default function Scanlines() {
    return (
        <div
            style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 100,
            backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,0,80,0.03) 2px, rgba(255,0,80,0.03) 4px)",
            }}
        />
)}