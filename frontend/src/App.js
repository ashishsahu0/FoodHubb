import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import toast,{Toaster} from 'react-hot-toast';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataProduct } from './redux/productSlide';
import Chat from './components/Chat'
function App() {

  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
  
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`)
      const resData = await res.json()
      console.log(resData);
      dispatch(setDataProduct(resData))
    })()
  },[])
  return (
    <>
    <Toaster/>
   <div>
   <Header/>
   <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
    <Outlet/>
   </main>
   <Chat/>
   </div>
   </>
  );
}

export default App;
