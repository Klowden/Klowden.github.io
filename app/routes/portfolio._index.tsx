import { useState, useEffect } from "react"
import renderPortfolio from "../components/RenderPortfolio"
import { getDocs, collection } from "firebase/firestore/lite"
import { db } from "../utils/firebase"

export default function Portfolio() {
	const [portfolio, setPortfolio] = useState<any>([])

	useEffect(() => {
		getPortfolio()
	}, [])

	const getPortfolio = async () => {
		const querySnapshot = await getDocs(collection(db, "portfolio"))
		const portfolioData = querySnapshot.docs.map((doc) => doc.data())
		setPortfolio(portfolioData)
	}

	return (
		<div className='relative flex flex-col items-center max-w-[80rem] mx-4 sm:mx-6 lg:mx-8 my-4 sm:my-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-lg border border-gray-700'>
			{/* Decorative Background Accents */}
			<div className='absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-600 to-amber-500 rounded-full blur-2xl opacity-30'></div>
			<div className='absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-pink-600 to-purple-500 rounded-full blur-3xl opacity-30'></div>

			{/* Header Section */}
			<header className='text-center mt-12'>
				<h1 className='text-5xl font-extrabold text-amber-500 relative inline-block mb-4'>
					My Portfolio
					{/* Decorative Underline */}
					<span className='absolute left-0 bottom-[-0.25rem] h-1 w-full bg-gradient-to-r from-purple-600 via-green-600 to-amber-500 rounded-full'></span>
				</h1>
				<p className='text-lg text-gray-400 mt-4'>
					Discover my work and the projects that have shaped my technical
					journey.
				</p>
			</header>

			{/* Note Section */}
			<section className='w-full mt-12 bg-gray-950 text-gray-300 p-6 rounded-lg shadow-md border border-gray-800'>
				<h2 className='text-2xl font-bold text-amber-500 mb-4'>Note:</h2>
				<p>
					<strong>PortfolioV1-React</strong> is a deprecated version of this
					site. However, its repository is still available on my GitHub for
					reference.
				</p>
			</section>

			{/* Overview Section */}
			<section className='w-full mt-12 bg-gray-950 text-gray-300 p-8 rounded-lg shadow-md border border-gray-800 relative'>
				{/* Section Header */}
				<h2 className='text-3xl font-bold text-amber-500 mb-6 text-center relative'>
					Professional Overview
					<span className='absolute left-0 bottom-[-0.25rem] h-1 w-full bg-gradient-to-r from-purple-600 via-amber-500 to-green-600 rounded-full'></span>
				</h2>

				{/* Content */}
				<div className='space-y-6 leading-relaxed'>
					{/* Godot Section */}
					<div className='flex gap-4 items-start'>
						<span className='w-4 h-4 bg-green-600 rounded-full flex-shrink-0 mt-1'></span>
						<p>
							<strong className='text-amber-500'>Game Development:</strong> I
							specialize in{" "}
							<span className='font-semibold text-purple-600'>Godot</span>,
							crafting immersive and strategic gameplay experiences using{" "}
							<span className='font-semibold text-amber-500'>GDScript</span>.
							From designing mechanics to refining controls, I bring creativity
							and precision to every project.
						</p>
					</div>

					{/* Shopify Section */}
					<div className='flex gap-4 items-start'>
						<span className='w-4 h-4 bg-green-600 rounded-full flex-shrink-0 mt-1'></span>
						<p>
							<strong className='text-amber-500'>E-commerce Innovation:</strong>{" "}
							I revamped Shopify platforms using{" "}
							<span className='font-semibold text-amber-500'>Hydrogen</span>,
							delivering headless React storefronts that improved speed,
							flexibility, and user experience.
						</p>
					</div>

					{/* Python & Automation Section */}
					<div className='flex gap-4 items-start'>
						<span className='w-4 h-4 bg-green-600 rounded-full flex-shrink-0 mt-1'></span>
						<p>
							<strong className='text-amber-500'>Automation Expertise:</strong>{" "}
							Utilizing{" "}
							<span className='font-semibold text-purple-600'>Python</span> and{" "}
							<span className='font-semibold text-amber-500'>Selenium</span>,
							I’ve automated workflows, optimized processes, and managed
							large-scale data tasks for efficient and scalable solutions.
						</p>
					</div>

					{/* Web Development Section */}
					<div className='flex gap-4 items-start'>
						<span className='size-4 bg-green-600 rounded-full flex-shrink-0 mt-1'></span>
						<p>
							<strong className='text-amber-500'>Web Development:</strong> My
							experience spans modern frameworks like{" "}
							<span className='font-semibold text-amber-500'>Remix</span>,{" "}
							<span className='font-semibold text-amber-500'>React</span>, and{" "}
							<span className='font-semibold text-purple-600'>Hydrogen</span>,
							where I create responsive, user-centered applications with
							cutting-edge design principles.
						</p>
					</div>

					{/* Collaboration Section */}
					<div className='flex gap-4 items-start'>
						<span className='size-4 bg-green-600 rounded-full flex-shrink-0 mt-1'></span>
						<p>
							<strong className='text-amber-500'>
								Team Leadership & Mentorship:
							</strong>{" "}
							A natural organizer and collaborator, I thrive in guiding teams,
							structuring workflows, and fostering innovation through mentorship
							and group synergy.
						</p>
					</div>
				</div>
			</section>

			{/* Portfolio Items */}
			<section className='w-full mt-12 bg-gray-900 rounded-2xl shadow-md border border-gray-800'>
				<h2 className='text-center text-3xl font-bold text-amber-500 p-4 bg-gray-950 rounded-t-2xl'>
					Projects
				</h2>
				<div className='relative text-gray-300 p-6 sm:p-8'>
					{/* Decorative Border Enhancements */}
					<div className='absolute inset-0 -z-10 transform scale-105 bg-gradient-to-br from-purple-600 via-gray-900 to-amber-500 opacity-10 rounded-lg'></div>
					<div className='absolute inset-0 -z-20 transform scale-110 bg-gradient-to-tl from-pink-600 via-gray-800 to-purple-500 opacity-20 rounded-lg blur-sm'></div>
					<div className='w-full'>{renderPortfolio(portfolio)}</div>
				</div>
			</section>

			{/* Footer Call-to-Action */}
			<footer className='text-center mt-16 mb-8'>
				<p className='text-lg text-gray-400'>
					Want to discuss a project or learn more about my work?
				</p>
				<a
					href='/contact'
					className='inline-block mt-4 px-8 py-3 text-lg font-semibold text-gray-900 bg-amber-500 hover:bg-purple-600 hover:text-gray-100 rounded-md shadow-md transition-all duration-300 ease-in-out'
				>
					Contact Me
				</a>
			</footer>
		</div>
	)
}
