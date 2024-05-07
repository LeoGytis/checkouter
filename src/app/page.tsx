import {CheckoutDetails} from "./components/CheckoutDetails";
import {NavBar} from "./components/NavBar";
import {OrderSummary} from "./components/OrderSummary";

export default function Home() {
	return (
		<main>
			<NavBar />
			<div className=" w-full flex justify-center">
				{/* <div className="max-w-screen-xl mx-auto flex flex-col xl:flex-row items-center xl:items-start text-gray_dark  bg-gray_background "> */}
				<section className=" w-7/12 pt-[40px] pr-[38px] pb-[24px] pl-[440px]">
					<CheckoutDetails />
				</section>
				<section className=" w-5/12 bg-gray_background py-[40px] pr-[440px] pl-[38px]">
					<OrderSummary />
				</section>
				{/* </div> */}
			</div>
		</main>
	);
}
