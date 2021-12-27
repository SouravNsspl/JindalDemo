import React, { useState } from "react";
import "./style.css";
import Home from "./Home-1.png";
import Train from "./Home-2.png";
import Logo from "./Home-3.png";
import HomeNew from "./Homenew.jpg";

const Animation = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark text-white bg-primary">
          <div class="container-fluid">
            <a class="navbar-brand font-bold" href="#">
              JINDAL
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ float: "right", display: "flex", flex: "inherit" }}
            >
              <ul
                class="navbar-nav me-auto mb-2 mb-lg-0"
                style={{ float: "right" }}
              >
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {!toggle ? (
        <i
          style={{
            position: "absolute",
            top: "22rem",
            left: "80rem",
            cursor: "pointer",
            fontSize: "3.4rem",
            color: "black",
          }}
          onClick={() => setToggle(!toggle)}
          class="fas fa-arrow-circle-right"
        ></i>
      ) : (
        ""
        // <i
        //   style={{
        //     position: "absolute",
        //     top: "22rem",
        //     cursor: "pointer",
        //     fontSize: "3.4rem",
        //   }}
        //   onClick={() => setToggle(!toggle)}
        //   class="fas fa-arrow-circle-left"
        // ></i>
      )}

      {!toggle ? (
        <div
          className="fullImage"
          style={{
            backgroundImage: "url(" + Home + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            className="text-white "
            style={{
              display: "flex",
              fontFamily: "Roboto, sans-serif",
              //   flexDirection: "column",
              //   justifyContent: "center",
              //   alignItems: "center",
            }}
          >
            {" "}
            Complete Freight car solution
          </h1>

          <div
            className="text-white"
            style={{ position: "relative", top: "4rem", left: "-17rem" }}
          >
            {/* <span
              className=" bg-primary"
              style={{
                width: "40px",
                height: "30px",
                borderRadius: "50%",
                display: "inline-block",
                marginRight: "1rem",
                cursor: "pointer",
              }}
            ></span>
            <span
              className=" bg-primary"
              onClick={() => setToggle(!toggle)}
              style={{
                width: "40px",
                height: "30px",
                borderRadius: "50%",
                display: "inline-block",
                cursor: "pointer",
              }}
            ></span> */}
            {/* {!toggle ? (
              <button  style={{}}onClick={() => setToggle(!toggle)}>Right</button>
            ) : (
              <button onClick={() => setToggle(!toggle)}>left</button>
            )} ,   fontFamily: "Roboto, sans-serif",*/}
          </div>
          {/* <h2 className="text-white"> INDIAN ENGINEERING EXCELLENCE</h2> */}
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <figure class="icon-cards " style={{ marginTop: "11rem" }}>
            <div className="icon-cards__contentani">
              <div
                class="
            icon-cards__item
            d-flex
            align-items-center
            justify-content-center
          "
              >
                <img
                  src={Home}
                  alt=""
                  style={{ width: "83rem", marginTop: "4rem" }}

                  //   style={{ opacity: "0.9" }}
                />
                <div
                  style={{
                    position: "relative",
                    top: "14rem",
                    left: "-24rem",
                    display: "flex",
                  }}
                >
                  {/* <span
                    className=" bg-primary"
                    style={{
                      width: "40px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "1rem",

                      cursor: "pointer",
                    }}
                  ></span>
                  <span
                    className=" bg-primary"
                    onClick={() => setToggle(!toggle)}
                    style={{
                      width: "40px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "inline-block",
                      cursor: "pointer",
                    }}
                  ></span> */}
                </div>
                <span
                  class="h1 "
                  style={{
                    position: "absolute",
                    // left: "-12rem",
                    top: "16rem",
                    fontSize: "2rem",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  INDIAN ENGINEERING EXCELLENCE 1
                </span>
              </div>
              <div
                class="
            icon-cards__item
             d-flex
            align-items-center
            justify-content-center
          "
              >
                <img
                  src={Train}
                  alt=""
                  style={{
                    width: "83rem",
                    marginTop: "4rem",
                  }}

                  //   style={{ opacity: "0.9" }}
                />
                <span
                  class="h1 text-center"
                  style={{
                    position: "absolute",
                    // left: "-12rem",
                    top: "16rem",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  <p style={{ fontSize: "2rem" }}>
                    INDIAN ENGINEERING EXCELLENCE 2
                  </p>
                </span>
              </div>
              <div
                class="
            icon-cards__item
            d-flex
            align-items-center
            justify-content-center
          "
              >
                <img
                  src={HomeNew}
                  alt=""
                  style={{
                    width: "83rem",
                    // marginLeft: "2rem",
                    marginTop: "3rem",

                    // height: "37rem",
                  }}

                  //   style={{ opacity: "0.9" }}
                />
                <span
                  class="h1 text-center"
                  style={{
                    position: "absolute",
                    // left: "-12rem",
                    top: "16rem",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "2rem",
                  }}
                >
                  INDIAN ENGINEERING EXCELLENCE 3
                </span>
              </div>
            </div>
          </figure>
        </div>
      )}
    </>
  );
};

export default Animation;
