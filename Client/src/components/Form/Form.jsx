import { useState } from "react";
import validation from "../Validations/Validation";

const Form = ({login}) => {
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

         setUserData({...userData, [property] : value})

         setErrors(validation({...userData, [property] : value})) //VALIDATION: funcion que valida en tiempo real los datos ingresados por el usuario en el input.
        }
        const handleSubmit = (event) => {
            event.preventDefault()
            login(userData)
        };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">EMAIL: </label>
            <input name="email" onChange={handleChange} type="email" value={userData.email}></input>
            {errors.email && <p>{errors.email}</p>}

            <label htmlFor="password">PASSWORD: </label>
            <input name="password" onChange={handleChange} type="password" value={userData.password}></input>
            {errors.password && <p>{errors.password}</p>}

            <button>Sumbit</button>

        </form>
    )
}

export default Form;