import React from 'react';
import TouitAPI from '../api/TouitAPI';;

class Send extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          message: ""
        };
      }
      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
    render() {
        const {name, message} = this.state;
        return (
    <div>
        <form onSubmit={event=>{
            event.preventDefault();
            TouitAPI.httpPostMessages(name, message);
            this.setState({name:"", message: ""});
        }}>
            <div className="formulaire">
                <input id="name" className="pseudo" type="text" name="name" placeholder="Pseudo" minLength="3"
                    maxLength="16" onChange={this.onChange} value={name}/>
                <input id="message" className="texte" type="text" name="message" placeholder="Votre message"
                    minLength="3" maxLength="256" onChange={this.onChange} value={message}/>
                <input className="bouton" type="submit" value="Publier" />
            </div>
        </form>
    </div>
    );
    }
}

export default Send; 

