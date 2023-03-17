import { info } from "console";
import React, { Fragment } from "react"
import Info from "../data.json";
import { ButtonGroup, Tab } from "./Category.styles";

const Category = () => {

    return (
        <Fragment>
            <ButtonGroup>
                {Info.map((info) => {
                    return (
                        <Tab key={info.category}
                            onClick={() => console.log(info.category)}
                        >
                            {info.category}
                        </Tab>
                    )
                })}
            </ButtonGroup>
            <p/>
            <p>Your selected category is: </p>
        </Fragment>
    )
}

export default Category