import { useDispatch, useSelector } from "react-redux/es/exports";
import { useCart } from "react-use-cart";
import getSymbolFromCurrency from "currency-symbol-map";

import "../styles/CartComponent.css";
import { cartState } from "../redux/Actions/actions";

export default function CartComponent () {
  const getCartState = useSelector(state => state.cartState.cartState);
  const retrieveSelectedCurrency = useSelector(state => state.selectedCurrency.currency);
  const dispatch = useDispatch();

  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    cartTotal
  } = useCart();

  const handleCloseCart = () => {
    dispatch(cartState(true));
  };

  const handleClearCart = () => {
    emptyCart();
    dispatch(cartState(true));
  };

  if (!getCartState) {
    return (

      <div className="cartContainer">
        {(isEmpty)
          ? <>
            <div className="emptyCart"><p>Your Cart is Empty</p></div>
            <div className="close" onClick={handleCloseCart}>X</div>
          </>

          : <>
            {items.map((item) => (
              <>
                <div className="cartItem" key={item.id}>

                  <div className="itemDesc">
                    <p className="itemName">{item.title}</p>
                    <p className="itemPrice">{getSymbolFromCurrency(retrieveSelectedCurrency)} {item.price * item.quantity}</p>
                    <p className="itemQuantity">{item.quantity}</p>
                    <p className="itemQuantity">{item.totalItems}</p>
                    <div className="updateItems">
                      <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                      <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                      <button onClick={() => removeItem(item.id)}>Remove Item</button>
                    </div>

                  </div>
                  <div className="itemImage">
                    <img className="image" src={item.image_url} alt="Product"/>
                  </div>

                </div>
                <div className='itemDividerLine'></div>

              </>

            ))}
            <div>

              <div>Total Price {getSymbolFromCurrency(retrieveSelectedCurrency)}{cartTotal}</div>
              <p className="clearItems" onClick={handleClearCart }>Clear</p>                            </div>

            <div className="close" onClick={handleCloseCart}>X</div>
          </>
        }
      </div>
    );
  }
}
