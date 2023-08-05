import React, { useContext, useEffect, useState } from 'react'
import { BasketIcon } from '../../assets'
import { styled } from 'styled-components'
import { ModalContext } from '../../store/modal-context'
import { CartContext } from '../../store/cart-context'

export const HeaderCartButton = () => {
	const { onOpen } = useContext(ModalContext)
	const { addedMeals } = useContext(CartContext)

	const [bump, setBump] = useState('')

	const addedMealsCount = addedMeals.reduce((acc, meal) => {
		return acc + meal.amount
	}, 0)

	useEffect(() => {
		setBump('bump')
		setTimeout(() => {
			setBump('')
		}, 300)
	}, [addedMealsCount])

	return (
		<StyledButton onClick={onOpen} className={bump}>
			<BasketIcon />
			<span className='bump'>Your cart</span>
			<Badge>{addedMealsCount}</Badge>
		</StyledButton>
	)
}

const Badge = styled('span')`
	background-color: #8a2b06;
	font-weight: 700;
	padding: 4px 20px;
	border-radius: 30px;
	font-size: 20px;
	margin-left: 1rem;
`

const StyledButton = styled('button')`
	cursor: pointer;
	border: none;
	color: white;
	background-color: #5a1f08;
	padding: 0.75rem 2rem;
	border-radius: 30px;
	&:hover,
	&:active {
		background-color: #461805;
	}
	display: flex;
	justify-content: space-around;
	align-items: center;

	&.bump {
		animation: BUMP 300ms ease-out;
	}

	&:hover > ${Badge} {
		background-color: #671f03;
		animation: BUMP 300ms ease-out;
	}
	& > svg {
		margin-right: 0.5rem;
	}
	& > .bump {
		font-size: 1rem;
		font-weight: 600;
	}

	@keyframes BUMP {
		0% {
			transform: scale(1);
		}
		10% {
			transform: scale(0.9);
		}
		30% {
			transform: scale(1.1);
		}
		50% {
			transform: scale(1.15);
		}
		100% {
			transform: scale(1);
		}
	}
`
