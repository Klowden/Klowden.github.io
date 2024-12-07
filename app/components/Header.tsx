import { NavLink } from "@remix-run/react"
import {
	FaEnvelopeOpen, // Contact icon
	FaSuitcase, // Portfolio/Work icon
	FaUser, // About icon
	FaHouseChimney, // Home icon
	FaScrewdriverWrench, // Skills icon
} from "react-icons/fa6"

// Header component definition
export default function Header() {
	return (
		// Header container: Full width, gradient background for aesthetics, and shadow for depth
		<header className='w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg overflow-visible pt-4 pb-2'>
			{/* Inner navigation wrapper: Centers the navigation links, adds spacing and borders */}
			<div className='flex justify-between items-center max-w-6xl mx-auto px-4 text-amber-500 font-semibold border-b-[3px] border-gray-800'>
				{/* Home section link */}
				<NavLink
					prefetch='intent'
					to='/' // Links to the home route
					end
					className={({ isActive }) =>
						`flex flex-col items-center gap-1 px-4 pt-2 pb-1 transition-all duration-200 ease-in-out ${
							isActive
								? "text-gray-100 scale-105" // Active link styles
								: "hover:text-amber-400 hover:-translate-y-1 hover:scale-[102%]" // Hover styles
						}`
					}
				>
					<FaHouseChimney className='text-2xl' />
					<span className='text-sm xs:text-base'>Home</span>
				</NavLink>

				{/* About section link */}
				<NavLink
					prefetch='intent'
					to='/about' // Links to the about route
					end
					className={({ isActive }) =>
						`flex flex-col items-center gap-1 px-4 pt-2 pb-1 transition-all duration-200 ease-in-out ${
							isActive
								? "text-gray-100 scale-105" // Active link styles
								: "hover:text-amber-400 hover:-translate-y-1 hover:scale-[102%]" // Hover styles
						}`
					}
				>
					<FaUser className='text-2xl' />
					<span className='text-sm xs:text-base'>About</span>
				</NavLink>

				{/* Portfolio/Work section link */}
				<NavLink
					prefetch='intent'
					to='/portfolio' // Links to the portfolio/work route
					end
					className={({ isActive }) =>
						`flex flex-col items-center gap-1 px-4 pt-2 pb-1 transition-all duration-200 ease-in-out ${
							isActive
								? "text-gray-100 scale-105" // Active link styles
								: "hover:text-amber-400 hover:-translate-y-1 hover:scale-[102%]" // Hover styles
						}`
					}
				>
					<FaSuitcase className='text-2xl' />
					<span className='text-sm xs:text-base'>Work</span>
				</NavLink>

				{/* Skills section link */}
				<NavLink
					prefetch='intent'
					to='/skills' // Links to the skills route
					end
					className={({ isActive }) =>
						`flex flex-col items-center gap-1 px-4 pt-2 pb-1 transition-all duration-200 ease-in-out ${
							isActive
								? "text-gray-100 scale-105" // Active link styles
								: "hover:text-amber-400 hover:-translate-y-1 hover:scale-[102%]" // Hover styles
						}`
					}
				>
					<FaScrewdriverWrench className='text-2xl' />
					<span className='text-sm xs:text-base'>Skills</span>
				</NavLink>

				{/* Contact section link */}
				<NavLink
					prefetch='intent'
					to='/contact' // Links to the contact route
					end
					className={({ isActive }) =>
						`flex flex-col items-center gap-1 px-4 pt-2 pb-1 transition-all duration-200 ease-in-out ${
							isActive
								? "text-gray-100 scale-105" // Active link styles
								: "hover:text-amber-400 hover:-translate-y-1 hover:scale-[102%]" // Hover styles
						}`
					}
				>
					<FaEnvelopeOpen className='text-2xl' />
					<span className='text-sm xs:text-base'>Contact</span>
				</NavLink>
			</div>
		</header>
	)
}
