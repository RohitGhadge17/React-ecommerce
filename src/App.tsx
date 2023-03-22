import { Fragment, useState } from 'react';
import Category from './components/Category';
import CategoryList from './components/CategoryList';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import items from './Info';
import { IProducts } from './Product.type';
// import * as Icons from "react-icons/gi";


function App() {
  const [products,setProducts] = useState(items as IProducts[]);
  const [categories,setCategories] = useState([]);

  const filterProducts = (category: any) => {
    if(category === 'all') {
      setProducts(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setProducts(newItems);
  }
  return (
    <Fragment>
      {/* <Category /> */}
      <CategoryList filterProducts = {filterProducts} />
      <ProductList list={products} />
    </Fragment>
  );
}

export default App;
