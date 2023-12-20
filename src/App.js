
import './App.css';
import Header from './Layout';
import Footer from './Layout/footer';
import Home from './Pages/Home';
import route from './Route/route';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Context from './context/context';
// import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
    <Context>
    <Router>
    <Header/>
      <div className='h-16'></div>
        <Routes>
          {route.map((n)=>{
            return (<Route path={n.path} element={n.element} key={n.path}/>)
          })}

        </Routes>
    <Footer/>
    </Router>
    </Context>
    </div>
  );
}

export default App;
