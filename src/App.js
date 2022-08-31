import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { ItemListContainer } from './Components/ItemListContainer';
import {ItemCount} from "./Components/ItemCount";
import {Items} from "./Components/Items";
import imagenes from "./Components/Assets/img";
import {ItemList} from "./Components/ItemsList";

function App() {
return (
    <> 
     <Navbar></Navbar>
    <ItemListContainer nombre="valentino" apellido="ghione" mensaje="Bienvenidos a Tienda Nike"></ItemListContainer>
    <ItemCount stock={15} inital={1} ></ItemCount>
    <ItemList></ItemList>
    </>
  );
}

export default App;
