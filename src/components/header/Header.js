import React from 'react'
import { HeaderContainer } from './header.style'
import Picture from '../picture/Picture'
import Paragraph from '../paragraph/Paragraph'

function Header(props) {
    return (
        <HeaderContainer {...props} className='flex items-center' >
            <Picture src="/images/check.png" alt="check-box icon" />
            <Paragraph className="ml-4" text="To Do’s" fontSize={87} />
        </HeaderContainer>
    )
}

export default Header