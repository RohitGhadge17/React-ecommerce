import React from "react";
import { IProducts } from "../Product.type";
import { Card, Container, Wrap, Image } from "./ProductList.style";

type Props = {
    list:IProducts[];
}
const ProductList = (props:Props) => {

    const {list} = props;
    return (
        <div>
            {list.map((product) => {
                console.log(product);
                
                return(
                   <Wrap>
                    <Card>
                       
                       <img src={product.img} alt={product.title} style={{width:"100%"}} />
                      
                        <Container>
                            <h4><b>Title: {product.title}</b></h4><br />
                            <p><b>Description:</b>{product.desc}</p><br />
                            <p><b>Price: ${product.price}</b></p>
                        </Container>
                    </Card>
                   </Wrap>
                )
            })}
        </div>
    )
}

export default ProductList