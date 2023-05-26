import Card from "../Card";
import { connect } from "react-redux";

const Favorites = ({myFavorites}) => {
    return (
        <div>
        {
            myFavorites.length ? myFavorites.map(fav => {
                return (
                    <Card 
                    key={fav.id}
                    id={fav.id}
                    name={fav.name}
                    species={fav.species}
                    gender={fav.gender}
                    image={fav.image}
                    onClose={fav.onClose}
                    />
                )
            }) : <h1>"no hay favoritos"</h1>
        }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
) (Favorites)