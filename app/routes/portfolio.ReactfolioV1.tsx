import { SetStateAction, useState } from "react"
import {
	HiOutlineArrowNarrowLeft,
	HiOutlineArrowNarrowRight,
} from "react-icons/hi"
import imageData from "../data/reactfolioData.json"

export default function ReactFolioV1() {
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
			className='relative flex flex-col items-center justify-self-center max-w-[80rem] mx-0 sm:mx-6 lg:mx-8 min-h-screen sm:min-h-0 my-0 sm:my-4 md:my-8 py-6 bg-gradient-to-b from-gray-900 to-gray-800 sm:rounded-lg shadow-lg sm:border border-gray-700'
			role='main'
			aria-labelledby='reactfolio-title'
		>
			{/* Decorative Accents */}
			<div
				className='absolute inset-x-0 top-0 h-4 bg-gradient-to-r from-blue-500 via-amber-500 to-purple-600'
				aria-hidden='true'
			></div>
			<div
				className='absolute inset-x-0 bottom-0 h-4 bg-gradient-to-r from-green-500 via-amber-500 to-pink-600'
				aria-hidden='true'
			></div>

			{/* Header Section */}
			<header
				className='text-center mb-8'
				role='banner'
				aria-labelledby='reactfolio-title'
			>
				<div className='flex flex-col sm:flex-row justify-center items-center gap-6 mb-4 mt-2'>
					<h1
						id='reactfolio-title'
						className='text-4xl sm:text-5xl font-extrabold text-amber-500 tracking-wide'
					>
						Portfolio-V1: React
					</h1>
					<img
						src='/images/reactfolio-v1/react-js-icon.svg'
						alt='React logo'
						className='w-20 h-20 sm:w-24 sm:h-24 rounded-lg shadow-lg saturate-150'
					/>
				</div>
				<p
					className='text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto bg-gray-950 py-3 px-5 rounded-lg shadow-md'
					aria-describedby='reactfolio-description'
				>
					A glimpse into my first foray into React development—my original
					portfolio site, now retired and replaced with the Remix-powered
					version you are currently viewing.
				</p>
			</header>

			{/* Project Description Section */}
			<section
				className='w-full px-4 sm:px-6 lg:px-8 mb-12'
				role='region'
				aria-labelledby='project-description-title'
			>
				<div className='bg-gray-950 text-gray-300 p-6 rounded-lg shadow-md border border-gray-800 space-y-6'>
					<p id='project-description-title'>
						My original Portfolio was developed entirely in React, marking my
						first experience with the framework. While it came with challenges
						and learning curves, it set the stage for my growth as a developer.
					</p>
					<div>
						<h3
							className='font-bold text-xl text-blue-500 underline underline-offset-4 decoration-purple-600'
							id='important-notes-title'
						>
							Important Notes:
						</h3>
						<ul
							className='list-disc list-inside space-y-4 text-gray-300 pl-5'
							aria-labelledby='important-notes-title'
						>
							<li>
								Originally, I used a canvas element to create ripple effects on
								clicks, with colors dynamically shifting. However, this proved
								resource-heavy, and I later opted for a minimalist approach.
							</li>
							<li>
								Time wasn’t kind to the styling, and after some updates, I
								realized it was better to transition to a cleaner project with
								Remix.
							</li>
							<li>
								Building this portfolio was a crash course in React, and though
								it’s now retired, it remains an important milestone in my
								development journey.
							</li>
						</ul>
					</div>
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
					className='text-center text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-amber-500 to-pink-600 mb-12'
				>
					Carousel Showcase
				</h2>
				<div className='relative flex items-center justify-center mx-auto max-w-[60rem] h-[28rem] sm:h-[34rem] w-full px-4 pb-4 rounded-lg shadow-lg border border-gray-800 bg-gray-950'>
					<button
						onClick={prevImage}
						className='absolute left-4 bg-gradient-to-br from-gray-800 to-blue-600 text-gray-100 text-3xl sm:text-4xl p-5 rounded-lg hover:from-amber-500 hover:to-purple-700 hover:scale-110 active:scale-90 transition-transform duration-150 ease-out z-10'
						aria-label='Previous Image'
					>
						<HiOutlineArrowNarrowLeft />
					</button>
					<div className='w-full h-full flex flex-col items-center'>
						<a
							href={exampleImages[currentImageIndex].url}
							target='_blank'
							rel='noopener noreferrer'
							className='flex relative justify-center font-bold text-amber-500 bg-gray-900 rounded-t-lg px-4 pb-4 pt-3 shadow-md border-b border-gray-800'
							aria-label={`View ${exampleImages[currentImageIndex].title}`}
						>
							<h3 className='text-center text-2xl sm:text-3xl text-blue-500 font-bold hover:text-purple-600 transition-colors'>
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
						className='absolute right-4 bg-gradient-to-br from-gray-800 to-blue-600 text-gray-100 text-3xl sm:text-4xl p-5 rounded-lg hover:from-amber-500 hover:to-purple-700 hover:scale-110 active:scale-90 transition-transform duration-150 ease-out z-10'
						aria-label='Next Image'
					>
						<HiOutlineArrowNarrowRight />
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
					className='text-center text-3xl font-bold text-amber-500 mb-6'
				>
					Thumbnail Gallery
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
