import React from 'react';

const DisplayGun = (props) => {
    const { name, img, category, price, action, bullet, capacity } = props.gun;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-full h-72' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name.length < 15 ? name : name.slice(0, 15)}
                        <div className="badge badge-secondary">{category}</div>
                    </h2>
                    <p>Action: {action}</p>
                    <div className="card-actions">
                        <div className="badge badge-outline">
                            BULLET: {bullet.length < 10 ? bullet : bullet.slice(0, 10)}
                        </div>
                        <div className="badge badge-outline">CAP: {capacity}</div>
                        <div className='mt-5'>
                            <button className="btn btn-sm btn-primary mr-3">ADD TO CART</button>
                            <button className="btn btn-sm btn-danger">Details</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DisplayGun;