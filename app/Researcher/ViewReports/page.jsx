"use client";
import React ,{useEffect,useState} from 'react'
import axios from 'axios';
import ReportPage from '@/components/ReportPage';
import NavBar from '@/components/Researcher/NavBar';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';



const page = () => {

  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios
      .get('/api/getReports')
      .then((response) => {
        setReports(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        alert('An error occurred. Please check the console.');
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className='pt-16 mybgyum h-full'>
      <div className=" bg-gray-100 mx-48 my-4" style={{ height: '96%' }}>
      <div className='flex justify-center text-center items-center gap-8 pt-12'>
        <h1 className='text-5xl items-center text-center font-bold'>Reports</h1>
        <div className='pt-2'><Link href='/Researcher/SendReport'><button className='h-12 w-12 bg-black text-white rounded-lg'><AddIcon/></button></Link></div>
        </div>
        {reports.map((item) => {
          <ReportPage key={item._id} rname={item.title} rdesc={item.description} rtime={new Date(item.createdAt).toLocaleDateString([], { year: 'numeric', month: '2-digit', day: '2-digit' })} />
        })}
      </div>
    </div>
    </div>
  )
}

export default page

