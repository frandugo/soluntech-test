import { createContext, useContext, useEffect, useState } from 'react';

import { fetchData } from '../services/fetchdata';

const handleDataContext = createContext();

const url = import.meta.env.VITE_URL
const pagination = true
const page = 1

export const useHandleContext = () => {
    return useContext(handleDataContext)
}

console.log('Privider Render');


export const DataContextProvider = ({ children }) => {

    const [data, setData] = useState([])
    const [lastData, setLastData] = useState(false)

    useEffect( () => {
        fetchData({url, pagination, page})
        .then(res => {
            setData(res)
        })
        .catch(err => console.log(err))
    },[])

    const loadData = () => {
        fetchData({url, pagination, page})
        .then(res => {
            setData(res)
        })
        .catch(err => console.log(err))
    }

    const loadMoreData = async (page) => {
        const loadMore = await fetchData({url, pagination, page})
        if(loadMore !== undefined) setData((prevState) => [...prevState, ...loadMore]) 
        if(Object.keys(loadMore).length < 20) setLastData(true)
    }

    const filterData = (str) => {
        setData(prevState => {
            return prevState.filter(character => character.name.toLowerCase().startsWith(str.toLowerCase()))
        }) 
    }

    return (
        <handleDataContext.Provider value={{data, lastData, loadMoreData, filterData, loadData}}>
            {children}
        </handleDataContext.Provider>
    )
}




