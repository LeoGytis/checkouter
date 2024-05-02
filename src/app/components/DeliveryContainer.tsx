export const DeliveryContainer = () => {
	return (
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
	);
};
