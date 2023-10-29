import React from 'react'
import { CancelContainer, StyledPopupCard, StyledPopupCardContainer } from './popupCard.style'
import Picture from '../picture/Picture'

function PopupCard(props) {
    return (
        <StyledPopupCardContainer {...props}>
            <StyledPopupCard {...props}>
                <CancelContainer onClick={props.handleOpenToggle} >
                    <Picture src='/images/cross-circle.png' alt='cancel icon' height={24} width={24} />
                </CancelContainer>
                {props.component}
            </StyledPopupCard>
        </StyledPopupCardContainer>
    )
}

export default PopupCard