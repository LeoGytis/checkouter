import {ContactContainer} from "./ContactContainer";
import {DeliveryContainer} from "./DeliveryContainer";
import {PaymentContainer} from "./PaymentContainer";

export const CheckoutDetails = () => {
	return (
		<form className="flex flex-col gap-8">
			<ContactContainer />
			<DeliveryContainer />
			<PaymentContainer />
		</form>
	);
};
