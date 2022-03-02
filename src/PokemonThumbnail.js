import React from 'react';
import { CardGroup, Button, Card } from "react-bootstrap";
import "./CardGrid.css"
const PokemonThumbnail = ({ id, name, image, type }) => {
    return (<CardGroup>

        <Card className={"card-grid"} >
            <div className='imgBlock'>
                <Card.Img className={"card-img"} variant="bottom" src={image} />
            </div>
            <Card.Body className={'cardText'}>
                <Card.Title className={"card-body"}><strong >{name}</strong></Card.Title>
                <Card.Text>
                    <p>{type}</p>
                </Card.Text>
            </Card.Body>
        </Card>

    </CardGroup>)

}
export default PokemonThumbnail