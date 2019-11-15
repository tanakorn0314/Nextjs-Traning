import React, { useState } from 'react';
import Button from './Button';

const emptyImageUrl = '/static/images/add_image.png';

const AddProductForm = props => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [imageUrl, setImageUrl] = useState(emptyImageUrl);

    const disabled = name === '' || description === ''

    const handleChangeImage = e => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setImageUrl(e.target.result)
        }

        if (file)
            reader.readAsDataURL(file);
    }

    const handleCreate = e => {
        props.onCreate && props.onCreate({ name, description, price, quantity, imageUrl })
    }

    return (
        <div className='container'>
            <label className='form-control'>
                <p>Name</p>
                <input type='text' placeholder='Product name' value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className='form-control'>
                <p>Description</p>
                <textarea value={description} placeholder='Product description' onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label className='form-control'>
                <p>Price</p>
                <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <label className='form-control'>
                <p>Quantity</p>
                <input type='text' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </label>
            <label className='form-control'>
                <img className='image' src={imageUrl} />
                <input className='input-file' type='file' onChange={handleChangeImage} />
            </label>
            <Button onClick={handleCreate} disabled={disabled}>Create</Button>
            <style jsx>{`
                .container {
                    padding: 12px;
                    border: 1px solid var(--gray-light2);
                    border-radius: 6px;
                    max-width: 350px;
                }
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
        </div>
    )
}

export default AddProductForm;