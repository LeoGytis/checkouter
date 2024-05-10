import Image from "next/image";
import {ChooseUsContainer} from "./ChooseUsContainer";

export const OrderSummary = () => {
	return (
		<div className="flex flex-col gap-4 py-[40px] pl-[38px] bg-yellow-100">
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
			<ChooseUsContainer />
		</div>
	);
};
