import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { addItem } from '../redux/itemSlice';

function AddItemForm() {
    const CategoryList = useSelector((state) => state.category.category);
    const productList = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    const [category, setCategory] = useState('');
    const [products, setProduct] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [item, setItem] = useState('');

    const handleAddItem = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/admin/additems', { category, products, productCategory, item })
            .then((res) => {
                dispatch(addItem(res.data));
                toast.success('New Item Added');

                setProduct('');
                setCategory('');
                setProductCategory('');
                setItem('');
            })
            .catch((err) => {
                console.log('Item add error', err);
            });
    };

    return (
        <div className="flex items-center justify-center py-8">
            <form onSubmit={handleAddItem}>
                <h1>Add Product</h1>

                <div className="mb-6">
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">
                        Category
                    </label>
                    <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5"
                        required
                    >
                        <option value="">Select Category</option>
                        {CategoryList.map((item) => (
                            <option key={item.id} value={item.category}>
                                {item.category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="products" className="block mb-2 text-sm font-medium text-gray-900">
                        Product Name
                    </label>
                    <select
                        id="products"
                        name="products"
                        value={products}
                        onChange={(e) => setProduct(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5"
                        required
                    >
                        <option value="">Select Product</option>
                        {productList.map((item) => (
                            <option key={item.id} value={item.products}>
                                {item.products}
                            </option>
                        ))}
                    </select>
                </div>


                <div className="mb-6">
                    <label htmlFor="productCategory" className="block mb-2 text-sm font-medium text-gray-90">
                        Product Category
                    </label>
                    <input
                        type="text"
                        id="productCategory"
                        name="productCategory"
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5"
                        placeholder="Add a product Category"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="item" className="block mb-2 text-sm font-medium text-gray-90">
                        Product Category
                    </label>
                    <input
                        type="text"
                        id="item"
                        name="item"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5"
                        placeholder="Add an item"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover-bg-blue-800 focus:ring-4 focus:outline-none focus-ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Add New Item
                </button>
            </form>
        </div>
    );
}

export default AddItemForm;
