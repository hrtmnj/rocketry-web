import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    styles = {
        fontSize: 12,
        fontWeight: "bold"
    };

    render() { 
        const dynamicStyles = {
            ...this.styles,
            backgroundColor: (this.state.count === 0) ? "orange" : "dodgerblue"
        };

        return (
            <React.Fragment>
                <span style={dynamicStyles} className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button 
                    onClick={this.handleIncrement} 
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
            </React.Fragment>
        );
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }

    getBadgeClasses() {
        return "badge m-10 " + (this.state.count === 0) ? "badge-warning" : "badge-primary";
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;