import Home from './pages/home'
import Error404 from './pages/error404'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Details from './pages/details';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<Details />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
