import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions';
import ItemList from '../components/ItemList';

class ItemListContainer extends Component {
    componentWillMount() {
        this.props.getItems();
    }
    render() {
        const { items, status } = this.props;
        return (
            <ItemList items={items} loading={status}/>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items,
    status: state.status
});

const mapDispatchToProps = dispatch => ({
    getItems: () => dispatch(getItems())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemListContainer);
