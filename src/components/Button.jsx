import PropTypes from "prop-types";

function Button({ text, name }) {
  return (
    <button>
      {text} - {name}
    </button>
  );
}

Button.defaultProps = {
  name: "User Name",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string,
};
export default Button;
