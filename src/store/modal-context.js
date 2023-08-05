import React, { useState } from 'react'

export const ModalContext = React.createContext({
	isModalOpen: false,
	onClose: () => {},
	onOpen: () => {},
})

export const ModalProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const openModalHandler = () => setIsOpen(true)
	const closeModalHandler = () => setIsOpen(false)

	return (
		<ModalContext.Provider
			value={{
				isModalOpen: isOpen,
				onClose: closeModalHandler,
				onOpen: openModalHandler,
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}
