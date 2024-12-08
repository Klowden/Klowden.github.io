import { useState, useEffect } from "react"
import renderPortfolio from "../components/RenderPortfolio"
import { getDocs, collection } from "firebase/firestore/lite"
import { db } from "../utils/firebase"

export default function Portfolio() {
	const [portfolio, setPortfolio] = useState<any>([])

	useEffect(() => {
		getPortfolio()
	}, [])

	// Fetch portfolio data from Firebase
	const getPortfolio = async () => {
		const querySnapshot = await getDocs(collection(db, "portfolio"))
		const portfolioData = querySnapshot.docs.map((doc) => doc.data())
		setPortfolio(portfolioData)
	}

	return (
		<div
			className='relative flex flex-col items-center justify-self-center max-w-[80rem] mx-0 sm:mx-4 md:mx-6 lg:mx-8 min-h-screen sm:min-h-0 my-0 sm:my-4 md:my-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 sm:rounded-lg shadow-lg sm:border border-gray-700'
			role='main'
			aria-labelledby='portfolio-title'
		>
			{/* Decorative Background Accents */}
			<div
				className='absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-600 to-amber-500 rounded-full blur-2xl opacity-30'
				aria-hidden='true'
			></div>
			<div
				className='absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-pink-600 to-purple-500 rounded-full blur-3xl opacity-30'
				aria-hidden='true'
			></div>

			{/* Header Section */}
			<header
				className='text-center mt-12'
				role='region'
				aria-labelledby='portfolio-title'
			>
				<h1
					id='portfolio-title'
					className='text-5xl font-extrabold text-amber-500 relative inline-block mb-4'
				>
					My Portfolio
					{/* Decorative Underline */}
					<span
						className='absolute left-0 bottom-[-0.5rem] h-1 w-full bg-gradient-to-r from-purple-600 via-green-600 to-amber-500 rounded-full'
						aria-hidden='true'
					></span>
				</h1>
				<p
					className='text-lg text-gray-400 mt-4'
					aria-describedby='portfolio-intro'
				>
					Discover my work and the projects that have shaped my technical
					journey.
				</p>
			</header>

			{/* Note Section */}
			<section
				className='w-full mt-12 bg-gray-950 text-gray-300 p-6 rounded-lg shadow-md border border-gray-800'
				role='region'
				aria-labelledby='note-title'
			>
				<h2
					id='note-title'
					className='text-2xl font-bold text-amber-500 mb-4'
				>
					Note:
				</h2>
				<p>
					<strong>PortfolioV1-React</strong> is a deprecated version of this
					site. However, its repository is still available on my GitHub for
					reference.
				</p>
			</section>

			{/* Overview Section */}
			<section
				className='w-full mt-12 bg-gray-950 text-gray-300 p-8 rounded-lg shadow-md border border-gray-800'
				role='region'
				aria-labelledby='overview-title'
			>
				<h2
					id='overview-title'
					className='text-3xl font-bold text-amber-500 mb-6 text-center relative'
				>
					Professional Overview
					<span
						className='absolute left-0 bottom-[-0.25rem] h-1 w-full bg-gradient-to-r from-purple-600 via-amber-500 to-green-600 rounded-full'
						aria-hidden='true'
					></span>
				</h2>
				<div className='space-y-6 leading-relaxed'>
					{/* Content Blocks */}
					{[
						{
							label: "Game Development",
							text: "I specialize in Godot, crafting immersive and strategic gameplay experiences using GDScript. From designing mechanics to refining controls, I bring creativity and precision to every project.",
						},
						{
							label: "E-commerce Innovation",
							text: "I revamped Shopify platforms using Hydrogen, delivering headless React storefronts that improved speed, flexibility, and user experience.",
						},
						{
							label: "Automation Expertise",
							text: "Utilizing Python and Selenium, I’ve automated workflows, optimized processes, and managed large-scale data tasks for efficient and scalable solutions.",
						},
						{
							label: "Web Development",
							text: "My experience spans modern frameworks like Remix, React, and Hydrogen, where I create responsive, user-centered applications with cutting-edge design principles.",
						},
						{
							label: "Team Leadership & Mentorship",
							text: "A natural organizer and collaborator, I thrive in guiding teams, structuring workflows, and fostering innovation through mentorship and group synergy.",
						},
					].map((block, index) => (
						<div
							key={index}
							className='flex gap-4 items-start'
						>
							<span
								className='w-4 h-4 bg-green-600 rounded-full flex-shrink-0 mt-1'
								aria-hidden='true'
							></span>
							<p>
								<strong className='text-amber-500'>{block.label}:</strong>{" "}
								{block.text}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* Portfolio Items */}
			<section
				className='w-full mt-12 bg-gray-900 rounded-2xl shadow-md border border-gray-800'
				role='region'
				aria-labelledby='projects-title'
			>
				<h2
					id='projects-title'
					className='text-center text-3xl font-bold text-amber-500 p-4 bg-gray-950 rounded-t-2xl'
				>
					Projects
				</h2>
				<div className='relative text-gray-300 p-6 sm:p-8'>
					<div
						className='w-full'
						aria-labelledby='portfolio-items-container'
					>
						{renderPortfolio(portfolio)}
					</div>
				</div>
			</section>

			{/* Footer Call-to-Action */}
			<footer
				className='text-center mt-16 mb-8'
				role='region'
				aria-labelledby='cta-footer'
			>
				<h3
					id='cta-footer'
					className='text-lg text-gray-400'
				>
					Want to discuss a project or learn more about my work?
				</h3>
				<a
					href='/contact'
					className='inline-block mt-4 px-8 py-3 text-lg font-semibold text-gray-900 bg-amber-500 hover:bg-purple-600 hover:text-gray-100 rounded-md shadow-md transition-all duration-300 ease-in-out'
					aria-label='Navigate to the Contact page'
				>
					Contact Me
				</a>
			</footer>
		</div>
	)
}
