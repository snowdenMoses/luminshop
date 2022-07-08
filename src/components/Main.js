
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "react-use-cart";
import getSymbolFromCurrency from "currency-symbol-map";

import { cartState } from "../redux/Actions/actions";
import CartComponent from "./CartComponent";

const Main = () => {
  const dispatch = useDispatch();
  const getCartState = useSelector(state => state.cartState.cartState);
  const retrieveSelectedCurrency = useSelector(state => state.selectedCurrency.currency);
  console.log(getCartState);

  const { addItem } = useCart();

  const retrieveProducts = useSelector((state) => state.products.products);

  const handleAddToCart = (product) => {
    addItem(product);
    dispatch(cartState(false));
  };

  return (
    <main>

      {retrieveProducts.map(product => {
        return (
          <div className='product' key={product.id}>
            <div className='image_wrapper'>
              <img src={product.image_url}/>
            </div>
            <div className='description'>
              <p>{product.title}</p>
              <p>From {getSymbolFromCurrency(retrieveSelectedCurrency) }{product.price}.00</p>
              <p className='add_to_cart' onClick={() => handleAddToCart(product)}>Add to Cart</p>

            </div>

          </div>

        );
      })}
      {
        !getCartState ? <CartComponent/> : ""
      }

    </main>

  );
};

export default Main;
