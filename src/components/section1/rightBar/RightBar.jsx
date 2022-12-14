import styles from './RightBar.module.css'
import { Paper } from '@mui/material'


export const RightBar = () => {
  return (
    <Paper sx={{ background: '#BE9B7B' }} className={styles.rightBar} elevation={10}>
      right
    </Paper>
  )
}
