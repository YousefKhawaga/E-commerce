import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import CollactionPage from './collection';
import WithSpinner from '../../components/with-spinner/with-spinner';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollactionPage);

export default CollectionsPageContainer;