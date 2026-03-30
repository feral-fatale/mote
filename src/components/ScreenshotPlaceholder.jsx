// ─── Screenshot Placeholder ───────────────────────────────────────────────────
//const ScreenshotPlaceholder: FC<ScreenshotPlaceholderProps> = ({ label, wide = false, src = "" }) => (
export default function ScreenshotPlaceholder({ label, wide = false, src = "" }) {
 
  return (
  <div
    style={{
      border: "2px solid #6b1a3a",
      background: "linear-gradient(160deg, #1a0010, #0d0008)",
      aspectRatio: wide ? "16/9" : "4/3",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: 12,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "linear-gradient(rgba(255,105,180,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,105,180,0.04) 1px, transparent 1px)",
          
        backgroundSize: "24px 24px",
      }}
    />
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
        letterSpacing: 2,
        zIndex: 1,
      }}
    >
      {label}
    </span>
    </div>
    )
}