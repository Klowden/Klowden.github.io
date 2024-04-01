import ContactForm from "~/components/ContactForm"

export default function Contact() {
	return (
		<div className=' flex flex-col gap-8 my-8 mx-4'>
			<h1 className='text-5xl font-bold'>Contact Me</h1>
			<p className='max-w-[60ch]'>
				<strong>As a full-stack web developer</strong>, I'm actively seeking
				both employment and freelance opportunities; particularly those that
				involve challenging and large-scale projects. Should you have any
				inquiries or require my expertise, please don't hesitate to reach out
				via my provided contact details or utilize the form below for direct
				communication.
			</p>
			<p className='font-medium'>I'll be sure to send a prompt response!</p>
			<ContactForm />
			<div className='flex flex-col'>
				<h3 className='font-semibold text-xl'>Christopher Lowden</h3>
				<h4 className='italic font-medium text-lg'>FullStack Web Developer</h4>
				<a
					href='https://www.google.com/maps/place/Vienna,+WV/@39.3223107,-81.5525149,14z/data=!3m1!4b1!4m6!3m5!1s0x8849b53735c6f761:0x290a19e3a152c0e!8m2!3d39.3270191!4d-81.5484578!16zL20vMDEwejVf?entry=ttu'
					target='_blank'
					rel='noreferrer'
					className=''
				>
					Vienna, WV, 26105
				</a>

				<a
					href='mailto:klowdensolutions@gmail.com'
					className='text-blue-700 hover:text-sky-800 text-base'
				>
					klowdensolutions@gmail.com
				</a>
			</div>
		</div>
	)
}
