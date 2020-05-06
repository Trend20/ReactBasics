import React from 'react';
import image1 from './img/webdesign.jpeg';
const VideoList = (props) =>{
    return(
        <div className="card-list">
            <div className="row">
                <div className="col-sm-8">
                    <img className="card-img-top" src={image1} />
                    <h5 className="card-title">Python</h5>
                    <p className="card-text">This is the best Python Course online</p>
                    <button className="btn btn-danger">Play</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8">
                    <img className="card-img-top" src={image1} />
                    <h5 className="card-title">Nodejs</h5>
                    <p className="card-text">This is the best Python Course online</p>
                    <button className="btn btn-danger">Play</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8">
                    <img className="card-img-top" src={image1} />
                    <h5 className="card-title">Java</h5>
                    <p className="card-text">This is the best Python Course online</p>
                    <button className="btn btn-danger">Play</button>
                </div>
            </div>
        </div>
    )
}

export default VideoList;