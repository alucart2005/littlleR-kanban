import "./App.css";
import "./mockData";
import { Kanban } from "./components/kanban/Kanban";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ marginTop: "20px", color: "blue" }}>Kanban UI</h1>
      <Kanban/>
    </div>
  );
}

export default App;
