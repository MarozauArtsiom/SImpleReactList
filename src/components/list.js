import React from 'react'
import Item from './item';
import { getCurrencies } from './../service/currencyService';
class List extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            title: 'My List'
        };
        this.onItemDelete = this.onItemDelete.bind(this)
    }

    onItemDelete(name) {
        const items = this.state
            .items
            .filter(x => x.name !== name);
        this.setState({
            items,
        })
    }

    componentDidMount() {
        if (!this.state.items.length) {
            getCurrencies(10)
                .then(items => this.setState({ items }));
        }
    }

    render() {
        const { items } = this.state;
        return (
            items.map(x => (
                <Item
                    key={x.name}
                    onDelete={this.onItemDelete}
                    {...x}
                />)
            )
        );
    }
}

export default List