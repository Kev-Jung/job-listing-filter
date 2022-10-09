import "./Pill.scss";

const Pill = ({ children, type }) => {
  return <span className={`pill ${type && type}`}>{children}</span>;
};

export default Pill;
