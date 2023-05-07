import React from 'react'
import "./insertcomponent.css"
import useInsertComponent from '../../Context/InserComponent/useInsertComponent';
import NavigationInsert from './InsertComponentChildComp/NavigationInsert';
import PagesInsert from './InsertComponentChildComp/PagesInsert';
import SectionInsert from './InsertComponentChildComp/SectionInsert';
import ConytentfieldInsert from './InsertComponentChildComp/ConytentfieldInsert';
import MediaInsert from './InsertComponentChildComp/MediaInsert';
import FormsInsert from './InsertComponentChildComp/FormsInsert';
import IconsInsert from './InsertComponentChildComp/IconsInsert';
import Interactiveinsert from './InsertComponentChildComp/Interactiveinsert';
import PatternsInsert from './InsertComponentChildComp/PatternsInsert';
import SocialInsert from './InsertComponentChildComp/SocialInsert';
import UtilityInsert from './InsertComponentChildComp/UtilityInsert';


const InsertComponentsInfo = () => {
    const { Selectedid } = useInsertComponent();
    const obj = [
        { id: 'section', Component: SectionInsert },
        { id: 'navigation', Component: NavigationInsert },
        { id: 'pages', Component: PagesInsert },
        // { id: 'collectionlists', Component: CollectionlistsInsert },
        { id: 'conytentfield', Component: ConytentfieldInsert },
        { id: 'media', Component: MediaInsert },
        { id: 'forms', Component: FormsInsert },
        { id: 'icons', Component: IconsInsert },
        { id: 'interactive', Component: Interactiveinsert },
        { id: 'patterns', Component: PatternsInsert },
        { id: 'social', Component: SocialInsert },
        { id: 'utility', Component: UtilityInsert },
    ]
    return (
        <div className='p-2 position-absolute  componentsInfo-wrapper session_detail_wrapper'>
            {
                obj.map((elem) => (
                    elem.id === Selectedid && (
                        <elem.Component key={elem.id} />
                    )
                ))
            }
        </div>
    )
}

export default InsertComponentsInfo