import { CONFIG } from "../data/config";

export default function Gallery() {
  return (
    <div className="card">
      <div style={{ fontSize: 18, marginBottom: 20 }}>Gallery</div>

      <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
        {CONFIG.gallery.map((item, i) => {
          const reversed = i % 2 === 1;

          return (
            <div
              key={`${item.src}-${i}`}
              style={{
                display: "flex",
                gap: "18px",
                alignItems: "center",
                flexDirection: reversed ? "row-reverse" : "row",
              }}
            >
              {/* Image */}
              <div style={{ width: "50%" }}>
                <img src={item.src} alt={item.title} />
              </div>

              {/* Text */}
              <div style={{ width: "50%", textAlign: reversed ? "right" : "left" }}>
                <h3 style={{ margin: 0, fontSize: 18 }}>{item.title}</h3>
                <p className="muted" style={{ marginTop: 8, lineHeight: 1.6 }}>
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
