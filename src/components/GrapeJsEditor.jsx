import React, { useEffect, useState } from 'react'
import RightSideBar from './RightSideBar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_HOST } from '../api_utils'
import geditorConfig from '../api_utils/geditor_config'
import useInsertComponent from '../Context/InserComponent/useInsertComponent'

const GrapeJsEditor = () => {
    const { SelectedTab, setSelectedTab } = useInsertComponent()
    const [editor, setEditor] = useState(null)
    const [assets, setAssets] = useState([])
    const { pageId } = useParams()
    useEffect(() => {
        async function getAllAssets() {
            try {
                const response = await axios.get(`${API_HOST}assets/`)
                setAssets(response.data)
            } catch (error) {
                setAssets(error.message)
            }
        }
        getAllAssets()
    }, [])

    useEffect(() => {
        const editor = geditorConfig(assets, pageId)
        setEditor(editor)
    }, [pageId, assets, SelectedTab])

    return (
        <div
            className="main-content position-relative " style={{ flex: 3 }}
            id="main-content"

        >
            <div className="row" >
                <div className="col-9" >
                    <div id="editor"
                    ></div>
                </div>
                <div className="col-3 rightsidebar">
                    <div>
                        <RightSideBar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(GrapeJsEditor)