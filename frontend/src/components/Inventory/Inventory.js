import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Inventory.module.css';


const Inventory = ({ role }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pets, setPets] = useState();
  const location = useLocation();
  // fetches all pet data from the server
  useEffect(()=>{
    setIsLoaded(false);
    fetch("http://localhost:3001/api?act=getall")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        console.log(result);
        setPets(result);
      }
    )
  }, [location]);

  var returnHTML = ()=>{
    if(role == "inventory"){
      if(isLoaded == true){
        return (
          <div>
            Inventory Page
            {console.log(pets)}
          </div>
        );
      }
    }
    else{
      return (
        <div>
          Search Page
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
