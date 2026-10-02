import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  MainContainer,
  LoginCard,
  Logo,
  LoginForm,
  Label,
  Input,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

const Login = () => {
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      history.replace('/')
    }
  }, [history])

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onChangeShowPassword = () => {
    setShowPassword(prevState => !prevState)
  }

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const onSubmitFailure = errorMessage => {
    setShowError(true)
    setErrorMsg(errorMessage)
  }

  const submitForm = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  return (
    <MainContainer>
      <LoginCard>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <LoginForm onSubmit={submitForm}>
          <Label htmlFor="username">USERNAME</Label>
          <Input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={onChangeUsername}
          />

          <Label htmlFor="password">PASSWORD</Label>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />

          <CheckboxContainer>
            <Checkbox
              id="showPassword"
              type="checkbox"
              checked={showPassword}
              onChange={onChangeShowPassword}
            />
            <CheckboxLabel htmlFor="showPassword">Show Password</CheckboxLabel>
          </CheckboxContainer>

          <LoginButton type="submit">Login</LoginButton>

          {showError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
        </LoginForm>
      </LoginCard>
    </MainContainer>
  )
}

export default Login
