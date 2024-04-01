import { Link } from "@remix-run/react"

const renderPortfolio = (portfolio: any) => {
	return (
		<div className='flex gap-4 flex-wrap'>
			{portfolio.map((port: any, idx: number) => {
				return (
					<div
						className='image-box relative flex flex-grow flex-shrink basis-1/5 h-80 place-content-center  rounded-lg max-w-72 w-full overflow-clip hover:after:opacity-30 after:transition-all after:duration-300 after:ease-portfolio after:bg-gradient-to-t after:from-[#ffd700] after:to-black after:bottom-0 after:absolute after:w-full after:h-full after:z-[2] after:opacity-0 group transition-all duration-200 ease-in'
						key={idx}
					>
						<img
							className='portfolio-image relative z-[2] object-contain h-full aspect-square'
							src={port.image}
							alt='porfolio'
						/>
						<div className='content group-hover:bottom-0 w-full absolute z-[3] py-3 px-5 transition-all duration-300 ease-portfolio bottom-[-4.2rem] hover:bottom-0 hover:bg-transparent bg-gradient-to-t from-black from-40% to-100%'>
							<p className='title my-0 text-white text-[1.5rem] leading-6 font-medium'>
								{port.name}
							</p>
							<h4 className='description text-[0.9rem] mb-[0.4rem] text-white font-normal'>
								{port.description}
							</h4>
							<Link to={`/portfolio/${port.component}`}>
								<button className='btn mt-8 mb-[0.65rem] px-5 h-10 text-[0.9rem] leading-[2.1rem] border-4 border-[#ffd700] rounded-md text-white bg-transparent uppercase font-medium transition-all duration-300 ease-portfolio cursor-pointer hover:translate-y-[-0.2rem] hover:bg-[#ffd700] hover:text-black hover:font-bold'>
									View
								</button>
							</Link>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default renderPortfolio
