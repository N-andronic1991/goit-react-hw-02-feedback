import PropTypes from "prop-types";
const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes={
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired

}
export default Section;
