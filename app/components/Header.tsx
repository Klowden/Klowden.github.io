import { NavLink } from "@remix-run/react"
import {
	FaEnvelopeOpen,
	FaSuitcase,
	FaUser,
	FaHouseChimney,
} from "react-icons/fa6"

export default function Header() {
	return (
		<div className='w-full bg-gray-900 overflow-visible pt-4 pb-2'>
			<div className='flex justify-between max-w-[40rem] text-amber-500 font-semibold first:ml-4 last:mr-4 border-b-[4px] border-l-4 border-gray-800'>
				<NavLink
					prefetch='intent'
					to='/'
					end
					className='flex flex-col items-center rounded-tr-3xl border-2 border-gray-600 px-4 pt-4 gap-1 size-16 xs:size-[4.5rem] sm:size-20 transition-all duration-150 ease-in-out hover:text-[#F5BB0A] hover:-translate-y-1 hover:scale-[102%] active:scale-[96%] focus:text-gray-100'
				>
					<FaHouseChimney className='text-xl sm:text-2xl' />
					<h3 className='text-sm xs:text-base'>Home</h3>
				</NavLink>
				<NavLink
					prefetch='intent'
					to='/about'
					end
					className='flex flex-col items-center rounded-tr-3xl border-2 border-gray-600 px-4 pt-4 gap-1 size-16 xs:size-[4.5rem] sm:size-20 transition-all duration-150 ease-in-out hover:text-[#F5BB0A] hover:-translate-y-1 hover:scale-[102%] active:scale-[96%] focus:text-gray-100'
				>
					<FaUser className='text-xl sm:text-2xl' />
					<h3 className='text-sm xs:text-base'>About</h3>
				</NavLink>
				<NavLink
					prefetch='intent'
					to='/portfolio'
					end
					className='flex flex-col items-center rounded-tr-3xl border-2 border-gray-600 px-4 pt-4 gap-1 size-16 xs:size-[4.5rem] sm:size-20 transition-all duration-150 ease-in-out hover:text-[#F5BB0A] hover:-translate-y-1 hover:scale-[102%] active:scale-[96%] focus:text-gray-100'
				>
					<FaSuitcase className='text-xl sm:text-2xl' />
					<h3 className='text-sm xs:text-base'>Work</h3>
				</NavLink>
				<NavLink
					prefetch='intent'
					to='/contact'
					end
					className='flex flex-col items-center rounded-tr-3xl border-2 border-gray-600 px-4 pt-4 gap-1 size-16 xs:size-[4.5rem] sm:size-20 transition-all duration-150 ease-in-out hover:text-[#F5BB0A] hover:-translate-y-1 hover:scale-[102%] active:scale-[96%] focus:text-gray-100'
				>
					<FaEnvelopeOpen className='text-xl sm:text-2xl' />
					<h3 className='text-sm xs:text-base'>Contact</h3>
				</NavLink>
			</div>
		</div>
	)
}
