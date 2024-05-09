import React from "react";
import {CountryDropdown, CountryDropdownProps} from "react-country-region-selector";
import {ErrorMessage, Field, FieldProps} from "formik";

interface CountrySelectorProps extends CountryDropdownProps {
	name: string;
	placeholder: string;
}

const CountrySelector = ({placeholder, name, ...rest}: CountrySelectorProps) => {
	return (
		<>
			<div className="relative w-full flex flex-col border border-[#E0E0E0] rounded-md px-2 pt-6 pb-2 h-[58px]">
				<div className="absolute top-0 left-[10px] text-[#828282]">{placeholder}</div>
				<Field name={name}>
					{({field, form}: FieldProps<any>) => (
						<CountryDropdown
							{...field}
							{...rest}
							onChange={(value) => form.setFieldValue(name, value)}
							onBlur={() => form.setFieldTouched(name, true)}
						/>
					)}
				</Field>
			</div>
			<ErrorMessage name={name} component="div" className="text-red-500" />
		</>
	);
};

export default CountrySelector;
