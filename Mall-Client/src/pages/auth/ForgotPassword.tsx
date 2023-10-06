/** @format */

import styled from "styled-components";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div>
      <Container>
        <Main>
          <Set>
            <h1>Reset Your Password</h1>
          </Set>
          <Second>
            <span>
              Enter your email address and we'll send you a <br /> password
              reset link.
            </span>
          </Second>
          <Input>
            <p>Email</p>
            <input type="text" placeholder="your@gmail.com" />
            <span>Error</span>
          </Input>
          <Link to="/otp" style={{ textDecoration: "none" }}>
            <button>Reset Password</button>
          </Link>
        </Main>
      </Container>
    </div>
  );
};

export default ForgotPassword;

const Input = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 18px;
    font-weight: 600;
    font-family: cursive;
  }

  span {
    display: flex;
    justify-content: flex-end;
    color: red;
    font-size: 10px;
  }

  input {
    width: 500px;
    height: 40px;
    border-radius: 5px;
    outline: none;
    border: 2px solid #9a5237;
    padding-left: 10px;
  }
`;

const Second = styled.div`
  margin-bottom: 20px;

  span {
    font-size: 18px;
    font-weight: 700;
  }
`;

const Set = styled.div`
  margin-bottom: 30px;
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
    margin-top: 5px;
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
