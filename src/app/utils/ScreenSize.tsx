import {useState, useEffect} from "react";

export const ScreenSize = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		let windowInnerWidth = null;

		// Check if window is available (client-side context)
		if (typeof window !== "undefined") {
			windowInnerWidth = window.innerWidth;
			setIsMobile(windowInnerWidth <= 1040);

			const handleResize = () => {
				windowInnerWidth = window.innerWidth;
				setIsMobile(windowInnerWidth <= 1040);
			};

			window.addEventListener("resize", handleResize);

			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	return isMobile;
};
