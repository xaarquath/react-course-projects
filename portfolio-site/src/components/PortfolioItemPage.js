import React, { useEffect, useState } from 'react';

function PortfolioItemPage (props) {
 
    const [state, setState] = useState([])
    const [hasError, setHasError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);

    const url = `http://localhost:8081/my-portfolio-react-api/portfolio/${props.match.params.id}`;
    
    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(response => 
            response.json()
        )
        .then(data => {
            console.log(data)
            setData(data);
            setLoading(false);
            setHasError(false);
        })
        .catch(err => {
            setHasError(true)
            setLoading(false)})
    }, []);
   
    return (
        <div>
        <div>
            <h1>A thing I've Done</h1>
            <p>This page is for the item with the id of {props.match.params.id}</p>
        </div>
        {loading && <div>Loading...</div>}
        {hasError && <div>Error...</div>}
        {data && data.length && 
            <div>
                <p>Items:</p>
                <ul>
                    {data.map(el => <li>{el}</li>)}
                </ul>
            </div>
        }
    </div>
    )
}

export default PortfolioItemPage;