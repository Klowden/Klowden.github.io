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
		// Main container for the About page
		<div
			className='flex flex-col items-center lg:items-start min-h-screen sm:min-h-0 my-0 sm:my-4 md:my-8 mx-auto sm:mx-4 justify-self-center max-w-[70rem] px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-b from-gray-900 to-gray-800 sm:rounded-lg shadow-lg sm:border border-gray-700'
			aria-labelledby='about-title'
		>
			{/* Header and CubeSpinner Section */}
			<div
				className='flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 w-full'
				role='region'
				aria-labelledby='about-header'
			>
				{/* About Me Text Section */}
				<div className='flex flex-col gap-6 max-w-[60ch] lg:max-w-[50ch] text-wrap'>
					<h1
						id='about-title'
						className='text-5xl font-bold text-amber-500 relative'
					>
						About Me
						{/* Decorative underline */}
						<span className='absolute left-0 bottom-[-.25rem] h-1 w-24 bg-gradient-to-r from-amber-500 via-green-600 to-purple-600 rounded-full'></span>
					</h1>
					<div className='flex flex-col gap-4 text-base text-gray-300'>
						<p>
							<strong>
								As a web developer, software engineer, and aspiring game
								developer in Godot,
							</strong>{" "}
							I thrive on dynamic challenges that push the boundaries of
							creativity and technology. Whether building intuitive web
							applications or crafting immersive game worlds, I bring a
							versatile skillset and a commitment to excellence to every
							project.
						</p>
						<p>
							<strong>
								With a proven ability to solve intricate problems and adapt to
								ever-changing demands,
							</strong>{" "}
							I excel at transforming ideas into tangible results. From
							mastering new tools to navigating complex systems, I approach each
							task with curiosity, determination, and the confidence of someone
							who can tackle anything.
						</p>
						<p>
							<strong>Beyond the code,</strong> I am passionate about fostering
							innovation and creativity. I believe that the most meaningful
							projects arise from collaboration and a willingness to experiment.
							As a lifelong learner with a broad spectrum of interests, I see
							every challenge as an opportunity to grow—both personally and
							professionally—and to contribute to the ever-evolving landscape of
							technology.
						</p>
					</div>
				</div>

				{/* CubeSpinner Section */}
				<div
					className='relative w-40 h-40 lg:w-56 lg:h-56 mx-auto mt-8 md:mt-12 mb-16 md:mb-28 lg:my-20'
					aria-labelledby='cube-spinner'
				>
					<div
						id='cube-spinner'
						className='cubespinner relative w-full h-full'
					>
						<div
							className='face1 text-[#0072B2]'
							aria-label='Python'
						>
							<FaPython />
						</div>
						<div
							className='face2 text-[#e34c26]'
							aria-label='HTML5'
						>
							<FaHtml5 />
						</div>
						<div
							className='face3 text-[#264de4]'
							aria-label='CSS3'
						>
							<FaCss3 />
						</div>
						<div
							className='face4 text-[#61DBFB]'
							aria-label='React'
						>
							<FaReact />
						</div>
						<div
							className='face5 text-[#F7DF1E]'
							aria-label='JavaScript'
						>
							<FaJs />
						</div>
						<div
							className='face6 text-[#F05032]'
							aria-label='Git'
						>
							<FaGitAlt />
						</div>
					</div>
				</div>
			</div>

			{/* Decorative Divider */}
			<div
				className='w-full h-1 mt-12 bg-gradient-to-r from-purple-600 via-gray-800 to-amber-500 rounded-full'
				role='separator'
				aria-hidden='true'
			></div>

			{/* Now for Real Section */}
			<section
				className='relative p-8 w-full mt-12 bg-gray-950 text-gray-300 rounded-lg shadow-md border border-gray-800'
				aria-labelledby='now-for-real-title'
			>
				{/* Section Header */}
				<div className='text-center mb-8'>
					<h1
						id='now-for-real-title'
						className='text-4xl font-bold text-amber-500 relative inline-block mb-4'
					>
						Now for Real:
						{/* Decorative underline */}
						<span className='absolute left-0 bottom-[-0.25rem] h-1 w-full bg-gradient-to-r from-purple-600 via-amber-500 to-green-600 rounded-full'></span>
					</h1>
					<p className='text-lg text-gray-400'>
						A glimpse into my journey, skills, and work-life balance.
					</p>
				</div>

				{/* Content Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 leading-relaxed'>
					{/* Individual Content Blocks */}
					<div className='flex gap-4 items-start'>
						<div
							className='text-amber-500 text-2xl'
							aria-hidden='true'
							role='presentation'
						>
							<i className='fas fa-compass'></i>
						</div>
						<p>
							<strong>I've spent my career</strong> charting a path defined by
							curiosity, creativity, and a drive to solve meaningful problems.
							From coding solutions at my desk to conceptualizing new projects,
							I thrive on the challenge of turning ideas into reality, adapting
							to new technologies and methodologies along the way.
						</p>
					</div>

					<div className='flex gap-4 items-start'>
						<div
							className='text-purple-500 text-2xl'
							aria-hidden='true'
							role='presentation'
						>
							<i className='fas fa-tools'></i>
						</div>
						<p>
							<strong>With a knack for communication</strong> and a talent for
							technical problem-solving, I bring a unique mix of skills to the
							table. My background spans accounting, engineering, data analysis,
							and a versatile understanding of programming languages. Picking up
							a new tool or language? Consider it done—adaptability is my second
							nature.
						</p>
					</div>

					<div className='flex gap-4 items-start'>
						<div
							className='text-pink-500 text-2xl'
							aria-hidden='true'
							role='presentation'
						>
							<i className='fas fa-lightbulb'></i>
						</div>
						<p>
							<strong>My diverse skillset</strong> is the product of an
							unconventional journey. Instead of relying solely on formal
							education, I’ve cultivated expertise across various disciplines
							through hands-on experience and self-directed learning. Whether
							it’s crafting efficient code, building scalable systems, or
							designing user-friendly interfaces, I bring flexibility and
							resourcefulness to every project.
						</p>
					</div>

					<div className='flex gap-4 items-start'>
						<div
							className='text-green-500 text-2xl'
							aria-hidden='true'
							role='presentation'
						>
							<i className='fas fa-gamepad'></i>
						</div>
						<p>
							<strong>When I'm not coding,</strong> I’m exploring survival games
							with friends or channeling my creativity into a game development
							project. While it’s still in the early stages, the process fuels
							my passion for innovation and pushes my skills further. Who knows?
							One day, you might find yourself playing it.
						</p>
					</div>

					<div className='flex gap-4 items-start'>
						<div
							className='text-blue-500 text-2xl'
							aria-hidden='true'
							role='presentation'
						>
							<i className='fas fa-cat'></i>
						</div>
						<p>
							<strong>My work environment</strong> is a blend of focus and fun.
							My days are spent in the company of my four-legged assistants—my
							cats and dogs—while I tackle projects and refine solutions.
							Evenings are reserved for quality time with my wife, whether we’re
							trying out new games or exploring the world around us. It’s a
							balance that keeps me sharp and inspired.
						</p>
					</div>
				</div>

				{/* Decorative Background Accents */}
				<div
					className='absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-amber-500 opacity-30 rounded-full blur-xl'
					aria-hidden='true'
				></div>
				<div
					className='absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-600 to-purple-500 opacity-30 rounded-full blur-xl'
					aria-hidden='true'
				></div>

				{/* Image Section */}
				<div className='mt-12 flex justify-center'>
					<div className='w-full sm:w-3/4 lg:w-1/2 bg-gray-800 h-56 rounded-lg overflow-hidden shadow-lg'>
						<img
							src='/images/Stone.webp'
							alt='Visual representation of journey or projects'
							className='w-full h-full object-cover'
						/>
					</div>
				</div>
			</section>
		</div>
	)
}
