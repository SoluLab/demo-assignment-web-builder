import React from 'react'
import { useSelector } from 'react-redux'
import './commonComponent.css'

const SectionInsert = () => {
    const { pageStore } = useSelector((state) => state)
	const { pages } = pageStore
    return (
        <div className='w-100 '>
            {pages.map(page => {
                return page.content && (
                <div>
                    <div dangerouslySetInnerHTML={{__html: page.content['mycustom-html']}}/>
                    <style>{page.content['mycustom-css']}</style>
                    <hr />
                </div>)})}
        </div>
    )
}
export default SectionInsert