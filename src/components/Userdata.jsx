import React, { useEffect, useState } from "react";
import "./card.css";

//1 import axios
import axios from "axios";
import { NavLink } from "react-router-dom";

const Userdata = () => {
  const [data, setData] = useState([]);
  // *********************
  //  2 api calling
  const FetchData = async () => {
    const result = await axios.get("http://localhost:3000/Products");
    // console.log(result.data);
    setData(result.data);
  };
  useEffect(() => {
    FetchData();
  }, []);
  // **************

  console.log(data);

  // delete data
  const deleteData = async (id, pname) => {
    try {
      alert(`sucessfully deleted ${pname}`);
      const result = data.filter((val) => val.id !== id);
      setData(result);

      await axios.delete(`http://localhost:3000/Products/${id}`);
    } catch (error) {
      console.log("error occured" + error);
    }
  };

  // edit data
  const editData = (id) => {
    alert("edit ur data" + id);
  };

  return (
    <>
      <h1 className=" p-4 mb-3 text-center text-warning">Products</h1>  
      <div className="container-fluid">
        <div className="row">
          {data.map((val, index) => {
            return (
              <div className="col-md-4 g-4" key={index}>
                <div
                  className="card product-card mx-auto border-0 shadow-lg"
                  style={{
                    width: "18rem",
                    borderRadius: "1.2rem",
                    overflow: "hidden",
                    background: "rgba(255, 255, 255, 0.35)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    color: "#111",
                  }}
                >
                  {/* Product image (optional) */}
                  <div
                    style={{
                      height: "160px",
                      background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
                    }}
                  />

                  <div className="card-body pt-3">
                    <span
                      className="text-uppercase fw-bold"
                      style={{
                        fontSize: "0.75rem",
                        letterSpacing: "1px",
                        color: "#4f46e5",
                      }}
                    >
                      {val.pbrand}
                    </span>
                    <h6
                      className="fw-semibold mt-1 mb-2"
                      style={{ fontSize: "1.1rem" }}
                    >
                      {val.pname}
                    </h6>
                    <p className="mb-0 fw-bold" style={{ fontSize: "1.25rem" }}>
                      ₹{val.pprice}
                    </p>
                  </div>

                  <div
                    className="card-footer d-flex gap-2 p-3 m-auto"
                    style={{ background: "transparent", border: "none" }}
                  >

                    {/* edit button  */}
                   <NavLink to={`/edit/${val.id}`}> 
                      <i className="bi bi-pencil-square fw-bold fs-4 text-success">

                      </i>
                   </NavLink>


                    {/* delete button  */}
                    <i className="bi bi-trash3-fill fw-bold fs-4 text-danger"
                      
                      onClick={() => {
                        if (window.confirm("Are you sure?"))
                          deleteData(val.id, val.pname);
                      }}
                    >
                      
                    </i>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Userdata;
