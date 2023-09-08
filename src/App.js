import './App.css';
import "./mockData"
import mockData from './mockData';

function App() {
  return (
    <div style={{padding:"50px"}}>
      <h1 style={{marginTop:'20px', color:'blue'}}>Kanban UI</h1>
      {console.log(mockData)}
    </div>
  );
}

export default App;
