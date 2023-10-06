/** @format */

import styled from "styled-components";
import img from "../../assets/Purple_and_Green_E-sports_Illustrative_Ninja_Esports_Logo-removebg-preview.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Left>
            {/* <img src={bg} alt="loading..." /> */}
            <img src={img} alt="loading..." />
          </Left>
          <Middle>
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </Middle>
          <Right>
            <Link to="/register">
              <button>Sign up</button>
            </Link>
            <Link to="/sign-In">
              <button>Sign in</button>
            </Link>
          </Right>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Right = styled.div`
  width: 250px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 100px;
    height: 50px;
    background-color: #9a5237;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin-left: 15px;
    font-family: cursive;
    cursor: pointer;
    transform: scaleY();
    transition: all 360ms;
  }
`;

const Middle = styled.div`
  width: 300px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 600;
  font-family: cursive;
  color: white;
`;

const Left = styled.div`
  width: 100px;
  height: 60px;
  /* background-color: white; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Main = styled.div`
  width: 97%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #282828;
  display: flex;
  align-items: center;
  justify-content: center;
`;
