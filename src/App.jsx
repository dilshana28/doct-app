
import './App.css';
import Alldoct from './Components/Alldoct/Alldoct';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import ViewDoct from './Components/Viewdoct/ViewDoct';




function App() {
  return (
    <div className="App">
   
    <Header/>
    <Routes>
      {/* localhost 3000 -allrest component */}
      <Route path='/' element={<Alldoct/>}/>
      {/* view particular catd localhost:3000/view/43 */}
      <Route path='/view/:id' element={<ViewDoct/>}    />
    </Routes>
  
    <Footer/>
    </div>
  );
}

export default App;
