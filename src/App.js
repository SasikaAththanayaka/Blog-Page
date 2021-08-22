import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import Login from './Components/Login';
import Footer from './Components/Footer';
import SinglePost from './Components/SinglePost';
import Register from './Components/Register';
import AddPost from './Components/AddPost';
import { useContext } from "react";
import { Context } from "./Context/Context";

function App() {
 
  const {user}=useContext(Context);
    return (
    <div className="App">
      <BrowserRouter>  
      <Header/>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/Register"> {user ? <Home/> : <Register/>}</Route>
          <Route path="/login">{user ? <Home/> : <Login/>}</Route>
          <Route path="/AddPost"> {user ? <Home/> : <AddPost/>}</Route>
          <Route path="/SinglePost/:id"> <SinglePost /></Route>
          <Route path="/About"><About /></Route>
          <Route path="/ContactUs"><ContactUs /></Route>
          <Redirect to="/"><Home /></Redirect>
        </Switch>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
