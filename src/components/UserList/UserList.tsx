import * as React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow } from "@material-ui/core";
import axios from "axios";

interface IUser {
  id: number,
  name: string,
  login: string
}

export const UserList: React.FC = (): JSX.Element => {
  const [rows, setRows] = React.useState<IUser[]>([]);

  async function GetUserList() {
    const res = await axios.get('/users')
    setRows(res.data)
  }

  React.useEffect(() => {
    GetUserList()
  }, [])

  return (
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
          {rows.map((row) => (
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
  )
};