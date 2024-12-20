import React from 'react';
import NavBar from '../Components/NavBar';
import Main from '../Components/Main';


function Footer(){
  return(
    <footer>
      <small>Copyright reserved 2024</small>
    </footer>
  )
}

function ReactFacts() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}


export default ReactFacts;
