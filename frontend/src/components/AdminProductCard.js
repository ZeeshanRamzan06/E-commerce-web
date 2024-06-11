import React, { useState } from 'react';
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import AdminEditProduct from './AdminEditProduct';
import displayINRCurrency from '../helpers/displayCurrency';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const AdminProductCard = ({ data, fetchdata }) => {
    const [editProduct, setEditProduct] = useState(false);

    const handleDeleteProduct = async () => {
        const response = await fetch(SummaryApi.deleteProduct.url, {
            method: SummaryApi.deleteProduct.method,
            credentials: 'include',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({ _id: data._id })
        });

        const responseData = await response.json();

        if (responseData.success) {
            toast.success('Product deleted successfully');
            fetchdata(); // Refresh product list
        } else {
            toast.error('Failed to delete product');
        }
    };

    return (
        <div className='bg-white p-4 rounded'>
            <div className='w-40'>
                <div className='w-32 h-32 flex justify-center items-center'>
                    <img src={data?.productImage[0]} className='mx-auto object-fill h-full' alt="Product" />
                </div>
                <h1 className='text-ellipsis line-clamp-2'>{data.productName}</h1>

                <div>
                    <p className='font-semibold'>
                        {displayINRCurrency(data.sellingPrice)}
                    </p>

                    <div className='flex items-center gap-2 mt-2'>
                        <div 
                            className='w-fit p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer' 
                            onClick={() => setEditProduct(true)}>
                            <MdModeEditOutline />
                        </div>
                        <div 
                            className='w-fit p-2 bg-red-100 hover:bg-red-600 rounded-full hover:text-white cursor-pointer' 
                            onClick={handleDeleteProduct}>
                            <MdDelete />
                        </div>
                    </div>
                </div>
            </div>

            {editProduct && (
                <AdminEditProduct 
                    productData={data} 
                    onClose={() => setEditProduct(false)} 
                    fetchdata={fetchdata} 
                />
            )}
        </div>
    );
}

export default AdminProductCard;
