import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './Login';
import Cadastro from "./Cadastro";
import Filmes from './Filmes';
import EditaFilme from './EditaFilme';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#db7eff',
      light: 'rgb(226, 151, 255)',
      dark: 'rgb(153, 88, 178)',
      contrastText: '#7b19ff',
    },
    secondary: {
      main: '##be8aec',
      light: '#rgb(203, 161, 239)',
      dark: '#rgb(133, 96, 165)',
    },
    text: {
      primary: '#rgba(0, 0, 0, 0.87)',
      secondary: '#9e9e9e',
      hint: '#ffb74d',
      disabled: '#bdbdbd',
    },
    error: {
      main: '##c717c7',
      contrastText: '#ffffff',
    },
    background: {
      default: '#a4a4a4',
    },
    warning: {
      main: '#f0a0ff',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '##2e627d',
    },
    divider: '#5109b3',
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/filmes",
    element: <Filmes />
  },
  {
    path: "/edicao/:id",
    element: <EditaFilme />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
