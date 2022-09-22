import React from 'react';
import { useState, useEffect } from 'react';
import DisplayGun from '../DisplayGun/DisplayGun';

const LoadAllGuns = () => {
    const [guns, setGuns] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])
    return (
        <div className='my-10'>
            <div className='w-2/4 mx-auto text-center'>
                <h2 className='text-4xl font-bold mb-4'>Welcome to Fake Pistol Store</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate praesentium voluptas harum, voluptatem soluta corporis explicabo facilis debitis reprehenderit numquam? {console.log(guns)}</p>
            </div>
            <div className='grid gap-4 grid-cols-4 lg:px-28 my-10'>
                {
                    guns.map(gun => <DisplayGun gun={gun} key={gun.id}></DisplayGun>)
                }
            </div>
        </div>
    );
};

export default LoadAllGuns;