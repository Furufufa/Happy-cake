import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './views/Home';
import Contact from './views/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
