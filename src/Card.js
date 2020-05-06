import React from 'react';

const Card = (props) =>{
    return(
        <div className="card">
            <img className="card-img-top"  
            src={image1} />
            <div className="card-body">
                <h3 className="card-title">Doing the shit</h3>
                <p className="card-text">Lets do our shit for the last time</p>
                <a href="#" className="btn btn-danger">Play</a>
            </div>
        </div>
    )
}

export default Card;