import { Icon, Link, NavItem, StyledNavbar } from "./Navigation.styles";
import Navdata from "../data.json";
// import * as Icon from 'react-bootstrap-icons';
import * as Logo from 'react-icons/gi';
// import * as Icons from 'react-bootstrap-icons'


const Navigation = () => {
    return (
        <StyledNavbar>
            <NavItem>
                {Navdata.map((data,idx) => {
                   
                    return (
                        <>
                            <div key={data.id}>
                                <Icon>
                                    <Logo.GiClothes /><br />
                                </Icon>
                                <Link>
                                    {data.category}
                                </Link>
                            </div>
                        </>
                    )
                })}
            </NavItem>
        </StyledNavbar>
    )
}

export default Navigation;