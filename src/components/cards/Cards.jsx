
import React, { useState } from 'react';
import "./Cards.scss";
import { BsSuitHeartFill } from "react-icons/bs";
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import logo from "../../logo/logo.png"

const Cards = ({idname}) => {
    console.log(idname)
    const [modal,setModal] = useState(false);
    const toggleEv = () => {
        setModal(!modal)
    }
    const [counts, setCounts] = useState([
        1,
        2,
        3,
        4,
        5
    ])
    return (
        <div className='cards'>
        {counts.map((count,index)=>{
            return(
                <Link to={`/detailpage/${count}`} className='card-link' key={index}>
                <Card style={{ minHeight:"500px"}} className="card-container">
                    <Card.Title>Card Title</Card.Title>
                    <Card.Img variant="top" src={logo} className="card-img"/>
                    <Card.Body>
                        <div className='hearts'>
                            <BsSuitHeartFill style={{fontSize:"25px" ,color:"red" ,marginTop:"-5px"}}></BsSuitHeartFill><div className='hearts-count'>25</div>
                        </div>
                        {/* <Button variant="primary">GO</Button> */}
                        <Card.Text>
                        {count}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Link>                
                )
            })}
        </div>
    )
}

export default Cards
