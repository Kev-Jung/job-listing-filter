import Tag from "../Tag/Tag";
import "./FilterBar.scss";

const FilterBar = ({ filterTags, setFilterTags }) => {
  const handleDeleteFilterTag = (tag) => {
    console.log(tag);
    setFilterTags(filterTags.filter((filterTag) => filterTag !== tag));
  };

  return (
    <div className="filter-bar-container">
      <div className="tags-container">
        {filterTags.length !== 0 &&
          filterTags.map((tag) => {
            return (
              <div className="filter-tag-container">
                <Tag className="filter-tag">{tag}</Tag>
                <div className="delete-btn">
                  <span onClick={() => handleDeleteFilterTag(tag)}>
                    &#x2715;
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      <span className="clear-filters-btn">Clear</span>
    </div>
  );
};

export default FilterBar;
