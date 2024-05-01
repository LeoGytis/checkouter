import Image from "next/image";

export const CheckoutDetails = () => {
	return (
		<nav className="w-full align-middle ">
			<div className="max-w-screen-xl mx-auto w-full flex-col justify-center  align-middle border border-blue-500 ">
				<div className="p-4">
					Contact
					<input placeholder="Email Address" className="checkout-input" />
				</div>
				<div className="flex flex-col gap-2 p-4">
					Delivery
					<input placeholder="First Name" className="checkout-input" />
					<input placeholder="Last Name" className="checkout-input" />
					<input placeholder="Address" className="checkout-input" />
					<input placeholder="City" className="checkout-input" />
					<input placeholder="State / Province" className="checkout-input" />
					<input placeholder="ZIP / Postal Code" className="checkout-input" />
					<input placeholder="Country" className="checkout-input" />
				</div>
				<div className="flex flex-col gap-2 p-4">
					<h1>Payment</h1>
					<p>All trasaactions are secure and ancrypted</p>
					<form className="flex flex-col gap-2 p-4">
						<div className="flex justify-between gap-2 p-4">
							<div>
								<input type="radio" id="option1" name="options" value="option1" />
								<label>Credit Card</label>
							</div>
							<div>VISA MasterCard ...</div>
						</div>
						<input placeholder="Card number" className="checkout-input"></input>
						<input placeholder="Expiration (MM/YY)" className="checkout-input"></input>
						<input placeholder="Security code" className="checkout-input"></input>
						<input placeholder="Name on card" className="checkout-input"></input>
						<button className="w-full text-white bg-green-800 py-2 px-6">COMPLETE ORDER</button>
					</form>
					<p>All trasaactions are secure and ancrypted</p>
				</div>
			</div>
		</nav>
	);
};
