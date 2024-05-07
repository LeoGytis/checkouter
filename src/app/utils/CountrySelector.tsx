import React from "react";
import {CountryDropdown, CountryDropdownProps} from "react-country-region-selector";
import {ErrorMessage, Field, FieldProps} from "formik";

interface CountrySelectorProps extends CountryDropdownProps {
	name: string;
	placeholder: string;
}

const CountrySelector = ({placeholder, name, ...rest}: CountrySelectorProps) => {
	return (
		<div className="w-full flex flex-col gap-1">
			<Field placeholder={placeholder} name={name} className="checkout-input">
				{({field, form}: FieldProps<any>) => (
					<CountryDropdown
						{...field}
						{...rest}
						onChange={(value) => form.setFieldValue(name, value)}
						onBlur={() => form.setFieldTouched(name, true)}
					/>
				)}
			</Field>
			<ErrorMessage name={name} component="div" className="text-red-500" />
		</div>
	);
};

export default CountrySelector;
