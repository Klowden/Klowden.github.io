import { SetStateAction, useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"
import imageData from "../data/cooledturedData.json"

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
						<h1 className='font-bold text-4xl sm:text-5xl'>Cooledtured V3</h1>
						<img
							src='/images/cooledtured/cooledturedLogo.svg'
							alt='cooledtured logo'
							className='aspect-square size-20'
						/>
					</div>
					<div className='indent-4 flex flex-col gap-4'>
						<p>
							Cooledtured operates in the E-commerce domain, specializing in
							pop-culture merchandise. During my tenure at Cooledtured, I
							spearheaded a team of 8 intern developers and collaborated closely
							with both the management and design teams.
						</p>
						<p>
							Our project's primary objective was to enhance the website by
							introducing social and community features. To achieve this, we
							transitioned from Shopify's Liquid template engine to a more
							robust and flexible front-end architecture using Shopify's
							Hydrogen framework along with Remix, which leverages React for
							seamless integration with the existing back-end systems.
						</p>
						<p>
							Embracing Hydrogen and Remix presented a significant learning
							curve as they were novel technologies to me. I'm proud to say that
							not only did we meet our initial goals, but I'm also leading
							ongoing developments and the maintenance of the platform, ensuring
							its continuous evolution.
						</p>
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
