import PropTypes from 'prop-types';

function Title({ children }) {
	return (
		<h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-semibold my-3">
			{children}
		</h1>
	);
}

Title.propTypes = {
	children: PropTypes.any,
};
export default Title;
