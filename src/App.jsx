import { useState } from 'react'
import Loader from './Components/Loader'

const App = () => {

	const [user, setUser] = useState({})
	const [loader, setLoader] = useState(false)

	const fetchUser = async () => {
		try {
			setLoader(!loader)
			const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
			const data = await response.json()
			setUser(data)
		} catch (error) {
			console.error(error)
		} finally {
			setTimeout(() => {
				setLoader(false)
			}, 2000)
		}
	}

	return (
		<main>
			<div className="container mx-auto py-4">
				<h1 className='text-4xl text-center font-semibold text-zinc-500 mb-4'>React Contex API</h1>
				<section className='py-4 flex gap-4 justify-evenly'>
				<Loader />
					<article>
						{
							loader
								? <Loader />
								: <pre>{JSON.stringify(user, null, 2)}</pre>
						}
					</article>
					<article>
						<button
							className='py-2 px-4 shadow bg-orange-500 border border-orange-500 rounded text-white active:scale-95 focus:outline-none'
							onClick={fetchUser}
						>
							Update
						</button>
					</article>
				</section>
			</div>
		</main>
	)
}

export default App
