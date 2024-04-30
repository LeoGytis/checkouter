import Image from "next/image";

export const NavBar = () => {
	return (
		<div className="w-full flex justify-center align-middle ">
			<div className="max-w-screen-xl mx-auto w-full h-[72px] flex justify-between align-middle border border-red-500 ">
				<div className="p-4">
					<Image src="/images/logo.svg" alt="Logo" width={100} height={50} />
				</div>
				<div className="p-4">
					<Image src="/images/cart.svg" alt="Logo" width={25} height={25} />
				</div>
			</div>
		</div>
	);
};
