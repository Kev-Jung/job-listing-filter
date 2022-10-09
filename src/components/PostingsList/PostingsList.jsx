import "./PostingsList.scss";
import JOB_POSTINGS_DATA from "../../data";
import JobPosting from "../JobPosting/JobPosting";

const PostingsList = () => {
  return (
    <div className="job-posting-list-container">
      {JOB_POSTINGS_DATA.map((job) => {
        return <JobPosting key={job.id} job={job} />;
      })}
    </div>
  );
};

export default PostingsList;
