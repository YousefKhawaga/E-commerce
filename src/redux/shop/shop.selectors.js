import { createSelector } from 'reselect';



const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = id => createSelector(
    [selectShopCollections],
    collections => collections[id]
)