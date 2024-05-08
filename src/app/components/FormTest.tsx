"use client";
import React, {useState} from "react";
import {Form, useFormik, FormikProvider} from "formik";
import {InputField} from "../utils/InputField";
import {validationSchema} from "../utils/validationSchema";

export const FormTest = () => {
	const [list, setList] = useState(false);
	console.log("🚀 :: FormTest :: list ::", list);
	const formik = useFormik({
		initialValues: {
			email: "",
			firstName: "",
			lastName: "",
		},
		// validationSchema: validationSchema,
		// onSubmit: () => {},
		onSubmit: (values) => {
			setLocalStorage(values);
			setList(true);
		},
	});

	const setLocalStorage = (data: any) => {
		console.log("🚀 :: constsetLocalStorage :: setLocalStorage ::", data);
	};

	return (
		<FormikProvider value={formik}>
			<Form
				onSubmit={(e) => {
					e.preventDefault();
					console.log("Formik handleSubmit called");
					formik.handleSubmit(e);
				}}
				className="flex flex-col gap-8"
			>
				<div className="flex flex-col gap-4">
					<h1 className="text-2xl font-bold">Contact</h1>

					<InputField
						type="email"
						placeholder="Email Address"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>

					<InputField
						type="firstName"
						placeholder="lastName "
						name="firstName"
						value={formik.values.firstName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>

					<InputField
						type="lastName"
						placeholder="lastName "
						name="lastName"
						value={formik.values.lastName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>

				<div className="flex flex-col gap-4">
					<button
						type="submit"
						// onClick={() => console.log("Form values:", formik.values)}
						className="w-full text-white font-bold bg-[#090] rounded-md px-8 py-4 checkout-button"
					>
						COMPLETE ORDER
					</button>
				</div>
			</Form>
		</FormikProvider>
	);
};
