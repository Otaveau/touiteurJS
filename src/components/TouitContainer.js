import React from 'react';  
import TouitAPI from '../api/TouitAPI';
import Format from './Touit'

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            ts: 0,
            influencers: []
        }
    }


    
    componentDidMount() {
        this.interval = setInterval(() => {
            TouitAPI.httpGetMessages(
                (response) => {
                if(response.messages.length !== 0){
                    this.setState({
                        messages: [...this.state.messages, ...response.messages],
                        ts: response.ts
                    });                  
                    TouitAPI.httpGetInfluencers(
                        (response) => {
                            this.setState({
                                influencers: [...this.state.influencers, ...response.influencers],
                            });
                        }
                    )
                }},
                error => {
                    this.state({
                        message: "Error, something went wrong"
                    })
                },
                this.state.ts
            )
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }

    render() {
        const {messages} = this.state;
        const {influencers} = this.state;
        console.log({influencers});

            return (
                <div className="container">
                {messages.map(item=> 
                    <Format
                        message={item.message}
                        name={item.name}
                        />)}
                </div>
           );
    }
}
export default Container;







