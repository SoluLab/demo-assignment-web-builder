import React from 'react'
import { SECTION_DUMMY_1, SECTION_DUMMY_2, SECTION_DUMMY_3 } from '../../../Assets/Images'
import './commonComponent.css'

const SectionInsert = () => {
    return (
        <div className='w-100 '>
            <div className='wrapper p-2'>
                <img className='section_img' src={SECTION_DUMMY_1} alt='default' />
            </div> <div className='wrapper p-2'>
                <img className='section_img' src={SECTION_DUMMY_3} alt='default' />
            </div> <div className='wrapper p-2'>
                <img className='section_img' src={SECTION_DUMMY_3} alt='default' />
            </div> <div className='wrapper p-2'>
                <img className='section_img' src={SECTION_DUMMY_1} alt='default' />
            </div> <div className='wrapper p-2'>
                <img className='section_img' src={SECTION_DUMMY_2} alt='default' />
            </div> <div className='wrapper p-2'>
                <img className='section_img' src={SECTION_DUMMY_3} alt='default' />
            </div>
        </div>
    )
}
export default SectionInsert