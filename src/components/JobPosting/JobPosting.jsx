import "./JobPosting.scss";
import Pill from "../Pill/Pill";
import Tag from "../Tag/Tag";

const JobPosting = ({ job, setFilterTags }) => {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  const tagsList = [role, level, ...languages, ...tools];

  const addFilterTag = (tag) => {
    setFilterTags((prevTags) => [...prevTags, tag]);
  };

  return (
    <div
      className="job-posting-container"
      style={{ borderLeft: `${featured && "6px solid var(--primary-color)"}` }}
    >
      <img src={logo} alt="company-logo" />
      <div className="description-container">
        <div className="posting-heading">
          <h3>{company}</h3>
          {job.new && <Pill>NEW!</Pill>}
          {featured && <Pill type="featured">FEATURED</Pill>}
        </div>
        <h4 className="position">{position}</h4>
        <ul>
          <li>{postedAt}</li>
          <li>{contract}</li>
          <li>{location}</li>
        </ul>
      </div>

      <div className="tags-container">
        {tagsList.map((tag, index) => {
          return (
            <Tag key={index} className="tag" onClick={() => addFilterTag(tag)}>
              {tag}
            </Tag>
          );
        })}
      </div>
    </div>
  );
};

export default JobPosting;
