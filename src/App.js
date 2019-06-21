import React from 'react';
import Header from './components/Header';
import Send from './components/SendMessageForm';
import TouitContainer from './components/TouitContainer';
import Trending from './components/Trending';
import './App.css';

class App extends React.Component {

  render(){
    return (
      <div className = "touitPage">
          <Header />
          <Send />
          <div className="underForm">
            <TouitContainer />
            <Trending />
          </div>
      </div>
    );
  }
}

export default App;