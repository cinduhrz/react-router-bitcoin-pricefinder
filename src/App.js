import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Outlet connects App to router */}
      <Outlet/>
    </div>
  );
}

export default App;
