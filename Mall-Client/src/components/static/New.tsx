/** @format */

import styled from "styled-components";
import Card from "./Card";

const New = () => {
  return (
    <div>
      <Container>
        <Test>
          <p>New Arrivals</p>
          <span>We have your occasion covered</span>
        </Test>
        <Main>
          <Card />
          {/* <Box>
            <Images></Images>
            <Test1>
              <h2>Bold Moves</h2>
              <span>Discover more</span>
            </Test1>
          </Box> */}
        </Main>
      </Container>
    </div>
  );
};

export default New;

const Test1 = styled.div`
  width: 430px;
  /* height: 130px; */
  background-color: aquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    width: 150px;
    height: 30px;
    border: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    border-radius: 5px;
  }
`;

const Images = styled.div`
  width: 430px;
  height: 450px;
  background-color: red;
`;

const Box = styled.div`
  width: 200px;
  height: 400px;
  background-color: red;
`;

const Test = styled.div`
  text-align: center;

  span {
    font-size: 20px;
    font-weight: 600;
    font-family: cursive;
  }

  p {
    font-size: 25px;
    font-weight: 600;
  }
`;

const Main = styled.div`
  width: 95%;
  min-height: 100px;
  background-color: cadetblue;
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: blueviolet;
  justify-content: center;
  flex-direction: column;
`;
