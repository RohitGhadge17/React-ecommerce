import { Fragment, useState } from 'react';
import CategoryList from './components/CategoryList';
import FilterSection from './components/FilterSection';
import ProductList from './components/ProductList';
import items from './Info';
import { IProducts } from './Product.type';

const allCategories = ['All',...new Set(items.map((item) => item.category))];
console.log(allCategories);



function App() {
  const [products,setProducts] = useState(items as IProducts[]);
  const [categories,setCategories] = useState(allCategories);

  const filterProducts = (category: any) => {
    if(category === 'All') {
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
      {/* <FilterSection /> */}
      <ProductList list={products} />
    </Fragment>
  );
}

export default App;
