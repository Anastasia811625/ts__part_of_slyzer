import React from "react";
import axios from 'axios';
import { TextField, Button } from "@material-ui/core";
import { UserDataType } from "../RegisterForm";

export const Filter = () => {
  const [userData, setUserData] = React.useState({
    login: '',
    name: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const filterList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUserData({
      login: '',
      name: '',
    })
    getUserList()
  }
  
  async function getUserList() {
    const res = await axios.get<UserDataType[]>('/users')
    console.log(res.data.filter(user => user.name?.includes(userData.name) && user.login?.includes(userData.login)))
  }

  return (
    <form onSubmit={filterList}>
      <TextField
        name='login'
        value={userData.login}
        onChange={handleChange}
      />
      <TextField
        name='name'
        value={userData.name}
        onChange={handleChange}
      />
      <Button type='submit' children='filter' />
    </form>
  )
}
