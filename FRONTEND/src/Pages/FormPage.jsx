import React, { useContext } from 'react'
import { myContext } from '../Context/MyContextProvider'

const FormPage = () => {

    const { userRegisterForm, username, setUsername, email, setEmail, password, setPassword,loginUsername, setLoginUsername, loginPassword, setLoginPassword, userLoginForm } = useContext(myContext)

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h4>Register Form</h4>

                        <form onSubmit={userRegisterForm}>

                            <label className='form-label'>Enter Username</label>
                            <input type="text" className='form-control mb-4' required value={username} onChange={(e) => setUsername(e.target.value)} />
                            
                            <label className='form-label'>Enter Email</label>
                            <input type="email" className='form-control mb-4' value={email} onChange={(e) => setEmail(e.target.value)} required />

                            <label className='form-label'>Enter Password</label>
                            <input type="password" className='form-control mb-4' required value={password} onChange={(e) => setPassword(e.target.value)} />

                            <input type="submit" value='Register' className='btn btn-primary form-control' />

                        </form>
                    </div>

                    <div className="col-lg-6">
                        <h4>Login Form</h4>

                        <form onSubmit={userLoginForm}>

                            <label className='form-label'>Enter Username</label>
                            <input type="text" className='form-control mb-4' value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />

                            <label className='form-label'>Enter Password</label>
                            <input type="password" className='form-control mb-4' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />

                            <input type="submit" value="Login" className='btn btn-primary form-control' />

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormPage