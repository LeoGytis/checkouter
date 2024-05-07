import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email address").required("Email is required"),
	firstName: Yup.string().required("First name is required"),
	lastName: Yup.string().required("Last name is required"),
	address: Yup.string().required("Address is required"),
	city: Yup.string().required("City is required"),
	state: Yup.string().required("State/Province is required"),
	zipCode: Yup.string().required("ZIP/Postal code is required"),
	country: Yup.string().required("Country is required"),
	cardNumber: Yup.string().required("Card number is required"),
	expirationDate: Yup.string().required("Expiration date is required"),
	securityCode: Yup.string().required("Security code is required"),
	nameOnCard: Yup.string().required("Name on card is required"),
});
