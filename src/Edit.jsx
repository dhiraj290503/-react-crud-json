import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {

  var nav = useNavigate()

  // 3 state define 
  const[data, setData]=useState({pname: "",
    pprice: "",
    pcategory: "",
    pbrand: ""})



  //1 Access id data 
  const { id } = useParams();
  
  // 2 fetch data from id 
  const fetchProducts = async () => {
    try {
      const result = await axios.get(`http://localhost:3000/Products/${id}`);
      // console.log(result.data);

      // 4 set data
      setData({pname:result.data.pname,pprice:result.data.pprice,pcategory:result.data.pcategory,pbrand:result.data.pbrand})

    } catch (error) {}
  };

  useEffect(() => {
    fetchProducts();
  },[]);

  
  // 5
  const updateHandler=(e)=>{
    console.log(e.target.value);
    console.log(e.target.name);

    // set new and updated data 
    setData({...data,[e.target.name]:e.target.value})
    
    
  }
  
  console.log(data);


  // 6 
  const updateForm=async(e)=> {
    e.preventDefault()
    alert("data updated succesfully")
    // console.log(data);
   
    // 7 send updated data 
      await axios.put(`http://localhost:3000/Products/${id}`,data)

      //8 after updating data redirect to /userdata 
            nav('/userdata')
      
    
  }

  return (
    <>
      <h1 className="fw-bold text-center text-warning p-4 mb-3">Edit Product - ID {id}</h1>
      <hr />

      <form action="" onSubmit={(e)=>updateForm(e)}>
        <div className="container-fluid my-5">
          <div className="row  p-4 mx-auto rounded-3 shadow-lg">
            <div className="col-md-12 mt-3">
              <label htmlFor="">Update Product Name</label>
              <input
                type="text"
                name="pname"
                id="pname"
                value={data.pname}
                onChange={(e)=>updateHandler(e)}
                className="form-control"
              />
            </div>

            <div className="col-md-12 mt-3">  
              <label htmlFor="">Update Product Price</label>
              <input
                type="text"
                name="pprice"
                id="pprice"
                value={data.pprice}
                className="form-control"
                onChange={(e)=>updateHandler(e)}
              />
            </div>

            <div className="col-md-12 mt-3">
              <label htmlFor="">Update Product Catogery</label>
              <select
                className="form-control"
                name="pcategory"
                id="pcategory"
                value={data.pcategory}
                onChange={(e)=>updateHandler(e)}
              >
                <option value="None">_Select_</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Vegi n fruits">Vegi n fruits</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="col-md-12 mt-3">
              <label htmlFor="">Update Choose Product brand</label>
              <select
                className="form-control"
                name="pbrand"
                id="pbrand"
                value={data.pbrand}
                onChange={(e)=>updateHandler(e)}
              >
                <option value="None">_Select_</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Sony">Sony</option>
                <option value="Oneplus">Oneplus</option>
                <option value="Others">Others</option>
                
              </select>
              
            </div>

            <div className="col-md-12 text-center ">
              <button className="btn btn-primary  fw-bold my-4 px-4">
                Get A Quote
              </button>
            </div>
          </div>
        </div>
      </form>

    </>
  );
};

export default Edit;
