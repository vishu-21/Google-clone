import './App.css';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import TextEditor from './Component/TextEditor';
// import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className="App flex w-screen">
      <div style={{flex: '.97'}} >
        <div style={{top: '0.1rem', paddingBottom: '.9rem'}} className='head sticky z-10 bg-headerbg'>
          <Header /> {/* Top most header navbar which contains the doc name and other options along with share feature */}
         {/* <Toolbar /> toolbar just below the header navbar which contains different text formatting options  */}
        </div>
        <TextEditor />  {/* component in which the library Quill is used to enable the functionalities of a text editor as well as the toolbar for different text formatting options*/}
      </div>
      <div style={{flex: '.035'}} className='mt-2'>
        <Sidebar /> {/* the sidebar that includes links to other Google apps */}
      </div>
    </div>
  );
}

export default App;