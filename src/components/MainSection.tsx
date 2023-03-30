import { IProducts } from "../Product.type";
import items from '../Info';
import { Aside, Button, Cards, Column, Grid, Main, Row } from "./MainSection.styles";


type Props = {
    list: IProducts[];
    brands: any;
    filterBrand: (brand: any) => void;
}

const MainSection = (props: Props) => {
    const { list, filterBrand, brands } = props;


    return (
        <Row>

            {/* Side bar for filteration */}
            <Aside>
                <div>
                    <h3>Filter By Brand</h3>
                    <form action="#">

                        <select name="brand" id="brand" className="filter-brand--select" onChange={(e) => filterBrand(e.target.value)} >
                            {brands.map((brand: any) => {
                                return (
                                    <option value={brand} >
                                        {brand}
                                    </option>
                                )
                            })}
                        </select>
                    </form>
                </div><br />
                {/* <div>
                    <h3>Filter By Price</h3>
                    <p>
                        $Price
                    </p>
                    <input
                        type="range"
                        name="price"
                        className="filter_price"
                    />
                </div> */}
            </Aside>

            {/* Product List */}
            <Main>
                <h3 style={{ textAlign: "center" }}>Product List</h3>
                <Grid>
                    {list.map((product) => {
                        return (
                            <Column>
                                <Cards>
                                    <img src={product.img} alt={product.title} style={{ width: "250px", height: "200px" }} />
                                    <h3>{product.title}</h3>
                                    <p>{product.desc}</p>
                                    <p>${product.price}</p>
                                    {/* <Button>Buy Now</Button> */}
                                </Cards>
                            </Column>
                        )
                    })}
                </Grid>
            </Main>

        </Row>
    )
}

export default MainSection;