import React from 'react';

const ProductModal = (props) => {
    const { info, setModalInfo } = props;
    const { name, img, category, price, action, bullet, capacity } = info;
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative bg-white">
                    <label onClick={() => setModalInfo(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                    <div className='flex'>
                        <figure><img className='w-56' src={img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {name}
                                <div className="badge badge-secondary">{category}</div>
                            </h2>
                            <p>Action: {action}</p>
                            <div className="card-actions">
                                <div className="badge badge-outline">
                                    BULLET: {bullet}
                                </div>
                                <div className="badge badge-outline">CAP: {capacity}</div>
                            </div>
                            <div className="my-2 text-xl">${price}</div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProductModal;