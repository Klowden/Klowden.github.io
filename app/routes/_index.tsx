import type { MetaFunction } from "@remix-run/node"
import { Link } from "@remix-run/react"
import { FaArrowCircleUp } from "react-icons/fa"

export const meta: MetaFunction = () => {
	return [
		{ title: "Developer Page" },
		{ name: "description", content: "Welcome to my Profile!" },
	]
}

export default function Index() {
	return (
		// Main container for the index page
		<div className='flex flex-col gap-16 my-4 sm:my-8 sm:mx-4 lg:mx-auto max-w-5xl py-12 sm:px-4 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-lg border border-gray-700'>
			{/* Introduction Section */}
			<div className='relative flex flex-col gap-12 px-6'>
				{/* Header */}
				<header className='text-left'>
					<h1 className='font-extrabold text-5xl md:text-6xl text-amber-500 leading-none'>
						Christopher Lowden
					</h1>
					<h2 className='text-gray-300 text-2xl md:text-3xl font-medium mt-4 mb-8'>
						Fullstack Web Application Developer
					</h2>

					{/* Profile Image and Quotes */}
					<div className='flex mt-6 gap-8 items-start'>
						{/* Profile Image */}
						<img
							src='/images/profile.svg'
							alt='Profile'
							className='w-40 h-40 rounded-full border-4 border-gray-800 bg-gradient-to-br from-purple-700 via-gray-900 to-amber-500 shadow-xl'
						/>

						{/* Quotes Section */}
						<div className='flex flex-col gap-6 text-gray-300'>
							<blockquote className='border-l-4 border-amber-500 pl-4 italic text-lg leading-relaxed'>
								"Jack of all trades, master of none, though oftentimes better
								than a master of one."
							</blockquote>
							<blockquote className='border-l-4 border-purple-500 pl-4 italic text-lg leading-relaxed'>
								"The most successful developers are those who adapt to new
								technologies, embrace change, and never stop learning."
							</blockquote>
						</div>
					</div>
				</header>

				{/* Profile Highlights Section */}
				<section className='relative p-6 bg-gray-950 text-gray-100 rounded-lg shadow-lg border border-gray-800'>
					<h3 className='text-3xl font-bold text-amber-500 mb-4'>
						Profile Highlights
					</h3>
					<ul className='list-disc list-inside space-y-2 text-lg text-gray-300'>
						<li>
							<strong>Versatile Developer:</strong> Proficient in modern web
							frameworks, databases, and UI/UX design.
						</li>
						<li>
							<strong>Problem Solver:</strong> Passionate about tackling complex
							challenges with creative solutions.
						</li>
						<li>
							<strong>Technophile:</strong> Always experimenting with the latest
							technologies and tools.
						</li>
						<li>
							<strong>Collaborator:</strong> Thrives in team environments,
							mentoring peers, and driving projects forward.
						</li>
						<li>
							<strong>Fun Fact:</strong> A dedicated cat enthusiast who codes
							best with a feline perched on their desk.
						</li>
					</ul>
				</section>

				{/* Call to Action */}
				<div className='flex flex-col sm:flex-row items-center gap-4'>
					<h3 className='text-xl font-semibold text-gray-100'>
						Got a project in mind?
					</h3>
					<Link to='/contact'>
						<button className='glow-effect-orange px-8 py-2 text-lg font-bold text-gray-900 bg-amber-500 hover:bg-purple-600 hover:text-gray-100 rounded-md shadow-md transition-all duration-150 ease-in-out hover:-rotate-2 hover:scale-[105%] active:scale-95'>
							Let’s Chat!
						</button>
					</Link>
				</div>
			</div>

			{/* Services Description Section */}
			<section className='relative'>
				{/* Services Card */}
				<div className='w-full p-6 bg-gray-950 text-gray-100 rounded-lg shadow-lg border border-amber-500'>
					<h3 className='text-3xl font-bold text-amber-500 mb-4'>
						Services Offered
					</h3>
					<ul className='list-disc list-inside space-y-2 text-lg text-gray-300'>
						<li>Website Development</li>
						<li>Website/Database Maintenance</li>
						<li>Consultation - Various</li>
						<li>Brand Management</li>
						<li>API Development & Integration</li>
						<li>Ecommerce Storefront Development</li>
						<li>Database Design and Migration</li>
						<li>Feature Implementation</li>
					</ul>
					<h4 className='text-right text-lg font-semibold text-gray-400 mt-4'>
						... and More!
					</h4>
				</div>

				{/* Call to Action Link */}
				<Link
					to='/contact'
					className='flex items-center gap-2 mx-auto mt-6 ml-8 text-xl font-semibold text-purple-600 underline underline-offset-8 hover:text-amber-500 hover:scale-[105%] active:scale-95 transition-all'
				>
					<FaArrowCircleUp className='text-2xl' />
					Ask about my rates!
				</Link>
			</section>
		</div>
	)
}
