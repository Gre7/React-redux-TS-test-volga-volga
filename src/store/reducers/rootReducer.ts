export const CHANGE_CART_TOTAL = "CHANGE_CART_TOTAL";
export const CHANGE_PIZZA_INFO = "CHANGE_PIZZA_INFO";
export const CHANGE_WISHLIST = "CHANGE_WISHLIST";

export enum ThinCrust {
  Thin = "thin",
  Regular = "regular"
}

export enum PizzaSize {
  Small = "small",
  Medium = "medium",
  Large = "large"
}

export enum ImageUrlColor {
  Red = "heart-solid-active.svg",
  Gray = "heart-solid.svg"
}

export interface PizzaInformation {
  price: number;
  weight: number;
  calories: number;
  imageUrl: ImageUrlColor;
  thinCrust: ThinCrust;
  pizzaSize: PizzaSize;
}

export interface State {
  cartTotal: number;
  pizzaInformation: PizzaInformation;
  currentPizzaInWishlist: boolean;
}

interface ButtonAction {
  type: string;
  payload?: any;
}

const initialState: State = {
  cartTotal: 0,
  pizzaInformation: {
    price: 100,
    weight: 700,
    calories: 2220,
    imageUrl: ImageUrlColor.Gray,
    thinCrust: ThinCrust.Regular,
    pizzaSize: PizzaSize.Small
  },
  currentPizzaInWishlist: false
};

export const rootReducer = (
  state = initialState,
  { type, payload }: ButtonAction
) => {
  switch (type) {
    case CHANGE_CART_TOTAL:
      return {
        ...state,
        cartTotal: payload.cartTotal
      };

    case CHANGE_PIZZA_INFO:
      return {
        ...state,
        pizzaInformation: { ...payload }
      };

    case CHANGE_WISHLIST:
      return {
        ...state,
        currentPizzaInWishlist: payload.currentPizzaInWishlist
      };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof rootReducer>;
