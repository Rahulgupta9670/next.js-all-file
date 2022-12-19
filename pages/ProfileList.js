import React, { useEffect, useState } from "react";

import Head from "next/head";

import { useRouter } from 'next/router';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
import Navbaar from "./navbaar";

const ProfileList = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

// searching  start code


useEffect(()=>{
  const getToken = sessionStorage.getItem("jwt")

  console.log("getTokennnnnnn", getToken)
 
  const checkToken = axios
  .post("http://localhost:3000/api/users/checkSession", getToken)
  .then((res) => {
    console.log(res);
    console.log("token verfiyyyy", res)
 
  });
  



},[])
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = getProfile.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(getProfile);
    
    }
  };
  // searching  end code

  const [getProfile, setGetProfile] = useState();

  // get data in api
  const profileData = async () => {
    const data = await axios
      .get("http://localhost:3000/api/users")
      .then((res) => {
        console.log(res);
        console.log("shiow the data the foloow", res.data)
        setGetProfile(res.data);
      });
  };

  console.log("alldata..................", getProfile);
  //  const {data}= getProfile;

  useEffect(() => {
    profileData();
  }, []);

  useEffect(() => {}, [getProfile]);

  const tableDetails = [
    {
      id: 1,
      StoreId: "32531",
      StoreName: "	Piyush general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 2,
      StoreId: "32531",
      StoreName: "	shubham general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 3,
      StoreId: "32531",
      StoreName: "	nishant general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 4,
      StoreId: "32531",
      StoreName: "	sharma general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 5,
      StoreId: "32531",
      StoreName: "	Dharma general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 6,
      StoreId: "32531",
      StoreName: "Pawan general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 7,
      StoreId: "32531",
      StoreName: "	Dharma general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 8,
      StoreId: "32531",
      StoreName: "sahil general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 9,
      StoreId: "32531",
      StoreName: "	shubham general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 10,
      StoreId: "32531",
      StoreName: "	rahul general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 11,
      StoreId: "32531",
      StoreName: "	nishnat general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 12,
      StoreId: "32531",
      StoreName: "	sharma general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 13,
      StoreId: "32531",
      StoreName: "	Dharma general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 14,
      StoreId: "32531",
      StoreName: "Pawan general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 15,
      StoreId: "32531",
      StoreName: "	Dharma general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 16,
      StoreId: "32531",
      StoreName: "sahil general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 17,
      StoreId: "32531",
      StoreName: "	shubham general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 18,
      StoreId: "32531",
      StoreName: "	rahul general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
  ];

  //   const getProfile = [
  //     {
  //       id: 1,
  //       StoreId: "32531",
  //       StoreName: "	Piyush general Store",
  //       StoreCode: "Temp0027",
  //       RegionName: "West",
  //       CityName: "	Indore",
  //       DistributorName: "Vishal Enterprises",
  //       InactiveDate: "----",
  //       StoreStatus: "	Active",
  //       Action: "",
  //     },
  //     {
  //       id: 2,
  //       StoreId: "32531",
  //       StoreName: "	shubham general Store",
  //       StoreCode: "Temp0027",
  //       RegionName: "West",
  //       CityName: "	Indore",
  //       DistributorName: "Vishal Enterprises",
  //       InactiveDate: "----",
  //       StoreStatus: "	Active",
  //       Action: "",
  //     },
  //     {
  //       id: 3,
  //       StoreId: "32531",
  //       StoreName: "	nishant general Store",
  //       StoreCode: "Temp0027",
  //       RegionName: "West",
  //       CityName: "	Indore",
  //       DistributorName: "Vishal Enterprises",
  //       InactiveDate: "----",
  //       StoreStatus: "	Active",
  //       Action: "",
  //     },
  //     {
  //       id: 4,
  //       StoreId: "32531",
  //       StoreName: "	sharma general Store",
  //       StoreCode: "Temp0027",
  //       RegionName: "West",
  //       CityName: "	Indore",
  //       DistributorName: "Vishal Enterprises",
  //       InactiveDate: "----",
  //       StoreStatus: "	Active",
  //       Action: "",
  //     },
  //     {
  //       id: 5,
  //       StoreId: "32531",
  //       StoreName: "	Dharma general Store",
  //       StoreCode: "Temp0027",
  //       RegionName: "West",
  //       CityName: "	Indore",
  //       DistributorName: "Vishal Enterprises",
  //       InactiveDate: "----",
  //       StoreStatus: "	Active",
  //       Action: "",
  //     },
  //     {
  //       id: 6,
  //       StoreId: "32531",
  //       StoreName: "Pawan general Store",
  //       StoreCode: "Temp0027",
  //       RegionName: "West",
  //       CityName: "	Indore",
  //       DistributorName: "Vishal Enterprises",
  //       InactiveDate: "----",
  //       StoreStatus: "	Active",
  //       Action: "",
  //     },
  //     {
  //       id: 7,
  //       StoreId: "32531",
  //       StoreName: "	Dharma general Store",
  //       StoreCode: "Temp0027",
  //       RegionName: "West",
  //       CityName: "	Indore",
  //       DistributorName: "Vishal Enterprises",
  //       InactiveDate: "----",
  //       StoreStatus: "	Active",
  //       Action: "",
  //     },
  //     {
  //       id: 8,
  //       StoreId: "32531",
  //       StoreName: "sahil general Store",
  //       StoreCode: "Temp0027",
  //       RegionName: "West",
  //       CityName: "	Indore",
  //       DistributorName: "Vishal Enterprises",
  //       InactiveDate: "----",
  //       StoreStatus: "	Active",
  //       Action: "",
  //     },
  //     {
  //       id: 9,
  //       StoreId: "32531",
  //       StoreName: "	shubham general Store",
  //       StoreCode: "Temp0027",
  //       RegionName: "West",
  //       CityName: "	Indore",
  //       DistributorName: "Vishal Enterprises",
  //       InactiveDate: "----",
  //       StoreStatus: "	Active",
  //       Action: "",
  //     },
  //     {
  //       id: 10,
  //       StoreId: "32531",
  //       StoreName: "	rahul general Store",
  //       StoreCode: "Temp0027",
  //       RegionName: "West",
  //       CityName: "	Indore",
  //       DistributorName: "Vishal Enterprises",
  //       InactiveDate: "----",
  //       StoreStatus: "	Active",
  //       Action: "",
  //     },
  //     {
  //       id: 11,
  //       StoreId: "32531",
  //       StoreName: "	nishnat general Store",
  //       StoreCode: "Temp0027",
  //       RegionName: "West",
  //       CityName: "	Indore",
  //       DistributorName: "Vishal Enterprises",
  //       InactiveDate: "----",
  //       StoreStatus: "	Active",
  //       Action: "",
  //     },
  //     {
  //       id: 12,
  //       StoreId: "32531",
  //       StoreName: "	sharma general Store",
  //       StoreCode: "Temp0027",
  //       RegionName: "West",
  //       CityName: "	Indore",
  //       DistributorName: "Vishal Enterprises",
  //       InactiveDate: "----",
  //       StoreStatus: "	Active",
  //       Action: "",
  //     },
  //     {
  //       id: 13,
  //       StoreId: "32531",
  //       StoreName: "	Dharma general Store",
  //       StoreCode: "Temp0027",
  //       RegionName: "West",
  //       CityName: "	Indore",
  //       DistributorName: "Vishal Enterprises",
  //       InactiveDate: "----",
  //       StoreStatus: "	Active",
  //       Action: "",
  //     },
  //     {
  //       id: 14,
  //       StoreId: "32531",
  //       StoreName: "Pawan general Store",
  //       StoreCode: "Temp0027",
  //       RegionName: "West",
  //       CityName: "	Indore",
  //       DistributorName: "Vishal Enterprises",
  //       InactiveDate: "----",
  //       StoreStatus: "	Active",
  //       Action: "",
  //     },
  //     {
  //       id: 15,
  //       StoreId: "32531",
  //       StoreName: "	Dharma general Store",
  //       StoreCode: "Temp0027",
  //       RegionName: "West",
  //       CityName: "	Indore",
  //       DistributorName: "Vishal Enterprises",
  //       InactiveDate: "----",
  //       StoreStatus: "	Active",
  //       Action: "",
  //     },
  //     {
  //       id: 16,
  //       StoreId: "32531",
  //       StoreName: "sahil general Store",
  //       StoreCode: "Temp0027",
  //       RegionName: "West",
  //       CityName: "	Indore",
  //       DistributorName: "Vishal Enterprises",
  //       InactiveDate: "----",
  //       StoreStatus: "	Active",
  //       Action: "",
  //     },
  //     {
  //       id: 17,
  //       StoreId: "32531",
  //       StoreName: "	shubham general Store",
  //       StoreCode: "Temp0027",
  //       RegionName: "West",
  //       CityName: "	Indore",
  //       DistributorName: "Vishal Enterprises",
  //       InactiveDate: "----",
  //       StoreStatus: "	Active",
  //       Action: "",
  //     },
  //     {
  //       id: 18,
  //       StoreId: "32531",
  //       StoreName: "	rahul general Store",
  //       StoreCode: "Temp0027",
  //       RegionName: "West",
  //       CityName: "	Indore",
  //       DistributorName: "Vishal Enterprises",
  //       InactiveDate: "----",
  //       StoreStatus: "	Active",
  //       Action: "",
  //     },
  //   ];

  const EditCard = (obj) => {
    console.log("editid................", obj);
    Router.push({
      pathname: "/EditProfile",
      query: obj,
    });

    // Router.push("/EditProfile?id="+ id)
  };
  const removeSecond = async (itemId) => {
    // const items = getProfile.filter(item => item.id !== itemId);
    // setGetProfile({ items: items });
    console.log("isd-----", itemId);

    const data = await axios
      .post(`http://localhost:3000/api/users/${itemId}`)
      .then((res) => {
        console.log("delete your data----------", res.data);
        toast("delete your data");
        profileData();
        // setGetProfile(res.data);
      });
  };

  return (
    <>
      <Head>
        <title>One App Portal</title>
        <meta name="description" content="One App Portal" />
        <link rel="icon" href="/assets/images/logo.png" />
        <link href="/assets/font/SegoeUI.ttf" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      {/* <Navbaar/> */}
      <div className="content-page3 p-5">
        <div className="container-fluid bg-white rounded ">
          <div className="row mt- ">
            <div className="col-12">
              <div className="cardd mb-4 ">
                <div className="card-body p-2 px-3">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-sm-12 col-md-5 col-lg-5 col-xl-4">
                      <input
                        class="input-grey-rounded fs_10 "
                        type="text"
                        onChange={(e) => searchItems(e.target.value)}
                        placeholder="Search ......."
                      />
                    </div>
                    <div className="col-auto">
                      <div className="text-lg-end my-1 my-lg-0 h_90">
                        <button
                          type="print"
                          variant="contained"
                          className="h_90 me-1 fs_10 w-100 px-4 one rounded-pill"
                        >
                          {" "}
                          Export
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 table-responsive px-3 table_h ">
                  <table className="table table-bordered mb-1" id="dataTable">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile no</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchInput.length > 1
                        ? filteredResults.map((i, index) => {
                            return (
                              <tr>
                                <td>{i.name}</td>
                                <td>{i.email}</td>
                                <td>{i.mobile}</td>

                                <td>
                                  <p className="m-0">
                                    <a
                                      href="#"
                                      className=" p-1"
                                      title="edit"
                                      onClick={() => EditCard(i)}
                                    >
                                      <span className="material-icons link-success">
                                        edit
                                      </span>
                                    </a>

                                    <a
                                      href="#"
                                      onClick={() => removeSecond(i._id)}
                                      className="p-1"
                                      title="delete"
                                    >
                                      <span className="material-icons link-danger">
                                        delete
                                        <ToastContainer />
                                      </span>
                                    </a>
                                  </p>
                                </td>
                              </tr>
                            );
                          })
                        : getProfile &&
                          getProfile.map((i, index) => {
                            return (
                              <tr>
                                <td>{i.name}</td>
                                <td>{i.email}</td>
                                <td>{i.mobile}</td>

                                <td>
                                  <p className="m-0">
                                    <a
                                      href="#"
                                      className=" p-1"
                                      title="edit"
                                      onClick={() => EditCard(i)}
                                    >
                                      <span className="material-icons link-success">
                                        edit
                                      </span>
                                    </a>

                                    <a
                                      href="#"
                                      onClick={() => removeSecond(i._id)}
                                      className="p-1"
                                      title="delete"
                                    >
                                      <span className="material-icons link-danger">
                                        delete
                                        <ToastContainer />
                                      </span>
                                    </a>
                                  </p>
                                </td>
                              </tr>
                            );
                          })}
                    </tbody>
                  </table>
                </div>
                <div className="row px-3 ">
                  <div className="col-12">
                    <div className="row justify-content-between mt-1">
                      <div className="col-auto">
                        <form className="d-flex flex-wrap align-items-center">
                          <label
                            htmlFor="inputPassword2"
                            className="visually-hidden"
                          >
                            Search
                          </label>
                          <div className="w-100">
                            <div className="input-group flex-nowrap">
                              <h6 className="fs_10 mt-2">
                                Showing 1–12 of 75 results
                              </h6>
                              {/* <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Page No."
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                        />
                        <button
                          className="btn btn-outline-blue"
                          type="button"
                          id="button-addon2"
                        >
                          Go
                        </button>
                      </div> */}
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-auto">
                        <div className="text-lg-end my-1 my-lg-0">
                          <nav aria-label="Page navigation example">
                            <ul className="pagination">
                              <li className="page-item">
                                <a
                                  className="page-link btn-outline-blue fs_10"
                                  href="#"
                                >
                                  Previous
                                </a>
                              </li>
                              <li className="page-item">
                                <a
                                  className="page-link btn-outline-blue fs_10"
                                  href="#"
                                >
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a
                                  className="page-link btn-outline-blue fs_10"
                                  href="#"
                                >
                                  2
                                </a>
                              </li>
                              <li className="page-item">
                                <a
                                  className="page-link btn-outline-blue fs_10"
                                  href="#"
                                >
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a
                                  className="page-link btn-outline-blue fs_10"
                                  href="#"
                                >
                                  Next
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileList;
export async function getStaticProps(context) {
  return {
    props: {
      post: {},
    }, // will be passed to the page component as props
  };
}
