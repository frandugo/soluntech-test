import { useState } from 'react';
import { CardItem } from './CardItem'
import { Filter } from './../Filter'
import {useHandleContext} from '../../context/DataContextProvider'

export const CardList = () => {

    const [currentPage, setCurrentPage] = useState(2)

    const {data, lastData, loadMoreData} = useHandleContext()

    const loadMoreCharacters = () => {
        setCurrentPage(prevState => prevState + 1)
        loadMoreData(currentPage)
    }

    return (
        <>
            <Filter/>
            <div className="card__container">    
                { data && data.map( character => <CardItem key={character.id} characters={character} />) }
            </div>
            <div className='card__actions'>
                {  !lastData && 
                    <button onClick={ () => loadMoreCharacters(currentPage) } className="btn btn--medium btn--dark-blue">
                        Load More
                    </button> 
                }
            </div>
        </>
    )
}