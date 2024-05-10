import {CheckoutDetails} from "./components/CheckoutDetails";
import {NavBar} from "./components/NavBar";
import {OrderSummarySection} from "./components/OrderSummarySection";

export default function Home() {
	return (
		<main>
			<NavBar />
			<div className="relative w-full flex justify-center bg-gray_background lg:bg-white">
				<div className="max-w-screen-lg w-full h-screen flex flex-col lg:flex-row z-10">
					<CheckoutDetails />
					<OrderSummarySection />
				</div>
				<div className="absolute top-0 right-0 w-5/12 h-screen bg-gray_background"></div>
			</div>
		</main>
	);
}
111;
