import React from 'react';
import { Modal } from 'antd';
import Button from './Button';

const UpdateProductModal = props => {

    const { id, name, description, price, quantity, imageUrl } = props.data;

    return (
        <Modal
            title='Update Product'
            visible={props.visible}
            onOk={() => { }}
            onCancel={props.onCancel}
        >
            <label className='form-control'>
                <p>Name</p>
                <input type='text' placeholder='Product name' value={name}  />
            </label>
            <label className='form-control'>
                <p>Description</p>
                <textarea value={description} placeholder='Product description'  />
            </label>
            <label className='form-control'>
                <p>Price</p>
                <input type='text' value={price}  />
            </label>
            <label className='form-control'>
                <p>Quantity</p>
                <input type='text' value={quantity}  />
            </label>
            <label className='form-control'>
                <img className='image' src={imageUrl} />
                <input className='input-file' type='file'  />
            </label>
            <style jsx>{`
                input, textarea {
                    border: 1px solid var(--gray-light2);
                    border-radius: 6px;
                    padding: 8px;
                }
                .form-control, p {
                    margin-bottom: 4px;
                    display: flex;
                    flex-direction: column;
                }
                .image {
                    width: 80px;
                    height: 80px;
                    cursor: pointer;
                }
                .input-file {
                    display: none;
                }
            `}</style>
        </Modal>
    )
}

export default UpdateProductModal;