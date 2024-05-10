import {CheckoutDetails} from "./components/CheckoutDetails";
import {NavBar} from "./components/NavBar";
import {OrderSummary} from "./components/OrderSummary";

export default function Home() {
	return (
		<main>
			<NavBar />
			<div className="w-full flex justify-center">
				<div className="w-7/12 flex justify-end bg-pink-400 pt-[40px] pr-[38px] pb-[24px]">
					<CheckoutDetails />
				</div>
				<div className="w-5/12 bg-yellow-400">
					<OrderSummary />
				</div>
				{/* <div className="max-w-screen-lg mx-auto flex flex-col xl:flex-row items-center xl:items-start text-gray_dark bg-emerald-200 ">
					<section className="w-1/2">
						<CheckoutDetails />
					</section>
					<section className="w-1/2 flex bg-gray_background ">
						<OrderSummary />
					</section>
				</div> */}
			</div>
		</main>
	);
}
