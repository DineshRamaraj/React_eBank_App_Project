import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  HomeContainer,
  HeaderContainer,
  WebsiteLogo,
  Logout,
  MainContainer,
  Heading,
  Image,
} from './styledComponents'

const Home = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }

  const clickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <HomeContainer>
      <HeaderContainer>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <Logout type="button" onClick={clickLogout}>
          Logout
        </Logout>
      </HeaderContainer>
      <MainContainer>
        <Heading>Your Flexibility, Our Excellence</Heading>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </MainContainer>
    </HomeContainer>
  )
}
export default Home
