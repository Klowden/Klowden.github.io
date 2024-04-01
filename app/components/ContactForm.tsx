import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"

const ContactForm = () => {
	const formRef = useRef<HTMLFormElement>(null)
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phoneNumber, setPhoneNumber] = useState("")
	const [message, setMessage] = useState("")
	const [showSendErrorPopup, setShowSendErrorPopup] = useState(false)
	const [showSendSuccessPopup, setShowSendSuccessPopup] = useState(false)

	const isValidEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!isValidEmail(email)) {
			console.error("Invalid email address")
			setShowSendErrorPopup(true)
			return
		}

		if (formRef.current) {
			emailjs
				.sendForm(
					import.meta.env.VITE_EMAILJS_SERVICE_ID,
					import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
					formRef.current,
					import.meta.env.VITE_EMAILJS_PUBLIC_KEY
				)
				.then(
					() => {
						console.log("Email sent successfully")
						setShowSendSuccessPopup(true) // Show success popup
						setName("") // Reset form fields
						setEmail("")
						setPhoneNumber("")
						setMessage("")
						setTimeout(() => {
							setShowSendSuccessPopup(false) // Automatically hide success popup after 2 seconds
						}, 2000)
					},
					(error) => {
						console.error("Failed to send email:", error)
						setShowSendErrorPopup(true) // Show error popup
					}
				)
		}
	}
	return (
		<div>
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className='flex flex-col gap-4  max-w-md bg-gray-900 border-2 border-amber-500 shadow-md rounded-lg px-4 pb-4 pt-2'
			>
				<h2 className='text-center w-full text-5xl font-bold text-gray-100 py-2 rounded-md -mb-2 border-b-4 border-b-blue-900'>
					Reach out!
				</h2>
				<div className='flex flex-col w-full gap-6 bg-gray-800 p-4 rounded-lg'>
					<div className=''>
						<label
							htmlFor='user_name'
							className='block text-sm font-medium text-gray-100 mb-2'
						>
							Name
						</label>
						<input
							type='text'
							name='user_name'
							id='user_name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder='Your Name'
							required
							className='mt-1 p-2 w-full border rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500'
						/>
					</div>
					<div className=''>
						<label
							htmlFor='user_phone'
							className='block text-sm font-medium text-gray-100 mb-2'
						>
							Phone Number
						</label>
						<input
							type='tel'
							name='user_phone'
							id='user_phone'
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							placeholder='(xxx)xxx-xxxx'
							className='mt-1 p-2 w-full border rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500'
						/>
					</div>
					<div className=''>
						<label
							htmlFor='user_email'
							className='block text-sm font-medium text-gray-100 mb-2'
						>
							Email
						</label>
						<input
							type='email'
							name='user_email'
							id='user_email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Your Email'
							required
							className='mt-1 p-2 w-full border rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500'
						/>
					</div>
					<div className=''>
						<label
							htmlFor='message'
							className='block text-sm font-medium text-gray-100 mb-2'
						>
							Message
						</label>
						<textarea
							name='message'
							id='message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder='Write your message here...'
							required
							className='mt-1 p-2 w-full border rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-32 resize-none'
						></textarea>
					</div>
				</div>
				<button
					type='submit'
					className='glow-effect-orange bg-blue-950 hover:bg-green-900 hover:text-gray-100 text-amber-500 px-4 py-2 rounded-md font-semibold self-start shadow-sm hover:shadow-lg transition-all duration-150 ease-in-out'
				>
					Send the Email!
				</button>
			</form>

			{showSendSuccessPopup && (
				<div className='flex gap-2'>
					<p>Email sent successfully!</p>
					<button
						className='text-xl'
						onClick={() => setShowSendSuccessPopup(false)}
					>
						<FaCheckCircle className='text-emerald-800' />
					</button>
				</div>
			)}
			{showSendErrorPopup && (
				<div className='flex gap-2'>
					<p>Failed to send email. Please try again later.</p>
					<button
						className='text-xl'
						onClick={() => setShowSendErrorPopup(false)}
					>
						<FaTimesCircle className='text-red-900' />
					</button>
				</div>
			)}
		</div>
	)
}

export default ContactForm
