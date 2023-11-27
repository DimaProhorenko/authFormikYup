import PropTypes from 'prop-types';
import { useField } from 'formik';
import { Label } from './';

function Input({ label, ...props }) {
	const [field, meta] = useField(props);

	return (
		<div className="mb-5">
			<Label htmlFor={props.id}>{label}</Label>
			<input
				{...field}
				{...props}
				className="w-full border border-slate-600 focus:border-purple-500 outline-none
             hover:border-purple-500 cursor-pointer px-2 py-2 rounded-md
              text-black placeholder:italic placeholder:text-slate-600
              shadow-md"
			/>
			{meta.touched && meta.error && (
				<span className="text-red-500 italic">{meta.error}</span>
			)}
		</div>
	);
}

Input.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};
export default Input;
