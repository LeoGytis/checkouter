import {ErrorMessage, Field} from "formik";

interface InputFieldProps {
	type: string;
	placeholder: string;
	name: string;
	value?: string;
	onChange?: (e: any) => void;
	onBlur?: (e: any) => void;
}

export const InputField = ({type, placeholder, name, value, onChange, onBlur}: InputFieldProps) => (
	<div className="w-full flex flex-col gap-1">
		<Field
			type={type}
			placeholder={placeholder}
			className="checkout-input"
			name={name}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
		/>
		<ErrorMessage name={name} component="div" className="text-red-500" />
	</div>
);
