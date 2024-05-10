import {CheckoutDetails} from "./components/CheckoutDetails";
import {NavBar} from "./components/NavBar";
import {OrderSummary} from "./components/OrderSummary";

export default function Home() {
	return (
		<main>
			<NavBar />
			<div className="w-full flex justify-center">
				<div className="max-w-screen-lg flex ">
					<CheckoutDetails />
					<OrderSummary />
				</div>
				{/* <div className="relative w-6/12 flex justify-end bg-pink-400 pt-[40px] pr-[38px] pb-[24px]"></div> */}
				{/* <div className="relative w-6/12 bg-yellow-400"></div> */}
			</div>
		</main>
	);
}
