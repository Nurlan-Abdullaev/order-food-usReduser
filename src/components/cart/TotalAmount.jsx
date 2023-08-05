import React from 'react'
import { styled } from 'styled-components'

export const TotalAmount = ({ totalAmount = 0 }) => {
	return (
		<Container>
			<h3>Total Amount</h3>
			<b>${Number(totalAmount).toFixed(2)}</b>
		</Container>
	)
}

const Container = styled('div')`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 28px;
	& h3 {
		font-size: 20px;
		font-weight: 700;
		color: #222222;
	}
	& b {
		font-size: 22px;
		font-weight: 600;
		color: #8a2b06;
	}
`
