import React from "react";
import { IProducts } from "../Product.type";
import { Card, Container, Wrap, Image, Button } from "./ProductList.style";

import "./ProductList.css";
import FilterSection from "./FilterSection";
import Wrapper from "./FilterSection.styles";

type Props = {
    list: IProducts[];
}
const ProductList = (props: Props) => {

    const { list } = props;
    return (
        <>
        <Wrapper>
        <FilterSection />
           
            <div>
                {list.map((product) => {
                    // console.log(product);
                    return (
                        <>
                            <Wrap key={product.id}>
                                <Card>
                                    <Image src={product.img} alt={product.title} />
                                    <Container>
                                        <h4><b>{product.title}</b></h4><br />
                                        <p>{product.desc}</p><br />
                                        <p><b>${product.price}</b></p><br />
                                        <Button>Buy Now</Button>
                                    </Container>
                                </Card>
                            </Wrap>
                        </>
                    )
                })}
            </div>
        </Wrapper>
        </>
    )
}

export default ProductList