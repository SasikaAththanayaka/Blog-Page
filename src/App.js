import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom"
import Login from './Components/Login';
import Footer from './Components/Footer';
import SinglePost from './Components/SinglePost';
import Register from './Components/Register';
import AddPost from './Components/AddPost';

function App() {
  //const [ posts , setPosts] =useState([]);
  
  
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route path="/home"><Home /></Route>
          <Route path="/About"><About /></Route>
          <Route path="/ContactUs"><ContactUs /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/Register"> <Register/></Route>
          <Route path="/AddPost"><AddPost /></Route>
          <Route path="/SinglePost/:id"> <SinglePost /></Route>
          <Redirect to="/"><Home /></Redirect>
        </Switch>
      </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
