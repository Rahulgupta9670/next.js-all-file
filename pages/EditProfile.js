import axios from "axios";
import { Button } from "bootstrap";
import Head from "next/head";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Router, { useRouter } from 'next/router'
import { ToastContainer, toast } from "react-toastify";





const EditProfile = (props) => {

  // get id in edit user
  const router = useRouter()
  let user= router.query;
  console.log(router.query);
  // get end id in edit user

  const [upProfile, setUpProfile] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
 
  useEffect(() => {
    console.log("prosdd==============",router.query);
    setEmail(user.email)
    setMobile(user.mobile)
    setName(user.name)
// console.log("prosdd==============", props)

// profileData(router.query._id)
  }, []);

  // const profileData = async (id) => {
  //   const data = await axios
  //     .get(`http://localhost:3000/api/users/${id}`)
  //     .then((res) => {
  //       console.log("edit------------",res);
      
  //     });
  // };


  // start  update id useer form 
  const updatedd =async (e) =>{
    // e.preventDefault()
    let datas = {
      name :name,
      email:email,
      mobile:mobile
    
    }
    const  data = await axios.put(`http://localhost:3000/api/users/${user._id}`, datas).then((res)=>{
        console.log(res.data)
        toast("updated your profile")
        Router.push("/ProfileList")
        

    })
    // console.log("updateprofile", name , email, mobile)
  }
 

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
      <div>
        <div class="student-profile py-4">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
           
                <div class="card shadow-sm">
                  <div class="card-header bg-transparent text-center">
                    <img
                      class="profile_img"
                      src="https://placeimg.com/640/480/arch/any"
                      alt=""
                    />  
                    <h3>{user.name}</h3>
                  </div>
                  <div class="card-body">
                    <p class="mb-0">
                      <strong class="pr-3 me-4">Name</strong>{user.name}
                    </p>
                    <p class="mb-0">
                      <strong class="pr-1 me-4">Email:</strong>{user.email}
                    </p>
                    <p class="mb-0">
                      <strong class="pr-1 me-4">Mobile:</strong>{user.mobile}
                      <ToastContainer/>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="card shadow-sm">
                  <div class="card-header bg-transparent border-0">
                    <h3 class="mb-0">
                      <i class="far fa-clone pr-1"></i>General Information
                    </h3>
                  </div>
                  <div class="card-body pt-0">
                    <table class="table table-bordered">
                      <tr>
                        <th width="30%">Name</th>
                        <td width="2%">:</td>
                        <td><input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/> </td>
                      </tr>
                      <tr>
                        <th width="30%">Email </th>
                        <td width="2%">:</td>
                        <td><input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/></td>
                      </tr>
                      <tr>
                        <th width="30%">Mobile NO</th>
                        <td width="2%">:</td>
                        <td><input type="number" name="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/></td>
                      </tr>
                   
                 
                    <button onClick={()=>updatedd()} className="my-3 btn btn-danger"  type="btn">Profile Update</button>
                     
                    </table>
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

export default EditProfile;


