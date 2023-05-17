import React, {useEffect, useState} from 'react';

const MarvelComponent = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setLoading(false)

        fetch('http://127.0.0.1:8000/api/marvels', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+localStorage.getItem("tokenUser")
            }
        }).then(response => response.json())
            .then(data => {
                setItems(data)
                setLoading(true)
                setPage(1)
            })
            .catch(error => console.error(error));
    }, []);

    const handleClick = () => {
        if (isLoading === true) {
            setLoading(false)
            fetch('http://127.0.0.1:8000/api/marvels?page='+(page+1), {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+localStorage.getItem("tokenUser")
                }
            }).then(response => response.json())
                .then(data => {
                    setItems(data)
                    setPage(page+1)
                    setLoading(true)
                })
                .catch(error => console.error(error));
        }
    };

    return (
        <>
            <div>
                <h2>Liste des personnages</h2>
                <div className='container'>
                    {isLoading === true ? items['hydra:member'].map(item => (
                        <div key={item.id} className="card">
                            {item.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? (
                                <div className="no-img">
                                    <span className="loader-img"></span>
                                </div>
                            ) : (
                                <>
                                    <img src={item.thumbnail} alt={item.name}/>
                                </>
                            )}
                            <h3>{item.name}</h3>
                            {/*<p>{item.description}</p>*/}
                        </div>
                    )) : (
                        <div className="load">
                            <span className="loader"></span>
                            <p>Chargement des données</p>
                        </div>
                    )}
                </div>
                <div className="boutons">
                    {isLoading === true && page < 9 ? (<button onClick={handleClick}>Voir plus</button>) : ''}
                </div>
            </div>
        </>
    );
};

export default MarvelComponent;
