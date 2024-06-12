import logo from './logo.svg';
import './App.css';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css'
import'../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Navbar } from './component/NavBar/Navbar';
import { Mynavbar } from './component/Mynavbar/Mynavbar';
import { Products } from './component/Products/Products';
function App() {

console.log('ahmed');
  
  return (
    <div 
    className="App">
      <Navbar></Navbar>
      <Mynavbar></Mynavbar>
      <Products></Products>


    </div>
  );
}

export default App;
