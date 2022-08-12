import React, { useState } from 'react';
import "./Cards.scss";
// import {Card,CardTitle} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "../../logo/logo.png"

const Cards = ({thumbnail}) => {
    const [modal,setModal] = useState(false);
    const toggleEv = () => {
        setModal(!modal)
    }
    return (
        <div className='cards'>
            <Card style={{ width: '240px',height:"400px"}}>
                <Card.Img variant="top" src={logo} className="card-img"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards