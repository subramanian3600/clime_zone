import "./App.css";
import IndexPage from "./components/IndexPage";

function App() {
  return (
    <div className="App">
      {window.innerWidth == 1920 ? (
        <IndexPage />
      ) : (
        <div>sorry! currently only view under 1920 x 1080 resolution</div>
      )}
    </div>
  );
}

export default App;
