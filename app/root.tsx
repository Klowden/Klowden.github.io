import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react"
import stylesheet from "~/styles/tailwind.css?url"
import styles from "~/styles/app.css?url"
import Header from "./components/Header"
import Footer from "./components/Footer"

export const links = () => [
	{ rel: "stylesheet", href: stylesheet },
	{ rel: "stylesheet", href: styles },
]

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<Meta />
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
					rel='stylesheet'
				></link>
				<Links />
			</head>
			<body className='flex flex-col min-h-screen font-Montserrat'>
				<div className='sticky top-0 z-[100]'>
					<Header />
				</div>
				<div className='flex-1 bg-gray-600'>{children}</div>
				<div>
					<Footer />
				</div>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	return <Outlet />
}
