import { Link } from "@remix-run/react"
import Social from "./Social"

export default function Footer() {
	return (
		// Footer container with dark background and padding
		<footer className='bg-gray-950 text-gray-200 p-6'>
			{/* Main footer content wrapper */}
			<div className='max-w-6xl mx-auto flex flex-col items-center'>
				{/* Navigation links and key actions */}
				<ul className='list-none flex flex-wrap gap-6 items-center justify-center text-gray-200 font-semibold mb-8'>
					{/* Call to Action: Hire Me */}
					<li className='hover:text-blue-400 hover:scale-[102%] active:scale-95 text-xl transition-all duration-200 ease-in-out'>
						<Link
							to='/contact'
							className='cursor-pointer flex items-center gap-2'
						>
							<span className='text-amber-400'>💼</span> Hire Me!
						</Link>
					</li>

					{/* Remix-Run attribution link */}
					<li className='flex items-center gap-4'>
						<a
							href='https://remix.run/'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-2 hover:text-blue-400 transition-all duration-200 ease-in-out'
						>
							<img
								src='/images/logo-remix.svg'
								alt='Remix Logo'
								className='w-8 h-8'
							/>
							<p className='text-sm'>Built with Remix-Run</p>
						</a>
					</li>
				</ul>

				{/* Social media links */}
				<div className='w-full mb-6'>
					<Social />
				</div>

				{/* Decorative horizontal line */}
				<hr className='border-t border-gray-700 w-full mb-4' />

				{/* Footer bottom section */}
				<div className='text-center'>
					{/* Footer description */}
					<p className='text-sm text-gray-400 mb-2'>
						© {new Date().getFullYear()} Christopher Lowden @ Klowden Solutions.
						All rights reserved.
					</p>

					{/* Secondary links (e.g., Privacy Policy, Terms) */}
					<ul className='list-none flex gap-4 justify-center text-gray-400 text-xs'>
						<li>
							<Link
								to='/privacy-policy'
								className='hover:text-blue-400 transition-all duration-200 ease-in-out'
							>
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link
								to='/terms-of-service'
								className='hover:text-blue-400 transition-all duration-200 ease-in-out'
							>
								Terms of Service
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}
