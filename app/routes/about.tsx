import {
	FaCss3,
	FaGitAlt,
	FaHtml5,
	FaJs,
	FaPython,
	FaReact,
} from "react-icons/fa6"

export default function About() {
	return (
		<div className='flex flex-col items-center lg:items-start mx-auto max-w-[70rem]'>
			<div className='flex flex-col lg:flex-row flex-wrap gap-4 sm:mx-0 mt-4 place-items-center'>
				<div className='flex flex-col gap-4 max-w-[62ch] lg:max-w-[55ch] text-wrap mx-1 sm:mx-2 p-2 xs:p-4 my-0 xs:my-4'>
					<h1 className='text-5xl font-bold'>About Me</h1>
					<div className='flex flex-col gap-2 text-base mr-8'>
						<p>
							<strong>As a dedicated freelance web developer</strong> and
							software engineer, I am always on the search for dynamic projects
							and collaborations. My goal is to join forces with innovative
							teams to push the boundaries of current technology.
						</p>
						<p>
							<strong>With a proven track record</strong> for solving intricate
							problems and utilizing flexible approaches to changing demands, I
							pride myself on my ability to enhance any project I'm a part of.
							I'm committed to delivering top-tier software solutions and ready
							to make a significant impact right from the start.
						</p>
						<p>
							<strong>Beyond the code,</strong> I am deeply invested in
							fostering a culture of innovation and creativity. I am a lifelong
							learner, drawing inspiration from a broad spectrum of interests. I
							firmly believe in the synergy between personal growth and
							professional excellence in the tech industry.
						</p>
					</div>
				</div>
				<div className='mx-auto w-full lg:w-max h-56 mt-16 ml-16 lg:ml-8 mlg:ml-16 xl:ml-20'>
					<div className='cubespinner relative w-full mx-auto xxs:mx-12 xs:mx-20 mxs:mx-32 lg:mx-16 grid grid-cols-1'>
						<div className='face1 text-[#0072B2]'>
							<FaPython />
						</div>
						<div className='face2 text-[#e34c26]'>
							<FaHtml5 />
						</div>
						<div className='face3 text-[#264de4]'>
							<FaCss3 />
						</div>
						<div className='face4 text-[#61DBFB]'>
							<FaReact />
						</div>
						<div className='face5 text-[#F7DF1E]'>
							<FaJs />
						</div>
						<div className='face6 text-[#F05032]'>
							<FaGitAlt />
						</div>
					</div>
				</div>
			</div>
			<section
				className='p-4 mx-2 max-w-[60ch] lg:max-w-full lg:mt-0 lg:mb-4
			mb-8 mt-16'
			>
				<h1 className='text-4xl font-bold mb-2'>Now for Real:</h1>
				<div className='flex flex-wrap'>
					<div className='flex-1'>
						<div
							className='columns-1 lg:columns-2 indent-4'
							style={{ columnGap: "2rem" }}
						>
							<p className='my-2'>
								<strong>I spent most of my time</strong> pondering my passions
								and future path, yet here I am, still mapping it out by going
								where the wind takes me. Crafting creations and diving into the
								digital depths from the comfort of my computer, embracing the
								challenge of mastering new skills and dabbling in fresh ideas
								are the concepts and action that truly keep me happy in my work.
							</p>
							<p className='my-2'>
								<strong>I'm a well spoken,</strong> well written individual with
								a background in accounting, engineering, data analysis, and a
								few programming languages that come and go from memory as I need
								them; They're pretty easy to pick up once you get the hang of
								the general concepts of similar languages.
							</p>
							<p className='my-2'>
								<strong>My academic voyage</strong> landed me a BA in Political
								Science, a testament more to the journey and the perspectives
								gained than a tool for my professional toolbox. And here I
								stand, a mere one class shy of a Computer Science BA, opting
								instead to leave it behind. Why, you ask? I mean, money, for
								one. But real-world applications and rapid technological
								evolution have taught me the limited shelf life of formal
								education in this domain. My learning is now fueled by
								curiosity, hands-on projects, and the collaboration with peers
								whenever possible.
							</p>
							<p className='my-2'>
								<strong>In my off time</strong> I'm delving into survival games
								with friends or pouring my heart into a nascent game project.
								And yes, it's in the <strong>very</strong> early stages of
								development. Maybe you'll play it someday, but not for awhile.
							</p>
							<p className='mt-2'>
								<strong>I now find myself </strong> in my basement with my
								work-buddy kittens and puppos for the majority of my days. When
								I've done enough I just go up hang out with my wife for the
								remainder of the night, ranging from going out to trying out a
								new game. Truly it's nice.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
