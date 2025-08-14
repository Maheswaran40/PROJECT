import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { all_products } from '../assets/asset'
import axios from 'axios'

export const myContext = createContext()

const MyContextProvider = ( { children } ) => {

    const navigate = useNavigate()

    var [ input, setInput ] = useState('')
    
    var [ filteredData, setFilteredData ] = useState([])
    
    const SearchFun = () => {
        setFilteredData(all_products.filter(a => a.type.toLowerCase().includes(input.toLowerCase())))
    }

    const url = 'http://localhost:5000'

    const [ productData, setProductData ] = useState([])

    const fetchProductData = async () => {
        try{
            const productList = await axios.get(`${url}/product/list`)
            setProductData(productList.data);
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchProductData()
    }, [])

    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const userRegisterForm = async (e) => {
        try{
            e.preventDefault();

            const regiterFormData = {
                username,
                password,
                email
            }

            await axios.post(`${url}/user/adduser`, regiterFormData)
            alert('Register Successfully')

            setUsername('')
            setEmail('')
            setPassword('')

        }
        catch(err){
            console.log(err)
        }
    }

    const [ loginUsername, setLoginUsername ] = useState('')
    const [ loginPassword, setLoginPassword ] = useState('')

    const userLoginForm = async (e) => {
        try{
            e.preventDefault()

            localStorage.setItem('username', loginUsername)

            const loginFormData = {
                username : loginUsername,
                password : loginPassword
            }

            await axios.post(`${url}/user/login`, loginFormData)
            alert('Login Successfully...')
            navigate('/home')

            setLoginUsername('')
            setLoginPassword('')
        }
        catch(err){
            alert('Invalid Inputs...')
            console.log(err)
        }
    }

    const logoutFun = () => {
        localStorage.removeItem('username')
        navigate('/')
    }

    const myContextValue = {
        navigate,
        input, setInput,
        filteredData, SearchFun,

        productData,

        userRegisterForm,

        username, setUsername,
        email, setEmail,
        password, setPassword,

        loginUsername, setLoginUsername,
        loginPassword, setLoginPassword,

        userLoginForm, logoutFun

    }

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default MyContextProvider