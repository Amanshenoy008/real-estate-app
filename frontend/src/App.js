import Authpage from './pages/authpage'
import Home from './pages/home'
import Error404 from './pages/error404'
import {BrowserRouter , Route , Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
    <Routes>
      <Route path='/' element={<Authpage />} />
      <Route path='/home' element={<Home />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
