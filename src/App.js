import './App.css';
import About from './components/About/About';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';

const EMAIL = "luciomorales@gmail.com"
const PASSWORD = "asd12345"


function App() { 
   const location = useLocation()
   const navigate = useNavigate()

   const [characters, setCharacters] = useState([])
   const [access, setAcces] = useState(false)

   const login = (userData) => {
      if(userData.password === PASSWORD && userData.email === EMAIL) {
         setAcces(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]); // esto es para que el usuario no pueda acceder via url. Lo obliga a escribir un email y una password.

   const onSearch = (id) => { 
axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
} 
const onClose = (id) =>{
   const filteredChars = characters.filter(char => char.id !== Number(id))
   setCharacters(filteredChars)
}

   return (
      <div className='App'>
          {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
         
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home'element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about'element={<About/>}/>
            <Route path='/detail/:id'element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;


         
         
         

