/** @format */

import styled from "styled-components";

const Box = () => {
  return (
    <div>
      <Main>
        <Images></Images>
        <Test>
          <h2>Bold Moves</h2>
          <span>Discover more</span>
        </Test>
      </Main>
    </div>
  );
};

export default Box;

const Test = styled.div`
  width: 430px;
  height: 130px;
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

const Main = styled.div`
  width: 430px;
  height: 570px;
  background-color: gold;
  margin-top: 20px;
  margin: 5px;
`;
