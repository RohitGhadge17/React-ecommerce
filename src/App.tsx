import { Fragment, useState } from 'react';
import CategoryList from './components/CategoryList';
import MainSection from './components/MainSection';
import data from "./data.json"
import TabList from './features/tabs/TabList';
import {Route,Routes} from "react-router-dom"
import AddTab from './features/tabs/AddTab';
import EditTab from './features/tabs/EditTab';


const allCatgories = ['All', ...new Set(data.map((item) => item.category))];
console.log(allCatgories);


const allBrands = ['all', ...new Set(data.map((brand) => brand.brand))];
console.log(allBrands);



function App() {
  const [products, setProducts] = useState(data);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categories, setCategories] = useState(allCatgories);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [brands, setBrands] = useState(allBrands);


  const filterBrand = (brand: any) => {
    if (brand === 'all') {
      setProducts(data);
      return;
    }
    const newBrands = data.filter((item) => item.brand === brand);

    setProducts(newBrands);
  }


  const filterProducts = (category: any) => {
    if (category === "All") {
      setProducts(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setProducts(newItems);
  }


  return (
    <Fragment>
      {/* <CategoryList filterProducts={filterProducts} categories={categories} /> */}
      <Routes>
        <Route path='/' element={<TabList />} />
        <Route path='/add-tab' element={<AddTab />} />
        <Route path='/edit-tab/:id' element={<EditTab />} />
      </Routes>
      <MainSection list={products} filterBrand={filterBrand} brands={brands} categories={categories} filterProducts={filterProducts} />
    </Fragment>
  );
}

export default App;
