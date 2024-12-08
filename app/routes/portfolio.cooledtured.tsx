import { SetStateAction, useState } from "react"
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi"
import imageData from "../data/cooledturedData.json"

export default function Cooledtured() {
	const exampleImages = imageData.ExampleImages

	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	const nextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % exampleImages.length)
	}

	const prevImage = () => {
		setCurrentImageIndex(
			(prevIndex) =>
				(prevIndex - 1 + exampleImages.length) % exampleImages.length
		)
	}

	const setImageIndex = (index: SetStateAction<number>) => {
		setCurrentImageIndex(index)
	}

	return (
		<div
			className='relative flex flex-col items-center justify-self-center max-w-[80rem] mx-0 sm:mx-6 lg:mx-8 min-h-screen sm:min-h-0 my-0 sm:my-4 md:my-8 py-6 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-lg sm:border border-gray-700'
			role='main'
			aria-labelledby='cooledtured-title'
		>
			{/* Decorative Accents */}
			<div
				className='absolute inset-x-0 top-0 h-4 bg-gradient-to-r from-purple-600 via-amber-500 to-pink-600'
				aria-hidden='true'
			></div>
			<div
				className='absolute inset-x-0 bottom-0 h-4 bg-gradient-to-r from-green-500 via-amber-500 to-purple-600'
				aria-hidden='true'
			></div>

			{/* Header Section */}
			<header
				className='text-center mb-8'
				role='banner'
				aria-labelledby='cooledtured-title'
			>
				<div className='flex flex-col sm:flex-row justify-center items-center gap-6'>
					<h1
						id='cooledtured-title'
						className='text-4xl sm:text-5xl font-extrabold text-amber-500'
					>
						Cooledtured V3
					</h1>
					<img
						src='/images/cooledtured/cooledturedLogo.svg'
						alt='Cooledtured logo'
						className='w-20 h-20 sm:w-24 sm:h-24 rounded-lg shadow-lg saturate-200'
					/>
				</div>
				<p
					className='text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto'
					aria-describedby='cooledtured-description'
				>
					Discover the development journey of Cooledtured—an innovative
					e-commerce platform featuring pop-culture merchandise and cutting-edge
					technology.
				</p>
			</header>

			{/* Project Description Section */}
			<section
				className='w-full px-4 sm:px-6 lg:px-8 mb-8'
				role='region'
				aria-labelledby='project-description-title'
			>
				<div className='bg-gray-950 text-gray-300 p-6 rounded-lg shadow-md border border-gray-800 space-y-6'>
					<p id='project-description-title'>
						Cooledtured operates in the e-commerce domain, specializing in
						pop-culture merchandise. During my tenure at Cooledtured, I
						spearheaded a team of 8 intern developers and collaborated closely
						with both management and design teams.
					</p>
					<p>
						Our primary objective was to enhance the website by introducing
						social and community features. This involved transitioning from
						Shopify's Liquid template engine to a robust front-end architecture
						using Shopify's Hydrogen framework with Remix, leveraging React for
						seamless back-end integration.
					</p>
					<div className='flex gap-4 justify-center'>
						<a
							href='https://cooledtured.com/internship'
							target='_blank'
							rel='noopener noreferrer'
							className='bg-gradient-to-r from-purple-600 to-amber-500 text-gray-100 font-bold text-lg px-6 py-2 rounded-md shadow-md hover:scale-105 transition-transform'
							aria-label='Visit Cooledtured Internship Website'
						>
							Visit Current Website
						</a>
						<a
							href='https://github.com/Klowden/CooledturedV3'
							target='_blank'
							rel='noopener noreferrer'
							className='bg-gradient-to-r from-green-600 to-purple-600 text-gray-100 font-bold text-lg px-6 py-2 rounded-md shadow-md hover:scale-105 transition-transform'
							aria-label='View GitHub repository for Cooledtured V3'
						>
							View GitHub Clone
						</a>
					</div>
					<p className='text-center font-sm italic text-gray-400'>
						Note: The clone requires backend connectivity for full
						functionality.
					</p>
				</div>
			</section>

			{/* Carousel Section */}
			<section
				className='w-full mt-8 px-4 sm:px-6 lg:px-8'
				role='region'
				aria-labelledby='carousel-title'
			>
				<h2
					id='carousel-title'
					className='text-center text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-amber-500 to-pink-600 mb-12 relative'
				>
					Carousel Showcase
					<span
						className='absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 h-1 w-48 bg-gradient-to-r from-purple-600 to-amber-500 rounded-full'
						aria-hidden='true'
					></span>
				</h2>
				<div className='relative flex items-center justify-center mx-auto max-w-[60rem] h-[28rem] sm:h-[34rem] w-full px-4 pb-4 rounded-lg shadow-lg border border-gray-800 bg-gray-950'>
					<button
						onClick={prevImage}
						className='absolute left-4 bg-gradient-to-br from-gray-800 to-purple-600 text-gray-100 text-3xl sm:text-4xl p-5 rounded-lg hover:from-amber-500 hover:to-purple-700 hover:scale-110 active:scale-90 transition-transform duration-150 ease-out z-10'
						aria-label='Previous Image'
					>
						<HiArrowNarrowLeft />
					</button>
					<div className='w-full h-full flex flex-col items-center'>
						<a
							href={exampleImages[currentImageIndex].url}
							target='_blank'
							rel='noopener noreferrer'
							className='block bg-gray-900 rounded-t-lg px-4 py-3 shadow-md border-b border-gray-800'
							aria-label={`View ${exampleImages[currentImageIndex].title}`}
						>
							<h3 className='text-center text-2xl sm:text-3xl text-amber-500 font-bold hover:text-purple-600 transition-colors'>
								{exampleImages[currentImageIndex].title}
							</h3>
						</a>
						<img
							src={exampleImages[currentImageIndex].src}
							alt={exampleImages[currentImageIndex].alt}
							className='h-auto max-h-80 sm:max-h-[28rem] object-contain rounded-b-lg shadow-md'
						/>
					</div>
					<button
						onClick={nextImage}
						className='absolute right-4 bg-gradient-to-br from-gray-800 to-purple-600 text-gray-100 text-3xl sm:text-4xl p-5 rounded-lg hover:from-amber-500 hover:to-purple-700 hover:scale-110 active:scale-90 transition-transform duration-150 ease-out z-10'
						aria-label='Next Image'
					>
						<HiArrowNarrowRight />
					</button>
				</div>
			</section>

			{/* Thumbnail Grid Section */}
			<section
				className='w-full mt-8 px-4 sm:px-6 lg:px-8'
				role='region'
				aria-labelledby='thumbnail-gallery-title'
			>
				<h2
					id='thumbnail-gallery-title'
					className='text-center text-3xl font-bold text-amber-500 mb-6 relative'
				>
					Thumbnail Gallery
					<span
						className='absolute bottom-[-0.25rem] left-1/2 transform -translate-x-1/2 h-1 w-32 bg-gradient-to-r from-amber-500 to-purple-600 rounded-full'
						aria-hidden='true'
					></span>
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4'>
					{exampleImages.map((image, index) => (
						<div
							key={index}
							className='cursor-pointer flex flex-col items-center bg-gray-950 border border-gray-800 rounded-md shadow-md hover:scale-105 transition-transform'
							onClick={() => setImageIndex(index)}
							aria-label={`View ${image.title}`}
							tabIndex={0}
							onKeyDown={(e) => e.key === "Enter" && setImageIndex(index)}
						>
							<h3 className='text-center text-sm bg-gray-800 text-gray-100 py-1 w-full rounded-t-md font-sans font-semibold truncate'>
								{image.title}
							</h3>
							<img
								src={image.src}
								alt={image.alt}
								className='w-full h-full aspect-square object-contain p-2'
							/>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}
