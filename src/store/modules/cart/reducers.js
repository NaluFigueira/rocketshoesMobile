import { produce } from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });
    case '@cart/UPDATE_SUCCESS':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          // eslint-disable-next-line no-param-reassign
          draft[productIndex].amount = Number(action.amount);
        }
      });
    case '@cart/REMOVE_PRODUCT':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        draft.splice(productIndex, 1);
      });
    default:
      return state;
  }
}
