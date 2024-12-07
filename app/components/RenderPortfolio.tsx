import { Link } from "@remix-run/react"

const renderPortfolio = (portfolio: any) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 sm:px-6 lg:px-8'>
			{portfolio.map((port: any, idx: number) => (
				<div
					className='relative group w-full h-80 bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl'
					key={idx}
				>
					{/* Image */}
					<img
						className='absolute inset-0 w-full h-full object-contain z-10'
						src={port.image}
						alt={port.name}
					/>

					{/* Name Always Visible */}
					<div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-full text-center bg-black bg-opacity-70 text-white text-xl font-bold py-2 px-4 z-20 shadow-md'>
						{port.name}
					</div>

					{/* Gradient Overlay */}
					<div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-20'></div>

					{/* Description and Button */}
					<div className='absolute bottom-0 left-0 w-full p-4 z-30 text-white transform sm:translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out bg-gradient-to-t from-black via-gray-800 to-transparent'>
						<p className='text-base font-semibold leading-relaxed text-gray-100 text-shadow-lg'>
							{port.description}
						</p>

						{/* Button Always Visible on Mobile */}
						<Link to={`/portfolio/${port.component}`}>
							<button className='mt-4 px-6 py-2 bg-transparent border-2 border-amber-500 text-amber-500 font-bold rounded-md uppercase tracking-wider shadow-md transition-all duration-300 ease-in-out hover:bg-amber-500 hover:text-black hover:scale-105'>
								View
							</button>
						</Link>
					</div>
				</div>
			))}
		</div>
	)
}

export default renderPortfolio
