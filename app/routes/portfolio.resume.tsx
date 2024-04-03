import { SetStateAction, useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"
import imageData from "../data/resumeData.json"

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
				<div className='p-4 max-w-[70ch] flex flex-col gap-4'>
					<div className='flex flex-col sm:flex-row justify-center items-center gap-8'>
						<h1 className='font-bold text-4xl sm:text-5xl'>Resume</h1>
						<img
							src='/images/resume/HTML5-logo.svg'
							alt='HTML logo'
							className='aspect-square size-20'
						/>
					</div>
					<div className=' flex flex-col gap-4 mb-4'>
						<p className='indent-4'>
							My Resume was created using only HTML, JavaScript, and CSS. These
							days I tend to focus more on Remix-Run than other frameworks so it
							was a bit of a throwback updating this file.
						</p>
						<a
							href='https://klowden.github.io/Resume'
							target='_blank'
							rel='noopener noreferrer'
							className='indent-0 w-max'
						>
							<p className='hover:text-blue-700 text-black font-bold'>
								Access the Resume Directly HERE
							</p>
						</a>
						<p className='indent-4'>
							Full Disclosure, this Document is not developed with Mobile
							Compatibility in mind. It's a resume. If you must use a mobile
							device, please view in desktop mode.
						</p>
						<p className='indent-4'>
							I designed this resume with a little goal of having a background
							that moves around according to your mouse position. The circles
							clump and grow when within a certain distance of the mouse, and
							explode away onClick.
						</p>
						<div>
							<h3 className='font-bold'>Important Points:</h3>
							<ul className='flex flex-col gap-4 list-inside list-disc'>
								<li className='indent-4'>
									I've worked on various projects included the complete overhaul
									of a client's ecommerce website from scratch due to changing
									the framework they were on, which is a huge task, especially
									due to the framework being brand new to me at the time.
								</li>
								<li className='indent-4'>
									The Cooledtured V3 Project is my best example of work
									experience and the project I've done the most in. I was the
									team lead of 10 developers and worked tirelessly with
									management, the ui/ix team, and my developers to get this site
									functional, and it has made we great working inside of
									Remix-Run projects.
								</li>
								<li className='indent-4'>
									I've made a push to utilize TailwindCss in this project, which
									only works well for it due to the dynamic routing in place -
									otherwise I would have utilized SCSS by preference for more
									scalable maintenance needs.
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
