import React from 'react';
import './App.css';
import {Navigation} from './components'
import { ThemeProvider } from 'styled-components';


function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <Navigation/>
    </div>
    </ThemeProvider>
  );
}

export default App;
