import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';

const App = props => {
    return <BankAccount />;
}


class BankAccount extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            accountBalance: 2222.22,
            addAmount: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.addAmount !== nextState.addAmount) {
          return true;
        }
        if (this.state.accountBalance !== nextState.accountBalance) {
          return true;
        } else {
          return false;
        }
      }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdated!');
    }

    increment () {
        this.setState((prevState, props) => ({
            accountBalance: prevState.accountBalance + parseInt(prevState.addAmount)
          }));
    }

    render ( ) {
        console.log("Rendered!");
        return (
            <div>
                <h3>Account Balance: ${this.state.accountBalance}</h3>
                <input type="number" 
                onChange={event => this.setState({ addAmount: event.target.value })} 
                value= {this.state.addAmount}/>
                <button onClick={this.increment.bind(this)}>Increase Ammount</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));