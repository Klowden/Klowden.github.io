import {
	FaFacebook,
	FaEnvelope,
	FaDiscord,
	FaYoutube,
	FaLinkedin,
} from "react-icons/fa6"

export default function Social() {
	return (
		<div className='bottom-0 align-middle z-0'>
			<ul className='gap-2 grid grid-cols-6 text-amber-500'>
				<li>
					<a
						href='mailto:klowdensolutions@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaEnvelope className='hover:scale-110 hover:text-blue-500 text-3xl cursor-pointer' />
					</a>
				</li>
				<li>
					<a
						href='https://www.facebook.com/KristopherLowden'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaFacebook className='hover:scale-110 hover:text-blue-500 text-3xl cursor-pointer' />
					</a>
				</li>
				<li>
					<a
						href='https://linkedin.com/in/christopher-lowden-a40ba8140'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaLinkedin className='hover:scale-110 hover:text-blue-500 text-3xl cursor-pointer' />
					</a>
				</li>
				<li>
					<a
						href='https://discordapp.com/users/192093672446230531'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaDiscord className='hover:scale-110 hover:text-blue-500 text-3xl cursor-pointer' />
					</a>
				</li>
				<li>
					<a
						href='https://www.youtube.com/@KreesLowden'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaYoutube className='hover:scale-110 hover:text-blue-500 text-3xl cursor-pointer' />
					</a>
				</li>
				<li>
					<a
						href='https://bsky.app/profile/kreestoph.bsky.social'
						target='_blank'
						rel='noopener noreferrer'
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
