import { Fragment, useState } from 'react';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import items from './Info';
import { IProducts } from './Product.type';
// import * as Icons from "react-icons/gi";

const allCategories = ['all',...new Set(items.map((item) => item.category))];
console.log(allCategories);



function App() {
  const [products,setProducts] = useState(items as IProducts[]);
  const [categories,setCategories] = useState(allCategories);

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
      <CategoryList  filterProducts={filterProducts} categories={categories}  />
      <ProductList list={products} />
    </Fragment>
  );
}

export default App;
