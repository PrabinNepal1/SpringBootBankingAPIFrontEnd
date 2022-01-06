import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


import Homepage from './Components/Homepage'
import Registration from './Components/Registration';
import Login from './Components/Login';
// import Userpage from './component/userpage';

function App() {
  return (
      <Router>
        <Routes>
          <>
            <Route  path='/' element={<Homepage/>}/>
            <Route  path='/Registration' element={<Registration/>}/>
            <Route  path='/Login' element={<Login/>}/>
          </>
        </Routes>
      </Router>
  );
}

export default App;
