import { useEffect, useState } from 'react'


function Home() {
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        fetch('http//localhost:8000/ingredients', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                Authorization: accessToken,
            },
        }).then((res) => res.json()
        ).then((data) => {
            console.log(data)
        })

    }, [])

    return (
        <div>Home</div>
    )
}

export { Home }