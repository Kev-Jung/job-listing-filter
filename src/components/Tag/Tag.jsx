import "./Tag.scss";

const Tag = ({ children, ...otherProps }) => {
  return <span {...otherProps}>{children}</span>;
};

export default Tag;
