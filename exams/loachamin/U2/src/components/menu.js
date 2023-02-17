import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const menu = () => {
  return (
    <div className="container">
      <br></br>
      <div className="d-flex justify-content-evenly row">
        <div className="col-lg-3 col-6">
          <div class="card text-bg-info  mb-3">
            <a href="./usersForm" class="btn btn-info">
              <div class="card-body">
                <div className="">
                  <h5 class="card-title">Edificios </h5>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-shopping-cart-plus"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                    <path d="M15 6h6m-3 -3v6" />
                  </svg>
                </div>
                Ver
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
