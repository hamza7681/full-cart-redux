const initialState = {
  products: [],
  totalPrice: 0,
};


const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AddToCart":
      const product = action.payload;
      const existItem = state.products.find((item) => item.id === product.id);
      const newPrice = state.totalPrice + product.discount;
      if (existItem) {
        return {
          products: state.products,
          totalPrice: state.totalPrice,
        };
      } else {
        localStorage.setItem(
          "products",
          JSON.stringify([...state.products, product])
        );
        localStorage.setItem("totalPrice", newPrice);
        return {
          products: [...state.products, product],
          totalPrice: newPrice,
        };
      }

    case "RemoveFromCart":
      const { id, discount } = action.payload;
      const filterProducts = state.products.filter((item) => item.id !== id);
      const remPrice = state.totalPrice - discount;
      localStorage.setItem("products", JSON.stringify(filterProducts));
      localStorage.setItem("totalPrice", remPrice);
      return {
        products: filterProducts,
        totalPrice: remPrice,
      };
    default:
      return {
        products: localStorage.getItem("products")
          ? JSON.parse(localStorage.getItem("products"))
          : state.products,
        totalPrice: localStorage.getItem("totalPrice")
          ? JSON.parse(localStorage.getItem("totalPrice"))
          : state.totalPrice,
      };
  }
};

export default CartReducer;
