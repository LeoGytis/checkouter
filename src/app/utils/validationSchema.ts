import * as Yup from "yup";

const cardNumberSchema = Yup.object().shape({
	cardNumber: Yup.string()
		.matches(/^\d+$/, "Credit card number must only contain digits")
		.length(16, "Credit card number must be 16 digits long")
		.required("Card number is required"),
});

const expirationDateSchema = Yup.object().shape({
	expirationDate: Yup.string()
		.required("Expiration date is required")
		.test("test-credit-card-expiration-date", "Invalid Expiration - date has past", (expirationDate) => {
			if (!expirationDate) {
				return false;
			}

			const today = new Date();
			const monthToday = today.getMonth() + 1;
			const yearToday = today.getFullYear().toString().substr(-2);

			const [expMonth, expYear] = expirationDate.split("/");

			if (Number(expYear) < Number(yearToday)) {
				return false;
			} else if (Number(expMonth) < monthToday && Number(expYear) <= Number(yearToday)) {
				return false;
			}

			return true;
		})
		.test("test-credit-card-expiration-date", "Invalid Expiration Month", (expirationDate) => {
			if (!expirationDate) {
				return false;
			}

			const [expMonth] = expirationDate.split("/");

			if (Number(expMonth) > 12) {
				return false;
			}

			return true;
		})
		.test("test-credit-card-expiration-year", "Invalid Expiration Year", (expirationDate) => {
			if (!expirationDate) {
				return false;
			}

			const [expMonth, expYear] = expirationDate.split("/");

			if (expYear.length > 2) {
				return false;
			}

			return true;
		}),
});

export const securityCodeSchema = Yup.object().shape({
	securityCode: Yup.string()
		.matches(/^\d+$/, "Credit card number must only contain digits")
		.min(3, "Security code must be 3 or 4 digits")
		.max(4, "Security code must be 3 or 4 digits")
		.required("Card number is required"),
});

export const validationSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email address").required("Email is required"),
	firstName: Yup.string().required("First name is required"),
	lastName: Yup.string().required("Last name is required"),
	address: Yup.string().required("Address is required"),
	city: Yup.string().required("City is required"),
	state: Yup.string().required("State/Province is required"),
	zipCode: Yup.string().required("ZIP/Postal code is required"),
	country: Yup.string().required("Country is required"),
	...cardNumberSchema.fields,
	...expirationDateSchema.fields,
	...securityCodeSchema.fields,
	nameOnCard: Yup.string().required("Name on card is required"),
});
