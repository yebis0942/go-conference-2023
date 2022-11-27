import { createTheme, ThemeOptions } from '@mui/material/styles'
import { Colors } from './color'

const defaultTheme = createTheme()

const { breakpoints } = defaultTheme

export const theme: ThemeOptions = {
  ...defaultTheme,
  components: {
    MuiTypography: {
      defaultProps: {
        color: Colors.text.primary
      }
    }
  },
  typography: {
    h2: {
      fontSize: '50px',
      fontWeight: 500,
      marginBottom: '40px',
      [breakpoints.down('sm')]: {
        fontSize: '24px',
        marginBottom: '16px'
      }
    },
    h3: {
      fontSize: '34px',
      fontWeight: 600,
      marginBottom: '24px',
      [breakpoints.down('sm')]: {
        fontSize: '20px',
        marginBottom: '16px'
      }
    },
    body1: {
      fontSize: '24px',
      [breakpoints.down('sm')]: {
        fontSize: '16px'
      }
    },
    body2: {
      fontSize: '18px',
      [breakpoints.down('sm')]: {
        fontSize: '14px'
      }
    }
  }
}
