export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_SUCCESS',
    id,
    amount,
  };
}
