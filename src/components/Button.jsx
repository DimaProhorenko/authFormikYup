import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button({ children, className, disabled = false, ...restProps }) {
	const classes = classNames({
		'disabled:opacity-75 disabled:cursor-not-allowed': disabled,
		[className]: className,
		'border bg-purple-800 text-white px-4 py-2 rounded-lg capitalize font-semibold enabled:hover:bg-transparent enabled:hover:text-purple-800 enabled:hover:border-purple-800': true,
	});
	return (
		<button {...restProps} className={classes} disabled={disabled}>
			{children}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
	disabled: PropTypes.bool,
};
export default Button;
