import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { useState } from 'react';
import Login from './Components/Login';
import Footer from './Components/Footer';
import SinglePost from './Components/SinglePost';

function App() {
  const [ posts , setPosts] =useState([]);
  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(response =>{
      setPosts(response.data);
      //console.log(response.data[0]);
      //console.log(response.data);
    }).catch(err=>{
      console.log(err);
    })
  },[]);
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route path="/About"><About /></Route>
          <Route path="/ContactUs"><ContactUs /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/SinglePost"><SinglePost /></Route>
          <Route path="/"><Home data={posts}/></Route>
        </Switch>
      </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
