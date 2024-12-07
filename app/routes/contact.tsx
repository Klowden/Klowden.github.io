import ContactForm from "~/components/ContactForm"

export default function Contact() {
	return (
		// Main container for the contact page
		<div className='flex flex-col gap-12 mx-4 my-4 sm:my-8 lg:mx-auto max-w-5xl py-12 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-xl border border-gray-700'>
			{/* Page header */}
			<div className='relative text-center'>
				<h1 className='text-5xl md:text-6xl font-extrabold text-amber-500'>
					Contact Me
				</h1>
				{/* Decorative underline */}
				<div className='mt-2 h-1 w-28 mx-auto bg-gradient-to-r from-amber-500 via-red-500 to-purple-600 rounded-full'></div>
			</div>

			{/* Introductory text */}
			<div className='text-center px-6'>
				<p className='max-w-[65ch] mx-auto text-lg text-gray-300 leading-relaxed tracking-wide'>
					<strong className='text-amber-500'>
						As a full-stack web developer
					</strong>
					, I’m actively seeking both employment and freelance opportunities,
					particularly those involving challenging and large-scale projects.
					Feel free to reach out through the form below for direct
					communication.
				</p>
				<p className='font-medium text-gray-400 mt-4'>
					I’ll make sure to respond promptly!
				</p>
			</div>

			{/* Contact form */}
			<div className='relative bg-gray-950 p-8 rounded-xl shadow-lg border border-gray-800'>
				{/* Subtle decorative element */}
				<div className='absolute -top-4 -left-4 w-12 h-12 bg-amber-500 rounded-full blur-lg'></div>
				<div className='absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-full blur-lg'></div>
				<ContactForm />
			</div>

			{/* Contact information section */}
			<div className='flex flex-col items-center gap-4 text-center'>
				{/* Name and title */}
				<h3 className='font-bold text-2xl text-amber-500'>
					Christopher Lowden
				</h3>
				<h4 className='italic font-medium text-lg text-gray-400'>
					FullStack Web Developer
				</h4>

				{/* Address with external link */}
				<a
					href='https://www.google.com/maps/place/Vienna,+WV/'
					target='_blank'
					rel='noreferrer'
					className='text-gray-300 hover:text-blue-400 transition-all duration-200'
				>
					Vienna, WV, 26105
				</a>

				{/* Email link */}
				<a
					href='mailto:klowdensolutions@gmail.com'
					className='text-blue-500 hover:text-sky-400 transition-all duration-200 underline decoration-blue-500'
				>
					klowdensolutions@gmail.com
				</a>
			</div>
		</div>
	)
}
