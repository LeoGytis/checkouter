import Image from "next/image";
import logoImage from "../../../public/images/logo.svg";
import cartImage from "../../../public/images/cart.svg";

export const NavBar = () => {
	return (
		<nav className="w-full border-b border-gray_border">
			<div className="max-w-screen-lg mx-auto h-[72px] flex justify-between items-center px-4 lg:p-0">
				<Image src={logoImage} alt="Logo" width={187} height={40} priority />

				<Image src={cartImage} alt="Cart" width={24} height={24} priority />
			</div>
		</nav>
	);
};
