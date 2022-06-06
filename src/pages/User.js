import React from 'react';
import {
  Box,
  Typography,
  Toolbar,
  Grid,
  Container,
  TextField,
  Button,
  Checkbox,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { styles } from '../components/styles';
import DataTable from 'react-data-table-component';
import axios from '../api/axios';

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <Button type="button" onClick={onClear} color="info" variant="contained">
      X
    </Button>
  </>
);

export const User = () => {
  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
    },
    {
      name: 'Name',
      selector: (row) => row.name,
    },
    {
      name: 'Name',
      selector: (row) => row.name,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
    },
    {
      name: 'Gender',
      selector: (row) => row.gender,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
    },
  ];

  const [users, setUsers] = React.useState();

  React.useEffect(() => {
    axios.get(`https://gorest.co.in/public/v1/users`).then((res) => {
      const responseUsers = res.data.data;
      setUsers(responseUsers);
      console.log(res);
    });
  }, []);
  const isIndeterminate = (indeterminate) => indeterminate;
  const selectableRowsComponentProps = { indeterminate: isIndeterminate };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        overflow: 'auto',
      }}
    >
      <Box>
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} style={styles.titlePage}>
              <Typography variant="h5" color="initial" fontWeight={600}>
                User Table
              </Typography>
            </Grid>
            <Box sx={{ p: 3 }}>
              <DataTable
                title="Users Table"
                columns={columns}
                data={users}
                pagination
                selectableRows
                selectableRowsComponent={Checkbox}
                selectableRowsComponentProps={selectableRowsComponentProps}
              />
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
