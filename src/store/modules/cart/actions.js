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

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_SUCCESS',
    id,
    amount,
  };
}

export function removeProduct(id) {
  return {
    type: '@cart/REMOVE_PRODUCT',
    id,
  };
}
