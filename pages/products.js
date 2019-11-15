import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import AddProductForm from '../components/AddProductForm';
import Product from '../components/Product';

const initProducts = [
    {
        name: 'pen',
        description: 'writing',
        price: 10,
        quantity: 20,
        imageUrl: 'https://www.cultpens.com/imgs/products/cp/950_constW/CR64779~Cross-Classic-Century-Ballpoint-Pen-Brushed-Chrome_P1.jpg'
    }
]

const ProductsPage = () => {

    const [products, setProducts] = useState(initProducts);

    const handleCreateProduct = (data) => {
        setProducts([...products, data]);
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
                                <Product key={index} data={product} />
                            ))
                        }
                    </div>
                </section>
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