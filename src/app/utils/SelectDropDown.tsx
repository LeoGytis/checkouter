import {ErrorMessage, Field, FieldProps} from "formik";

interface SelectDropDownProps {
	options: {value: string; label: string}[];
	name: string;
}

export const SelectDropDown = ({options, name}: SelectDropDownProps) => (
	<div className="w-full flex flex-col gap-1">
		<Field
			name={name}
			as="select"
			validate={(value: string) => {
				return value ? undefined : `Please select a ${name}`; // Validation logic
			}}
		>
			{({field, form}: FieldProps) => (
				<>
					<select
						className={`checkout-input ${form.touched[name] && form.errors[name] ? "error" : ""}`}
						{...field}
					>
						<option value="">Select {name}</option>
						{options.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				</>
			)}
		</Field>
		<ErrorMessage name={name} component="div" className="text-red-500" />
	</div>
);
