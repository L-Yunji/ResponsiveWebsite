import React from 'react';
import styled, { css } from 'styled-components';

const sizes = {
  desktop: 1024,
  tablet: 768
}

// 위에 있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어 줍니다.

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
  @media (max-width: ${sizes[label] /16}em) {
    ${css(...args)};
  }
  `
  return acc;
}, {})

const Home = styled.div`
  text-align: center;
  position: relative;
`

const Banner = styled.img`
  height: 90vh;
  width: 80%;
  margin-top: 10vh;
  ${media.tablet`
    width: 100%;
    height: 350px;`}
`

const Title = styled.h1`
  position: absolute;
  bottom: 1rem;
  left: 10%;
  font-weight: 300;
  margin-left: 30px;
  color: whitesmoke;
  ${media.tablet`
    top: 65%;
    left: 50%;
    margin: 0;
    transform: translate(-50%, -50%);
    text-align: center;`}
`



const Contents = () => {
  return(
    <Home>
      <Banner src="https://cdn.pixabay.com/photo/2016/02/19/11/19/computer-1209641_1280.jpg"
      />
      <Title>반응형 웹 사이트 만들기 실습</Title>
    </Home>
    
  );
}

export default Contents;