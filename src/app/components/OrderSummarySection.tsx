"use client";
import Image from "next/image";
import {ChooseUsSection} from "./ChooseUsSection";
import {ScreenSize} from "../utils/ScreenSize";
import {OrderToggler} from "../utils/OrderToggler";

export const OrderSummarySection = () => {
	const isMobile = ScreenSize();
	return (
		<section className="w-full lg:w-5/12 flex flex-col gap-4 bg-gray_background p-4 lg:pr-0 lg:py-[40px] lg:pl-[38px]">
			{isMobile && <OrderToggler />}
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
			{!isMobile && <ChooseUsSection />}
		</section>
	);
};
