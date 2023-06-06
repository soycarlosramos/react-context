import { createContext } from 'react'

const Context = createContext()

const ContextProvider = ({ children }) => {
	const data = {
		user: {
			name: 'Mario'
		}
	}

	return (
		<Context.Provider value={data}>
			{children}
		</Context.Provider>
	)
}

export { ContextProvider }
export default Context
