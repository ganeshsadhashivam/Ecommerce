import React from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort, PageHero } from "../components";
// import React from "react";
// import styled from "styled-components";
// import { formatPrice } from "../utils/helpers";
// import { FaSearch } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import PageHero from "../components/PageHero";
// import Filters from "../components/Filters";
// import Sort from "../components/Sort";
// import ProductList from "../components/ProductList";

const Products = () => {
  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default Products;

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;
