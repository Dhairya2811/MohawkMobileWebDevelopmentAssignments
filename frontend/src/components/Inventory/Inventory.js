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
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import { OutlinedInput, TextField } from '@mui/material';


const Inventory = ({ role }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [pets, setPets] = useState();
  const [errorState, setErrorState] = useState(false);
  const location = useLocation();
  // fetches all pet data from the server
  useEffect(()=>{
    fetchPet();
  }, [location]);

  var fetchPet = ()=>{
    setIsLoaded(false);
    fetch("http://localhost:3001/api?act=getall")
      .then(res => res.json())
      .then(
        (result) => {
          setPets(result);
          setTimeout(()=>setIsLoaded(true), 100)
        }
      )
  };

  var search = (event)=>{
    setIsLoaded(false);
    var searchVal = event.target.value;
    fetch("http://localhost:3001/api?act=search&term="+searchVal.replace(/\s/g, '20%'))
    .then(res => res.json())
    .then(
      (result) => {
        setPets(result);
        setTimeout(()=>{
          setIsLoaded(true);
        }, 100);
      });
  };

  var deleteItem = (id)=>{
    fetch("http://localhost:3001/api?act=delete&id="+id)
    .then(res => res.json())
    .then(
      (result) => {
        fetchPet();
      }) 
  };

  var submitItem = ()=>{
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var age = document.getElementById("age").value;
    var price = document.getElementById("price").value;
    if(name != "" && description != "" && age != "" && price != "" && !isNaN(parseFloat(price))){
      if(!isEdit){
        fetch("http://localhost:3001/api?act=add&animal="+name+"&description="+description+"&age="+age+"&price="+price)
        .then(res => res.json())
        .then(
          (result) => {
            fetchPet();
          }) 
      }else{
        var id = document.getElementById("id").value;
        fetch("http://localhost:3001/api?act=update&id="+id+"&animal="+name+"&description="+description+"&age="+age+"&price="+price)
        .then(res => res.json())
        .then(
          (result) => {
            fetchPet();
          });
      }  
    }else{
      setErrorState(true)
    }
  };

  var editItem = (row)=>{
    document.getElementById("id").value = row.id;
    document.getElementById("name").value = row.animal;
    document.getElementById("description").value = row.description;
    document.getElementById("age").value = row.age;
    document.getElementById("price").value = row.price;
    setIsEdit(true);
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
                <TableCell align="center">Delete</TableCell>
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
                  <TableCell><IconButton aria-label="delete" onClick={()=>deleteItem(row.id)}><DeleteIcon color="error"/></IconButton></TableCell>
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
                    <TableCell align="center">Delete</TableCell>
                    <TableCell align="center">Edit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <OutlinedInput id="id" sx={{width: "5em"}} variant="filled" disabled />
                    </TableCell>
                    <TableCell>
                      <OutlinedInput id="name" error={errorState} sx={{width: "7em"}} variant="filled"  />
                    </TableCell>
                    <TableCell colSpan={3}>
                      <OutlinedInput id="description" error={errorState} variant="filled"  />
                    </TableCell>
                    <TableCell>
                      <OutlinedInput id="age" error={errorState} sx={{width: "5em"}} variant="filled"  />
                    </TableCell>
                    <TableCell>
                      <OutlinedInput id="price" error={errorState} sx={{width: "7em"}} variant="filled" />
                    </TableCell>
                    <TableCell>
                      <IconButton disabled aria-label="delete"><DeleteIcon disabled/></IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton id="submit" onClick={()=>submitItem()} aria-label="submit"><SendIcon color="success"/></IconButton>
                    </TableCell>
                  </TableRow>
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
                      <TableCell><IconButton aria-label="delete" onClick={()=>deleteItem(row.id)}><DeleteIcon color="error"/></IconButton></TableCell>
                      <TableCell><IconButton aria-label="edit" onClick={()=>editItem(row)}><EditIcon color="primary"/></IconButton></TableCell>
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
