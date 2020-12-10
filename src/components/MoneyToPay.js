import React from 'react';
import { connect } from 'react-redux';

class MoneyToPay extends React.Component {
    render() {
        return (
            <div>{`You need to pay ${this.props.total} NTD for the products.`}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { total: state.total };
}

export default connect(mapStateToProps)(MoneyToPay)