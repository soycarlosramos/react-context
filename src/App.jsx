import { useContext } from 'react'
import UserContext from './context/UserContext'

const App = () => {

	const { user, handleUser } = useContext(UserContext)

	return (
		<main>
			<div className="container mx-auto py-4">
				<h1 className='text-4xl text-center font-semibold text-zinc-500 mb-4'>React Contex API</h1>
				<section className='py-4 flex gap-4 justify-evenly'>
					<article>
						<pre>{JSON.stringify({ user }, null, 2)}</pre>
					</article>
					<article>
						<button
							className='py-2 px-4 shadow bg-orange-500 border border-orange-500 rounded text-white active:scale-95 focus:outline-none'
							onClick={handleUser}
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
