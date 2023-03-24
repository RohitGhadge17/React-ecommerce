import styled from "styled-components";

const Wrapper = styled.section`
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    background-color: rgb(245,245,245);
    width: 300px;
    padding-left:10px;
    height: 580px;
    /* height: 600px; */

    h3 {
    font-size: bold;
    text-decoration: underline;
  }


    .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.2rem;
    text-transform: capitalize;
  }
`

export default Wrapper;