import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
`

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 48px 36px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  width: 90%;
  max-width: 380px;
`

export const Logo = styled.img`
  width: 140px;
  margin-bottom: 32px;
`

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
  color: #475569;
  margin-bottom: 6px;
`

export const Input = styled.input`
  height: 36px;
  padding: 0 12px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  margin-bottom: 16px;

  &:focus {
    border-color: #3b82f6;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`

export const Checkbox = styled.input`
  cursor: pointer;
`

export const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #1e293b;
  cursor: pointer;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  height: 38px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 12px;
  margin-top: 6px;
`
