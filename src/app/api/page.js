"use client"
// Ne pas exporter par défaut la fonction, exportez-la simplement
import { useState, useEffect } from 'react';
import axios from 'axios';

// Supprimez cette ligne : export const api = () => {
const api = () => { // Utilisez un nom de composant approprié

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get("https://dumbstockapi.com/stock?exchanges=NYSE")
                setData(response.data)
                setLoading(false)
            } catch(error){
                console.log(error)
                setLoading(false)
            }
        }

        fetchData()

    },[])

    return (
        <>
            <div>
                {loading ? (
                    <p>je suis en chargement</p>
                ) : (
                    <ul>
                        {
                            data.map(item => (
                                <li key={item.ticker}>
                                    {item.name}
                                </li>
                            ))
                        }
                        
                    </ul>
                )}
            </div>
        </>
    )
}

export default api; // Exportez le composant par défaut ici
