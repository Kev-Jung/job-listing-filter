import './App.scss';
import PostingsList from './components/PostingsList/PostingsList';
import HeaderBg from "./images/bg-header-mobile.svg"
import FilterBar from './components/FilterBar/FilterBar';
import { useEffect, useState } from 'react';
import JOB_POSTINGS_DATA from "./data";

function App() {

  const [jobPosts, setJobPosts] = useState([])
  const [filterTags, setFilterTags] = useState([])

  useEffect(() => {
    // setJobPosts(prevJobList => {
      const jobs = jobPosts.filter(job => {
        const {role, level, languages, tools} = job;
        const availableTags = [role, level, ...languages, ...tools];
        const isTagContained = filterTags.some(tag => availableTags.includes(tag));
        return isTagContained ? job : null;
      })
      setJobPosts(jobs)
    // })
  }, [filterTags])

  useEffect(() => {
    setJobPosts(JOB_POSTINGS_DATA)
  }, [])

  // console.log(jobPosts)
  console.log(filterTags)

  return (
    <>
      <div className='header-bg'>
        <img className='header-bg-img' src={HeaderBg} alt="header-background"/>
      </div>
      {filterTags.length !== 0 && <FilterBar filterTags={filterTags} setFilterTags={setFilterTags}/>}
      <PostingsList jobPosts={jobPosts} setFilterTags={setFilterTags} />
    </>
  );
}

export default App;
