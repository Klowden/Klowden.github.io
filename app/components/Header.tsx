import { useState } from "react"
import { NavLink } from "@remix-run/react"
import {
	FaEnvelopeOpen, // Contact icon
	FaSuitcase, // Portfolio/Work icon
	FaUser, // About icon
	FaHouseChimney, // Home icon
	FaScrewdriverWrench, // Skills icon
	FaGamepad, // Game Dev icon
	FaBars, // Hamburger menu icon for mobile
	FaX, // Close menu icon for mobile
} from "react-icons/fa6"

export default function Header() {
	// State to track whether the mobile menu is open or closed
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	// Function to toggle the mobile menu state
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((prev) => !prev)
	}

	return (
		<header className='w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg pt-4 pb-2'>
			{/* Desktop Navigation: Visible only on screens larger than 'sm' */}
			<div
				className='hidden sm:flex justify-between items-center max-w-6xl mx-auto px-4 text-amber-500 font-semibold border-b-[3px] border-gray-800'
				role='navigation'
				aria-label='Desktop navigation'
			>
				{/* Home link */}
				<NavLink
					to='/'
					end
					aria-label='Home'
					className={({ isActive }) =>
						`flex flex-col items-center gap-1 px-4 pt-2 pb-1 transition-all duration-200 ease-in-out ${
							isActive
								? "text-gray-100 scale-105"
								: "hover:text-amber-400 hover:-translate-y-1 hover:scale-[102%]"
						}`
					}
				>
					<FaHouseChimney className='text-2xl' />
					<span className='text-sm xs:text-base'>Home</span>
				</NavLink>

				{/* About link */}
				<NavLink
					to='/about'
					end
					aria-label='About'
					className={({ isActive }) =>
						`flex flex-col items-center gap-1 px-4 pt-2 pb-1 transition-all duration-200 ease-in-out ${
							isActive
								? "text-gray-100 scale-105"
								: "hover:text-amber-400 hover:-translate-y-1 hover:scale-[102%]"
						}`
					}
				>
					<FaUser className='text-2xl' />
					<span className='text-sm xs:text-base'>About</span>
				</NavLink>

				{/* Portfolio/Work link */}
				<NavLink
					to='/portfolio'
					end
					aria-label='Portfolio and work'
					className={({ isActive }) =>
						`flex flex-col items-center gap-1 px-4 pt-2 pb-1 transition-all duration-200 ease-in-out ${
							isActive
								? "text-gray-100 scale-105"
								: "hover:text-amber-400 hover:-translate-y-1 hover:scale-[102%]"
						}`
					}
				>
					<FaSuitcase className='text-2xl' />
					<span className='text-sm xs:text-base'>Work</span>
				</NavLink>

				{/* Skills link */}
				<NavLink
					to='/skills'
					end
					aria-label='Skills'
					className={({ isActive }) =>
						`flex flex-col items-center gap-1 px-4 pt-2 pb-1 transition-all duration-200 ease-in-out ${
							isActive
								? "text-gray-100 scale-105"
								: "hover:text-amber-400 hover:-translate-y-1 hover:scale-[102%]"
						}`
					}
				>
					<FaScrewdriverWrench className='text-2xl' />
					<span className='text-sm xs:text-base'>Skills</span>
				</NavLink>

				{/* Game Development link */}
				<NavLink
					to='/game-dev'
					end
					aria-label='Game Development'
					className={({ isActive }) =>
						`flex flex-col items-center gap-1 px-4 pt-2 pb-1 transition-all duration-200 ease-in-out ${
							isActive
								? "text-gray-100 scale-105"
								: "hover:text-amber-400 hover:-translate-y-1 hover:scale-[102%]"
						}`
					}
				>
					<FaGamepad className='text-2xl' />
					<span className='text-sm xs:text-base'>Game Dev</span>
				</NavLink>

				{/* Contact link */}
				<NavLink
					to='/contact'
					end
					aria-label='Contact'
					className={({ isActive }) =>
						`flex flex-col items-center gap-1 px-4 pt-2 pb-1 transition-all duration-200 ease-in-out ${
							isActive
								? "text-gray-100 scale-105"
								: "hover:text-amber-400 hover:-translate-y-1 hover:scale-[102%]"
						}`
					}
				>
					<FaEnvelopeOpen className='text-2xl' />
					<span className='text-sm xs:text-base'>Contact</span>
				</NavLink>
			</div>

			{/* Mobile Navigation: Visible only on screens smaller than 'sm' */}
			<div className='sm:hidden px-4 relative z-50'>
				{/* Mobile Header */}
				<div
					className='flex justify-between items-center'
					role='navigation'
					aria-label='Mobile navigation'
				>
					<h1 className='text-2xl font-bold text-amber-500'>Menu</h1>
					{/* Toggle button for the menu */}
					<button
						onClick={toggleMobileMenu}
						className='text-amber-500 text-3xl hover:text-gray-100 transition-all'
						aria-expanded={isMobileMenuOpen}
						aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
					>
						{isMobileMenuOpen ? <FaX /> : <FaBars />}
					</button>
				</div>

				{/* Expanding Dropdown Menu */}
				<div
					className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
						isMobileMenuOpen ? "max-h-96" : "max-h-0"
					} bg-gray-800 border border-gray-700 rounded-lg shadow-md mt-4`}
					aria-hidden={!isMobileMenuOpen}
				>
					<ul className='flex flex-col text-gray-100 text-lg'>
						{/* Each list item represents a menu option */}
						<li className='hover:bg-gray-700'>
							<NavLink
								to='/'
								className='block px-6 py-2'
								aria-label='Navigate to Home'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<FaHouseChimney className='inline-block mr-3' /> Home
							</NavLink>
						</li>
						<li className='hover:bg-gray-700'>
							<NavLink
								to='/about'
								className='block px-6 py-2'
								aria-label='Navigate to About'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<FaUser className='inline-block mr-3' /> About
							</NavLink>
						</li>
						<li className='hover:bg-gray-700'>
							<NavLink
								to='/portfolio'
								className='block px-6 py-2'
								aria-label='Navigate to Portfolio and Work'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<FaSuitcase className='inline-block mr-3' /> Work
							</NavLink>
						</li>
						<li className='hover:bg-gray-700'>
							<NavLink
								to='/skills'
								className='block px-6 py-2'
								aria-label='Navigate to Skills'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<FaScrewdriverWrench className='inline-block mr-3' /> Skills
							</NavLink>
						</li>
						<li className='hover:bg-gray-700'>
							<NavLink
								to='/game-dev'
								className='block px-6 py-2'
								aria-label='Navigate to Game Development'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<FaGamepad className='inline-block mr-3' /> Game Dev
							</NavLink>
						</li>
						<li className='hover:bg-gray-700'>
							<NavLink
								to='/contact'
								className='block px-6 py-2'
								aria-label='Navigate to Contact'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<FaEnvelopeOpen className='inline-block mr-3' /> Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}
