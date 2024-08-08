import React, { ChangeEvent, FormEvent, useState } from 'react'
import { v4 } from "uuid";
import Header from "@/app/(components)/Header";

type ProductFormData = {
    name: string;
    price:number;
    stockQuantity: number;
    rating:number;
}

type CreateProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (formData: ProductFormData) => void;
}

const CreateProductModal = ({
    isOpen,
    onClose,
    onCreate,
}: CreateProductModalProps) => {
    const [formData, setFormData] = useState({
        productId: v4(),
        name: '',
        price: 0,
        stockQuantity: 0,
        rating: 0,

    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:
            name === 'price' || name === 'stockQuantity' || name === 'rating'
            ? parseFloat(value)
            : value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onCreate(formData);
        onClose();
    };

    if(!isOpen) return null;

    const labelCssStyles = 'block text-sm font-medium text-gray-700';
    const inputCssStyles = 'block w-full mb-2 border-gray-500 border-2 rounded-md'

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20'>
        <div className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white'>
            <Header name='Criar novo Produto' />
            <form onSubmit={handleSubmit} className='mt-5'>
                <label htmlFor='productName' className={labelCssStyles}>
                    Nome do Produto
                </label>
                <input 
                type='text'
                name='name'
                placeholder='Nome'
                onChange={handleChange}
                value={formData.name}
                className={inputCssStyles}
                required
                />
                <label htmlFor='productName' className={labelCssStyles}>
                    Preço
                </label>
                <input 
                type='number'
                name='price'
                placeholder='Preço'
                onChange={handleChange}
                value={formData.price}
                className={inputCssStyles}
                required
                />
                <label htmlFor='productName' className={labelCssStyles}>
                    Quantidade Estoque
                </label>
                <input 
                type='number'
                name='stockQuantity'
                placeholder='Quantidade no estoque'
                onChange={handleChange}
                value={formData.stockQuantity}
                className={inputCssStyles}
                required
                />
                <label htmlFor='productName' className={labelCssStyles}>
                    Avaliação
                </label>
                <input 
                type='number'
                name='rating'
                placeholder='Avaliação'
                onChange={handleChange}
                value={formData.rating}
                className={inputCssStyles}
                required
                />

                <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
                type='submit'>
                    Criar
                </button>
                <button className='ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700'
                type='submit'
                onClick={onClose}>
                    Cancelar
                </button>
            </form>
        </div>
    </div>
  )
}

export default CreateProductModal