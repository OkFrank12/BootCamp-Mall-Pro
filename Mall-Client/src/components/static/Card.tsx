/** @format */

import styled from "styled-components";
import Box from "./Box";

const Card = () => {
  return (
    <div>
      <Container>
        <Main>
          <Box />
          <Box />
          <Box />
        </Main>
      </Container>
    </div>
  );
};

export default Card;

const Main = styled.div`
  width: 95%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: aqua; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
