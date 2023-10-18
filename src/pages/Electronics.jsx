import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Electronics() {
    const productList = useSelector((state) => state.products.products);
    const ItemsList = useSelector((state) => state.items.items);

    const filterProducts = productList.filter((item) => item.category === 'Electronics');
    const filterItems = ItemsList.filter((item) => item.category === 'Electronics');

    const [selectedCategory, setSelectedCategory] = useState(null);

    const filterByCategory = (category) => {
        setSelectedCategory(category);
    };

    const getFilteredItems = () => {
        if (!selectedCategory) {
            return filterItems;
        }
        return filterItems.filter((item) => item.products === selectedCategory);
    };

    return (
        <div>
            <div className="bg-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-4">
                        <h2 className="text-2xl font-bold text-gray-900">Electronics</h2>

                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                            {filterProducts.map((item) => (
                                <div key={item.id} className="group relative">
                                    <p className="text-base font-semibold text-gray-900">{item.products}</p>
                                    <button
                                        type="button"
                                        className="mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                        onClick={() => filterByCategory(item.products)}
                                    >
                                        View Products
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* List of Items based on selected category */}
            <div className="flex">
                <div>
                    <div>
                        {getFilteredItems().map((item) => (
                            <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg" key={item._id}>
                                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg">{item.item}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
