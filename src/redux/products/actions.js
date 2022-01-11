import { actionsTypes } from './actionTypes';

export const addItemAction = ({ item }) => ({
  type: actionsTypes.add,
  payload: { item },
});

export const removeItemAction = ({ id }) => ({
  type: actionsTypes.remove,
  payload: { id },
});

export const clearItemsAction = () => ({
  type: actionsTypes.clear,
});

export const startAddItemAction = ({ item }) => ({
  type: actionsTypes.startAdd,
  payload: { item },
});

export const startRemoveItemAction = ({ id }) => ({
  type: actionsTypes.startRemove,
  payload: { id },
});
