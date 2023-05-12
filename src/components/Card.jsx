import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from 'react-redux'


const Card = ({ id, onClose, name, species, gender, origin, status, image}) => {
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link> 
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <h2>{status}</h2>
         <img src={image} alt='' />
      </div>
   );
}

const mapStateToProps = (state) => {}
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: () => dispatch(addFav()),
   removeFav: () => dispatch(removeFav())}
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
) (Card)

