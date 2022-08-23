import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { ItemListContainer } from './Components/ItemListContainer';
function App() {
  return (
    <>
    <Navbar></Navbar>
    <ItemListContainer nombre="valentino" apellido="ghione" mensaje="Bienvenidos a Tienda Nike"></ItemListContainer>
    </>
  );
}

export default App;
