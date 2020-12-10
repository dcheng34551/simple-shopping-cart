import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class ProductsList extends React.Component {
    renderList() {
        return this.props.products.map((product) => {
            return (
                <div key={product.name}>
                    {product.name}
                    <button onClick={() => { this.props.increment() }}>+</button>
                    <button onClick={() => { this.props.decrement() }}>-</button>
                </div>
            )
        })
    }

    render() {
        return <div>{this.renderList()}</div>
    }
};

const mapStateToProps = (state) => {
    return { products: state.products };
};

export default connect(mapStateToProps, { increment, decrement })(ProductsList)