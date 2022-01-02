/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import About_us from "./About_us";
import { Container } from "next/app";
import Contact_us from "./Contact_us";

export default function Index() {
  return (
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
                <Link
                  href="/auth/login"
                  target="_blank"
                  className="px-6 py-4 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none get-started focus:outline-none bg-blueGray-400 active:bg-blueGray-500 hover:shadow-lg"
                >
                  <a className="px-6 py-4 mt-12 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none get-started focus:outline-none bg-blueGray-400 active:bg-blueGray-500 hover:shadow-lg"
                >Login</a>
                </Link>
             
              </div>
              {/* <button
                className="px-6 py-4 mt-12 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none get-started focus:outline-none bg-blueGray-400 active:bg-blueGray-500 hover:shadow-lg"

              >
               <h1 className="title">
                  Read{' '}
                  <Link href="/posts/first-post">
                    <a>this page!</a>
                  </Link>
                </h1>
                Login
              </button> */}
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
          {/* <div className="flex flex-wrap items-center"> */}
            {/* <div className="w-full px-12 mt-48 ml-auto mr-auto md:w-4/12 md:px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                <i className="text-xl fas fa-sitemap"></i>
              </div>
              <h3 className="mb-2 text-3xl font-semibold leading-normal">
                SMS-CSS Components
              </h3>
              <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-blueGray-600">
                SMS-CSS Components
              </p>
              <div className="block pb-6">
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Buttons
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Inputs
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Labels
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Menus
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Navbars
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Pagination
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Progressbars
                </span>
                <span className="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0">
                  Typography
                </span>
              </div>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
                target="_blank"
                className="font-bold transition-all duration-150 ease-linear text-blueGray-700 hover:text-blueGray-500"
              >
                View All{" "}
                <i className="ml-1 leading-relaxed fa fa-angle-double-right"></i>
              </a>
            </div>  
            <div className="w-full px-4 mt-32 ml-auto mr-auto md:w-5/12">
              <div className="relative flex flex-col w-full min-w-0 mt-48 mb-6 md:mt-0">
                <img
                  alt="..."
                  src="/img/component-btn.png"
                  className="absolute w-full align-middle rounded shadow-lg max-w-100-px left-145-px -top-29-px z-3"
                />
                <img
                  alt="..."
                  src="/img/component-profile-card.png"
                  className="absolute w-full align-middle rounded-lg shadow-lg max-w-210-px left-260-px -top-160-px"
                />
                <img
                  alt="..."
                  src="/img/component-info-card.png"
                  className="absolute w-full align-middle rounded-lg shadow-lg max-w-180-px left-40-px -top-225-px z-2"
                />
                <img
                  alt="..."
                  src="/img/component-info-2.png"
                  className="absolute w-full align-middle rounded-lg shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src="/img/component-menu.png"
                  className="absolute w-full align-middle rounded shadow-lg max-w-580-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src="/img/component-btn-pink.png"
                  className="absolute w-full align-middle rounded shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div> */}

          {/* <div className="flex flex-wrap items-center pt-0">
            <div className="w-full px-4 mt-32 ml-auto mr-auto md:w-6/12">
              <div className="relative flex flex-wrap justify-center">
                <div className="w-full px-4 my-4 lg:w-6/12">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="p-8 text-center bg-red-600 rounded-lg shadow-lg  hover:opacity-100 duration-300">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md "
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                      />
                      <p className="mt-4 text-lg font-semibold text-white ">
                        Latest News
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="p-8 mt-8 text-center rounded-lg shadow-lg bg-lightBlue-500">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                       Semester Calendar
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="p-8 mt-8 text-center rounded-lg shadow-lg bg-blueGray-700">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                        Activites
                      </p>
                    </div>
                  </a>
                </div>
                <div className="w-full px-4 my-4 lg:w-6/12 lg:mt-16">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="p-8 text-center bg-yellow-500 rounded-lg shadow-lg">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                        Discover Campus
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="p-8 mt-8 text-center bg-red-700 rounded-lg shadow-lg">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                        Volunteer with us
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="p-8 mt-8 text-center rounded-lg shadow-lg bg-emerald-500">
                      <img
                        alt="..."
                        className="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                      />
                      <p className="mt-4 text-lg font-semibold text-white">
                        Study Programs
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div> */}

            {/* <div className="w-full px-12 mt-48 ml-auto mr-auto md:w-4/12 md:px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center bg-white rounded-full shadow-lg text-blueGray-500">
                <i className="text-xl fas fa-drafting-compass"></i>
              </div>
              <h3 className="mb-2 text-3xl font-semibold leading-normal">
                Javascript Components
              </h3>
              <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-blueGray-600">
                In order to create a great User Experience some components
                require JavaScript. In this way you can manipulate the elements
                on the page and give more options to your users.
              </p>
              <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-blueGray-600">
                We created a set of Components that are dynamic and come to help
                you.
              </p>
              
            </div>
          </div> */}
        </div>


      </section>
     



      <Contact_us/>
      <div style={{width: "100%", height: "50px" }}>
      <Footer/>

</div>
    </>
  );
}
