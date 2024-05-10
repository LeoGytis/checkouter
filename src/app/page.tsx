import {CheckoutDetails} from "./components/CheckoutDetails";
import {NavBar} from "./components/NavBar";
import {OrderSummary} from "./components/OrderSummary";

export default function Home() {
	return (
		<main>
			<NavBar />
			<div className="relative w-full flex justify-center">
				<div className="max-w-screen-lg flex z-10">
					<CheckoutDetails />
					<OrderSummary />
				</div>
				<div className="absolute top-0 right-0 w-5/12 h-full bg-gray_background"></div>
			</div>
		</main>
	);
}
111;
