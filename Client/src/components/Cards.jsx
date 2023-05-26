import Card from './Card';

const Cards = ({characters, onClose}) => {
   
   return (
      <div>
         {
            characters.map(({id, name, species, gender, origin, image}) => {
               return(
                  <Card
                  key={id}
                  id={id}
                  onClose={onClose}
                  image={image}
                  name={name}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                   />
                   )
                })
             }
      </div>
      )
    }


export default Cards;
