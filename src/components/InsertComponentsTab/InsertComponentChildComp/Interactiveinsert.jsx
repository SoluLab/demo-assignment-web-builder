import React from 'react'
import { INTERACTIVE_SECTION_IMG_1, INTERACTIVE_SECTION_IMG_2, INTERACTIVE_SECTION_IMG_3 } from '../../../Assets/Images'
const Interactiveinsert = () => {
    return (
        <div className='grid_wrapper p-2  '>
            <img className='media_section_img' src={INTERACTIVE_SECTION_IMG_1} alt='default' />
            <img className='media_section_img' src={INTERACTIVE_SECTION_IMG_2} alt='default' />
            <img className='media_section_img' src={INTERACTIVE_SECTION_IMG_3} alt='default' />
        </div>
    )
}
export default Interactiveinsert