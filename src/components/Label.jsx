import PropTypes from 'prop-types';

function Label({ children, ...restProps }) {
	return (
		<label className="block mb-2" {...restProps}>
			{children}
		</label>
	);
}

Label.propTypes = {
	children: PropTypes.any.isRequired,
};
export default Label;
