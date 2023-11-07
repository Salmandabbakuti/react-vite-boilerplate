import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import githubLogo from "./assets/github.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Vite + React PWA Boilerplate</h2>
      <div className="card">
        <a
          href="https://github.com/Salmandabbakuti/react-vite-boilerplate/generate"
          target="_blank" rel="noreferrer"
        >
          <button className="github">
            <img src={githubLogo} alt="github" />
            Use this boilerplate
          </button>
        </a>
      </div>
    </>
  );
}

export default App;
