
import './App.css';
import Main, { Card } from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="body">
      <Card/>
      </div> 
    </div>
  );
}

export default App;
