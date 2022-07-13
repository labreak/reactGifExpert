
export const getGifs =async(categoria ) =>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=f4ICNVFVQmoPyNdf1TL4fGySISA8QyZT&q=${categoria}&limit=10`

    const resp = await fetch(url)

    const { data = [] } =await resp.json();
    
    const gifs = data.map(img => ({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }))
     
    
    return gifs;
}
