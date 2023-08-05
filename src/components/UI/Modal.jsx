import React from 'react'
import { createPortal } from 'react-dom'
import { styled } from 'styled-components'

const Backdrop = ({ onClose }) => {
	return <BackdropContainer onClick={onClose}></BackdropContainer>
}

const BACKDROP_ELEMENT = document.getElementById('backdrop')
const MODAL_ELEMENT = document.getElementById('modal-overlay')

export const Modal = ({ children, onClose }) => {
	return (
		<>
			{createPortal(<Backdrop onClose={onClose} />, BACKDROP_ELEMENT)}
			{createPortal(
				<ModalContainer>{children}</ModalContainer>,
				MODAL_ELEMENT,
			)}
		</>
	)
}

const BackdropContainer = styled('div')`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 20;
	background-color: rgba(0, 0, 0, 0.75);
	backdrop-filter: blur(2px);
`

const ModalContainer = styled('div')`
	position: fixed;
	top: 20vh;
	left: 5%;
	width: 90%;
	background-color: white;
	padding: 1rem;
	border-radius: 14px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	z-index: 30;
	animation: slide-down 300ms ease-out forwards;
	@media (min-width: 768px) {
		width: 40rem;
		left: calc(50% - 20rem);
	}
	@keyframes slide-down {
		from {
			opacity: 0;
			transform: translateY(-3rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
`
