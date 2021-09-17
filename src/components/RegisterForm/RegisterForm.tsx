import React, { FC, useState } from 'react';
import {
  Button,
  Container,
  Grid,
  TextField,
  Paper,
} from '@material-ui/core';
import axios from "axios";

export type UserDataType = {
  name?: string,
  login: string,
  password: string,
}

export const RegisterForm: FC = (): JSX.Element => {
  const [formState, setFormState] = useState<UserDataType>({
    name: '',
    login: '',
    password: '',
  })

  const setFormStateFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState, [e.target.name]: e.target.value
    })
  }

  const addUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    registerUser(formState)
  }

  async function registerUser(formState: object) {
    const res = await axios.post<UserDataType[]>('/users', formState);
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
