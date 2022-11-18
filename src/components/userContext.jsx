import { createContext, useMemo, useContext, useState, useCallback } from 'react'

const UserContext = createContext({ email: '', setUser: () => {}})

export const useUserContext = () => {
  return useContext(UserContext)
}

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const local = localStorage.getItem('user')
      return JSON.parse(local)
    } catch (e) {
      return {}
    }
  })

  const handleSetUser = useCallback((user) => {
    const userString = JSON.stringify(user)
    localStorage.setItem('user', userString)
    setUser(user)
  }, [])

  const value = useMemo(
    () => ({ user , setUser: handleSetUser }),
    [user, handleSetUser]
  )

  return (
    <UserContext.Provider value={value}>
      { children }
    </UserContext.Provider>
  )
}