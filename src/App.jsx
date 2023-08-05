import { useContext } from 'react'
import { Cart } from './components/cart/Cart'
import { Header } from './components/header/Header'
import { MealsSummary } from './components/meals-summary/MealsSummary'
import { Meals } from './components/meals/Meals'
import { ModalContext } from './store/modal-context'

function App() {
	const { isModalOpen, onClose } = useContext(ModalContext)
	return (
		<>
			<Header />
			<MealsSummary />
			<Meals />
			{isModalOpen && <Cart onClose={onClose} />}
		</>
	)
}

export default App
