import {
  PizzaInformation,
  CHANGE_PIZZA_INFO,
  CHANGE_WISHLIST,
  CHANGE_CART_TOTAL
} from "../reducers/rootReducer";

export const changePizzaInformationAction = (payload: PizzaInformation) => ({
  type: CHANGE_PIZZA_INFO,
  payload
});

export const changeWishlistAction = (currentPizzaInWishlist: boolean) => ({
  type: CHANGE_WISHLIST,
  payload: { currentPizzaInWishlist }
});

export const changeCartTotalAction = (cartTotal: number) => ({
  type: CHANGE_CART_TOTAL,
  payload: { cartTotal }
});
