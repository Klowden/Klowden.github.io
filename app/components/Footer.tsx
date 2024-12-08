import { Link } from "@remix-run/react"
import Social from "./Social"

export default function Footer() {
	return (
		// Footer container with dark background and padding
		<footer
			className='bg-gray-950 text-gray-200 p-6'
			role='contentinfo'
			aria-label='Website footer'
		>
			{/* Main footer content wrapper */}
			<div className='max-w-6xl mx-auto flex flex-col items-center'>
				{/* Navigation links and key actions */}
				<ul
					className='list-none flex flex-wrap gap-6 items-center justify-center text-gray-200 font-semibold mb-8'
					role='list'
					aria-label='Footer navigation links'
				>
					{/* Call to Action: Hire Me */}
					<li
						className='hover:text-blue-400 hover:scale-[102%] active:scale-95 text-xl transition-all duration-200 ease-in-out'
						role='listitem'
					>
						<Link
							to='/contact'
							className='cursor-pointer flex items-center gap-2'
							aria-label='Contact me for hire'
						>
							<span
								aria-hidden='true'
								className='text-amber-400'
							>
								💼
							</span>{" "}
							Hire Me!
						</Link>
					</li>

					{/* Remix-Run attribution link */}
					<li
						className='flex items-center gap-4'
						role='listitem'
					>
						<a
							href='https://remix.run/'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-2 hover:text-blue-400 transition-all duration-200 ease-in-out'
							aria-label='Learn more about Remix-Run'
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
				<div
					className='w-full mb-6'
					role='complementary'
					aria-label='Social media links'
				>
					<Social />
				</div>

				{/* Decorative horizontal line */}
				<hr
					className='border-t border-gray-700 w-full mb-4'
					aria-hidden='true'
				/>

				{/* Footer bottom section */}
				<div className='text-center'>
					{/* Footer description */}
					<p
						className='text-sm text-gray-400 mb-2'
						aria-label='Copyright information'
					>
						© {new Date().getFullYear()} Christopher Lowden @ Klowden Solutions.
						All rights reserved.
					</p>

					{/* Secondary links (e.g., Privacy Policy, Terms) */}
					<ul
						className='list-none flex gap-4 justify-center text-gray-400 text-xs'
						role='list'
						aria-label='Legal and policy links'
					>
						<li role='listitem'>
							<Link
								to='/privacy-policy'
								className='hover:text-blue-400 transition-all duration-200 ease-in-out'
								aria-label='View privacy policy'
							>
								Privacy Policy
							</Link>
						</li>
						<li role='listitem'>
							<Link
								to='/terms-of-service'
								className='hover:text-blue-400 transition-all duration-200 ease-in-out'
								aria-label='View terms of service'
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
