import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  background-color: #e0eefe;
  display: flex;
  flex-direction: row;
  width: 80%;
  border-radius: 20px;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  width: 55%;
`

export const Image = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 20px;
  width: 45%;
`

export const LoginHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 36px;
  color: #183b56;
  align-self: flex-start;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const Label = styled.label`
  font-size: 14px;
  font-family: 'Roboto';
  color: #5a7184;
  font-weight: 600;
`

export const Input = styled.input`
  font-size: 14px;
  font-family: 'Roboto';
  color: #5a718a;
  border: 1px solid #c3cad9;
  outline: none;
  border-radius: 8px;
  padding: 10px 15px;
  margin: 5px 0;
`

export const ButtonContainer = styled.div`
  display: flex;
`

export const Button = styled.button`
  width: 100%;
  background-color: #1565d8;
  color: #ffffff;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px;
`

export const ShowErrorMessage = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: #ff0b37;
  text-align: center;
`
