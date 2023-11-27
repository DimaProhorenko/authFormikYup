import PropTypes from 'prop-types';

function Error({ children }) {
	return <span className="text-red-500 italic">{children}</span>;
}

Error.propTypes = {
	children: PropTypes.any.isRequired,
};

export default Error;
