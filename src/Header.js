import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 80px;
  box-shadow: 1px 1px 1px lightgray;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const Menu = styled.div`
  display: flex;
`

const LOGO = styled.button`
  font-size: 2rem;
  outline: none;
  background: none;
  border: none;
  font-family: 'Scheherazade New', serif;
  font-weight: 600;
`

const Button = styled.button`
  height: 3em;
  font-size: 1rem;
  justify-content: conter;
  padding: 0.5rem;
  outline: none;
  background: none;
  border: none;
  border-radius: 4px;
  margin-left: 30px;
  display: block;
  font-family: 'Times New Roman', Times, serif;
  &:hover {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Header = () => {
  return(
    <Box>
      <LOGO>EFUB</LOGO>
      <Menu>
        <Button>About</Button>
        <Button>Menu</Button>
        <Button>Contact</Button>
      </Menu>
    </Box>
  );
}

export default Header;
