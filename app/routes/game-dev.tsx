export default function GameDev() {
	return (
		<div className='relative max-w-[90rem] mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t-8 border-purple-600 rounded-lg shadow-2xl overflow-hidden'>
			<div className='relative bg-gradient-to-r from-purple-600 via-amber-500 to-green-600'>
				<div className='h-32 sm:h-48 clip-triangle bg-gradient-to-tr from-gray-900 to-gray-700'></div>
				<div className='absolute inset-0 flex flex-col items-center justify-center p-6'>
					<h1 className='text-5xl sm:text-6xl font-extrabold text-emerald-500'>
						Game Development
					</h1>
					<p className='text-lg sm:text-xl text-gray-200 mt-4 max-w-3xl text-center'>
						Explore the vision behind my turn-based tactical strategy game. A
						fusion of strategic planning, procedural generation, and endless
						replayability awaits.
					</p>
				</div>
			</div>

			{/* Game Overview Section */}
			<section className='py-12 px-6 bg-gray-950 text-gray-300'>
				<h2 className='text-4xl font-bold text-purple-500 text-center mb-8'>
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
			<section className='py-12 px-6 bg-gradient-to-bl from-gray-900 via-gray-800 to-gray-950 text-gray-300'>
				<h2 className='text-4xl font-bold text-amber-500 text-center mb-8'>
					Key Features
				</h2>
				<ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 cursor-default'>
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
							className='p-4 bg-gray-800 rounded-lg shadow-lg border-l-4 border-purple-600 hover:scale-105 transition-transform'
						>
							<h3 className='text-xl font-bold text-amber-500'>
								{feature.title}
							</h3>
							<p className='mt-2 text-gray-300'>{feature.description}</p>
						</li>
					))}
				</ul>
			</section>

			{/* Visual Placeholder Section */}
			<section className='py-12 px-6 bg-gray-950 text-gray-300'>
				<h2 className='text-4xl font-bold text-purple-500 text-center mb-8'>
					Visuals in Progress
				</h2>
				<div className='text-center mb-8'>
					<p className='text-gray-400'>
						Visual designs and gameplay previews are currently under
						development. Stay tuned!
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{[...Array(6).keys()].map((i) => (
						<div
							key={i}
							className='aspect-square bg-gradient-to-tr from-gray-800 to-gray-700 rounded-lg shadow-md flex items-center justify-center'
						>
							<span className='text-gray-500 italic'>Placeholder {i + 1}</span>
						</div>
					))}
				</div>
			</section>

			{/* Call to Action */}
			<section className='py-12 px-6 bg-gradient-to-br from-purple-600 to-gray-900 text-gray-100 text-center'>
				<h2 className='text-4xl font-bold mb-4'>Stay Updated</h2>
				<p className='mb-6'>
					Follow the journey or get in touch for collaboration opportunities.
				</p>
				<a
					href='/contact'
					className='inline-block px-6 py-3 text-lg font-bold bg-gradient-to-r from-purple-500 via-green-600 to-amber-500 rounded-md shadow-md hover:scale-105 transition-transform'
				>
					Contact Me
				</a>
			</section>
		</div>
	)
}
