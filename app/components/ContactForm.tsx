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

	// Phone number formatting function
	const formatPhoneNumber = (value: string) => {
		// Remove all non-digit characters
		const cleaned = value.replace(/\D/g, "")
		const match = cleaned.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/)
		if (match) {
			const formatted = [
				match[1] && `(${match[1]})`,
				match[2] && `${match[2]}`,
				match[3] && `${match[3]}`,
			]
				.filter(Boolean)
				.join(" ")
				.replace(/\s{2,}/g, " ")
			return formatted.trim().replace(/(\)\s{0,})/g, ") ")
		}
		return value
	}

	const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPhoneNumber(formatPhoneNumber(e.target.value))
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!isValidEmail(email)) {
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
						setShowSendSuccessPopup(true)
						setName("")
						setEmail("")
						setPhoneNumber("")
						setMessage("")
						setTimeout(() => {
							setShowSendSuccessPopup(false)
						}, 3000)
					},
					() => {
						setShowSendErrorPopup(true)
					}
				)
		}
	}

	return (
		<div className='flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-4'>
			{/* Form container */}
			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className='w-full max-w-2xl bg-gray-950 border-2 border-amber-500 shadow-md rounded-lg p-6'
			>
				{/* Header */}
				<h2 className='text-center text-3xl font-bold text-amber-500 mb-4'>
					Get in Touch
				</h2>

				{/* Form fields */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					{/* Name Field */}
					<div>
						<label
							htmlFor='user_name'
							className='block text-sm font-medium text-gray-300 mb-1'
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
							className='w-full p-2 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500'
						/>
					</div>

					{/* Phone Field */}
					<div>
						<label
							htmlFor='user_phone'
							className='block text-sm font-medium text-gray-300 mb-1'
						>
							Phone Number
						</label>
						<input
							type='tel'
							name='user_phone'
							id='user_phone'
							value={phoneNumber}
							onChange={handlePhoneNumberChange}
							placeholder='(xxx) xxx-xxxx'
							className='w-full p-2 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500'
						/>
					</div>

					{/* Email Field */}
					<div className='md:col-span-2'>
						<label
							htmlFor='user_email'
							className='block text-sm font-medium text-gray-300 mb-1'
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
							className='w-full p-2 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500'
						/>
					</div>

					{/* Message Field */}
					<div className='md:col-span-2'>
						<label
							htmlFor='message'
							className='block text-sm font-medium text-gray-300 mb-1'
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
							className='w-full p-2 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none h-32'
						></textarea>
					</div>
				</div>

				{/* Submit Button */}
				<button
					type='submit'
					className='w-full mt-4 py-2 text-lg font-semibold text-gray-900 bg-amber-500 hover:bg-amber-600 rounded-lg shadow-md transition-all duration-150 ease-in-out glow-effect-orange active:scale-95'
				>
					Send Message
				</button>
			</form>

			{/* Success Popup */}
			{showSendSuccessPopup && (
				<div className='fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-lg shadow-md flex items-center gap-2'>
					<FaCheckCircle className='text-xl' />
					<span>Message sent successfully!</span>
				</div>
			)}

			{/* Error Popup */}
			{showSendErrorPopup && (
				<div className='fixed bottom-4 right-4 bg-red-600 text-white p-3 rounded-lg shadow-md flex items-center gap-2'>
					<FaTimesCircle className='text-xl' />
					<span>Failed to send message. Please try again.</span>
				</div>
			)}
		</div>
	)
}

export default ContactForm
