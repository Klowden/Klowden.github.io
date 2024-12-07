import { SetStateAction, useState } from "react"
import {
	HiOutlineArrowNarrowLeft,
	HiOutlineArrowNarrowRight,
} from "react-icons/hi"
import imageData from "../data/resumeData.json"

export default function Resume() {
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
		<div className='relative flex flex-col items-center max-w-[80rem] mx-0 sm:mx-6 lg:mx-8 my-4 sm:my-8 py-6 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-lg border border-gray-700'>
			{/* Decorative Accents */}
			<div className='absolute inset-x-0 top-0 h-4 bg-gradient-to-r from-blue-500 via-amber-500 to-purple-600'></div>
			<div className='absolute inset-x-0 bottom-0 h-4 bg-gradient-to-r from-green-500 via-amber-500 to-pink-600'></div>

			{/* Header Section */}
			<header className='text-center mb-8'>
				<div className='flex flex-col sm:flex-row justify-center items-center gap-6'>
					<h1 className='text-4xl sm:text-5xl font-extrabold text-blue-500 tracking-wide'>
						Resume
					</h1>
					<img
						src='/images/resume/HTML5-logo.svg'
						alt='HTML5 logo'
						className='w-20 h-20 sm:w-24 sm:h-24 rounded-lg shadow-lg saturate-150 mb-4'
					/>
				</div>
				<p className='text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto bg-gray-950 py-3 px-5 rounded-lg shadow-md'>
					A showcase of my creative resume design using HTML, JavaScript, and
					CSS—blending functionality and style.
				</p>
			</header>

			{/* Project Description Section */}
			<section className='w-full px-4 sm:px-6 lg:px-8 mb-8'>
				<div className='bg-gray-950 text-gray-300 p-6 rounded-lg shadow-md border border-gray-800 space-y-6'>
					<p>
						My Resume was created using only HTML, JavaScript, and CSS. These
						days I focus more on Remix-Run, so updating this file was a
						nostalgic experience.
					</p>
					<a
						href='https://klowden.github.io/Resume'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center justify-center px-6 py-3 bg-gradient-to-l from-blue-700 to-gray-700 text-gray-100 text-lg font-bold rounded-lg shadow-md hover:from-blue-700 hover:to-blue-500 hover:scale-105 active:scale-95 transition-all duration-150 ease-in-out'
					>
						Access the Resume Directly Here
					</a>

					<p>
						Full Disclosure: This document isn't optimized for mobile. If you're
						on a mobile device, consider viewing it in desktop mode.
					</p>
					<p>
						This resume features an interactive background that responds to
						mouse movements. Circles clump and grow near the cursor and explode
						upon clicking.
					</p>
					<div>
						<h3 className='font-bold text-xl text-blue-500 underline underline-offset-4 decoration-purple-600'>
							Important Points:
						</h3>
						<ul className='list-disc list-inside space-y-4 text-gray-300 pl-5'>
							<li>
								I've worked on various projects, including overhauling a
								client's e-commerce website from scratch—an extensive task,
								especially with a new framework.
							</li>
							<li>
								The Cooledtured V3 Project is my most extensive work experience.
								I led a team of 10 developers, collaborating with management and
								UI/UX teams, gaining expertise in Remix-Run projects.
							</li>
							<li>
								I've embraced TailwindCSS for this project, which works well due
								to the dynamic routing in place. Otherwise, I prefer SCSS for
								scalability.
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Carousel Section */}
			<section className='w-full mt-8 px-4 sm:px-6 lg:px-8'>
				<h2 className='text-center text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-amber-500 to-pink-600 mb-12'>
					Carousel Showcase
				</h2>
				<div className='relative flex items-center justify-center mx-auto max-w-[60rem] h-[28rem] sm:h-[34rem] w-full px-4 pb-4 rounded-lg shadow-lg border border-gray-800 bg-gray-950'>
					<button
						onClick={prevImage}
						className='absolute left-4 bg-gradient-to-br from-gray-800 to-blue-600 text-gray-100 text-3xl sm:text-4xl p-5 rounded-lg hover:from-amber-500 hover:to-purple-700 hover:scale-110 active:scale-90 transition-transform duration-150 ease-out z-10'
					>
						<HiOutlineArrowNarrowLeft />
					</button>
					<div className='w-full h-full flex flex-col items-center'>
						<a
							href={exampleImages[currentImageIndex].url}
							target='_blank'
							rel='noopener noreferrer'
							className='flex relative justify-center font-bold text-amber-500 bg-gray-900 rounded-t-lg px-4 pb-4 pt-3 shadow-md border-b border-gray-800'
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
					>
						<HiOutlineArrowNarrowRight />
					</button>
				</div>
			</section>

			{/* Thumbnail Grid Section */}
			<section className='w-full mt-8 px-4 sm:px-6 lg:px-8'>
				<h2 className='text-center text-3xl font-bold text-amber-500 mb-6'>
					Thumbnail Gallery
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4'>
					{exampleImages.map((image, index) => (
						<div
							key={index}
							className='cursor-pointer flex flex-col items-center bg-gray-950 border border-gray-800 rounded-md shadow-md hover:scale-105 transition-transform'
							onClick={() => setImageIndex(index)}
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
