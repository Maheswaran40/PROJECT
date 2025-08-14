import React, { useContext } from 'react' 
import { Link } from 'react-router-dom'
import { myContext } from '../Context/ContextProvider'
import { myAsset } from '../assets/assets'

const Products = () => {

    const { productData, deleteProductFun, updateFun,  updateName, setUpdateName, updateCategory, setUpdateCategory, updateDesc, setUpdateDesc, updatePrice, setUpdatePrice, updateImageFun, updatePreviewImg, updateSubmitFun } = useContext(myContext)

    return (
        <>
            <div className="container my-5">
                <div className='d-flex justify-content-between '>
                    <h1>Products</h1>
                    <Link to='/'>
                        <button className='btn btn-primary'>Admin Panel</button>
                    </Link>
                </div>

                <table className='table table-bordered border-primary text-center align-middle my-3'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {  
                        productData.length === 0 
                        ?
                        <tr>
                            <td className='text-center' colSpan='7'>No Products Found</td>

                        </tr>
                        :
                        
                        productData.map((value, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={value.img} alt="" height='80' width='80' />
                                </td>
                                <td>{value.name}</td>
                                <td>{value.category}</td>
                                <td>{value.price}</td>
                                <td>{value.desc}</td>
                                <td>
                                    <button className='btn btn-success' data-bs-toggle='modal' data-bs-target='#updateModal' onClick={() => updateFun(value._id)}>Update</button>
                                </td>
                                <td>
                                    <button className='btn btn-close' onClick={() => deleteProductFun(value._id)}></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="modal fade" id='updateModal'>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4>Update Data</h4>
                                <button className='btn btn-close' data-bs-dismiss='modal'></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={updateSubmitFun}>
                                    <label className='form-label'>Update Image</label>
                                    <input type="file" hidden id='file' onChange={updateImageFun} />
                                    <br />

                                    <label htmlFor='file'>
                                        <img src={updatePreviewImg ? updatePreviewImg : myAsset.uploadImg} alt="" height='130' width='130' />
                                    </label>

                                    <br />

                                    <label className='form-label'>Update Name</label>
                                    <input type="text" className='mb-2 form-control' value={updateName} onChange={(e) => setUpdateName(e.target.value)} />

                                    <label className='form-label'>Update Category</label>
                                    <select className='mb-2 form-control' value={updateCategory} onChange={(e) => setUpdateCategory(e.target.value)}>
                                        <option hidden>Chooose</option>
                                        <option>Shop</option>
                                        <option>New Arrival</option>
                                    </select>

                                    <label className='form-label'>Update Description</label>
                                    <input type="text" className='mb-2 form-control'  value={updateDesc} onChange={(e) => setUpdateDesc(e.target.value)}/>

                                    <label className='form-label'>Update Price</label>
                                    <input type="number" className='mb-2 form-control' value={updatePrice} onChange={(e) => setUpdatePrice(e.target.value)} />

                                    <input type="submit" className='form-control btn btn-success' />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products