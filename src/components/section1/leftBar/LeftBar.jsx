import styles from './LeftBar.module.css'

import { Paper, Stack } from '@mui/material'

export const LeftBar = () => {
  return (
    <Stack className={styles.stack} direction={{ xs: 'row', sm: 'column', lg: 'column' }} spacing={4} >
      <Paper className={styles.avatar} elevation={10} >
        avatar
      </Paper>
      <Paper className={styles.contacts} elevation={10} >
        contacts
      </Paper>
    </Stack>
  )
}