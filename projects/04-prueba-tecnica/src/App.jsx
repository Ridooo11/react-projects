import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {   
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)

                const threeFirstWords = fact.split(' ', 3).join(' ')
                
                fetch(`${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWords}?fontSize=40&fontColor=purple&json=true`)
                    .then(res => res.json())
                    .then(response => {
                        const { _id } = response
                        setImageUrl(`${CAT_PREFIX_IMAGE_URL}/cat/${_id}/says/${threeFirstWords}?fontSize=40&fontColor=purple`)
                    })
            })
    }, [])
    return (
        <main>
            <h1>Prueba tecnica</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted by using the three first words of: ${fact} `}/>}
        </main>
    )
}

// https://catfact.ninja/fact

// https://cataas.com/cat/says/hello

