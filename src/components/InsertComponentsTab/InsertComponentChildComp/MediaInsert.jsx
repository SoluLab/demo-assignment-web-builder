import React from 'react'
import { MEDIA_SECTION_ANIMATION_DOLOTTIE, MEDIA_SECTION_ANIMATION_LOTTIE, MEDIA_SECTION_AUDIO_MP3, MEDIA_SECTION_AUDIO_POD, MEDIA_SECTION_AUDIO_SPOT, MEDIA_SECTION_IMAGE_GIF, MEDIA_SECTION_IMAGE_IMG, MEDIA_SECTION_VIDEO_VID, MEDIA_SECTION_VIDEO_YT } from '../../../Assets/Images'

const MediaInsert = () => {
    return (
        <div className='w-100 '>
            <p className='mb-0 section_label'> Image </p>
            <div className='grid_wrapper p-2 '>
                <img className='media_section_img insert_image_element' src={MEDIA_SECTION_IMAGE_IMG} alt='default' />
                <img className='media_section_img' src={MEDIA_SECTION_IMAGE_GIF} alt='default' />
            </div>
            <p className='mb-0 my-2 section_label'> Video </p>
            <div className='grid_wrapper p-2  '>
                <img className='media_section_img' src={MEDIA_SECTION_VIDEO_VID} alt='default' />
                <img className='media_section_img' src={MEDIA_SECTION_VIDEO_YT} alt='default' />
            </div>
            <p className='mb-0 my-2 section_label'> Animation </p>
            <div className='grid_wrapper p-2  '>
                <img className='media_section_img' src={MEDIA_SECTION_ANIMATION_DOLOTTIE} alt='default' />
                <img className='media_section_img' src={MEDIA_SECTION_ANIMATION_LOTTIE} alt='default' />
            </div>
            <p className='mb-0 my-2 section_label'> Music </p>
            <div className='grid_wrapper p-2  '>
                <img className='media_section_img' src={MEDIA_SECTION_AUDIO_MP3} alt='default' />
                <img className='media_section_img' src={MEDIA_SECTION_AUDIO_SPOT} alt='default' />
                <img className='media_section_img' src={MEDIA_SECTION_AUDIO_POD} alt='default' />
            </div>
        </div>
    )
}

export default MediaInsert