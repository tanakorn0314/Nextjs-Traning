import React from 'react';

const Product = props => {

    const { name, description, price, quantity, imageUrl } = props.data;

    return (
        <div className='container'>
            <img src={imageUrl} />
            <h4>{name}</h4>
            <small className='text-muted'>{description}</small>
            <div className='info'>
                <small className='quantity'>{quantity} Lefts</small>
                <small className='price'>{price} Baht</small>
            </div>
            <hr />
            <div className='action'>
                <small className='update'>Update</small>
                <small className='delete'>Delete</small>
            </div>
            <style jsx>{`
                .container {
                    padding: 10px;
                    border-radius: 10px;
                    min-width: 180px;
                    max-width: 200px;
                    box-shadow: 0 0 6px 0px rgba(0,0,0,.15);
                    margin: 0 10px 10px 0;
                }
                .info, .action {
                    display: flex;
                    justify-content: space-between;
                }
                img {
                    width: 100%;
                    height: 160px;
                }
                .quantity, .delete {
                    color: var(--red);
                }
                .price {
                    color: var(--green-dark);
                }
                .update {
                    color: var(--blue);
                    border-right: 1px solid var(--gray);
                    width: 50%;
                    text-align: center;
                    cursor: pointer;
                }
                .delete {
                    width: 50%;
                    text-align: center;
                    cursor: pointer;
                }

            `}</style>
        </div>
    )
}

export default Product;