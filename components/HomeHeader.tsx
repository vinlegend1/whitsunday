import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { IoPlaySharp } from "react-icons/io5";
import { useRouter } from "next/router";

interface Props {
	isVideo: boolean;
	isBackground: boolean;
	isSolution: boolean;
	isSlideshow: boolean;
}

const HomeHeader: React.FC<Props> = ({
	isBackground,
	isSlideshow,
	isSolution,
	isVideo,
}) => {
	const router = useRouter();
	// console.log(router.asPath);
	return (
		<>
			<nav className="nav">
				<div className="nav-el">
					<Link href="#">
						<a id="play-nav">
							<IoPlaySharp />
						</a>
					</Link>
					<Link href="#background">
						<a className={isBackground ? "color" : ""}>
							Background & Challenge
						</a>
					</Link>
					<Link href="#solution">
						<a className={isSolution ? "color" : ""}>Solution</a>
					</Link>
					<Link href="#results">
						<a>Results & Effectiveness</a>
					</Link>
					<Link href="#slideshow">
						<a className={isSlideshow ? "color" : ""}>Slideshow</a>
					</Link>
				</div>
				<button className="download-btn">
					<BiDownload style={{ fontSize: 14, marginRight: 4 }} />
					<span className="align-text">Download Board</span>
				</button>
			</nav>
			<ul className="dot-nav">
				<li
					onClick={() => router.push("/#")}
					className={isVideo ? "active-dot" : ""}
				></li>
				<li
					onClick={() => router.push("/#background")}
					className={isBackground ? "active-dot" : ""}
				></li>
				<li
					onClick={() => router.push("/#solution")}
					className={isSolution ? "active-dot" : ""}
				></li>
				<li
					onClick={() => router.push("/#slideshow")}
					className={isSlideshow ? "active-dot" : ""}
				></li>
			</ul>
		</>
	);
};

export default HomeHeader;
