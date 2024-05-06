import {CheckoutDetails} from "./components/CheckoutDetails";
import {NavBar} from "./components/NavBar";
import {OrderSummary} from "./components/OrderSummary";

export default function Home() {
	return (
		<main>
			<NavBar />
			<div className=" w-full flex bg-gray_background">
				<div className="max-w-screen-xl mx-auto flex flex-col xl:flex-row items-center xl:items-start text-gray_dark  bg-gray_background ">
					<section className="w-7/12 px-[40px] py-[38px] pl-0 bg-red-00">
						<CheckoutDetails />
					</section>
					<section className="w-5/12 w-full bg-gray_background px-[40px] py-[38px] bg-green-300">
						<OrderSummary />
					</section>
				</div>
			</div>
		</main>
	);
}
