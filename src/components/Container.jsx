import PropTypes from 'prop-types';

function Container({ children }) {
	return <div className="max-w-sm mx-auto mt-20 px-2">{children}</div>;
}

Container.propTypes = {
	children: PropTypes.any,
};

export default Container;
