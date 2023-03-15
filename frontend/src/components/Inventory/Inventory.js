import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Inventory.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';


const Inventory = ({ role }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pets, setPets] = useState();
  const location = useLocation();
  // fetches all pet data from the server
  useEffect(()=>{
    setIsLoaded(false);
    if(location.pathname == "/inventory"){
      fetch("http://localhost:3001/api?act=getall")
      .then(res => res.json())
      .then(
        (result) => {
          setPets(result);
          setTimeout(()=>setIsLoaded(true), 100)
        }
      )
    }
  }, [location]);

  var search = (event)=>{
    setIsLoaded(false);
    var searchVal = event.target.value;
    fetch("http://localhost:3001/api?act=search&term="+searchVal.replace(/\s/g, '20%'))
    .then(res => res.json())
    .then(
      (result) => {
        if(searchVal == ""){
          setPets([]);
        }else{
          setPets(result);
        }
        setTimeout(()=>{
          setIsLoaded(true);
        }, 100);
      });
  };

  var searchReturn = (result)=>{
    return(<div>
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell aline="center">ID</TableCell>
                <TableCell align="center">Animal</TableCell>
                <TableCell align="center" colSpan={3}>Description</TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {result.map((row) => (
                <TableRow
                  key={row.id} 
                  sx={{border: 0}}
                >
                  <TableCell component="th" scope="row">{row.id}</TableCell>
                  <TableCell>{row.animal}</TableCell>
                  <TableCell colSpan={3}>{row.description}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>);
  };

  var returnHTML = ()=>{
    if(role == "inventory"){
      if(isLoaded == true){
        return (
          <div className={styles.inventoryTable}>
            <span className={styles.heading}>Inventory Page</span><br /><br />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell aline="center">ID</TableCell>
                    <TableCell align="center">Animal</TableCell>
                    <TableCell align="center" colSpan={3}>Description</TableCell>
                    <TableCell align="center">Age</TableCell>
                    <TableCell align="center">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pets.map((row) => (
                    <TableRow
                      key={row.id} 
                      sx={{border: 0}}
                    >
                      <TableCell component="th" scope="row">{row.id}</TableCell>
                      <TableCell>{row.animal}</TableCell>
                      <TableCell colSpan={3}>{row.description}</TableCell>
                      <TableCell>{row.age}</TableCell>
                      <TableCell>{row.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        );
      }
    }
    else{
      return (
        <div className={styles.inventoryTable}>
          <div className={styles.heading}>Search Page</div>
          <TextField id="searchbar" sx={{width: "100%", margin: "1em 0"}} onChange={search} label="Search" variant="filled" />
          {isLoaded == true && pets.length !== 0 ? searchReturn(pets) : ""}
        </div>
      )
    }
  };

  return (
    <div className={styles.Inventory}>
      {returnHTML()}
    </div>
  );
};


export default Inventory;
