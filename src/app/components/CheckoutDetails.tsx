import Image from "next/image";

export const CheckoutDetails = () => {
	return (
		<form className="flex flex-col gap-8 text-gray_dark">
			<div className="flex flex-col gap-4">
				<h1 className="text-2xl font-bold">Contact</h1>
				<input placeholder="Email Address" className="checkout-input" />
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
				<div className="flex flex-col gap-2">
					<div className="flex justify-between">
						<div>
							<input type="radio" id="option1" name="options" value="option1" />
							<label>Credit Card</label>
						</div>
						<div>
							VISA MasterCard ...
							<Image src="/images/credit-visa.svg" alt="Credit-Visa" width={64} height={64} />
						</div>
					</div>
					<input placeholder="Card number" className="checkout-input"></input>
					<input placeholder="Expiration (MM/YY)" className="checkout-input"></input>
					<input placeholder="Security code" className="checkout-input"></input>
					<input placeholder="Name on card" className="checkout-input"></input>
					<button className="w-full text-white bg-green-800 py-2 px-6">COMPLETE ORDER</button>
				</div>
				<p>All trasaactions are secure and ancrypted</p>
			</div>
		</form>
	);
};
