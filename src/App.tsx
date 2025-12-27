import './App.css'
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className='min-h-screen'>
      <div className='max-w-7xl mx-auto md:flex md:gap-6 md:px-1.5 md:py-7 mb-16'>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  )
}

export default App;
