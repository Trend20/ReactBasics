import React from 'react';
import Card from './Card';
import image from './img/web.jpeg';
function App(props) {
  return (
    <div className="App">
      <div className="row">
        <div className="col-lg-12">
          <Card 
            image={image}
            title="Programming in Javascript"
            description="A video on how to get started with Javascript"
            link=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
