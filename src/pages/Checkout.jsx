import React from "react";
import PageHero from "../components/PageHero";
import styled from "styled-components";

const Checkout = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <h1>checkout here</h1>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div``;
export default Checkout;
