import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const[data,changedata]=useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8080/viewall",data).then(
            (response)=>{
            console.log(response.data)
            changedata(response.data)
            }
        ).catch(
            (error)=>{
            console.log(error.message)
            }
        )
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Bus name</th>
                                    <th scope="col">Route</th>
                                    <th scope="col">Bus no</th>
                                    <th scope="col">Driver name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value,index)=>{
                                    return  <tr>
                                    <td scope="row">{value.busname}</td>
                                    <td>{value.route}</td>
                                    <td>{value.busno}</td>
                                    <td>{value.drivername}</td>
                                </tr>
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View