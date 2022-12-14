export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=KzAM4t3LuOs3uv3XWKGvB2w5LXMtsPZn&q=${category}&limit=7`;
    const resp = await fetch( url );
    const {data = []} = await resp.json();
    const gifs = data.map( img => ({
        id : img.id,
        title : img.title,
        url : img.images.downsized_medium.url
    })
    )
    return gifs;
}