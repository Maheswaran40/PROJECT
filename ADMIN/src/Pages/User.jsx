import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { myContext } from "../Context/ContextProvider";

const User = () => {

    const { userData, deleteUserFun } = useContext(myContext)

    return (
        <>
            <div className="container my-5">
                <div className="d-flex justify-content-between ">
                    <h1>Users</h1>
                    <Link to="/">
                        <button className="btn btn-primary">Admin Panel</button>
                    </Link>
                </div>

                <table className="table table-bordered border-primary text-center align-middle my-3">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.length === 0
                            ? 
                                <tr>
                                    <td colSpan='4'>No Users Found</td>
                                </tr>
                            :
                            userData.map((value, index) => (
                                <tr key={index}>
                                    <td>{value.username}</td>
                                    <td>{value.email}</td>
                                    <td>{value.password}</td>
                                    <td>
                                        <button className='btn btn-close' onClick={() => deleteUserFun(value._id)}></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default User;
