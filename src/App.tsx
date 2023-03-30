import { Fragment, useState } from 'react';
import CategoryList from './components/CategoryList';
import MainSection from './components/MainSection';
import items from './Info';
import { IProducts } from './Product.type';

const allCategories = ['All',...new Set(items.map((item) => item.category))];
console.log(allCategories);


const allBrands = ['all', ...new Set(items.map((brand) => brand.brand))];
console.log(allBrands);


function App() {
  const [products,setProducts] = useState(items as IProducts[]);
  const [categories,setCategories] = useState(allCategories);
  const [brands,setBrands] = useState(allBrands);

  const filterBrand = (brand: any) => {
    if (brand === 'all') {
      setProducts(items);
      return;
    }
    const newBrands = items.filter((item) => item.brand === brand);

    setProducts(newBrands);
  }

  // const filterBrands = (brand:any) => {
   
  //   const newBrand = items.filter((item) => item.brand === brand);
  //   // setProducts(newBrand);
  //   setProducts(newBrand);
  // }

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
      <CategoryList  filterProducts={filterProducts} categories={categories}  />
      {/* <FilterSection /> */}
      {/* <ProductList list={products} /> */}
      {/* <MainSection list={products} filterBrands={filterBrands} brands={brands}/> */}
       <MainSection list={products} filterBrand={filterBrand} brands={brands}/>
    </Fragment>
  );
}

export default App;
