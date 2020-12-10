import React from 'react';
import ProductsList from './ProductsList';
import MoneyToPay from './MoneyToPay';

class App extends React.Component {
    render() {
        return (
            <div>
                <div><ProductsList /></div>
                <div><MoneyToPay /></div>
            </div>

        )
    }
}

export default App;