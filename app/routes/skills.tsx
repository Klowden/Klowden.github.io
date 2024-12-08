export default function Skills() {
	return (
		<div
			className='flex flex-col items-center justify-self-center max-w-[80rem] sm:mx-4 md:mx-6 px-4 sm:px-6 lg:px-8 min-h-screen sm:min-h-0 my-0 sm:my-4 md:my-8 py-8 bg-gradient-to-b from-gray-900 to-gray-800 sm:rounded-lg shadow-lg sm:border border-gray-700'
			role='main'
			aria-labelledby='skills-title'
		>
			{/* Header Section */}
			<header
				className='text-center mb-4 sm:mb-12'
				role='banner'
				aria-labelledby='skills-title'
			>
				<h1
					id='skills-title'
					className='text-5xl sm:text-6xl font-extrabold text-amber-500 relative mb-8'
				>
					Skills
					{/* Decorative underline */}
					<span
						aria-hidden='true'
						className='absolute inset-x-0 bottom-[-0.5rem] h-1 w-20 mx-auto bg-gradient-to-r from-purple-600 via-amber-500 to-pink-600 rounded-full'
					></span>
				</h1>
				<p
					className='text-lg text-gray-400 leading-relaxed'
					aria-describedby='skills-description'
				>
					A showcase of my technical expertise, tools, and platforms that drive
					my projects.
				</p>
			</header>

			{/* Skills Grid Section */}
			<section
				className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
				aria-labelledby='skills-grid'
			>
				{/* Frontend Development */}
				<div
					className='bg-gray-950 p-6 rounded-lg shadow-md border border-gray-800'
					role='region'
					aria-labelledby='frontend-skills-title'
				>
					<h2
						id='frontend-skills-title'
						className='text-2xl font-bold text-purple-500 mb-4'
					>
						Frontend Development & UI/UX
					</h2>
					<ul className='list-disc list-inside space-y-2 text-gray-300'>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>React.JS</li>
						<li>Vue.js</li>
						<li>Remix-Run</li>
						<li>Bootstrap</li>
						<li>Tailwind</li>
						<li>Shopify Hydrogen</li>
						<li>Shopify Liquid</li>
						<li>WordPress</li>
					</ul>
				</div>

				{/* Backend & Database Management */}
				<div
					className='bg-gray-950 p-6 rounded-lg shadow-md border border-gray-800'
					role='region'
					aria-labelledby='backend-skills-title'
				>
					<h2
						id='backend-skills-title'
						className='text-2xl font-bold text-green-500 mb-4'
					>
						Backend & Database Management
					</h2>
					<ul className='list-disc list-inside space-y-2 text-gray-300'>
						<li>Node.js</li>
						<li>Django</li>
						<li>PHP</li>
						<li>SQL</li>
						<li>NoSQL</li>
						<li>RESTful APIs</li>
						<li>GraphQL</li>
						<li>Database Optimization</li>
						<li>MySQL</li>
					</ul>
				</div>

				{/* IT Support & Systems Administration */}
				<div
					className='bg-gray-950 p-6 rounded-lg shadow-md border border-gray-800'
					role='region'
					aria-labelledby='it-skills-title'
				>
					<h2
						id='it-skills-title'
						className='text-2xl font-bold text-blue-500 mb-4'
					>
						IT Support & Systems Administration
					</h2>
					<ul className='list-disc list-inside space-y-2 text-gray-300'>
						<li>Systems Integration</li>
						<li>Troubleshooting</li>
						<li>IT Documentation</li>
						<li>Technical Support</li>
						<li>EHR Systems</li>
						<li>CRM Software</li>
						<li>Computer Hardware Diagnostics & Repair</li>
					</ul>
				</div>

				{/* Other Programming & Scripting */}
				<div
					className='bg-gray-950 p-6 rounded-lg shadow-md border border-gray-800'
					role='region'
					aria-labelledby='other-skills-title'
				>
					<h2
						id='other-skills-title'
						className='text-2xl font-bold text-pink-500 mb-4'
					>
						Other Programming & Scripting
					</h2>
					<ul className='list-disc list-inside space-y-2 text-gray-300'>
						<li>Java</li>
						<li>Python</li>
						<li>Selenium</li>
						<li>Godot</li>
						<li>PowerShell</li>
						<li>Bash</li>
					</ul>
				</div>

				{/* Data & Process Automation */}
				<div
					className='bg-gray-950 p-6 rounded-lg shadow-md border border-gray-800'
					role='region'
					aria-labelledby='data-skills-title'
				>
					<h2
						id='data-skills-title'
						className='text-2xl font-bold text-amber-500 mb-4'
					>
						Data & Process Automation
					</h2>
					<ul className='list-disc list-inside space-y-2 text-gray-300'>
						<li>Data Visualization (Excel, Power BI)</li>
						<li>Workflow Automation</li>
						<li>Process Optimization</li>
						<li>Data Analytics</li>
						<li>Pivot Tables</li>
					</ul>
				</div>

				{/* Collaboration & Project Management */}
				<div
					className='bg-gray-950 p-6 rounded-lg shadow-md border border-gray-800'
					role='region'
					aria-labelledby='collaboration-skills-title'
				>
					<h2
						id='collaboration-skills-title'
						className='text-2xl font-bold text-red-500 mb-4'
					>
						Collaboration & Project Management
					</h2>
					<ul className='list-disc list-inside space-y-2 text-gray-300'>
						<li>Git</li>
						<li>GitHub</li>
						<li>Version Control</li>
						<li>SharePoint Management</li>
						<li>Team Leadership</li>
						<li>Cross-functional Collaboration</li>
						<li>Process Documentation</li>
						<li>Project Management</li>
					</ul>
				</div>
			</section>
		</div>
	)
}
