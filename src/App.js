import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <div className="App flex w-screen">
      <div style={{ flex: ".97" }}>
        <div
          style={{ top: "0.1rem", paddingBottom: ".9rem" }}
          className="head sticky z-10 bg-headerbg"
        >
          <Header />
        </div>
        <TextEditor />
      </div>
      <div style={{ flex: ".035" }} className="mt-2">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
