import {useState, useEffect} from "react";

export const ScreenSize = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 1040);

	useEffect(() => {
		function handleResize() {
			setIsMobile(window.innerWidth <= 1040);
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return isMobile;
};
