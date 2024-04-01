import type { MetaFunction } from "@remix-run/node"
import { Link } from "@remix-run/react"
import { FaArrowCircleUp } from "react-icons/fa"

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	]
}

export default function Index() {
	return (
		<div className='flex flex-col gap-16 my-8'>
			{/* Introduction Section */}
			<div className='flex flex-col gap-16 mx-4 xs:ml-8'>
				<header className='flex flex-col text-left gap-4'>
					<h1 className='font-bold text-[2.5rem] leading-none xxs:text-5xl xs:text-6xl'>
						Christopher Lowden
					</h1>
					<h2 className='text-gray-800 text-2xl xs:text-3xl'>
						Fullstack Web Application Developer
					</h2>
				</header>
				<div className='flex flex-col sm:flex-row items-center gap-4'>
					<h3 className='text-xl font-semibold'>Got a project?</h3>
					<Link to='/contact'>
						<button className='glow-effect-orange text-xl text-amber-500 px-8 py-2 bg-gray-950 hover:text-[#F5BB0A] hover:bg-gray-900 transition-all duration-150 ease-out hover:-rotate-[4deg] hover:scale-[103%] active:scale-95 rounded-sm'>
							Let's chat!
						</button>
					</Link>
				</div>
			</div>

			{/* Services Description */}
			<section>
				<div className='flex flex-col w-full xxs:w-max mx-auto sm:ml-8 p-4 bg-gray-950 text-gray-100 rounded-md gap-4 border-amber-500 border-2'>
					<h3 className='text-2xl text-amber-500 font-semibold'>
						Services Offered:
					</h3>
					<div className='w-max xxs:ml-2'>
						<ul className='flex flex-col gap-2 list-disc list-inside font-medium text-sm text-wrap xxs:text-base xs:text-lg'>
							<li>Website Development</li>
							<li>Website/Database Maintenance</li>
							<li>Consultation - Various</li>
							<li>Brand Management</li>
							<li>API Development & Integration</li>
							<li>Ecommerce Storefront Development</li>
							<li>Database Design and Migration</li>
							<li>Feature Implementation</li>
						</ul>
						<h4 className='text-right text-lg font-semibold'>... and More!</h4>
					</div>
				</div>
				<Link
					to='/contact'
					className='flex mx-auto w-max sm:ml-4 items-center gap-2  px-4 pt-4 text-2xl font-medium underline underline-offset-8 hover:text-amber-800 hover:scale-[103%] active:scale-95'
				>
					<FaArrowCircleUp />
					Ask about my rates!
				</Link>
			</section>
		</div>
	)
}
