import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import {
  LoginMainContainer,
  ImageContainer,
  Image,
  LoginContainer,
  LoginHeading,
  FormContainer,
  InputContainer,
  Label,
  Input,
  ButtonContainer,
  Button,
  ShowErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    userIDInput: '',
    pinInput: '',
    errorMsg: '',
  }

  submitForm = async event => {
    event.preventDefault()
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const {userIDInput, pinInput} = this.state
    const userDetails = {
      user_id: userIDInput,
      pin: pinInput,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const {history} = this.props
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  changeUserID = event => {
    this.setState({userIDInput: event.target.value})
  }

  changePIN = event => {
    this.setState({pinInput: event.target.value})
  }

  render() {
    const {userIDInput, pinInput, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginMainContainer>
        <ImageContainer>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
        </ImageContainer>
        <LoginContainer>
          <LoginHeading>Welcome Back!</LoginHeading>
          <FormContainer onSubmit={this.submitForm}>
            <InputContainer>
              <Label htmlFor="userID">User ID</Label>
              <Input
                id="userID"
                type="text"
                placeholder="Enter User ID"
                onChange={this.changeUserID}
                value={userIDInput}
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="pin">PIN</Label>
              <Input
                id="pin"
                type="password"
                placeholder="Enter PIN"
                onChange={this.changePIN}
                value={pinInput}
              />
            </InputContainer>
            <ButtonContainer>
              <Button type="submit">Login</Button>
            </ButtonContainer>
            <ShowErrorMessage>{errorMsg}</ShowErrorMessage>
          </FormContainer>
        </LoginContainer>
      </LoginMainContainer>
    )
  }
}

export default Login
