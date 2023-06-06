import { createContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {

	const [user, setUser] = useState({})
	const handleUser = () => setUser({ name: 'Carlos' })

	const data = {
		user,
		handleUser
	}

	return (
		<UserContext.Provider value={data}>
			{children}
		</UserContext.Provider>
	)
}

export { UserProvider }
export default UserContext
