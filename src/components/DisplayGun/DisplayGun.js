import React from 'react';
import { useState } from 'react';
import ProductModal from '../ProductModal/ProductModal';

const DisplayGun = (props) => {
    const [modalInfo, setModalInfo] = useState({});

    const { gun, countIncrease } = props;
    const { name, img, category, price, action, bullet, capacity } = gun;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-full h-72' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name.length < 15 ? name : name.slice(0, 18)}
                        <div className="badge badge-secondary">{category}</div>
                    </h2>
                    <p>Action: {action}</p>
                    <div className="card-actions">
                        <div className="badge badge-outline">
                            BULLET: {bullet.length < 10 ? bullet : bullet.slice(0, 10)}
                        </div>
                        <div className="badge badge-outline">CAP: {capacity}</div>


                    </div>
                    <div className="my-2 text-xl">${price}</div>
                    <div>
                        <button className="btn btn-sm btn-primary mr-3" onClick={() => countIncrease()}>ADD TO CART</button>
                        <label onClick={() => setModalInfo(gun)} htmlFor="my-modal-3" className="btn btn-sm btn-danger">Details</label>
                        {
                            modalInfo && (<ProductModal info={modalInfo} setModalInfo={setModalInfo}></ProductModal>
                            )}
                    </div>

                </div>

            </div>
        </div>

    );
};

export default DisplayGun;