import { connect } from 'react-redux';
import { addItem } from '../actions';
import ItemList from '../components/ItemList';

const mapStateToProps = state => ({
    items: state.items
});

const mapDispatchToProps = dispatch => ({
    addItem: text => dispatch(addItem(text))
});

const ItemListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);

export default ItemListContainer;
