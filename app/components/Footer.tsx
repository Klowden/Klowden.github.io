import { Link } from "@remix-run/react"
import Social from "./Social"

export default function Footer() {
	return (
		<div className='flex flex-col bg-gray-950 min-h-24 p-4'>
			<ul className='list-none flex gap-6 items-center justify-between text-gray-200  font-semibold'>
				<li className='hover:text-blue-400 hover:scale-[102%] active:scale-95 text-2xl transition-all duration-200 ease-in-out'>
					<Link
						to='/contact'
						className='cursor-pointer'
					>
						{" "}
						Hire Me!{" "}
					</Link>
				</li>
				<li>
					<a
						href='https://remix.run/'
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center gap-4'
					>
						<p className='hover:text-lg hover:text-blue-400 transition-all duration-200 ease-in-out'>
							Built using Remix-Run
						</p>
						<img
							src='images/logo-remix.svg'
							className='max-w-8'
						/>
					</a>
				</li>
			</ul>
			<div className='max-w-[50rem] p-4'>
				<Social />
			</div>
		</div>
	)
}
