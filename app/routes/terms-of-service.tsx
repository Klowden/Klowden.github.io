export default function TermsOfService() {
	return (
		<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-4 sm:my-8 py-8 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-lg border border-gray-700 text-gray-300'>
			{/* Header Section */}
			<header className='text-center mb-8'>
				<h1 className='text-4xl sm:text-5xl font-extrabold text-amber-500'>
					Terms of Service
				</h1>
				<p className='text-lg text-gray-400 mt-4 leading-relaxed'>
					Please read these terms of service carefully before engaging with my
					services.
				</p>
			</header>

			{/* Terms Content Section */}
			<section className='space-y-6'>
				{/* Services */}
				<div>
					<h2 className='text-2xl font-bold text-purple-500 mb-4'>
						1. Services
					</h2>
					<p>
						I provide freelance web development, software engineering, and IT
						support services. The scope of work will be defined and agreed upon
						prior to the commencement of the project. Any additional work
						outside the agreed scope will require a separate agreement.
					</p>
				</div>

				{/* Client Responsibilities */}
				<div>
					<h2 className='text-2xl font-bold text-green-500 mb-4'>
						2. Client Responsibilities
					</h2>
					<ul className='list-disc list-inside space-y-2'>
						<li>
							Provide accurate and complete information necessary for project
							completion.
						</li>
						<li>
							Respond to communications in a timely manner to avoid project
							delays.
						</li>
						<li>
							Ensure all provided assets (e.g., images, text) comply with
							intellectual property laws.
						</li>
					</ul>
				</div>

				{/* Payments */}
				<div>
					<h2 className='text-2xl font-bold text-blue-500 mb-4'>3. Payments</h2>
					<ul className='list-disc list-inside space-y-2'>
						<li>
							Payment terms will be outlined in the project agreement and may
							include milestones or upfront deposits.
						</li>
						<li>
							Payments are non-refundable unless explicitly stated in the
							project agreement.
						</li>
						<li>
							Failure to pay within the agreed timeline may result in project
							pauses or termination.
						</li>
					</ul>
				</div>

				{/* Revisions and Changes */}
				<div>
					<h2 className='text-2xl font-bold text-pink-500 mb-4'>
						4. Revisions and Changes
					</h2>
					<p>
						Reasonable revisions will be provided as outlined in the project
						agreement. Additional revisions or significant changes may incur
						extra charges.
					</p>
				</div>

				{/* Confidentiality */}
				<div>
					<h2 className='text-2xl font-bold text-amber-500 mb-4'>
						5. Confidentiality
					</h2>
					<p>
						I respect the confidentiality of your project and business. Any
						information shared during the course of the project will not be
						disclosed to third parties without prior consent, except as required
						by law.
					</p>
				</div>

				{/* Intellectual Property */}
				<div>
					<h2 className='text-2xl font-bold text-purple-500 mb-4'>
						6. Intellectual Property
					</h2>
					<ul className='list-disc list-inside space-y-2'>
						<li>
							Upon full payment, ownership of the deliverables will transfer to
							the client unless otherwise specified.
						</li>
						<li>
							I retain the right to showcase completed work in my portfolio
							unless otherwise agreed upon in writing.
						</li>
					</ul>
				</div>

				{/* Limitation of Liability */}
				<div>
					<h2 className='text-2xl font-bold text-red-500 mb-4'>
						7. Limitation of Liability
					</h2>
					<p>
						I am not liable for any indirect, incidental, or consequential
						damages arising from the use or inability to use the deliverables.
					</p>
				</div>

				{/* Termination */}
				<div>
					<h2 className='text-2xl font-bold text-green-500 mb-4'>
						8. Termination
					</h2>
					<p>
						Either party may terminate the agreement with prior notice. Any
						completed work up to the termination date will be billed
						accordingly.
					</p>
				</div>

				{/* Contact Information */}
				<div>
					<h2 className='text-2xl font-bold text-amber-500 mb-4'>
						9. Contact Information
					</h2>
					<p>
						For any questions or concerns regarding these terms, please contact
						me at:
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
			<div className='w-full h-1 mt-12 bg-gradient-to-r from-purple-600 via-amber-500 to-green-600 rounded-full'></div>
		</div>
	)
}
