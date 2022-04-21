import type { NextPage } from "next";
import HomeHeader from "../components/HomeHeader";
import Slideshow from "../components/Slideshow";
import { IoPlaySharp } from "react-icons/io5";
import { useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import MobileNavbar from "../components/MobileNavbar";
import { useInView } from "react-intersection-observer";
import Head from "next/head";

const VideoFrame = () => (
	<iframe
		id="yt-player"
		src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
		title="YouTube video player"
		frameBorder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowFullScreen
	></iframe>
);

const Home: NextPage = () => {
	const [didPlay, setDidPlay] = useState(false);
	const isMobile = useMediaQuery(810);
	const video = useInView({
		threshold: 0.4,
	});
	const background = useInView({
		threshold: 0.4,
	});
	const solution = useInView({
		threshold: 0.4,
	});
	const slideshow = useInView({
		threshold: 0,
	});

	return (
		<>
			<Head>
				<title>{`
					The Whitsundays - A Movie that's Waiting to be Written
				`}</title>
			</Head>
			<div>
				{!isMobile ? (
					<HomeHeader
						isBackground={background.inView}
						isSlideshow={slideshow.inView}
						isSolution={solution.inView}
						isVideo={video.inView}
					/>
				) : (
					<MobileNavbar />
				)}
				{!didPlay ? (
					<div className="landing" ref={video.ref}>
						<button
							className="play-btn"
							onClick={(e) => {
								e.preventDefault();
								setDidPlay(true);
							}}
						>
							<IoPlaySharp
								style={{
									width: 60,
									height: "auto",
									marginLeft: 8,
								}}
							/>
						</button>
					</div>
				) : (
					<div className="landing" ref={video.ref}>
						<VideoFrame />
					</div>
				)}
				<div
					id="background"
					className="two-col-container"
					ref={background.ref}
				>
					<img src="/logo.png" alt="logo" />
					<div>
						<div>
							<h2 className="bold text-45">
								Background & Audience
							</h2>
							<p>{`
							Tourism & Events Queensland wanted to increase
							consideration of The Whitsundays amongst 'social fun
							seekers'; digitally savvy consumers that socialise
							substantially online.
						`}</p>
						</div>
						<div>
							<h2 className="light text-32">Problem</h2>
							<p>
								The Whitsundays was losing its cachet as an
								aspirational holiday location.
							</p>
						</div>
						<div>
							<h2 className="light text-40">Objective</h2>
							<p>{`
							Shift perceptions and re-build the Whitsundays'
							social currency as a world-class destination.
						`}</p>
						</div>
					</div>
				</div>
				<div id="solution" ref={solution.ref}>
					<h2 className="light">Solution</h2>
					<div className="two-col-container" id="sol-container">
						<div>
							<p>{`
							We knew movies rated high on the list of our
							target's interests and, with incredible beaches,
							seaplanes, yachts, and glamorous locations, the
							Whitsundaysis the perfect setting for a movie.
						`}</p>
							<p>So we invited Australians to write it:</p>
							<h3>The Whitsundays.</h3>
							<h3>{`A movie that's waiting to be written.`}</h3>
							<p>
								We enlisted world-renowned screenwriter Craig
								Pearce as Script Supervisor. Then for 20 days we
								posted a daily storyboard image on Facebook and
								Instagram inviting the public to write scenes
								for a chance to win a $10,000 luxury holiday.
							</p>
						</div>
						<div>
							<p>
								The campaign launched with a trailer, radio and
								online advertising.
							</p>
							<p>{`
							We reacted to the storyline as it developed,
							selecting and treating images according to the
							previous winning scene.
						`}</p>
							<p>{`
							Each scene written and shared became a compelling
							"ad" for the Whitesundays.
						`}</p>
							<p>{`
							Together, a Hollywood screenwriter and the
							Australian public had created the world's first
							crowd-sourced movie storyboard and a story universe
							with millions of possible permutations.
						`}</p>
						</div>
					</div>
				</div>
				<Slideshow />
				<div ref={slideshow.ref}></div>
			</div>
		</>
	);
};

export default Home;
