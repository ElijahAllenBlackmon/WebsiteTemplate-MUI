import styles from './LeftBar.module.css'

import { Paper, Stack } from '@mui/material'

export const LeftBar = () => {
  return (
    <Stack className={styles.leftBar} direction={{ xs: 'row', sm: 'column', lg: 'column' }} spacing={2} >
      <Paper sx={{ background: '#BE9B7B' }} className={styles.avatar} elevation={10} >
        avatar
      </Paper>
      <Paper sx={{ background: '#BE9B7B' }} className={styles.contacts} elevation={10} >
        contacts
      </Paper>
    </Stack>
  )
}