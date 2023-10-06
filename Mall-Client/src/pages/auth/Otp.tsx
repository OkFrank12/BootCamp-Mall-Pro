/** @format */

import styled from "styled-components";
import { Link } from "react-router-dom";

const Otp = () => {
  return (
    <div>
      {" "}
      <Container>
        <Main>
          <Set>
            <p>Verify Account</p>
          </Set>
          <Second>
            <span>
              Please enter the verification code <br /> we sent to your Email
            </span>
          </Second>
          <Input>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </Input>
          <Link to="/password" style={{ textDecoration: "none" }}>
            <button>Verify</button>
          </Link>
        </Main>
      </Container>
    </div>
  );
};

export default Otp;

const Input = styled.div`
  display: flex;

  input {
    width: 90px;
    height: 45px;
    border-radius: 5px;
    outline: none;
    border: 2px solid #9a5237;
    margin: 5px;
  }
`;

const Second = styled.div`
  margin-bottom: 20px;
  text-align: center;

  span {
    font-size: 18px;
    font-weight: 700;
  }
`;

const Set = styled.div`
  width: 200px;
  height: 40px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eaeaee;
  margin-bottom: 30px;

  p {
    font-size: 18px;
    font-weight: 700;
  }
`;

const Main = styled.div`
  width: 700px;
  height: 310px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    width: 300px;
    height: 50px;
    border-radius: 5px;
    background: #9a5237;
    color: white;
    font-size: 20px;
    font-weight: 600;
    border: none;
    margin-top: 10px;
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f0edf2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
