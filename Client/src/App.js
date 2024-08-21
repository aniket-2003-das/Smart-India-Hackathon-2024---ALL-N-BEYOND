import './App.css';
import  { Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Pages/Signup';

function App() {
  return (
    <>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
