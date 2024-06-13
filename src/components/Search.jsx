import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Search = () => {
    const [data, changedata] = useState(
        {
            "busname": ""
        }
    )
    const [result, setresult] = useState([])

    const deleteCourse=(id)=>{
        let input={"_id":id}
        axios.post("http://localhost:8080/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("successfully deleted")
                } else {
                    alert("error")
                }
            }
        ).catch()

    }

    const inputHandler = (event) => {
        changedata({ ...data, [event.target.name]: event.target.value }, [])
    }
    const readvalue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(
            (response) => {
                setresult(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Bus name</label>
                            <input type="text" className="form-control" name="busname" value={data.busname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readvalue}>Search</button>
                        </div>
                    </div>
                    <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">bus name</th>
                                                <th scope="col">route</th>
                                                <th scope="col">bus no</th>
                                                <th scope="col">driver name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           {result.map(
                                            (value,index)=>{
                                                return  <tr>
                                                <td scope="row">{value.busname}</td>
                                                <td>{value.route}</td>
                                                <td>{value.busno}</td>
                                                <td>{value.drivername}</td>
                                                <td><button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>danger</button></td>
                                            </tr>
                                            }
                                           )}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search