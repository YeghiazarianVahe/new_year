import { CONFIG } from "./data/config";
import Hero from "./components/Hero";
import Counter from "./components/Counter";
import Gallery from "./components/Gallery";
import Letter from "./components/Letter";


export default function App() {
  return (
    
    <div className="container fadeIn">
      <Hero />
      <div className="section">
        <div className="card">
          <Counter startISO={CONFIG.relationshipStart} />
        </div>
      </div>

      <div className="section">
        <Gallery />
      </div>

      <div className="section">
        <Letter />
      </div>

      <div className="section small muted">
        Made with ❤️ for {CONFIG.herName}
      </div>
    </div>
  );
}
