import * as React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow } from "@material-ui/core";
import { Filter } from '../Filter/Filter';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../store/index';
import { useActions } from '../../hooks/actions.hook';
import { userType } from '../../types';

export const UsersList: React.FC = (): JSX.Element => {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
  const { usersList: UsersList } = useTypedSelector(state => state)
  const { getUsersList } = useActions()

  React.useEffect(() => {
    getUsersList()
  }, [])

  return (
    <>
      <Filter />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>name</TableCell>
              <TableCell>login</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {UsersList.map((row: userType) => (
              <TableRow key={row.name}>
                <TableCell component='th' scope='row'>
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.login}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
};