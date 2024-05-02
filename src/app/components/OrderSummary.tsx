import Image from "next/image";

export const OrderSummary = () => {
	return (
		<section className="w-1/2 flex justify-center align-middle ">
			<div className="w-full flex flex-col border-4 border-blue-500 ">
				<div>
					<div className="flex justify-between p-4 ">
						<div>LogoImpsum PIL</div>
						<div>$299.97</div>
					</div>
					<div className="flex justify-between p-4">
						<div>Subtotal</div>
						<div>$299.97</div>
					</div>
					<div className="flex justify-between p-4">
						<div>Total</div>
						<div>$299.97</div>
					</div>
				</div>
				<article className="w-full flex flex-col border-4 border-green-700">
					<div className="flex justify-center p-4">Why Choose LogoIpsum</div>
					<div className="flex border-2 border-red-800 p-4">
						<div className="flex items-center p-2">Icon</div>
						<div className="flex flex-col p-2">
							<h3 className="font-bold">90-Day Money Back Guarantee</h3>
							<p>
								We love our products and we're confident you will too! If you're not in love with your
								LogoIpsum product, our easy return and refund policy is designed to make things as easy
								as possible for you.
							</p>
						</div>
					</div>
					<div className="flex border-2 border-red-800 p-4">
						<div className="flex items-center p-2">Icon</div>
						<div className="flex flex-col p-2">
							<h3 className="font-bold">Over 75,000+ Happy Customer</h3>
							<p>
								Everyone that tries LogoIpsum says it’s a must-have. We invest a lot of love and care
								into making our products, so you can enjoy seeing results when using it.
							</p>
						</div>
					</div>
					<div className="flex border-2 border-red-800 p-4">
						<div className="flex items-center p-2">Icon</div>
						<div className="flex flex-col p-2">
							<h3 className="font-bold">Professional Customer Support</h3>
							<p>
								Our customer service works 24/7 for your satisfaction. Feel free to reach out to us
								anytime.
							</p>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
};
