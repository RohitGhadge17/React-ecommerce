import React, { Fragment } from "react";
import { ButtonGroup, Tab } from "./Category.styles";

type Props = {
   filterProducts: (category: any) => void;
   //  categories: IProducts[];
   categories: any;
}
const CategoryList = (props: Props) => {

   const { filterProducts, categories } = props;

   return (
      <Fragment>
         <ButtonGroup>
         {categories.map((category: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => {
            return (
               <Tab className="filter-btn" onClick={() => filterProducts(category)}>
                  {category}
               </Tab>
            )
         })}
         </ButtonGroup>
      </Fragment>
   )
}

export default CategoryList;