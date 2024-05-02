import {CheckoutDetails} from "./components/CheckoutDetails";
import {NavBar} from "./components/NavBar";
import {OrderSummary} from "./components/OrderSummary";

export default function Home() {
	return (
		<main>
			<NavBar />
			<div className="flex max-w-screen-xl mx-auto w-full">
				<section className="w-1/2 px-[40px] py-[38px]">
					<CheckoutDetails />
				</section>
				<section className="w-1/2 bg-gray_background px-[40px] py-[38px]">
					<OrderSummary />
				</section>
			</div>
		</main>
	);
}
