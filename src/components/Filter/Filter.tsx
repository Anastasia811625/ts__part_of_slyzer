import React from "react";
import { TextField, Button } from "@material-ui/core";
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../store/index';
import { userType } from '../../types';
import { useActions } from '../../hooks/actions.hook';

export const Filter = () => {
  const [userData, setUserData] = React.useState({
    login: '',
    name: '',
  });
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
  const { usersList } = useTypedSelector(state => state)
  const {setUsersList} = useActions()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const filterList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUserData({
      login: '',
      name: '',
    })
    const filtredList = usersList.filter((user:userType) => user.name?.includes(userData.name) && user.login?.includes(userData.login))
    setUsersList(filtredList)
  }

  return (
    <form onSubmit={filterList}>
      <TextField
        name='name'
        value={userData.name}
        onChange={handleChange}
      />
      <TextField
        name='login'
        value={userData.login}
        onChange={handleChange}
      />
      <Button type='submit' children='filter' />
    </form>
  )
}
