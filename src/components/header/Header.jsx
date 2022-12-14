import styles from './Header.module.css'
import { Paper, Stack } from '@mui/material'
import ebWhite from '../../assets/eb-white.png'



const Header = () => {


  return (
    <Stack className={styles.header} direction={{ xs: 'row', sm: 'row' }} spacing={2} >
      <img className={styles.logo} src={ebWhite} alt="logo" />
      <Paper sx={{ background: '#854442' }} className={styles.nav} elevation={10} >
      </Paper>
    </Stack>
  )
}

export default Header