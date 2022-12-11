import styles from './Header.module.css'
import { Paper } from '@mui/material'

const Header = () => {
  return (
    <Paper className={styles.header} elevation={24} >
      header
    </Paper>
  )
}

export default Header