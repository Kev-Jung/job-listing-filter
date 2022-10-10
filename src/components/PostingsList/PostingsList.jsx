import "./PostingsList.scss";
import JobPosting from "../JobPosting/JobPosting";

const PostingsList = ({ jobPosts, setFilterTags }) => {
  return (
    <div className="job-posting-list-container">
      {jobPosts.map((job) => {
        return (
          <JobPosting key={job.id} job={job} setFilterTags={setFilterTags} />
        );
      })}
    </div>
  );
};

export default PostingsList;
