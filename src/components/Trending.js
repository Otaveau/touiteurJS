import React from 'react';
import TouitAPI from '../api/TouitAPI';

class Trending extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            wordlist: []
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            TouitAPI.httpGetTrending(
                (response) => {
                    this.setState({
                        wordlist: response
                    });
                },
            )
        }, 5000)   
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }

    render() {
        const {wordlist} = this.state;
        const word =  Object.entries(wordlist).sort((a,b)=>b[1]-a[1]).map((key, i) => {
            return (
              <div className="trendZone" key={i}>
                <span># {key[0]}</span>
              </div>
           );
        });
        
        return (
              <div className="word">{word}</div>
        );
    }
}
export default Trending;