import Link from "next/link";
import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";

const MobileNavbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	return (
		<>
			<div
				className="mobile-nav"
				onClick={() => setIsNavOpen((prev) => !prev)}
			>
				<IoReorderThreeOutline />
				<h1>The Whitsundays</h1>
			</div>
			{isNavOpen ? (
				<nav className="mobile-nav-el">
					<Link href="#background">
						<a>Background & Challenge</a>
					</Link>
					<Link href="#solution">
						<a>Solution</a>
					</Link>
					<Link href="#results">
						<a>Results & Effectiveness</a>
					</Link>
					<Link href="#slideshow">
						<a>Slideshow</a>
					</Link>
				</nav>
			) : null}
		</>
	);
};

export default MobileNavbar;
