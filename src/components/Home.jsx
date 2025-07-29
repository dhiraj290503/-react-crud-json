import axios from "axios";
import React, { useState } from "react";

const Home = () => {

  // state define 
  const [data, setData] = useState({
    pname: "",
    pprice: "",
    pcategory: "",
    pbrand: "",
  });


  // catch data 
  const dataHandler = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    // set data 
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // save form and post data  
  const saveForm = async (e) => {
    try {
      e.preventDefault();
      alert("Product added");
// data post (send data)
      await axios.post("http://localhost:3000/Products",data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form action="" onSubmit={(e) => saveForm(e)}>
        <div className="container-fluid my-5">
          <div className="row  p-4 mx-auto rounded-3 shadow-lg">
            <div className="col-md-12 my-3">
              <label htmlFor="">Product Name</label>
              <input
                type="text"
                name="pname"
                id="pname"
                value={data.pname}
                onChange={(e) => dataHandler(e)}
                className="form-control"
              />
            </div>

            <div className="col-md-12 my-3">  
              <label htmlFor="">Product Price</label>
              <input
                type="text"
                name="pprice"
                id="pprice"
                value={data.pprice}
                className="form-control"
                onChange={(e) => dataHandler(e)}
              />
            </div>

            <div className="col-md-12 my-3">
              <label htmlFor="">Product Catogery</label>
              <select
                className="form-control"
                name="pcategory"
                id="pcategory"
                value={data.pcategory}
                onChange={(e) => dataHandler(e)}
              >
                <option value="None">_Select_</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Vegi n fruits">Vegi n fruits</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="col-md-12 my-3">
              <label htmlFor="">Choose Product brand</label>
              <select
                className="form-control"
                name="pbrand"
                id=""
                value={data.pbrand}
                onChange={(e) => dataHandler(e)}
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

export default Home;
