import PropTypes from 'prop-types';

function Button({ children, className, ...restProps }) {
	return (
		<button
			{...restProps}
			className={`${
				className || ''
			} border bg-purple-800 text-white px-4 py-2 rounded-lg capitalize font-semibold hover:bg-transparent hover:text-purple-800 hover:border-purple-800`}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
};
export default Button;
