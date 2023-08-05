import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ModalProvider } from './store/modal-context'
import { CartProvider } from './store/cart-context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<CartProvider>
			<ModalProvider>
				<App />
			</ModalProvider>
		</CartProvider>
	</React.StrictMode>,
)
