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
			<div className='flex flex-col lg:flex-row flex-wrap gap-4 sm:mx-0 mt-8 place-items-center'>
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
		</div>
	)
}
