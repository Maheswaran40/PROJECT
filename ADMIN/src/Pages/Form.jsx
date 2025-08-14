import React, { useContext } from 'react'
import { myAsset } from '../assets/assets'
import { myContext } from '../Context/ContextProvider'
import { Link } from 'react-router-dom'

const Form = () => {

    const { name, setName, category, setCategory, desc, setDesc, price, setPrice, imageFun, previewImg, submitFun } = useContext(myContext)

    return (
        <>
            <div className="container my-3">
                <div className='d-flex justify-content-between'>
                    <h1>Add Products</h1>
                    <div>
                        <Link to='/product'>
                        <button className='btn btn-primary'>View Products</button>
                        </Link>
                        <Link to='/user'>
                            <button className='ms-3 btn btn-primary'>View User</button>
                        </Link>
                    </div>
                </div>

                <form onSubmit={submitFun}>

                    <label className='form-label'>Upload Image</label>
                    <input type="file" className='form-control mb-3' id='file' hidden onChange={imageFun} />

                    <br />

                    <label htmlFor='file' className='form-label'>
                        <img src={previewImg ? previewImg : myAsset.uploadImg} alt="" height='120' width='120' />
                    </label>

                    <br />

                    <label className='form-label'>Enter Product Name</label>
                    <input type="text" className='form-control mb-3' value={name} onChange={(e) => setName(e.target.value)} />

                    <label className='form-label'>Enter Product Category</label>
                    <select className='form-control mb-3' value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option hidden>Choose</option>
                        <option>Shop</option>
                        <option>New Arrival</option>
                    </select>

                    <label className='form-label'>Enter Product Desc</label>
                    <input type="text" className='form-control mb-3' value={desc} onChange={(e) => setDesc(e.target.value)} />

                    <label className='form-label'>Enter Product Price</label>
                    <input type="text" className='form-control mb-3' value={price} onChange={(e) => setPrice(e.target.value)} />

                    <input type="submit" className='form-control btn btn-primary'/>

                </form>

            </div>
        </>
    )
}

export default Form