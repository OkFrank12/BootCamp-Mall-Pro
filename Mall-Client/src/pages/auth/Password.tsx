/** @format */

import styled from "styled-components";
import { Link } from "react-router-dom";

const Password = () => {
  return (
    <div>
      <Container>
        <Main>
          <Set>
            <h1>Create new password</h1>
          </Set>
          <Second>
            <span>
              Your new password must be different <br /> from previous used
              password
            </span>
          </Second>
          <Input>
            <input type="text" placeholder="Type new-password" />
          </Input>
          <Input>
            <input type="text" placeholder="Re-type new-password" />
          </Input>
          <button>Reset Password</button>
        </Main>
      </Container>
    </div>
  );
};

export default Password;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;

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
  height: 380px;
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
