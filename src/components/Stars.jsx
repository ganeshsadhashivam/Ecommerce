import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import React from "react";

const Stars = ({ stars, reviews }) => {
  // console.log(stars, reviews);

  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarFill />
        ) : (
          <BsStar />
        )}
      </span>
    );
    console.log(index);
  });
  return (
    <Wrapper>
      <div className="stars">{tempStars}</div>
      <p className="reviews">({reviews} Customer reviews)</p>
    </Wrapper>
  );
};

export default Stars;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
