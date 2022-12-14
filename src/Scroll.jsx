import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";
function Scroll() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });

  return (
    <Div>
      <a href="#" className={`${visible ? "block" : "none"}`}>
        <FaChevronUp />
      </a>
    </Div>
  );
}

const Div = styled.div`
  max-width: 100vw;
  .none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background: var(--color-primary);
    width: 4rem;
    height: 4rem;
    padding: 0.3rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;
    z-index: 100;
    transition: 0.5s;
    overflow: hidden;

    svg {
      color: #fff;
      border-radius: 50%;
      transition: 0.5s;
    }

    :hover svg {
      background: transparent;
      border: 1px solid;
      max-width: 4rem;
      max-height: 4rem;
      border-radius: 50%;
      height: 100%;
      width: 100%;
      color: var(--brown-color);
    }

    /* svg:hover {
      color: red;
    } */
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      left: 83vw;
      right: initial;
      max-width: 3.8rem;
      max-height: 3.8rem;
    }
  }
`;

export default Scroll;
