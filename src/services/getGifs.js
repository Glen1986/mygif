export default function getGifs({ keyword }) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=ZQAsg96yoB0d1XX7OyJrcbS32xAaDRz7&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
    return fetch(apiURL)
        .then((res) => res.json())
        .then((response) => {
            const { data } = response
            const gifs = data.map((image) => {
                const { images, title, id } = image
                const { url } = images.downsized_medium
                return { title, id, url }
            })
            return gifs
        })
}
