import { CONFIG } from "../data/config";

export default function Letter() {
  return (
    <div className="card">
      <div style={{ fontSize: 18 }}>{CONFIG.letter.title}</div>
      <div className="muted" style={{ marginTop: 10, whiteSpace: "pre-line" }}>
        {CONFIG.letter.body}
      </div>
      <div style={{ marginTop: 12, opacity: 0.9 }}>
        {CONFIG.letter.signature}
      </div>
    </div>
  );
}
