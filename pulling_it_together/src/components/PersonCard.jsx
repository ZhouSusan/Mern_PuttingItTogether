import React from 'react';

class PersonCard extends React.Component {
    //Decalre constructor to override our default constrcutor so that 
    //we initially set the state object
    constructor(props) {
        //give use all the functionaly of the deafult constructor that comes with the Component
        super(props);
        this.state = {
            addAge: this.props.age
        }
    }

    render() {
        const {lastName, firstName, age, hairColor} = this.props;
        return( 
            <>
                <div>
                    <h1>{lastName}, {firstName}</h1>
                    <p>Age: {this.state.addAge}</p>
                    <p>Hair Color: {hairColor}</p>
                    <button onClick={()=>{this.setState({addAge: this.state.addAge+1})}}>Birthday Button for {firstName} {lastName}</button>
                </div>
            </>
        )    
    }
}

export default PersonCard;