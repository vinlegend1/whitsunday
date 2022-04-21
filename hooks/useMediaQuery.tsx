import { useState, useCallback, useEffect } from "react";

export const useMediaQuery = (width: number) => {
	const [targetReached, setTargetReached] = useState(false);

	// @ts-ignore
	const updateTarget = useCallback((e) => {
		if (e.matches) {
			setTargetReached(true);
		} else {
			setTargetReached(false);
		}
	}, []);

	useEffect(() => {
		const media = window.matchMedia(`(max-width: ${width}px)`);
		// @ts-ignore
		media.addListener(updateTarget);

		// Check on mount (callback is not called until a change occurs)
		if (media.matches) {
			setTargetReached(true);
		}

		return () => media.removeListener(updateTarget);
		// @ts-ignore
	}, []);

	return targetReached;
};
