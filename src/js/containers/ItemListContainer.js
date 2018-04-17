import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions';
import ItemList from '../components/ItemList';

class ItemListContainer extends Component {
    componentWillMount() {
        this.props.getItems();
    }
    render() {
        return (
            <ItemList items={this.props.items}/>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items
});

const mapDispatchToProps = dispatch => ({
    getItems: () => dispatch(getItems())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemListContainer);
