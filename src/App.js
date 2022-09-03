import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import  {ItemListContainer}  from './Components/ItemListContainer';
import {ItemCount} from "./Components/ItemCount";
import ItemDetail from './Components/ItemDetail';
import ItemDetailContainer from './Components/ItemDetailContainer'





function App() {
return (
    <> 
     <Navbar></Navbar>
    <ItemListContainer></ItemListContainer>
    <ItemCount stock={15} inital={1} ></ItemCount>
    <ItemDetailContainer></ItemDetailContainer>
    <ItemDetail></ItemDetail>
    </>
  );
}

export default App;
