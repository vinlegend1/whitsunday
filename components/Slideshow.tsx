import React, { useState } from "react";
import Photography from "./SlideshowOpt/Photography";
import PR from "./SlideshowOpt/PR";
import Radio from "./SlideshowOpt/Radio";
import Social from "./SlideshowOpt/Social";
import Video from "./SlideshowOpt/Video";

type SlideshowOptions = "radio" | "pr" | "social" | "photography" | "video";

const Slideshow: React.FC = ({}) => {
	const [option, setOption] = useState<SlideshowOptions>("radio");
	return (
		<div id="slideshow">
			<div className="show-nav">
				<button
					className={`show-btn ${
						option === "video" ? "active-btn" : ""
					}`}
					onClick={() => setOption("video")}
				>
					Video
				</button>
				<button
					className={`show-btn ${
						option === "photography" ? "active-btn" : ""
					}`}
					onClick={() => setOption("photography")}
				>
					Photography
				</button>
				<button
					className={`show-btn ${
						option === "social" ? "active-btn" : ""
					}`}
					onClick={() => setOption("social")}
				>
					Social
				</button>
				<button
					className={`show-btn ${
						option === "pr" ? "active-btn" : ""
					}`}
					onClick={() => setOption("pr")}
				>
					PR
				</button>
				<button
					className={`show-btn ${
						option === "radio" ? "active-btn" : ""
					}`}
					onClick={() => setOption("radio")}
				>
					Radio
				</button>
			</div>
			<div className="show-content">
				{option === "photography" ? (
					<Photography />
				) : option === "pr" ? (
					<PR />
				) : option === "radio" ? (
					<Radio />
				) : option === "social" ? (
					<Social />
				) : (
					<Video />
				)}
			</div>
		</div>
	);
};

export default Slideshow;
