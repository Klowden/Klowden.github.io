export default function PrivacyPolicy() {
	return (
		<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-4 sm:my-8 py-8 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-lg border border-gray-700 text-gray-300'>
			{/* Header Section */}
			<header className='text-center mb-8'>
				<h1 className='text-4xl sm:text-5xl font-extrabold text-amber-500'>
					Privacy Policy
				</h1>
				<p className='text-lg text-gray-400 mt-4 leading-relaxed'>
					Your privacy is important. This page explains how your information is
					collected, used, and protected when working with me.
				</p>
			</header>

			{/* Policy Content Section */}
			<section className='space-y-6'>
				{/* Information Collection */}
				<div>
					<h2 className='text-2xl font-bold text-purple-500 mb-4'>
						Information I Collect
					</h2>
					<p>
						As an individual contractor, I collect only the information
						necessary to provide services effectively. This includes:
					</p>
					<ul className='list-disc list-inside space-y-2 mt-2'>
						<li>
							<strong>Contact Information:</strong> Such as your name, email
							address, and phone number.
						</li>
						<li>
							<strong>Project Details:</strong> Information about your project
							or business needs to tailor my services.
						</li>
						<li>
							<strong>Billing Information:</strong> For invoicing and payment
							purposes, if applicable.
						</li>
					</ul>
				</div>

				{/* How Information is Used */}
				<div>
					<h2 className='text-2xl font-bold text-green-500 mb-4'>
						How I Use Your Information
					</h2>
					<p>Your information is used solely to:</p>
					<ul className='list-disc list-inside space-y-2 mt-2'>
						<li>Communicate about your project or inquiries.</li>
						<li>Provide services and deliverables as agreed upon.</li>
						<li>Generate invoices or payment requests.</li>
						<li>Ensure compliance with legal and regulatory requirements.</li>
					</ul>
				</div>

				{/* Information Sharing */}
				<div>
					<h2 className='text-2xl font-bold text-blue-500 mb-4'>
						Information Sharing
					</h2>
					<p>
						I do not sell, rent, or share your personal information with third
						parties unless:
					</p>
					<ul className='list-disc list-inside space-y-2 mt-2'>
						<li>It is required to fulfill a service you requested.</li>
						<li>
							There is a legal obligation to disclose the information (e.g.,
							court order).
						</li>
						<li>
							It is necessary to protect the rights, property, or safety of
							myself or others.
						</li>
					</ul>
				</div>

				{/* Data Security */}
				<div>
					<h2 className='text-2xl font-bold text-pink-500 mb-4'>
						Data Security
					</h2>
					<p>
						I take reasonable steps to ensure your information is stored and
						protected securely. However, no method of transmission over the
						internet is 100% secure, so I cannot guarantee absolute security.
					</p>
				</div>

				{/* Your Rights */}
				<div>
					<h2 className='text-2xl font-bold text-amber-500 mb-4'>
						Your Rights
					</h2>
					<p>You have the right to:</p>
					<ul className='list-disc list-inside space-y-2 mt-2'>
						<li>
							Request access to the personal information I have about you.
						</li>
						<li>
							Request corrections to inaccurate or incomplete information.
						</li>
						<li>
							Request deletion of your information where applicable by law.
						</li>
					</ul>
				</div>

				{/* Contact Information */}
				<div>
					<h2 className='text-2xl font-bold text-red-500 mb-4'>Contact Me</h2>
					<p>
						If you have any questions or concerns about this Privacy Policy,
						please feel free to contact me at:
					</p>
					<address className='mt-4 not-italic'>
						<strong>Email:</strong>{" "}
						<a
							href='mailto:KlowdenSolutions@gmail.com'
							className='text-blue-400 hover:underline'
						>
							KlowdenSolutions@gmail.com
						</a>
					</address>
				</div>
			</section>

			{/* Decorative Divider */}
			<div className='w-full h-1 mt-12 bg-gradient-to-r from-purple-600 via-amber-500 to-pink-600 rounded-full'></div>
		</div>
	)
}
