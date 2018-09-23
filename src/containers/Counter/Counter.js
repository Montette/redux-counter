import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                <hr />
                <button onClick={()=> this.props.onLogResults(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.res.map(item=> {
                        return <li key={item.id} onClick={()=> this.props.onRemoveItem(item.id)}>{item.value}</li>
                    })}
                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        res: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, val: 10}),
        onSubCounter: () => dispatch({type: actionTypes.SUB, val: 15}),
        onLogResults: (result) => dispatch({type: actionTypes.LOG, result: result}),
        onRemoveItem: (itemId) => dispatch({type: actionTypes.REMOVE, id:itemId})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);