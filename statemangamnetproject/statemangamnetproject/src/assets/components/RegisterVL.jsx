import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegiNavBar from './RegistervlNav';
import { addVehicledetails } from './axiosMA';


const RegisterVL = () => {

    const [formData, setFormData] = useState({
        vehicleType: '',
        vehicleCompany: '',
        vehicleModel: '',
        purchaseDate: '',
    })

    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await addVehicledetails(formData);
            navigate('/dashboard')
        }
        catch(error){
            console.error("Error adding vehicle details:", error);
        }
    }

    const myStyles = {
        marginTop: "40px", marginLeft: '3%', marginBottom: "40px"
    };

    return (
        <>
            <RegiNavBar />

            <div className='row'>
                <div className='card col-sm-6 shadow' style={myStyles}>
                    <div className='card-body' style={{ marginBottom: '30px' }}>
                        <div className='container mt-4'>
                            <h2 style={{ textAlign: 'center' }}>New Vehicle Registration</h2>

                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <label htmlFor="vehicleType" className='form-label'>Vehicle Type</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name="vehicleType"
                                        id="vehicleType"
                                        value={formData.vehicleType}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="vehicleCompany" className='form-label'> Vehicle Company</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name="vehicleCompany"
                                        id="vehicleCompany"
                                        value={formData.vehicleCompany}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="vehicleModel" className='form-label'>Vehicle Model</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        name="vehicleModel"
                                        id="vehicleModel"
                                        value={formData.vehicleModel}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="purchaseDate" className='form-label'>Purchase Date</label>
                                    <input
                                        type="date"
                                        className='form-control'
                                        name="purchaseDate"
                                        id="purchaseDate"
                                        value={formData.purchaseDate}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <Link to="/dashboard" className='btn btn-primary btn-lg' onClick={handleSubmit}>Register</Link>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to="/Dashboard" className='btn btn-primary btn-lg'>Back</Link>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}
export default RegisterVL;