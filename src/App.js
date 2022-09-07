import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import  {ItemListContainer}  from './Components/ItemListContainer';
import {ItemCount} from "./Components/ItemCount";
import ItemDetail from './Components/ItemDetail';
import ItemDetailContainer from './Components/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from "react-router-dom"





function App() {
return (
    <BrowserRouter> 

     <Navbar></Navbar>
   <Route path="/catalogo" element= {<ItemListContainer></ItemListContainer>}> </Route>
    <ItemCount stock={15} inital={1} ></ItemCount>
   <Route path='/Item/:id' element= {<ItemDetailContainer></ItemDetailContainer>}></Route>
   
    <ItemDetail></ItemDetail>



    </BrowserRouter>
  );
}

export default App;
