"use client";
import React from "react";
import {Field, Form, useFormik, FormikProvider} from "formik";
import * as Yup from "yup";
import Image from "next/image";

export const validationSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email address").required("Email is required"),
	firstName: Yup.string().required("First name is required"),
	lastName: Yup.string().required("Last name is required"),
	address: Yup.string().required("Address is required"),
	city: Yup.string().required("City is required"),
	state: Yup.string().required("State/Province is required"),
	zip: Yup.string().required("ZIP/Postal code is required"),
	country: Yup.string().required("Country is required"),
	cardNumber: Yup.string().required("Card number is required"),
	expiration: Yup.string().required("Expiration date is required"),
	securityCode: Yup.string().required("Security code is required"),
	nameOnCard: Yup.string().required("Name on card is required"),
});

export const CheckoutDetails = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			firstName: "",
			lastName: "",
			address: "",
			city: "",
			state: "",
			zip: "",
			country: "",
			cardNumber: "",
			expiration: "",
			securityCode: "",
			nameOnCard: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			// Handle form submission
			console.log(values);
		},
	});

	return (
		<form className="flex flex-col gap-8">
			<div className="flex flex-col gap-4">
				<h1 className="text-2xl font-bold">Contact</h1>
				<input
					type="email"
					placeholder="Email Address"
					className="checkout-input"
					name="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.email && formik.errors.email ? (
					<div className="text-red-500">{formik.errors.email}</div>
				) : null}
			</div>
			<div className="flex flex-col gap-4">
				<h1 className="text-2xl font-bold">Delivery</h1>
				<div className="flex gap-4">
					<input placeholder="First Name" className="w-1/2 checkout-input" />
					<input placeholder="Last Name" className="w-1/2 checkout-input" />
				</div>
				<input placeholder="Address" className="checkout-input" />
				<div className="flex gap-3">
					<input placeholder="City" className="w-1/3 checkout-input" />
					<input placeholder="State / Province" className="w-1/3 checkout-input" />
					<input placeholder="ZIP / Postal Code" className="w-1/3 checkout-input" />
				</div>
				<input placeholder="Country" className="checkout-input mt-[-4px]" />
			</div>
			<div className="flex flex-col gap-4">
				<div>
					<h1 className="text-2xl font-bold mb-2">Payment</h1>
					<p className="text-sm text-gray_light">All transactions are secure and encrypted.</p>
				</div>
				<div className="flex flex-col">
					<div className="flex justify-between bg-[#f0f5ff] p-4 border border-[#3362AB] rounded-t-md">
						<div className="flex gap-4 items-center">
							<input type="radio" id="option1" name="options" value="option1" className="w-5 h-5" />
							<label>Credit Card</label>
						</div>
						<div className="flex gap-[3px]">
							<div className="w-8 h-6 flex justify-center items-center rounded bg-white  border-[0.5px] border-gray_border p-[2px]">
								<Image src="/images/visa.svg" alt="Credit-Visa" width={36} height={24} />
							</div>
							<Image src="/images/mastercard.png" alt="Credit-Visa" width={36} height={24} priority />
							<Image src="/images/amex.svg" alt="Credit-Visa" width={36} height={24} priority />
							<div className="w-8 h-6 flex justify-center items-center rounded bg-white  border-[0.5px] border-gray_border p-[4px]">
								<Image src="/images/group.svg" alt="Credit-Visa" width={36} height={24} />
							</div>
							<div className="w-8 h-6 flex justify-center items-center text-sm font-medium rounded bg-white border-[0.5px] border-gray_border p-[2px] py-[10px]">
								+4
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-3 bg-gray_background border border-gray_border border-t-0 rounded-b p-3 mb-4">
						<input placeholder="Card number" className="checkout-input"></input>
						<div className="flex gap-4">
							<input placeholder="Expiration (MM/YY)" className="w-1/2 checkout-input" />
							<input placeholder="Security code" className="w-1/2 checkout-input" />
						</div>
						<input placeholder="Name on card" className="checkout-input"></input>
					</div>

					<button className="w-full text-white font-bold bg-[#090] rounded-md px-8 py-4 checkout-button">
						COMPLETE ORDER
					</button>
				</div>
				<div className="flex justify-center gap-2">
					<Image src="/images/lock.svg" alt="Credit-Visa" width={14} height={14} />
					<p className="text-sm text-gray_light">All trasaactions are secure and ancrypted</p>
				</div>
			</div>
		</form>
	);
};
