import ReactDOM from 'react-dom/client'

import { MsalProvider } from '@azure/msal-react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './app'
import { store } from './store'
import { msalIstance } from './lib/msal'
import { ThemeProvider } from './components/theme-provider'

import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MsalProvider instance={msalIstance}>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </MsalProvider>
)
