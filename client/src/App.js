
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Employee from './componant/emp';
import Emplist from './componant/emplist';
import Update from './componant/update';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={[<Employee/>,<Emplist/>]}/>
        <Route path="/Edit/:id" element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
