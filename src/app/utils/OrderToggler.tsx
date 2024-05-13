import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io";

export const OrderToggler = () => {
	return (
		<section className="w-full border-b border-gray_border">
			<div className="flex justify-between items-center ">
				<div className="">Order overview</div>
				<div>
					<IoIosArrowUp />
					<IoIosArrowDown />
				</div>
			</div>
		</section>
	);
};
