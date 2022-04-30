import { createTheme } from '@mui/material/styles'

let theme = createTheme({
    palette: {
        primary: {
            light: '#EBAFE',
            main: '#5E7BFD',
            dark: '#3A53A2'
          },
          secondary: {
            light: '#EBD4F7',
            main: '#FFC5F6',
            dark: '#FF9FB1'
          }
    },
})

theme = createTheme(theme, {
  components: {
    MuiButton: {
        variants: [
            {
            props: { variant: 'main' },
            style: {
                textTransform: 'capitalize',
                backgroundColor: theme.palette.primary.accent,
                color: theme.palette.primary.dark,
                border: `1px solid ${theme.palette.primary.main}`,
                '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: '#000',
                boxShadow: '0px 0px 10px #ccc',
                opacity: '0.8',
                },
                '&:disabled': {
                opacity: '0.7',
                },
            },
            },
        ],
        styleOverrides: {
            root: {
            fontSize: '14px',
            lineHeight: '-30px',
            letterSpacing: '-0.5px',
            textTransform: 'capitalize',
            },
        },
    },
    MuiMenuItem: {
        styleOverrides: {
            root: {
            color: 'black',
            },
        },
    },
    MuiInputBase: {
        styleOverrides: {
            root: {
            backgroundColor: '#fff',
            },
        },
    },
  },
})

export default theme
