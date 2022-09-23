import React from 'react';
import { useState, useEffect } from 'react';
import DisplayGun from '../DisplayGun/DisplayGun';

const LoadAllGuns = ({ countIncrease }) => {
    const [guns, setGuns] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])
    return (
        <div className='mt-28'>
            <div className='md:w-2/4 mx-auto text-center p-4'>
                <h2 className='text-2xl md:text-4xl font-bold mb-4'>Welcome to Fake Pistol Store</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate praesentium voluptas harum, voluptatem soluta corporis explicabo facilis debitis reprehenderit numquam?</p>
            </div>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3 md:px-16 lg:px-28 my-10'>
                {
                    guns.map(gun => <DisplayGun
                        gun={gun}
                        key={gun.id}
                        countIncrease={countIncrease}>
                    </DisplayGun>)
                }
            </div>
            <div className='text-center mt-16 p-5 bg-gray-200'>
                <p>Copyright © 2022 Fake Pistol Store. Developed by Modasser</p>
            </div>
        </div>
    );
};

export default LoadAllGuns;