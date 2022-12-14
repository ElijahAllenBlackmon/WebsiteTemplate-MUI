import styles from './Section2.module.css'

import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

const Section2 = () => {

  const itemData = [
    {img: 'images/mug.jpg', alt: 'mug'},
    {img: 'images/coffee-beans.jpg', alt: 'coffee-beans'},
    {img: 'images/coffee-trio.jpg', alt: 'coffee-trio'},
    {img: 'images/cafe-lights.jpg', alt: 'cafe-lights'},
    {img: 'images/menu.jpg', alt: 'menu'},
    {img: 'images/coffee-table.jpg', alt: 'coffee-table'},
    {img: 'images/coffee2.jpg', alt: 'coffee2'},
    {img: 'images/cafe.jpg', alt: 'cafe'},
    {img: 'images/coffee1.jpg', alt: 'coffee1'},
    {img: 'images/coffee-logo.jpg', alt: 'coffee-logo'},
    {img: 'images/grounds.jpg', alt: 'grounds'},
    {img: 'images/coffee-maker.jpg', alt: 'coffee-maker'},
  ]

  return (
    <Grid2 className={styles.section2} disableEqualOverflow container columnSpacing={1} rowSpacing={1} >
      {itemData.map(item => (
        <Grid2 className={styles.imgContainer} xs={4}>
          <img className={styles.img} key={item.img} src={item.img} alt={item.alt} srcSet={item.img} />
        </Grid2>
      ))}
    </Grid2>
  )
}

export default Section2