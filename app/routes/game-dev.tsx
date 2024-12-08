export default function GameDev() {
	return (
		// Main container for the Game Development page
		<div
			className='relative sm:my-4 max-w-[90rem] mx-auto bg-gray-900 text-gray-100 rounded-lg shadow-2xl overflow-hidden border-t-8 border-purple-600'
			role='main'
			aria-labelledby='game-development-title'
		>
			{/* Header Section */}
			<header
				className='relative py-12 px-6 flex flex-col items-center justify-center text-center bg-gray-950'
				role='region'
				aria-labelledby='game-development-header'
			>
				<h1
					id='game-development-title'
					className='text-5xl sm:text-6xl font-extrabold text-emerald-500 leading-tight'
				>
					Game Development
				</h1>
				<p
					className='mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl'
					aria-describedby='game-development-intro'
				>
					Explore the vision behind my turn-based tactical strategy game. A
					fusion of strategic planning, procedural generation, and endless
					replayability awaits.
				</p>
				{/* Decorative Underline */}
				<span
					className='absolute left-0 bottom-[-0.25rem] h-1 w-full bg-gradient-to-r from-purple-600 via-green-600 to-amber-500 rounded-full'
					aria-hidden='true'
				></span>
			</header>

			{/* Game Overview Section */}
			<section
				className='py-12 px-6 bg-gradient-to-b from-gray-950 via-slate-800 to-gray-950 text-gray-300'
				role='region'
				aria-labelledby='game-overview-title'
			>
				<h2
					id='game-overview-title'
					className='text-4xl font-bold text-amber-500 text-center mb-8'
				>
					Game Overview
				</h2>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<p>
						This top-down, turn-based strategy game combines the tactical depth
						of <em>Fire Emblem</em> with the procedural variety of{" "}
						<em>Slay the Spire</em>. Procedural generation ensures each run
						delivers unique enemies, maps, and opportunities, keeping gameplay
						fresh.
					</p>
					<p>
						Players progress through dynamically scaling challenges, gathering
						teammates, and optimizing their equipment and resources. Runs
						culminate in epic multi-phase boss fights, requiring precision and
						strategic planning to succeed.
					</p>
				</div>
			</section>

			{/* Key Features Section */}
			<section
				className='py-12 px-6 bg-gray-950 text-gray-300'
				role='region'
				aria-labelledby='key-features-title'
			>
				<h2
					id='key-features-title'
					className='text-4xl font-bold text-purple-500 text-center mb-8'
				>
					Key Features
				</h2>
				<ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
					{[
						{
							title: "Dynamic Path Choices",
							description:
								"Explore branching paths with procedurally generated opportunities and challenges tailored to your strategy.",
						},
						{
							title: "Strategic Depth",
							description:
								"Recruit, equip, and upgrade teammates while managing limited resources to optimize your team.",
						},
						{
							title: "Adaptive Difficulty",
							description:
								"Scaling challenges and enemies dynamically adjust based on your progress.",
						},
						{
							title: "Epic Boss Fights",
							description:
								"End each run with thrilling multi-phase battles that test your precision and teamwork.",
						},
						{
							title: "Endless Replayability",
							description:
								"No two runs are alike, thanks to procedural generation of paths, enemies, and resources.",
						},
						{
							title: "Immersive Worldbuilding",
							description:
								"Rich lore and evolving narratives ensure an engaging experience beyond gameplay mechanics.",
						},
					].map((feature, index) => (
						<li
							key={index}
							className='p-4 bg-gray-800 rounded-lg shadow-lg border-l-4 border-purple-600 hover:scale-105 transition-transform cursor-default'
							role='listitem'
						>
							<h3 className='text-xl font-bold text-amber-500'>
								{feature.title}
							</h3>
							<p className='mt-2 text-gray-300'>{feature.description}</p>
						</li>
					))}
				</ul>
			</section>

			{/* Placeholder for Visuals */}
			<section
				className='py-12 px-6 bg-gray-950'
				role='region'
				aria-labelledby='visuals-title'
			>
				<h2
					id='visuals-title'
					className='text-4xl font-bold text-amber-500 text-center mb-8'
				>
					Visuals in Progress
				</h2>
				<p className='text-center text-gray-400 mb-8'>
					Visual designs and gameplay previews are currently under development.
					Stay tuned!
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{[...Array(6).keys()].map((i) => (
						<div
							key={i}
							className='aspect-square bg-gray-800 rounded-md shadow-md flex items-center justify-center'
							role='figure'
							aria-labelledby={`placeholder-title-${i}`}
						>
							<span
								id={`placeholder-title-${i}`}
								className='text-gray-500 italic'
							>
								Placeholder {i + 1}
							</span>
						</div>
					))}
				</div>
			</section>

			{/* Blog Placeholder Section */}
			<section
				className='py-12 px-6 text-gray-300 bg-gray-950'
				role='region'
				aria-labelledby='blog-title'
			>
				<h2
					id='blog-title'
					className='text-4xl font-bold text-purple-500 text-center mb-8'
				>
					Developer Blog (Coming Soon)
				</h2>
				<p className='text-center max-w-2xl mx-auto mb-8'>
					Stay tuned for updates about the game's development process,
					behind-the-scenes insights, and new features as they come to life!
				</p>
				<div className='w-full flex justify-center'>
					<div
						className='w-4/5 max-w-md h-48 border-2 border-gray-700 rounded-md flex items-center justify-center'
						aria-labelledby='blog-placeholder-title'
					>
						<span
							id='blog-placeholder-title'
							className='text-gray-500 italic'
						>
							Placeholder for blog previews or development updates.
						</span>
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section
				className='py-12 px-6 text-center bg-gray-900'
				role='region'
				aria-labelledby='call-to-action-title'
			>
				<h2
					id='call-to-action-title'
					className='text-4xl font-bold mb-4'
				>
					Stay Updated
				</h2>
				<p className='mb-6'>
					Follow the journey or get in touch for collaboration opportunities.
				</p>
				<a
					href='/contact'
					className='inline-block px-6 py-3 text-lg font-bold bg-amber-500 text-gray-900 rounded-md shadow-md hover:shadow-lg hover:bg-purple-500 transition-all'
					aria-label='Go to the Contact page'
				>
					Contact Me
				</a>
			</section>
		</div>
	)
}
