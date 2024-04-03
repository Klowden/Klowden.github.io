import { SetStateAction, useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"
import imageData from "../data/reactfolioData.json"

export default function Cooledtured() {
	const exampleImages = imageData.ExampleImages

	// State to keep track of the current image index
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	// Function to go to the next image
	const nextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % exampleImages.length)
	}

	// Function to go to the previous image
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
		<div className='grid place-items-center'>
			<div className=''>
				<div className='p-4 max-w-[65ch] flex flex-col gap-4'>
					<div className='flex flex-col sm:flex-row justify-center items-center gap-8'>
						<h1 className='font-bold text-4xl sm:text-5xl'>
							Portfolio-V1: React
						</h1>
						<img
							src='/images/reactfolio-v1/react-js-icon.svg'
							alt='React logo'
							className='aspect-square size-20'
						/>
					</div>
					<div className='indent-4 flex flex-col gap-4 mb-4'>
						<p>
							My original Portfolio was developed inside of React, and was also
							coincidentally my first time utilizing React for anything, so
							needless to say there were alot of misses and frustration building
							this site.
						</p>
						<p>
							This is no longer published to my GitHub Pages simply due to it
							being deprecated. I've switched to using a Remix-Run based
							portfolio instead <em>(the one you are currently in)</em>, so
							there's no need to keep the other running.
						</p>
						<p>
							I've made some small updates to the code when I was attempting to
							revamp it, but I missed Remix and ended up starting over from
							scratch with a more clean-feeling project.
						</p>
						<div className='indent-0'>
							<h3 className='font-bold mb-2'>Important Notes:</h3>
							<ul className='list-disc list-inside flex flex-col gap-4'>
								<li className='indent-4'>
									Originally I had utilize a canvas to create outwardly
									expanding ripples of varying sizes when the user clicked
									anywhere on the screen. The colors shifted based on random
									selection of a pre-defined color schema, and I enjoyed it at
									the time; However, this proved to be quite resource heavy.
								</li>
								<li className='indent-4'>
									I opted to remove the Canvas Element from my portfolio since
									it isn't the best experience on a page, and I've since opted
									for the more minimalist approach.
								</li>
								<li className='indent-4'>
									Time was not kind to my styling. Upon running Npm Update many
									things seemed to shift around, which was ultimately my sign to
									abandon this framework for one I wanted to keep working in.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* Image carousel container */}
			<div className='flex place-items-center mx-auto max-w-[60rem] h-[28rem] sm:h-[34rem] w-full px-4 pb-4 rounded-md gap-2'>
				<FaAngleLeft
					onClick={prevImage}
					className='text-6xl cursor-pointer'
				/>
				<div className='w-full h-full flex flex-col place-content-center'>
					<a
						href={exampleImages[currentImageIndex].url}
						target='_blank'
						rel='noopener noreferrer'
						className='flex relative justify-center font-bold text-amber-500 bg-gray-900 rounded-t-lg px-4 pb-4 pt-3'
					>
						<h3 className='flex w-max justify-center text-center text-xl sm:text-2xl md:text-3xl hover:text-blue-800 transition-all duration-150 ease-out hover:scale-[102%] active:scale-95'>
							{exampleImages[currentImageIndex].title}
						</h3>
						<p className='absolute right-2 top-2 z-10 text-xs sm:text-base hover:text-blue-800 transition-all duration-150 ease-out hover:scale-[102%] active:scale-95'>
							{currentImageIndex + 1}/{exampleImages.length}
						</p>
					</a>
					<div className='place-items-center justify-center flex aspect-video w-full bg-slate-700 rounded-b-lg shadow-md p-4 gap-4'>
						<img
							src={exampleImages[currentImageIndex].src}
							alt={exampleImages[currentImageIndex].alt}
							className='h-auto max-h-80 sm:max-h-[28rem] object-contain rounded-lg shadow-md select-none'
						/>
					</div>
				</div>
				<FaAngleRight
					onClick={nextImage}
					className='text-6xl cursor-pointer'
				/>
			</div>
			<div className='overflow-x-scroll p-4 max-w-full lg:max-w-[60rem]'>
				<div className='grid grid-flow-col grid-rows-2 gap-4 p-4'>
					{exampleImages.map((image, index) => (
						<div
							key={index}
							className='cursor-pointer w-32 sm:w-36 flex flex-col'
							onClick={() => setImageIndex(index)}
						>
							<h3 className='truncate text-sm text-center bg-black text-white rounded-t-md font-medium'>
								{image.title}
							</h3>
							<img
								src={image.src}
								alt={image.alt}
								className='w-full h-full aspect-square object-cover rounded-b-md shadow-lg hover:opacity-75 transition-opacity duration-150'
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
