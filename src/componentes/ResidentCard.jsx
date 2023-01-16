import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentCard = ({ url }) => {

    const [residents, SetResidents] = useState({});
    useEffect(() => {
        axios.get(url)
            .then(res => SetResidents(res.data));
    }, [])
    console.log(residents)
    return (
        <li>
            <div className='resident-card'>
                <img className='resident-image' src={residents.image} alt="" />
                {residents.name}
                <ul className='resident-card-info'>
                    <li><span>status:</span><b>{residents.status}</b></li>
                    <li><span>origen:</span><b>{residents.origin?.name}</b></li>
                    <li><span>especie:</span><b>{residents.species}</b></li>
                    <li><span>aparicion en episodios:</span><b>{residents.episode?.length}</b></li>
                </ul>
            </div>
        </li>
    );
};

export default ResidentCard;