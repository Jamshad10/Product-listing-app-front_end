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

function App() {

  const dispatch = useDispatch();

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
  }, [])

  return (
    < >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addcategory' element={<AddCategoryForm />} />
        <Route path='/addproduct' element={<AddProductForm />} />
      </Routes>
      <ToastContainer position='bottom-right' autoClose={3000}></ToastContainer>
    </>
  );
}

export default App;
