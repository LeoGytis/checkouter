import React from "react";
import {RegionDropdown, RegionDropdownProps} from "react-country-region-selector";
import {ErrorMessage, Field, FieldProps} from "formik";

interface RegionSelectorProps extends RegionDropdownProps {
	name: string;
	country: string; // The selected country
	placeholder: string;
}

const RegionSelector = ({placeholder, name, country, ...rest}: RegionSelectorProps) => {
	return (
		<div className="w-full flex flex-col gap-1">
			<Field name={name} className="checkout-input">
				{({field, form}: FieldProps<any>) => (
					<RegionDropdown
						{...field}
						{...rest}
						country={country} // Pass the selected country to the RegionDropdown
						onChange={(value) => form.setFieldValue(name, value)}
						onBlur={() => form.setFieldTouched(name, true)}
					/>
				)}
			</Field>
			<ErrorMessage name={name} component="div" className="text-red-500" />
		</div>
	);
};

export default RegionSelector;
