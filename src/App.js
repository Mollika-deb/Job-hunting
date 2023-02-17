import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routers from './Routs/Routs/Routes';

function App() {
  return (
    <div className>
      <RouterProvider router={routers}></RouterProvider>
      
    </div>
  );
}

export default App;
