import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import AddProductForm from '../components/AddProductForm';
import Product from '../components/Product';
import { Modal } from 'antd';
import UpdateProductModal from '../components/UpdateProductModal';

const initProducts = [
    {
        id: 0,
        name: 'pen',
        description: 'writing',
        price: 10,
        quantity: 20,
        imageUrl: 'https://www.cultpens.com/imgs/products/cp/950_constW/CR64779~Cross-Classic-Century-Ballpoint-Pen-Brushed-Chrome_P1.jpg'
    }
];

let i = 0;
let selectedProduct = {};

const ProductsPage = () => {

    const [products, setProducts] = useState(initProducts);
    const [visible, setVisible] = useState(false);

    const handleCreateProduct = (data) => {
        const newProduct = { id: i++, ...data };
        setProducts([...products, newProduct]);
    }

    const handleUpdateProduct = (id, data) => {
        // products[id] = {
        //     id: id,
        //     name: 'pen',
        //     description: 'writing',
        //     price: 10,
        //     quantity: 20,
        //     imageUrl: 'https://www.cultpens.com/imgs/products/cp/950_constW/CR64779~Cross-Classic-Century-Ballpoint-Pen-Brushed-Chrome_P1.jpg'
        // };

        // setProducts([...products])
        selectedProduct = data;
        setVisible(true);
    }

    const handleDeleteProduct = (id) => {
        const filteredProducts = products.filter((product) => product.id !== id);
        setProducts([...filteredProducts]);
    }

    return (
        <MainLayout>
            <div className='container'>
                <section>
                    <h3>Add New Product</h3>
                    <AddProductForm onCreate={handleCreateProduct} />
                </section>
                <section>
                    <h3>Product List</h3>
                    <div className='product-list'>
                        {
                            products.map((product, index) => (
                                <Product
                                    key={index}
                                    data={product}
                                    onUpdate={handleUpdateProduct}
                                    onDelete={handleDeleteProduct}
                                />
                            ))
                        }
                    </div>
                </section>
                <UpdateProductModal
                    visible={visible}
                    onCancel={() => setVisible(false)}
                    data={selectedProduct}
                />
            </div>
            <style jsx>{`
                .container {
                    padding: 20px;
                }
                h3 {
                    margin-bottom: 4px;
                }
                section {
                    margin-bottom: 10px;
                }
                .product-list {
                    display: flex;
                    flex-wrap: wrap;
                    // justify-content: center;
                    
                }
            `}</style>
        </MainLayout>
    )
}

export default ProductsPage;