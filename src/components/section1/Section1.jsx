import styles from './Section1.module.css'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

import { RightBar } from './rightBar/RightBar'
import { Center } from './center/Center'
import { LeftBar } from './leftBar/LeftBar'


const Section1 = () => {
  return (
    <Grid2 className={styles.mainGrid} disableEqualOverflow container columnSpacing={4} rowSpacing={2} >
      
        <Grid2 lg={2} md={3} sm={4} xs={12} >
            <LeftBar />
        </Grid2>

        <Grid2 lg={6} md={5} sm={8} xs={12} >
            <Center />
        </Grid2>

        <Grid2 lg={4} md={4} sm={12} xs={12} >
            <RightBar />
        </Grid2>

    </Grid2>
  )
}

export default Section1