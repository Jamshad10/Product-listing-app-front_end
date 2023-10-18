import { useSelector } from "react-redux"


export default function Electronics() {

    const productList = useSelector((state) => state.products.products);
    console.log('product list', productList);

    const ItemsList = useSelector((state) => state.items.items)

    const filterProducts = productList.filter((items) => items.category === 'Electronics')
    console.log('electronics', filterProducts);

    const filterMobile = ItemsList.filter((items) => items.category === 'Electronics' && items.products === 'Mobile')
    console.log('mobile', filterMobile);

    return (
        <div>
            <div className="bg-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-4">
                        <h2 className="text-2xl font-bold text-gray-900">Electronics</h2>

                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                            {filterProducts.map((item) => (
                                <div key={item.id} className="group relative">
                                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img
                                            src='https://img.freepik.com/premium-vector/realistic-digital-devices-isometry-set-isometric-illustrations_480270-71.jpg?size=626&ext=jpg&ga=GA1.1.333441761.1696828912&semt=ais'
                                            alt='img'
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <p className="text-base font-semibold text-gray-900">{item.products}</p>
                                    <button
                                        type="button"
                                        className="mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                        View Products
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                <div>
                    {filterMobile.map((item) => {
                        return (
                            <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg">{item.item}</li>
                            </ul>
                        )
                    })}

                </div>
            </div>
            </div>
          
        </div>
    )
}