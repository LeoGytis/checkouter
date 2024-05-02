import {CheckoutDetails} from "./components/CheckoutDetails";
import {NavBar} from "./components/NavBar";
import {OrderSummary} from "./components/OrderSummary";

export default function Home() {
	return (
		<main>
			<NavBar />
			<div className="max-w-screen-xl mx-auto w-full flex">
				<section className="w-1/2 px-[40px] py-[38px] pl-0">
					<CheckoutDetails />
				</section>
				<section className="w-1/2 bg-gray_background px-[40px] py-[38px]">
					<OrderSummary />
				</section>
			</div>
		</main>
	);
}
