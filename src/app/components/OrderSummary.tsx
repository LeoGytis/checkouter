/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export const OrderSummary = () => {
	return (
		<div className=" flex flex-col gap-4 text-gray_dark">
			<div className="flex justify-between items-center">
				<div className="flex items-center">
					<div className="relative flex items-center">
						<div className="absolute top-0 left-full transform -translate-y-1/2 -translate-x-1/2 font-sm text-white rounded-full bg-gray_medium px-[7px]">
							3
						</div>
						<Image src="/images/product.png" alt="Product" width={64} height={64} />
					</div>
					<h3 className="text-sm font-bold px-4">LogoImpsum PIL</h3>
				</div>
				<div className="text-sm font-medium">$299.97</div>
			</div>
			<div className="gray-line-separator"></div>
			<div className="flex justify-between items-center text-sm">
				<div>Subtotal</div>
				<div>$299.97</div>
			</div>
			<div className="gray-line-separator"></div>
			<div className="flex justify-between items-center text-lg font-bold">
				<div>Total</div>
				<div>$299.97</div>
			</div>

			<article className="w-full flex flex-col pt-6">
				<div className="flex justify-center">
					<div className="w-full flex justify-center relative ">
						<div className="absolute top-1/2 gray-line-separator"></div>
						<div className="bg-background px-4 z-10">Why Choose LogoIpsum</div>
					</div>
				</div>

				<div className="flex border-2 border-red-800 p-4 mt-10">
					<div className="flex items-center p-2">Icon</div>
					<div className="flex flex-col p-2">
						<h4 className="font-bold">90-Day Money Back Guarantee</h4>
						<p>
							We love our products and we're confident you will too! If you're not in love with your
							LogoIpsum product, our easy return and refund policy is designed to make things as easy as
							possible for you.
						</p>
					</div>
				</div>
				<div className="flex border-2 border-red-800 p-4">
					<div className="flex items-center p-2">Icon</div>
					<div className="flex flex-col p-2">
						<h4 className="font-bold">Over 75,000+ Happy Customer</h4>
						<p>
							Everyone that tries LogoIpsum says it’s a must-have. We invest a lot of love and care into
							making our products, so you can enjoy seeing results when using it.
						</p>
					</div>
				</div>
				<div className="flex border-2 border-red-800 p-4">
					<div className="flex items-center p-2">Icon</div>
					<div className="flex flex-col p-2">
						<h4 className="font-bold">Professional Customer Support</h4>
						<p>
							Our customer service works 24/7 for your satisfaction. Feel free to reach out to us anytime.
						</p>
					</div>
				</div>
			</article>
		</div>
	);
};
