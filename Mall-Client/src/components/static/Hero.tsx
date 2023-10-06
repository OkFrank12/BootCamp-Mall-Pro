/** @format */

import styled from "styled-components";
import bg from "../../assets/alex-haigh-fEt6Wd4t4j0-unsplash.jpg";
import bg1 from "../../assets/jan-bottinger--kChshW17rw-unsplash.jpg";
import bg2 from "../../assets/domino-164_6wVEHfI-unsplash.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Container>
        <Slider {...settings}>
          <Box bi={`url(${bg})`}>
            <Main></Main>
          </Box>
          <Box bi={`url(${bg1})`}>
            <Main></Main>
          </Box>
          <Box bi={`url(${bg2})`}>
            <Main></Main>
          </Box>
        </Slider>
      </Container>
    </div>
  );
};

export default Hero;

const Main = styled.div`
  width: 100%;
  height: 550px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Box = styled.div<{ bi: string }>`
  width: 100%;
  height: 550px;
  background-color: black;
  background-image: ${({ bi }) => bi};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Container = styled.div`
  width: 100%;
  height: 550px;
  background-color: black;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
