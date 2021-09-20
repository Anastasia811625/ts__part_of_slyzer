import React, { FC, useState } from 'react';
import {
  Button,
  Container,
  Grid,
  TextField,
  Paper,
} from '@material-ui/core';
// import axios from "axios";

export type UserDataType = {
  name?: string,
  login: string,
  password: string,
}

const initialState: UserDataType = {
  name: '',
  login: '',
  password: '',
}

export const RegisterForm: FC = (): JSX.Element => {
  const [formState, setFormState] = useState<UserDataType>(initialState)

  const setFormStateFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState, [e.target.name]: e.target.value.trim()
    })
  }

  const addUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('new user:', formState)
    registerUser(formState)
    setFormState(initialState)
  }

  // async function registerUser(formState: object) {
  //   const res = await axios.post<UserDataType[]>('/users', formState);
  // }
  const registerUser = (formState: object) => {
    //action
  }

  return (
    <Container>
      <Paper>
        <form onSubmit={addUser}>
          <Grid container direction='column'>
            <Grid item>
              <TextField
                value={formState.name}
                label='name'
                name='name'
                aria-label='name'
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    name: e.target.value
                  })
                }} />
            </Grid>
            <Grid item>
              <TextField
                value={formState.login}
                label='login'
                name='login'
                aria-label='login'
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    login: e.target.value
                  })
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                value={formState.password}
                label='password'
                name='password'
                aria-label='password'
                onChange={setFormStateFunc}
              />
            </Grid>
            <Grid item>
              <Button type='submit' children='register' />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}
