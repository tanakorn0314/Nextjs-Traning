import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import Button from './Button';

const UpdateProductModal = props => {
    const { data } = props;

    const [name, setName] = useState(data.name);
    const [description, setDescription] = useState(data.description);
    const [price, setPrice] = useState(data.price);
    const [quantity, setQuantity] = useState(data.quantity);
    const [imageUrl, setImageUrl] = useState(data.imageUrl);

    const handleChangeImage = e => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setImageUrl(e.target.result)
        }

        if (file)
            reader.readAsDataURL(file);
    }

    useEffect(() => {
        console.log(props.data);
        if (data.name !== name)
            setName(data.name);
        if (data.description !== description)
            setDescription(data.description);
        if (data.price !== price)
            setPrice(data.price);
        if (data.quantity !== quantity)
            setQuantity(data.quantity);
        if (data.imageUrl !== imageUrl)
            setImageUrl(data.imageUrl);

    }, [props])

    return (
        <Modal
            title='Update Product'
            visible={props.visible}
            onOk={() => { }}
            onCancel={props.onCancel}
        >
            <label className='form-control'>
                <p>Name</p>
                <input type='text' placeholder='Product name' value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label className='form-control'>
                <p>Description</p>
                <textarea value={description} placeholder='Product description' onChange={e => setDescription(e.target.value)} />
            </label>
            <label className='form-control'>
                <p>Price</p>
                <input type='text' value={price} onChange={e => setPrice(e.target.value)} />
            </label>
            <label className='form-control'>
                <p>Quantity</p>
                <input type='text' value={quantity} onChange={e => setQuantity(e.target.value)} />
            </label>
            <label className='form-control'>
                <img className='image' src={imageUrl} />
                <input className='input-file' type='file' onChange={handleChangeImage} />
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