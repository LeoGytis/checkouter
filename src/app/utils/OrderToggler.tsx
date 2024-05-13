import {useState} from "react";
import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io";

export const OrderToggler = () => {
	const [isOverviewOpen, setIsOverviewOpen] = useState(false);

	const toggleOverview = () => {
		setIsOverviewOpen(!isOverviewOpen);
	};

	return (
		<section className="w-full border-b border-gray_border">
			<div className="flex justify-between items-center ">
				<div className="">Order overview</div>
				<div>{isOverviewOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
				<div>$299.97</div>
			</div>
		</section>
	);
};
