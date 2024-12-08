import {
	FaFacebook, // Facebook icon
	FaEnvelope, // Email icon
	FaDiscord, // Discord icon
	FaYoutube, // YouTube icon
	FaLinkedin, // LinkedIn icon
} from "react-icons/fa6"

export default function Social() {
	return (
		// Social media links container
		<div
			className='bottom-0 align-middle z-0'
			aria-labelledby='social-media-section-title'
		>
			{/* Title for screen readers */}
			<h2
				id='social-media-section-title'
				className='sr-only'
			>
				Connect with me on social media
			</h2>

			{/* Social media links list */}
			<ul
				className='gap-2 grid grid-cols-6 text-amber-500'
				role='list'
			>
				{/* Email */}
				<li>
					<a
						href='mailto:klowdensolutions@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Send an email to klowdensolutions@gmail.com'
					>
						<FaEnvelope
							className='hover:scale-110 hover:text-blue-500 text-3xl cursor-pointer'
							aria-hidden='true'
						/>
					</a>
				</li>

				{/* Facebook */}
				<li>
					<a
						href='https://www.facebook.com/KristopherLowden'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Visit my Facebook profile'
					>
						<FaFacebook
							className='hover:scale-110 hover:text-blue-500 text-3xl cursor-pointer'
							aria-hidden='true'
						/>
					</a>
				</li>

				{/* LinkedIn */}
				<li>
					<a
						href='https://linkedin.com/in/christopher-lowden-a40ba8140'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Visit my LinkedIn profile'
					>
						<FaLinkedin
							className='hover:scale-110 hover:text-blue-500 text-3xl cursor-pointer'
							aria-hidden='true'
						/>
					</a>
				</li>

				{/* Discord */}
				<li>
					<a
						href='https://discordapp.com/users/192093672446230531'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Connect with me on Discord'
					>
						<FaDiscord
							className='hover:scale-110 hover:text-blue-500 text-3xl cursor-pointer'
							aria-hidden='true'
						/>
					</a>
				</li>

				{/* YouTube */}
				<li>
					<a
						href='https://www.youtube.com/@KreesLowden'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Visit my YouTube channel'
					>
						<FaYoutube
							className='hover:scale-110 hover:text-blue-500 text-3xl cursor-pointer'
							aria-hidden='true'
						/>
					</a>
				</li>

				{/* BlueSky */}
				<li>
					<a
						href='https://bsky.app/profile/kreestoph.bsky.social'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Visit my BlueSky profile'
					>
						<img
							src='/images/Bluesky_Logo.svg'
							alt='BlueSky Logo'
							className='hover:scale-110 hover:cursor-pointer hover:-hue-rotate-[325deg] hover:saturate-200 h-7'
						/>
					</a>
				</li>
			</ul>
		</div>
	)
}
