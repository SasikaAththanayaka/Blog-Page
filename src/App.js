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
const name="sasika";
export const User =React.createContext(name);

function App() {
 

    return (
    <div className="App">
      <BrowserRouter> 
      <User.Provider value={""}>
      <Header/>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/Register"> <Register/></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/AddPost"> <AddPost /></Route>
          <Route path="/SinglePost/:id"> <SinglePost /></Route>
          <Route path="/About"><About /></Route>
          <Route path="/ContactUs"><ContactUs /></Route>
          <Redirect to="/"><Home /></Redirect>
        </Switch>
        <Footer/>
        </User.Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
