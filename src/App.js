import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/App.css";
import "./styles/responsiveStyles.css";
import { fetchProducts, getCurrency } from "./redux/Actions/actions";
import Header from "./components/Header";
import Main from "./components/Main";

function App () {
  const dispatch = useDispatch();
  const retrieveSelectedCurrency = useSelector(state => state.selectedCurrency.currency);

  useEffect(() => {
    const getCurrencies = async () => {
      const fetchedResult = await fetch("https://pangaea-interviews.vercel.app/api/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: `
          query{
            currency
          }
          `
        })
      });
      const currencies = await fetchedResult.json();
      const { currency } = currencies.data;
      dispatch(getCurrency(currency));
    };

    getCurrencies();

    const getProducts = async () => {
      const fetchedResult = await fetch("https://pangaea-interviews.vercel.app/api/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: `
          query{
            products{
              id
              title,
              image_url,
              price(currency:${retrieveSelectedCurrency})
            }
          }
          `
        })
      });
      const result = await fetchedResult.json();
      const { products } = result.data;
      dispatch(fetchProducts(products));
    };

    getProducts();
  }, [retrieveSelectedCurrency]);

  const retrieveProducts = useSelector((state) => state.products.products);

  // console.log(currencyVal)
  if (retrieveProducts.length === 0) {
    return (<div className='loading'>Loading....</div>);
  }
  return (
    <div className='App'>
      <div className='Container'>
        <Header/>
        <Main/>

      </div>
    </div>
  );
}

export default App;
