import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { ItemListContainer } from './Components/ItemListContainer';
import {ItemCount} from "./Components/ItemCount";
function App() {
return (
    <> 
     <Navbar></Navbar>
    <ItemListContainer nombre="valentino" apellido="ghione" mensaje="Bienvenidos a Tienda Nike"></ItemListContainer>
    <ItemCount stock={15} inital={1} ></ItemCount>
    </>
  );
}

export default App;
