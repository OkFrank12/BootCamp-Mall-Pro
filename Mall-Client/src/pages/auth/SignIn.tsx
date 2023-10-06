/** @format */

import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import bg from "../../assets/undraw_web_shopping_re_owap.svg";

const SignIn = () => {
  return (
    <div>
      <Container>
        <Left>
          <img src={bg} alt="loading..." />
        </Left>
        <Right>
          <Text>
            <span>Don't have an account?</span>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <p>SIGN UP</p>
            </Link>
          </Text>
          <Main>
            <h1>Welcome back to Ajmall</h1>
            <pre>Sign In to your account </pre>
            <Input>
              <p>Email</p>
              <input type="text" placeholder="your@gmail.com" />
              <span>Error</span>
            </Input>
            <Input>
              <p>Password</p>
              <input type="text" placeholder="Ajmall11@999..." />
              <span>Error</span>
            </Input>
            <Pass>
              <span>Forgot your Password?</span>
              <Link to="/forgot-password">
                <p>Reset it</p>
              </Link>
            </Pass>
            <button>Sign In</button>
            <Last>
              <h3>Create account with</h3>
              <Circle>
                <FcGoogle size={30} />
              </Circle>
              <Circle>
                <SiFacebook size={30} style={{ color: "blue" }} />
              </Circle>
              <Circle>
                <BsLinkedin size={30} style={{ color: "blue" }} />
              </Circle>
              <Circle>
                <RiTwitterXFill size={30} />
              </Circle>
            </Last>
          </Main>
        </Right>
      </Container>
    </div>
  );
};

export default SignIn;
const Pass = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-left: 200px;

  span {
    font-size: 20px;
    font-weight: 700;
    font-family: cursive;
  }

  p {
    font-size: 18px;
    font-weight: 700;
    font-family: cursive;
  }
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #eaeaee;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Last = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 9px;
`;

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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  button {
    width: 200px;
    height: 50px;
    border-radius: 30px;
    background: #9a5237;
    color: white;
    font-size: 20px;
    font-weight: 600;
    border: none;
    margin-top: 20px;
    margin-right: 280px;
    cursor: pointer;
  }

  h1 {
    font-size: 30px;
    font-family: cursive;
    font-weight: 600;
  }

  pre {
    font-size: 17px;
    font-family: cursive;
    font-weight: 600;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: 10px;

  span {
    font-size: 15px;
    font-weight: 600;
    margin-right: 8px;
  }

  p {
    width: 100px;
    height: 30px;
    border-radius: 90px;
    border: 1px solid #eaeaee;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
  }
`;

const Right = styled.div`
  width: 700px;
  height: 650px;
`;

const Left = styled.div`
  width: 700px;
  height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0edf2;

  img {
    height: 350px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
