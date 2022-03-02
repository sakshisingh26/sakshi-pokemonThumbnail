import React from 'react';
import { CardGroup, Button,Card} from "react-bootstrap";
import "./CardGrid.css"
 const PokemonThumbnail=({id,name,image,type})=> {

   console.log("props",id,name,type);
  // console.log("xfvghnjm,jhngfdsadfghjhgf===",id,name,image,type);
//         return (
//          <div className={style}>
//            <div className='number'>
//            <small>#{id}</small>
//            </div>

// <img src={image} alt={name}/>
// <div className='detail-wrapper'>
//   <h1>
//     {name}
//   </h1>
//   <small>Type:{type}</small>
// </div>
//          </div>
        
//         );
  
return(<CardGroup>

          <Card className={"card-grid"} >
              <div className='imgBlock'>
              <Card.Img className={"card-img"} variant="bottom" src={image}/>
              </div>
              <Card.Body>
                  <Card.Title><strong>{name}</strong></Card.Title>
                  <Card.Text>
                      <p>{type}</p>
                  </Card.Text>
              </Card.Body>
          </Card>

  </CardGroup>)

}
export default PokemonThumbnail