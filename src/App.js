import './App.scss';
import PostingsList from './components/PostingsList/PostingsList';
import HeaderBg from "./images/bg-header-mobile.svg"

function App() {
  return (
    <>
      <div className='header-bg'>
        <img className='header-bg-img' src={HeaderBg} alt="header-background"/>
      </div>
      <PostingsList />
    </>
  );
}

export default App;
