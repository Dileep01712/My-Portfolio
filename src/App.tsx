import './App.css'
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className='min-h-screen'>
      <div className='max-w-7xl mx-auto flex gap-6 px-1.5 py-7'>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  )
}

export default App;
