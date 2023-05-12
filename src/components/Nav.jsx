import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Nav = ({onSearch}) => {
    return(
        <nav>
       <SearchBar onSearch={onSearch}/>

        <Link to='/home'><button>HOME</button></Link>
        <Link to='/about'><button>ABOUT</button></Link>
         
        </nav>
    )
}

export default Nav;