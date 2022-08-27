import {useHandleContext} from '../../context/DataContextProvider'

export const Filter = () => {

  const {filterData, loadData} = useHandleContext()

  const handleFilter = (e) => {
    e.preventDefault()
    e.target.value !== '' ? filterData(e.target.value) : loadData()
  }

  return (
    <div className='filter'>
      <div className="wrapper">
        <input type="text" onChange={ handleFilter } placeholder="Search By Name" />
      </div>
    </div>
  )
}
