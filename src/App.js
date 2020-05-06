import React from 'react';
import Card from './Card';
import image from './img/web.jpeg';
import VideoList from './VideoList';
import './App.css';
function App(props) {
  return (
    <div className="App">
      <div className="row" id="row">
        <div className="col-lg-12">
          <Card 
            coverImage={image}
            title="Programming in Javascript"
            description="A video on how to get started with Javascript"
            link=""
          />
        </div>
      </div>
      <VideoList />
    </div>
  );
}

export default App;
