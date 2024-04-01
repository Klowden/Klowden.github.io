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
		<div className='flex flex-col max-w-[80rem] justify-center place-items-center mx-auto my-8 gap-12'>
			<h1 className='text-6xl font-bold'>My Portfolio </h1>
			<div className='flex w-full place-content-center justify-center'>
				{renderPortfolio(portfolio)}
			</div>
		</div>
	)
}
