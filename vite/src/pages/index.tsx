import React, { useState } from 'react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

function Home(): JSX.Element {
  const { isLoading, getAccessTokenSilently, error, user, logout } = useAuth0()

  const [users, setUsers] = useState([])
  const fetchJson = async (url: string) => {
    const token = await getAccessTokenSilently({
      audience: `https://${import.meta.env.VITE_APP_AUTH0_DOMAIN}/api/v2/`
    })
    const response = await fetch(url, {
      mode: 'cors',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': ' application/json',
        Authorization: `Bearer ${token}`
      }
    })
    const data = await response.json()
    setUsers(data)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  return (
    <>
      <div className="flex mb-8">
        <div className="mr-4 flex-shrink-0 self-center">
          <img
            className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
            src={user.picture}
          />
        </div>
        <div>
          <h4 className="text-lg font-bold">Hello {user.name}</h4>
        </div>
        <div className="ml-4">
          <button
            type="button"
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      </div>
      <button
        type="button"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        onClick={async () => await fetchJson('http://localhost:8080/')}
      >
        Load Users
      </button>
      <ul role="list" className="divide-y divide-gray-200 border-1 mt-8 px-8">
        {users.map((item) => {
          return (
            <li key={item.name} className="py-4">
              {item.name}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default withAuthenticationRequired(Home, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>
})
