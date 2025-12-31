import { CONFIG } from "../data/config";

export default function Hero() {
  return (
    <div className="card">
      <div className="small">
        {CONFIG.yourName} <span className="muted">→</span> {CONFIG.herName}
      </div>

      <h1 className="h1">{CONFIG.yearTitle}</h1>

      <div className="divider" />

      <div className="muted" style={{ marginTop: 10, fontSize: 16, lineHeight: 1.6 }}>
        {CONFIG.subtitle}
      </div>
    </div>
  );
}
