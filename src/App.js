import './App.css';
import Content from './Components/Content/Content';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <>
    <div className='container-fluid'>
    <div className="row">
    <div className="col-2 column2 bg-light " >
      <Sidebar/>
      </div>
      <div className="col-10 column10">
      <Navbar/>
      <Content/>
      </div>
    </div>
    </div>

    </>
  );
}

export default App;
