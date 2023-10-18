import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    //categories
    <div>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Welcome to eStore</h2>

            <div className="mt-6 space-x-6 flex overflow-x-auto">

              <Link to={'/electronics'}>
                <div
                  className="group cursor-pointer px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg transition duration-300"
                >
                  <p className="text-base font-semibold text-gray-900">Electronics</p>
                </div>
              </Link>

              <Link to={''}>
                <div
                  className="group cursor-pointer px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg transition duration-300"
                >
                  <p className="text-base font-semibold text-gray-900">Fashion</p>
                </div>
              </Link>

              <Link to={''}>
                <div
                  className="group cursor-pointer px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg transition duration-300"
                >
                  <p className="text-base font-semibold text-gray-900">Appliances</p>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
