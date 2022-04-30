import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles'
import ProductRecord from './Components/ProductRecord/ProductRecord';
import theme from './Theme/Theme'


function App() {

  return (
    <ThemeProvider theme={theme}>
      <ProductRecord />
    </ThemeProvider>
  );
}

export default App;
