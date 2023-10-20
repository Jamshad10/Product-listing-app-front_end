import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import { addCategory } from '../redux/CategorySlice';


function AddCategoryForm() {

    const [category, setCategory] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddCategory = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/admin/addcategory', {category})
            .then(res => {
                dispatch(addCategory(res.data));
                console.log('New-Category', res);
                navigate('/');
                toast.success('New Category Created');
                setCategory('');
            })
            .catch((err) => {
                console.log('Category-add-error', err);
            })
    }

    return (
        <div className='flex items-center justify-center py-8'>
            <form className='border rounded-lg px-4 py-4 shadow-xl' onSubmit={handleAddCategory}>
                <h1 className='text-2xl font-bold my-2'>Add Category</h1>
                <div className="mb-6">
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-90">Category</label>
                    <input
                        type="text"
                        id="category"
                        name='category'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 "
                        placeholder="Add a new category"
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Add New Category
                </button>
            </form>
        </div>
    );
}

export default AddCategoryForm;
