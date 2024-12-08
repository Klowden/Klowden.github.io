export default function AutoPoster() {
	return (
		<div
			className='flex flex-col items-center justify-self-center max-w-[80rem] mx-0 sm:mx-6 lg:mx-8 min-h-screen sm:min-h-0 my-0 sm:my-4 md:my-8 py-4 bg-gradient-to-b from-gray-900 to-gray-800 sm:rounded-lg shadow-lg sm:border border-gray-700'
			role='main'
			aria-labelledby='autoposter-title'
		>
			{/* Header Section */}
			<section
				className='text-center'
				role='region'
				aria-labelledby='autoposter-title'
			>
				<div className='flex flex-col sm:flex-row justify-center items-center gap-6 mb-8'>
					<h1
						id='autoposter-title'
						className='text-4xl sm:text-5xl font-extrabold text-amber-500'
					>
						Content Poster
					</h1>
					<img
						src='/images/autoposter/Python.webp'
						alt='Python logo'
						className='w-20 h-20 sm:w-24 sm:h-24 rounded-lg shadow-md saturate-200'
					/>
				</div>
				<p
					className='text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto bg-gray-900 py-4 px-8 rounded-2xl shadow-md'
					aria-describedby='autoposter-description'
				>
					A utility program that automates social media posting to keep your
					online presence active—because who has time to post all the time?
				</p>
			</section>

			{/* Details Section */}
			<section
				className='mt-12 grid gap-12 lg:grid-cols-2 px-0 sm:px-6 lg:px-8'
				role='region'
				aria-labelledby='details-title'
			>
				{/* Text Content */}
				<div className='text-gray-300 space-y-6 px-4'>
					<p id='details-title'>
						The program schedules posts within a defined time frame using
						randomized modifiers on launch. It utilizes JSON files containing
						prompts, feeding these into a custom AI via API for response
						generation. Responses are formatted to strict criteria, resubmitting
						up to five times if needed.
					</p>
					<p>
						Valid prompts trigger a headless Selenium browser session,
						automating navigation, login, and posting using precise HTML element
						lookups. The program then shuts down the browser and sleeps until
						the next scheduled task, ensuring minimal resource usage.
					</p>
					{/* Call-to-Action */}
					<a
						href='https://bsky.app/profile/kreestoph.bsky.social'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-gray-100 rounded-lg shadow-md hover:bg-amber-500 transition-all duration-200 ease-in-out'
						aria-label='Visit my BlueSky profile'
					>
						<p className='font-bold underline-offset-2'>See my BlueSky!</p>
						<img
							src='/images/Bluesky_Logo.svg'
							alt='BlueSky Logo'
							className='w-7'
						/>
					</a>
				</div>

				{/* Key Features */}
				<div
					className='bg-gray-950 p-6 rounded-lg shadow-md border border-gray-800'
					role='region'
					aria-labelledby='features-title'
				>
					<h3
						id='features-title'
						className='text-2xl font-bold text-amber-500 mb-4'
					>
						Key Features:
					</h3>
					<ul
						className='list-disc list-inside space-y-4 text-gray-300'
						aria-describedby='features-description'
					>
						<li>
							<strong>Social Media Automation:</strong> Eliminates the stress of
							daily posting while maintaining an active presence.
						</li>
						<li>
							<strong>No Official API?</strong> No problem—leverages Selenium
							for precise and reliable automation.
						</li>
						<li>
							<strong>Frontend in Progress:</strong> Currently developing a
							front-end management tool to simplify prompt list generation and
							tracking.
						</li>
					</ul>
				</div>
			</section>

			{/* Decorative Divider */}
			<div
				className='w-full h-1 mt-12 bg-gradient-to-r from-purple-600 via-amber-500 to-green-600 rounded-full'
				aria-hidden='true'
			></div>
		</div>
	)
}
