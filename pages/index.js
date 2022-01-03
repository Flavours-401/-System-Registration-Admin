/* eslint-disable react/jsx-no-target-blank */
import React from "react";
// import Link from "next/link";
import Login from "pages/auth/login.js";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
// import About_us from "./About_us";
// import { Container } from "next/app";
import Contact_us from "./Contact_us";

import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'
import Dashboard from "./admin/dashboard";

export default function Index() {
  const { user, login, logout } = useAuth();
  const { resources, loading, createResource, deleteResource } = useResource();
  console.log(user);
  return (
    <>
    
    {user ? (

    <>
    
              
     <IndexNavbar fixed />
      <section className="relative flex items-center h-screen pt-16 header max-h-860-px">
        <div className="container flex flex-wrap items-center mx-auto">
          <div className="w-full px-4 md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="pt-32 sm:pt-0">
              <h2 className="text-4xl font-semibold text-blueGray-600">
                Student Registration System - A powerful management system for staff and students.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Student Registration System is a place for students and teachers to manage their daily tasks and courses.
              </p>
              <div className="mt-12">
                
                {/* <Link
                  href="/auth/login"
                  target="_blank"
                  className="px-6 py-4 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none get-started focus:outline-none bg-blueGray-400 active:bg-blueGray-500 hover:shadow-lg"
                >
                  <a className="px-6 py-4 mt-12 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none get-started focus:outline-none bg-blueGray-400 active:bg-blueGray-500 hover:shadow-lg">
                    Login</a>
                </Link>
              */}
              </div>

            </div>
          </div>
        </div>
        <img
          className="absolute top-0 right-0 w-10/12 pt-16 -mt-48 b-auto sm:w-6/12 sm:mt-0 max-h-860-px"
          src="https://www.tailwindtoolbox.com/templates/hero.png"
          alt="..."
        />
      </section>

      <section className="relative pb-40 mt-48 md:mt-40 bg-blueGray-100">
        <div
          className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-current text-blueGray-100"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 px-12 ml-auto mr-auto -mt-32 md:w-6/12 lg:w-4/12 md:px-4">
              <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="https://www.carroll.edu/sites/default/files/styles/adaptive_800/public/content/resources/computer-labs/hero-image/computer-lab.jpg?itok=p28c0Yys"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 block w-full h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="fill-current text-blueGray-700"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Student Management System is a powerful tool that enables the college Director, teaching staff and students as well to register & manage their data through their learning Journey.
                  </h4>

                </blockquote>
              </div>
            </div>

            <div className="w-full px-4 md:w-6/12">
              <div className="flex flex-wrap">
                <div className="w-full px-4 md:w-6/12">
                  <div className="relative flex flex-col mt-4">
                    <div className="flex-auto px-4 py-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="mb-1 text-xl font-semibold">
                        Add and manage staff and student daily activates.
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        With daily analysis.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="flex-auto px-4 py-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="mb-1 text-xl font-semibold">
                        The Head of Department (Admin) have control and access on both Staff & Students.
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Admin has no restrictions to manage Data.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-6/12">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="flex-auto px-4 py-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="mb-1 text-xl font-semibold">Students can manage their session & select study topic for their courses.</h6>
                      <p className="mb-4 text-blueGray-500">
                        {/* Such as a student can select Django class from Python course. */}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="flex-auto px-4 py-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="mb-1 text-xl font-semibold">
                        Easy to register as a student and keep track of your studies. Add a course, choose a topic from that course and start learning.
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Teaching staff can control their students data in each class.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pb-20 mx-auto overflow-hidden">



        </div>


      </section>

      <Contact_us />
      <div style={{ width: "100%", height: "50px" }}>
        <Footer />

      </div>
                 
         
    </>
                      
             )         :( <Login login={login} user={user} /> )}
    
                
      
    </>
  );
}
