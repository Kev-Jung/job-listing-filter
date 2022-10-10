import Tag from "../Tag/Tag";
import "./FilterBar.scss";

const FilterBar = ({ filterTags, setFilterTags }) => {
  const handleDeleteFilterTag = (tag) => {
    setFilterTags(filterTags.filter((filterTag) => filterTag !== tag));
  };

  const handleClearAllFilters = () => {
    setFilterTags([]);
  };

  return (
    <div className="filter-bar-container">
      <div className="tags-container">
        {filterTags.length !== 0 &&
          // maps array of filterTags with no duplicate items
          [...new Set(filterTags)].map((tag, index) => {
            return (
              <div key={index} className="filter-tag-container">
                <Tag className="filter-tag">{tag}</Tag>
                <div
                  onClick={() => handleDeleteFilterTag(tag)}
                  className="delete-btn"
                >
                  <span>&#x2715;</span>
                </div>
              </div>
            );
          })}
      </div>
      <span onClick={handleClearAllFilters} className="clear-filters-btn">
        Clear
      </span>
    </div>
  );
};

export default FilterBar;
