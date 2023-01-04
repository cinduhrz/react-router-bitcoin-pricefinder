import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      {/* Outlet connects App to router */}
      <Outlet/>
    </div>
  );
}

export default App;
