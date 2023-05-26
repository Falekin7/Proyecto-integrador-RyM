import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from 'react-redux'
import { useState, useEffect } from "react";


const Card = ({ id, onClose, name, species, gender, image, addFav, removeFav, myFavorites}) => {
   const location = useLocation()
   const [isFav, setIsFav] = useState(false)
   
   const handleFavorite =()=>{
      if(isFav) {
         setIsFav(false)
         removeFav(id)
      }
      else{
         setIsFav(true)
         addFav({id, name, species, gender, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach(fav => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);



   return (
      <div id={"CARD " + id} key={id}>
         <button onClick={handleFavorite}>{isFav? '❤️' : '🤍'}</button>
            
         {location.pathname !== '/favorites' && <button onClick={() => onClose(id)}>X</button>}
         
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link> 
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt='' />
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)), // las actions ejecutadas porque el reducer debe recibir un OBJETO.
   removeFav: (id) => dispatch(removeFav(id))
   }
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
) (Card)

