import styled from "styled-components";

export const Row = styled.section`
	padding:10px;
	display:flex;
`

export const Aside = styled.aside`
    flex: 25;
    background-color: aliceblue;
    padding: 40px 30px;

h3 {
    padding: 20px 7px;
    margin-left: 10px;
}

p{
    padding: 5px 20px;
    text-decoration: solid;
}

.filter-brand--select {
    /* padding: 0.3rem 1.2rem; */
    padding: 7px;
    width: 300px;
    margin-left: 15px;
    font-size: 1.2rem;
    text-transform: capitalize;
}

.filter_price{
    margin-left: 15px;
    width: 300px;
}

`

export const Main = styled.main`
	 flex: 75;
`

export const Col = styled.div`
border: 1px solid black;
    background-color: lightgrey;
    flex: 1;
    margin-right: 10px;
    padding: 5px;

:last-child{
margin-right:0;
}
`

// New Styles

export const Grid = styled.div`
margin:0 -5px;

:after{
    content: "";
    display: table;
    clear: both;
}
`

/* Float three columns side by side */
export const Column = styled.div`
    float: left;
    width: 33%;
    padding: 0 10px;

 /* Responsive columns */
@media screen and (max-width: 600px) {
      width: 100%;
      display: block;
      margin-bottom: 20px;
  }
`

/* Style the counter cards */
export const Cards = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    text-align: center;
    background-color: #f1f1f1;
    margin-top: 10px;
`

export const Button = styled.button`
color: #ececec;
display: inline-block;
text-decoration: none;
background-color: #2c3e50;
padding: 0.5rem 1.5rem;
border-radius: 1rem;
font-size: 14px;
transition: all 0.2s;

&:hover{
    transform: scale(1.1);
}
`

