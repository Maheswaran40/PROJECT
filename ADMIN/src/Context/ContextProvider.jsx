import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const myContext = createContext()

const ContextProvider = ({children}) => {

    const url = 'https://project-backend-2hqu.onrender.com'

    const [ img, setImage ] = useState('')
    const [ previewImg, setPreviewImage ] = useState('')
    const [ name, setName ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ desc, setDesc ] = useState('')
    const [ price, setPrice ] = useState('')

    const [ updateImg, setUpdateImg ] = useState('')
    const [ updatePreviewImg, setUpdatePreviewImage ] = useState('')
    const [ updateName, setUpdateName ] = useState('')
    const [ updateCategory, setUpdateCategory ] = useState('')
    const [ updateDesc, setUpdateDesc ] = useState('')
    const [ updatePrice, setUpdatePrice ] = useState('')
    const [ productID, setProductID ] = useState('')

    const [ productData, setProductData ] = useState([])

    const imageFun = (e) => {
        const file = e.target.files[0]
        
        if(file){
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result)
                setPreviewImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
        
    }

    const submitFun = async (e) => {
        try{
            e.preventDefault()

            const formData = {
                img,
                name, 
                category, 
                desc, 
                price
            }

            await axios.post(`${url}/product/add`, formData)
            alert('Product Added Successfully')
            // setImage('')
            setPreviewImage('')
            setName('')
            setCategory('')
            setDesc('')
            setPrice('')
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
    }

    const fetchData = async (req, res) => {
        try{
            const productData = await axios.get(`${url}/product/list`)
            setProductData(productData.data)
        }
        catch(err){ 
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const deleteProductFun = async (productID) => {
        try{
            await axios.delete(`${url}/product/delete/${productID}`)
            alert('Product Deleted Successfully')
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
    }

    const updateFun = (productID) => {
        const product = productData.find((a) => a._id === productID)
       
        setUpdateName(product.name)
        setUpdateCategory(product.category)
        setUpdateDesc(product.desc)
        setUpdatePrice(product.price)
        setUpdateImg(product.img)
        setUpdatePreviewImage(product.img)
        setProductID(product._id)
    }

    const updateImageFun = (e) => {
        const file = e.target.files[0]
        if(file){
            const reader = new FileReader()
            reader.onloadend = () => {
                setUpdateImg(reader.result)
                setUpdatePreviewImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const updateSubmitFun = async (e) => {
        try{
            e.preventDefault()

            const updateFormData = {
                img : updateImg,
                name : updateName,
                desc : updateDesc,
                category : updateCategory,
                price : updatePrice
            }

            await axios.put(`${url}/product/update/${productID}`,updateFormData )
            alert('Product Updated Successfully...')
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
    }

    const [ userData, setUserData ] = useState([])

    const fetchUserData = async () => {
        try{
            const userList = await axios.get(`${url}/user/getuser`)
            setUserData(userList.data);
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    const deleteUserFun = async (userID) => {
        try{
            await axios.delete(`${url}/user/deleteuser/${userID}`)
            alert('User Deleted Successfully...')
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
    }

    const myContextValue = {
        name, setName, 
        category, setCategory,
        desc, setDesc,
        price, setPrice,

        imageFun, previewImg,
        submitFun,

        productData,
        deleteProductFun,

        updateFun,

        updateName, setUpdateName,
        updateCategory, setUpdateCategory,
        updateDesc, setUpdateDesc,
        updatePrice, setUpdatePrice,
        updateImageFun, updatePreviewImg,

        updateSubmitFun,

        userData,
        deleteUserFun


    }

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default ContextProvider