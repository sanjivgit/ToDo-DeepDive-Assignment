import React from 'react'
import { BottonNavigationContainer, StyledItem } from './bottomNavigation.style'
import Picture from '../picture/Picture'

function BottomNavigation(props) {
    return (
        <BottonNavigationContainer {...props} className='flex items-center' >
            <StyledItem width={30} height={30} className='flex justify-center items-center' >
                1
            </StyledItem>
            <StyledItem width={30} height={30} color='#000' backgroundColor="#FFF" className='flex justify-center items-center' >
                2
            </StyledItem>
            <StyledItem width={30} height={30} color='#000' backgroundColor="#FFF" className='flex justify-center items-center' >
                3
            </StyledItem>
            <Picture src="/images/next.png" width={13} height={11} alt="next-icon" />
        </BottonNavigationContainer>
    )
}

export default BottomNavigation