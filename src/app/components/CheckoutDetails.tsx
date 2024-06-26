"use client";
import React from "react";
import {Form, useFormik, FormikProvider} from "formik";
import Image from "next/image";
import {InputField} from "../utils/InputField";
import {validationSchema} from "../utils/validationSchema";
import CountrySelector from "../utils/CountrySelector";
import RegionSelector from "../utils/RegionSelector";
import {ChooseUsSection} from "./ChooseUsSection";
import {ScreenSize} from "../utils/ScreenSize";
import visaImage from "../../../public/images/visa.svg";
import mastercardImage from "../../../public/images/mastercard.png";
import amexImage from "../../../public/images/amex.svg";
import groupImage from "../../../public/images/group.svg";
import lockImage from "../../../public/images/lock.svg";

export const CheckoutDetails = () => {
	const isMobile = ScreenSize();
	const formik = useFormik({
		initialValues: {
			email: "",
			firstName: "",
			lastName: "",
			address: "",
			city: "",
			state: "",
			zipCode: "",
			country: "",
			cardNumber: "",
			expirationDate: "",
			securityCode: "",
			nameOnCard: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			storeToLocalStorage(values);
		},
	});

	const storeToLocalStorage = (values: any) => {
		const serializedValues = JSON.stringify(values);
		localStorage.setItem("formValues", serializedValues);
	};

	return (
		<FormikProvider value={formik}>
			<Form className="w-full lg:w-7/12 flex flex-col gap-4 lg:gap-8 border-b lg:border-0 border-neutral-200  lg:pr-[38px]">
				<div className="flex flex-col gap-4 bg-white p-4 pt-6 lg:p-0 lg:pt-[14px]">
					<h1 className="text-2xl font-bold">Contact</h1>
					<InputField
						type="email"
						placeholder="Email Address"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>
				<div className="flex flex-col gap-4 bg-white p-4 lg:p-0">
					<h1 className="text-2xl font-bold">Delivery</h1>
					<div className="flex">
						<div className="w-1/2 pr-3">
							<InputField
								type="text"
								placeholder="First Name"
								name="firstName"
								value={formik.values.firstName}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</div>
						<div className="w-1/2">
							<InputField
								type="text"
								placeholder="Last Name"
								name="lastName"
								value={formik.values.lastName}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</div>
					</div>
					<InputField
						type="text"
						placeholder="Address"
						name="address"
						value={formik.values.address}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<div className="flex flex-wrap lg:flex-nowrap gap-3">
						<div className="w-full lg:w-1/3">
							<InputField
								type="text"
								placeholder="City"
								name="city"
								value={formik.values.city}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</div>
						<div className="w-full lg:w-2/3 flex gap-3 ">
							<div className="w-1/2">
								<RegionSelector
									placeholder="State / Province"
									name="state"
									country={formik.values.country}
									value={formik.values.state}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
							</div>
							<div className="w-1/2">
								<InputField
									type="text"
									placeholder="ZIP / Postal Code"
									name="zipCode"
									value={formik.values.zipCode}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
							</div>
						</div>
					</div>
					<div className=" mt-[-4px]">
						<CountrySelector
							placeholder="Country"
							name="country"
							value={formik.values.country}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-4 bg-white p-4 lg:p-0">
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
									<Image src={visaImage} alt="Credit-Visa" width={36} height={24} />
								</div>
								<Image src={mastercardImage} alt="Credit-Mastercard" width={36} height={24} priority />
								<Image src={amexImage} alt="Credit-Amex" width={36} height={24} priority />
								<div className="w-8 h-6 flex justify-center items-center rounded bg-white border-[0.5px] border-gray_border p-[4px]">
									<Image src={groupImage} alt="Credit-Group" width={36} height={24} />
								</div>
								<div className="w-8 h-6 flex justify-center items-center text-sm font-medium rounded bg-white border-[0.5px] border-gray_border p-[2px] py-[10px]">
									+4
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-3 bg-gray_background border border-gray_border border-t-0 rounded-b p-3 mb-4">
							<InputField
								type="text"
								placeholder="Card number"
								name="cardNumber"
								value={formik.values.cardNumber
									.replace(/\s/g, "")
									.replace(/(\d{4})/g, "$1 ")
									.trim()}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							<div className="flex">
								<div className="w-1/2 pr-3">
									<InputField
										type="text"
										placeholder="Expiration (MM/YY)"
										name="expirationDate"
										value={formik.values.expirationDate
											.replace(/\s/g, "")
											.replace(/^(\d{2})$/, "$1/")
											.trim()}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
								<div className="w-1/2">
									<InputField
										type="text"
										placeholder="Security code"
										name="securityCode"
										value={formik.values.securityCode}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									/>
								</div>
							</div>
							<InputField
								type="text"
								placeholder="Name on card"
								name="nameOnCard"
								value={formik.values.nameOnCard}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</div>
						<button
							type="submit"
							onClick={() => console.log("Form values:", formik.values)}
							className="w-full text-white font-bold bg-[#090] rounded-md px-8 py-4 checkout-button"
						>
							COMPLETE ORDER
						</button>
					</div>
					<div className="flex justify-center gap-2 pb-4 lg:p-6">
						<Image src={lockImage} alt="Credit-Visa" width={14} height={14} />
						<p className="text-sm text-gray_light">All transactions are secure and encrypted</p>
					</div>
				</div>
				{isMobile && <ChooseUsSection />}
			</Form>
		</FormikProvider>
	);
};
