import { useState, useEffect } from "react"
import renderPortfolio from "../components/RenderPortfolio"
import { getDocs, collection } from "firebase/firestore/lite"
import { db } from "../utils/firebase"

export default function Portfolio() {
	const [portfolio, setPortfolio] = useState<any>([])

	useEffect(() => {
		getPortfolio()
	}, [])

	const getPortfolio = async () => {
		const querySnapshot = await getDocs(collection(db, "portfolio"))
		const portfolioData = querySnapshot.docs.map((doc) => doc.data())
		console.log(portfolioData)
		setPortfolio(portfolioData)
	}
	return (
		<div className='flex flex-col max-w-[80rem] justify-center place-items-center mx-auto my-8 gap-8'>
			<h1 className='text-6xl font-bold'>My Portfolio </h1>
			<div className='flex max-w-[60ch]'>
				<h3 className='mr-1 font-bold'>Note:</h3>
				<p>
					PortfolioV1-React is the Previous iteration of this site and is
					Deprecated. The Repo is Still Available on my GitHub
				</p>
			</div>
			<article className='mx-auto w-full max-w-[70ch]'>
				<h2 className='text-center text-xl font-bold'>Overview</h2>
				<div className='flex flex-col justify-start w-full gap-4'>
					<p>
						I have a long history of developing applications, albeit unfinished
						personal projects as they may be that I primarily use as reference
						material when learning new technologies. These are not on my
						portfolio due their status of incomplete, or not up to par with my
						own expectations.
					</p>
					<p>
						My most cherrished & challenging project thus far has been through
						Cooledtured, a company specializing in pop-culture merchandise,
						where I was brought on to lead a team of developers in completely
						restructuring the site. The challenge was that I had never worked in
						Remix or Hydrogen prior to this project, but I've grown to love
						both.
					</p>
				</div>
			</article>
			<div className='flex w-full place-content-center justify-center'>
				{renderPortfolio(portfolio)}
			</div>
		</div>
	)
}
