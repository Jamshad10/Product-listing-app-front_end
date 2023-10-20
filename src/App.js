import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import AddCategoryForm from './components/AddCategoryForm';
import AddProductForm from './components/AddProducts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { getCategory } from './redux/CategorySlice';
import { getProduct } from './redux/productSlice';
import { getItem } from './redux/itemSlice';
import Electronics from './pages/Electronics';
import Items from './pages/Electronics';
import Fashion from './pages/Fashion';
import Appliances from './pages/Appliances';

function App() {

  const dispatch = useDispatch();

  //get categories
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get('http://localhost:8000/admin/categories');
        dispatch(getCategory(response.data))
        console.log('categories-list', response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategory();
  }, []);

  //get products
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('http://localhost:8000/admin/products');
        dispatch(getProduct(response.data))
        console.log('product-list', response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);

  //get items
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/admin/items');
        dispatch(getItem(response.data))
        console.log('Items-list', response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchItems();
  }, []);

  return (
    < >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addcategory' element={<AddCategoryForm />} />
        <Route path='/addproduct' element={<AddProductForm />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/fashion' element={<Fashion />} />
        <Route path='/appliances' element={<Appliances />} />
      </Routes>
      <ToastContainer position='bottom-right' autoClose={3000}></ToastContainer>
    </>
  );
}

export default App;
