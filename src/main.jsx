import { createRoot } from 'react-dom/client'
import "./style.css"
import MovieList from './View/MovieList';
import NavBar from './View/NavBar';
createRoot(document.getElementById('root')).render(
  <>
  <NavBar/>
  <MovieList />
  </>
)


//=========================
//      ToolPad Demo
//=========================
// import { StyledEngineProvider } from '@mui/material/styles';
// import Demo from './ToolPad/demo';
// createRoot(document.querySelector("#root")).render(
//     <StyledEngineProvider injectFirst>
//       <Demo />
//     </StyledEngineProvider>
// );