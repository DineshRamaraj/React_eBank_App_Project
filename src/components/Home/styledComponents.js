import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 40px 0;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  width: 100%;
`

export const WebsiteLogo = styled.img`
  width: 150px;
  height: 40px;
`

export const Logout = styled.button`
  border: 1px solid #f8fafc;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Roboto';
  color: #ffffff;
  padding: 8px 20px;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

export const Heading = styled.h1`
  font-size: 48px;
  font-family: 'Roboto';
  color: #f8fafc;
`

export const Image = styled.img`
  width: 80%;
`
