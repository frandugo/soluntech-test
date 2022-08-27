export const fetchData = async ({url, pagination, page}) => {
    const path = pagination ? `${url}/?page=${page}` : url
    try{
        const response = await fetch(path)
        const {results} = await response.json()
        if(response.status >= 400 && response.status < 600) throw new Error("Something was wrong with Rick And Morthy service");
        return results
    }catch(err){
        console.error('Error: ', err);
    }
}