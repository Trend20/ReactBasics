import React from 'react';

const Card = (props) =>{
    return(
        <div className="card">
            <img className="card-img-top"  
            src={props.coverImage} />
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-danger">Play</a>
            </div>
        </div>
    )
}

export default Card;