import Image from "next/image";

export const NavBar = () => {
	return (
		<nav className="w-full border-b border-gray_border">
			<div className="max-w-screen-lg mx-auto h-[72px] flex justify-between items-center">
				<Image src="/images/logo.svg" alt="Logo" width={187} height={40} priority />
				<Image src="/images/cart.svg" alt="Logo" width={24} height={24} priority />
			</div>
		</nav>
	);
};
