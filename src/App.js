import "./App.css";

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar/index";
import { Products } from "./components/Products/index";
import { RequiredAuth } from './hoc/RequiredAuth';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<RequiredAuth> <Home /></RequiredAuth>} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<RequiredAuth> <Products /></RequiredAuth>} />

      </Routes>

    </div>
  );
}

export default App;