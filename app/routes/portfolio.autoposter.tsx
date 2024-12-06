// import { SetStateAction, useState } from "react"
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"
import imageData from "../data/resumeData.json"

export default function AutoPoster() {
	const exampleImages = imageData.ExampleImages

	// // State to keep track of the current image index
	// const [currentImageIndex, setCurrentImageIndex] = useState(0)

	// // Function to go to the next image
	// const nextImage = () => {
	// 	setCurrentImageIndex((prevIndex) => (prevIndex + 1) % exampleImages.length)
	// }

	// // Function to go to the previous image
	// const prevImage = () => {
	// 	setCurrentImageIndex(
	// 		(prevIndex) =>
	// 			(prevIndex - 1 + exampleImages.length) % exampleImages.length
	// 	)
	// }

	// const setImageIndex = (index: SetStateAction<number>) => {
	// 	setCurrentImageIndex(index)
	// }

	return (
		<div className='grid place-items-center'>
			<div className=''>
				<div className='p-4 max-w-[70ch] flex flex-col gap-4'>
					<div className='flex flex-col sm:flex-row justify-center items-center gap-8'>
						<h1 className='font-bold text-4xl sm:text-5xl'>Content Poster</h1>
						<img
							src='/images/autoposter/Python.webp'
							alt='Python logo'
							className='aspect-square size-20'
						/>
					</div>
					<div className=' flex flex-col gap-4 mb-4'>
						<p className='indent-4'>
							I've always been terrible at keeping myself active on social
							media, so this project was a way for me to create the illusion of
							activity without the stress of worrying what to post about in the
							moment.
						</p>
						<a
							href='https://bsky.app/profile/kreestoph.bsky.social'
							target='_blank'
							rel='noopener noreferrer'
							className='indent-0 w-max flex gap-2 items-center rounded-2xl p-2 hover:scale-[102%] hover:text-blue-700 hover:invert text-black transition-all duration-100 ease-in-out bg-slate-500'
						>
							<p className=' font-bold underline-offset-2 underline'>
								See my BlueSky!
							</p>
							<img
								src='/images/Bluesky_Logo.svg'
								alt='BlueSky Logo'
								className='h-7'
							/>
						</a>
						<p className='indent-4'>
							The program schedules a set number of posts within a specified
							time frame with randomized modifiers on launch. When a post is
							scheduled, it utilizes stored JSON files which contain prompts
							that the user specifies and feeds those prompts into a custom AI
							via API usage for generation of responses to these prompts which
							are to be formatted in extremely specific confines. The prompts
							are chosen randomly and are chosen such that the same one will not
							be selected twice, and prompts are transferred between JSON files
							for 'used' and 'unused' prompts. If the response does not meet the
							critera for any reason, it is resubmitted up to 5 times before the
							program resumes sleep. When a valid prompt and response are
							received, the program launches a headless web browser via
							Selenium, navigates to the specified pages, logs in, and posts the
							formatted response to the account via a series of HTML lookups
							identifying valid page elements for selection (e.g. 'post',
							'textarea', 'submit', etc...). The program then shuts the browser
							down and sleeps until the next scheduled task, rather than
							constantly checking scheduled tasks so that I can minimize
							resource usage.
						</p>
						<div>
							<h3 className='font-bold'>Important Points:</h3>
							<ul className='flex flex-col gap-4 mt-2 list-inside list-disc'>
								<li className='indent-4'>
									This is my favorite utility program since I'm a poor user of
									Social Media.
								</li>
								<li className='indent-4'>
									BlueSky doesn't currently have an official API for posting
									indirectly at the time of writing this, therefore Selenium was
									the next obvious choice.
								</li>
								<li className='indent-4'>
									I'm developing a front-end management system for this to make
									it simpler to generate and manage prompt lists.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* Image carousel container */}
			{/* <div className='flex place-items-center mx-auto max-w-[60rem] h-[28rem] sm:h-[34rem] w-full px-4 pb-4 rounded-md gap-2'>
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
			<div className='overflow-x-hidden p-4 max-w-full lg:max-w-[60rem]'>
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
			</div> */}
		</div>
	)
}
