import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "react-use-cart";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { getSelectedCurrency, cartState } from "../redux/Actions/actions";

const Header = () => {
  const dispatch = useDispatch();
  const getCartState = useSelector(state => state.cartState.cartState);
  console.log(getCartState);

  const { totalUniqueItems } = useCart();

  const retrieveCurrencies = useSelector((state) => state.currencies.currencies);

  const handlePriceChange = function (e) {
    const value = e.target.value;
    dispatch(getSelectedCurrency(value));
  };

  return (

    <header>
      <nav>
        <ul className='nav-left'>
          <li>LUMIN</li>
          <li>Shop</li>
          <li>Learn</li>
        </ul>
        <div className='nav-right'>
          <p>Account</p>
          <div className='cart' onClick={() => dispatch(cartState())}>
            <p><AiOutlineShoppingCart className='cart_logo'/></p>
            <p className='item_count'>{totalUniqueItems}</p>
          </div>

        </div>
      </nav>

      <section className='sub_header'>
        <div className='sub_header_left'>
          <span >All Products</span>
          <span>A 360&deg; look at Lumin</span>
        </div>
        <form>
          <select onChange={handlePriceChange}>
            <option>Select Currency</option>
            {retrieveCurrencies.map(currency => {
              return (
                <option key={currency}>{currency}</option>
              );
            })}
          </select>
        </form>
      </section>
    </header>
  );
};

export default Header;
