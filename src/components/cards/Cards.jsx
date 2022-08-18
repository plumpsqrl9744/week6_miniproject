
import React, { useState } from 'react';
import "./Cards.scss";
import { BsSuitHeartFill,BsSuitHeart } from "react-icons/bs";
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import logo from "../../logo/logo.png"

const Cards = ({datas}) => {
    const [counts, setCounts] = useState([])
    if (datas !== null){
        var data = datas.content
        var data2 =datas
    }
    console.log(data2)
    const [modal,setModal] = useState(false);
    const toggleEv = () => {
        setModal(!modal)
    }
    
    console.log("확인",data)
    return (
        <div className='cards'>
        {data === undefined || null || "" ? "" : data.map((content,index)=>{
            return(
                <Link to={`/detailpage/${content.id}`} className='card-link' key={index}>
                <Card style={{ minHeight:"500px"}} className="card-container">
                    <Card.Title>{content.title}</Card.Title>
                    <Card.Img variant="top" src={content.imageUrl} className="card-img"/>
                    <Card.Body>
                        <div className='hearts'>
                            <BsSuitHeartFill style={{fontSize:"25px" ,color:"red"}}></BsSuitHeartFill>
                        </div>
                        <Card.Text>
                        {content.content}
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
