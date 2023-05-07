import React, { useCallback, useEffect, } from 'react'
import { SideBarList } from '../../Constants'
import { RIGHT_VECTOR } from '../../Assets/Images'
import "./insertcomponent.css"
import useInsertComponent from '../../Context/InserComponent/useInsertComponent'

const InsertComponentsTab = () => {
    const { Selectedid, setSelectedid } = useInsertComponent();
    useEffect(() => {
        let getData;
        getData = setTimeout(() => {
            setSelectedid(Selectedid);
        }, 200);
        return () => clearTimeout(getData);
    }, [Selectedid]);
    const mouseOverCallback = useCallback((id) => {
        setSelectedid(id)
    }, [setSelectedid])
    return (
        <>
            <div className='p-2 position-relative'>
                <div></div>
                {
                    SideBarList?.map((elem) => (
                        <div key={elem.SectionTitle}>
                            <p>{elem.SectionTitle}</p>
                            <ul className='wrapper mb-0 p-0 flex-column'>
                                {
                                    elem.SectionChilds?.map((child) => (
                                        <li key={child.id} onMouseOver={() => mouseOverCallback(child.id)} className='list_wrapper p-2 w-100 '>
                                            <div className='wrapper p-1 justify-content-between'>
                                                <div className='wrapper'>
                                                    <img src={child.icon} alt={child.Label} />
                                                    <p className='mx-2'> {child.Label} </p>
                                                </div>
                                                <div className='wrapper'>
                                                    <img src={RIGHT_VECTOR} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className='divider my-2' />
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default InsertComponentsTab