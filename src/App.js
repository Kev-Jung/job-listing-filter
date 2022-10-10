import './App.scss';
import { useEffect, useState } from 'react';
import JOB_POSTINGS_DATA from "./data";
import PostingsList from './components/PostingsList/PostingsList';
import HeaderBg from "./images/bg-header-mobile.svg"
import FilterBar from './components/FilterBar/FilterBar';

function App() {
  const [jobPosts, setJobPosts] = useState([])
  const [filterTags, setFilterTags] = useState([])

  useEffect(() => {
      const jobs = JOB_POSTINGS_DATA.filter(job => {
        const {role, level, languages, tools} = job;
        const availableTags = [role, level, ...languages, ...tools];
        const isTagContained = filterTags.every(tag => availableTags.includes(tag))
        return isTagContained && job;
      })
      setJobPosts(jobs)
  }, [filterTags])

  useEffect(() => {
    setJobPosts(JOB_POSTINGS_DATA)
  }, [])

  return (
    <>
      <div className='header-bg'>
        <img className='header-bg-img' src={HeaderBg} alt="header-background"/>
      </div>
      {filterTags.length !== 0 && 
      <FilterBar filterTags={filterTags} setFilterTags={setFilterTags}/>}
      <PostingsList jobPosts={jobPosts} setFilterTags={setFilterTags} />
    </>
  );
}

export default App;
