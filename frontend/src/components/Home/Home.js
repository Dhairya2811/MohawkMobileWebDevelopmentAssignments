import React from 'react';
import styles from './Home.module.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

var srcset = (image, size, rows = 1, cols = 1)=>{
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Home = ()=>{
  return (
    <div className={styles.Home}>
     <span className={styles.heading}>Home Component</span>

      <ImageList
        sx={{ width: "100%", height: "100%", margin: "0.5em", padding: "10px", backgroundColor: "black" }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: './Images/img1.jpg',
    rows: 2,
    cols: 2,
  },
  {
    img: './Images/img2.jpeg'
  },
  {
    img: './Images/img3.jpeg',
  },
  {
    img: './Images/img4.jpeg',
  },
  {
    img: './Images/img5.jpeg',
  },
  {
    img: './Images/img6.jpeg',
  },
  {
    img: './Images/img7.jpeg',
  },
  {
    img: './Images/img9.jpg',
    rows: 2,
    cols: 2,
  },
  {
    img: './Images/img8.jpeg',
  },
  {
    img: './Images/img10.jpeg',
  }

];

export default Home;
