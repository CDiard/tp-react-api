import React, {useEffect, useState} from 'react';

const MarvelComponent = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/marvels', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+localStorage.getItem("tokenUser")
            },
            method: 'GET',
        }).then(response => response.json())
            .then(data => {
                setItems(data)
                setLoading(true)
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <div>
                <h2>Liste des éléments</h2>
                <ul>
                    {isLoading === true ? items['hydra:member'].map(item => (
                        <li key={item.id}>
                            <img src={item.thumbnail} alt={item.name} style={{width: 80}}/>
                            {item.name}
                        </li>
                    )) : 'Chargement des données'}
                    {/*faire un load de chargement*/}
                </ul>
            </div>
        </>
    );
};

export default MarvelComponent;
