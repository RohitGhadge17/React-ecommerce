import React from "react";

type Props = {
   filterProducts: (category: any) => void;
   //  categories: IProducts[];
   categories: any;
}
const CategoryList = (props: Props) => {

   const { filterProducts, categories } = props;

   return (
      <div className="btn-container">
         {/* <button className="filter-btn" onClick={() => filterProducts('all')}>
           All
        </button>
        <button className="filter-btn" onClick={() => filterProducts('Clothing & shoes')}>
           Clothing & shoes
        </button>
        <button className="filter-btn" onClick={() => filterProducts('Sports & Lifestyle')}>
           Sports
        </button> */}
         {categories.map((category: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => {
            return (
               <button className="filter-btn" onClick={() => filterProducts(category)}>
                  {category}
               </button>
            )
         })}
      </div>
   )
}

export default CategoryList;