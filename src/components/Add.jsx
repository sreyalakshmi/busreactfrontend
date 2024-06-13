import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    const[data,changedata]=useState(
        {
        "busname":"",
        "route":"",
        "busno":"",
        "drivername":""
            
        }
)
const inputHandler=(event)=>{
    changedata({...data,[event.target.name]:event.target.value},[])
}
const readvalue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/add",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("successfully added")
            } else {
                alert("error")
            }
        }
    ).catch(
        (error)=>{

            console.log(error)
        }
    )
   
}
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Bus name</label>
                            <input type="text" className="form-control" name="busname" value={data.busname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Bus route</label>
                        <input type="text" className="form-control" name="route" value={data.route} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Bus no</label>
                        <input type="text" className="form-control" name="busno" value={data.busno} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Driver name</label>
                        <input type="text" className="form-control" name="drivername" value={data.drivername} onChange={inputHandler} />
                        </div>  
                    </div><br />
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readvalue}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add