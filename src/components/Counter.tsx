import { useEffect, useState } from "react";

function diffParts(from: Date, to: Date) {
  let delta = Math.floor((to.getTime() - from.getTime()) / 1000);

  const days = Math.floor(delta / 86400);
  delta -= days * 86400;

  const hours = Math.floor(delta / 3600);
  delta -= hours * 3600;

  const minutes = Math.floor(delta / 60);
  const seconds = delta - minutes * 60;

  return { days, hours, minutes, seconds };
}

export default function Counter({ startISO }: { startISO: string }) {
  const start = new Date(startISO);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const { days, hours, minutes, seconds } = diffParts(start, now);

  return (
    <div>
      <div className="small muted">Since {start.toDateString()}</div>

      <div
        style={{
          display: "flex",
          gap: 16,
          marginTop: 12,
          flexWrap: "wrap",
        }}
      >
        <TimeBox label="Days" value={days} />
        <TimeBox label="Hours" value={hours} />
        <TimeBox label="Minutes" value={minutes} />
        <TimeBox label="Seconds" value={seconds} />
      </div>

      <div className="small muted" style={{ marginTop: 10 }}>
        And I still choose you.
      </div>
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div
        style={{
            minWidth: 96,
            textAlign: "center",
            padding: "14px 12px",
            borderRadius: 18,
            border: "1px solid rgba(255,255,255,.12)",
            background:
            "linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.03))",
            boxShadow: "0 14px 40px rgba(0,0,0,.45)",
            backdropFilter: "blur(12px)",
        }}
        >

      <div style={{ fontSize: 28, fontWeight: 500 }}>{value}</div>
      <div className="small muted">{label}</div>
    </div>
  );
}
