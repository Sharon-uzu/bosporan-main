import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import About from './Screens/About';
import Service from './Screens/Service';
import Resource from './Screens/Resource';
import Contact from './Screens/Contact';
import Service2 from './Screens/Service2';


function App() {

  return (
    <div className="App">
      
      
      <Routes>
            
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/service2' element={<Service2 />} />
        <Route path='/resource' element={<Resource />} />
        <Route path='/contact' element={<Contact />} />
        
      </Routes>
    </div>
  );
}

export default App;
