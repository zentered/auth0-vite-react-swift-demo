import 'virtual:windi.css'

import { createRoot, hydrateRoot } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import { Routes } from '@/config'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Auth0Provider
        audience={`https://${import.meta.env.VITE_APP_AUTH0_DOMAIN}/api/v2/`}
        domain={import.meta.env.VITE_APP_AUTH0_DOMAIN!}
        clientId={import.meta.env.VITE_APP_AUTH0_CLIENT_ID!}
        redirectUri={
          typeof window !== 'undefined' ? window.location.origin! : ''
        }
      >
        <Routes />
      </Auth0Provider>
    </BrowserRouter>
  )
}

const app = document.querySelector('#app') as Element
const root = createRoot(app)

if (app.hasChildNodes()) hydrateRoot(app, <App />)
else root.render(<App />)
