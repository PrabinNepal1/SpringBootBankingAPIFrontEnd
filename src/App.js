import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { AuthProvider } from '../Services/UserService';

import Homepage from './Components/Homepage'
import Registration from './Components/Registration';
import Login from './Components/Login';
import UserPage from './Components/UserPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <>
            <Route  path='/' element={<Homepage/>}/>
            <Route  path='/Registration' element={<Registration/>}/>
            <Route  path='/Login' element={<Login/>}/>
            <Route  path='/userPage' element={<UserPage/>}/>
          </>
        </Routes>
      </Router>

    </AuthProvider>
      
  );
}

export default App;
