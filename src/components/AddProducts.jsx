import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { addProduct } from '../redux/productSlice';
import AddItemForm from './AddItem';

function AddProductForm() {
    const categories = useSelector((state) => state.category.category);
    const dispatch = useDispatch();
    
    const [category, setCategory] = useState('');
    const [product, setProduct] = useState('');

    const handleAddProduct = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/admin/addproduct', { category, product })
            .then((res) => {
                dispatch(addProduct(res.data));
                toast.success('New Product Added');
                setProduct('');
                setCategory('');
            })
            .catch((err) => {
                console.log('Product add error', err);
            });
    };

    return (
        <div className="flex items-center justify-around py-8">
            <form onSubmit={handleAddProduct}>
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
                        <option value="">Select a category</option>
                        {categories.map((item) => (
                            <option key={item.id} value={item.category}>
                                {item.category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="product" className="block mb-2 text-sm font-medium text-gray-90">
                        New Product
                    </label>
                    <input
                        type="text"
                        id="product"
                        name="product"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5"
                        placeholder="Add a product"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover-bg-blue-800 focus:ring-4 focus:outline-none focus-ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Add New Product
                </button>
            </form>
            <AddItemForm />
        </div>
    );
}

export default AddProductForm;
