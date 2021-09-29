import React from 'react';
import styled from 'styled-components';

const Home = styled.div`

`

const Banner = styled.img`
  height: 90vh;
  width: 100%;
  margin-top: 10vh;
`

const Title = styled.h1`
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
  font-weight: 300;
  margin-left: 30px;
  color: whitesmoke;
  @media (max-width: 768px) {
    position: absolute;
    top: 65%;
    left: 50%;
    margin: 0;
    transform: translate(-50%, -50%);
    text-align: center;
  }
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