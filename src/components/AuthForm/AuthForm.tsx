import React, { FC } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  // FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Link,
  Paper,
  // Switch,
  Tooltip,
  Typography,
} from '@material-ui/core';
import VisOffIcon from '@material-ui/icons/VisibilityOffOutlined';
import VisIcon from '@material-ui/icons/VisibilityOutlined';
import { UserDataType } from '../RegisterForm/RegisterForm';
import axios from 'axios';

interface IPropsAuthForm {
  children?: React.ReactNode,
  onSubmit?: (userData: object) => void,
}

interface IflagsForm {
  isShowPassword: boolean,
  switch: boolean,
}

interface IUserData {
  login: string,
  password: string,
}

export const AuthForm: FC<IPropsAuthForm> = (): JSX.Element => {
  const [flagsForm, setFlagsForm] = React.useState<IflagsForm>({
    isShowPassword: false,
    switch: false,
  });

  const [userData, setUserData] = React.useState<IUserData>({
    login: "",
    password: "",
  })

  async function loginUser(currentData: UserDataType) {
    const res = await axios.get<UserDataType[]>('/users')
    res.data.find(user =>
      user.login === currentData.login
      && user.password === currentData.password) ?
      console.log('user found') :
      console.log('user not found')
  }

  const handleChange = (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.hasOwnProperty('checked') ?
      setFlagsForm({
        ...flagsForm, [prop]: event.target.checked
      }) :
      setUserData({
        ...userData, [prop]: event.target.value
      });
  };

  const handleClickShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setFlagsForm({
      ...flagsForm,
      isShowPassword: !flagsForm.isShowPassword
    });
  };
  //==========================================================
  return (
    <Container maxWidth="sm" >
      <Paper elevation={3} >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginUser(userData);
            setFlagsForm({
              isShowPassword: false,
              switch: false,
            });
            setUserData({
              login: "",
              password: "",
            });
          }}
          autoComplete="off"
        >
          <Grid container direction="column" alignItems="stretch" spacing={4}>
            <Grid item>
              <Box
                fontWeight={600}
                fontSize={32}
                fontFamily="Open Sans"
                textAlign="center"
              >
                SYSINFO ANALYZER
              </Box>
            </Grid>
            <Grid item>
              <TextField
                value={userData.login}
                onChange={handleChange("login")}
                label="Логин"
                aria-label="Логин"
              />
            </Grid>
            <Grid item container>
              <FormControl >
                <TextField
                  value={userData.password}
                  type={flagsForm.isShowPassword ? "text" : "password"}
                  onChange={handleChange("password")}
                  label="Пароль"
                  aria-label="Пароль"
                  InputProps={{
                    endAdornment: (
                      <Tooltip
                        title="переключить видимость пароля"
                        placement="top-end"
                      >
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="переключить видимость пароля"
                            onClick={handleClickShowPassword}
                          >
                            {flagsForm.isShowPassword ? (
                              <VisOffIcon />
                            ) : (
                              <VisIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      </Tooltip>
                    ),
                  }}
                ></TextField>
              </FormControl>
            </Grid>
            {/* <Grid item container>
              <FormControlLabel
                control={<Switch color="primary" onChange={handleChange("switch")} />}
                aria-label="Запомнить меня"
                label="Запомнить меня"
                labelPlacement="end"
              />
            </Grid> */}
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                aria-label="Войти"
                children="Войти"
              />
            </Grid>
            <Grid item container justifyContent="center">
              <Typography variant="body1" component="span">
                Забыли пароль? &nbsp;
                <Link
                  href="/restore"
                  color="primary"
                  aria-label="Восстановить пароль"
                >
                  Восстановить
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}
