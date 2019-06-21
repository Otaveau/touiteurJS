import React from 'react';


class Format extends React.Component {
    render() {
        const {message, name} = this.props;
        return (
            <div className = "touit">
                <p className = "message">{message}</p>
                <p className = "name">{name}</p>
            </div>
        );
    }
}

export default Format; 
