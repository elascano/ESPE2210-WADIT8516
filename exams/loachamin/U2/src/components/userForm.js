import React, { useState } from "react";
import "../css/style.css";
  function UserForm() {
    const [product, setProduct] = useState({
      id: "",
      description: "",
      address: "",
    });
    const handleChange = (e) => {
      setProduct({ ...product, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(
          "http://54.87.168.114:3009/iSoftware/post/Building",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
      setProduct({
        id: "",
        description: "",
        address: "",
      });
    };
  
    return (
      <div>
        <div class="card-body">
          <div class="  d-flex flex-row-reverse">
            <ol class="breadcrumb float-sm-left ">
              <li class="breadcrumb-item">
                <a href="./principal">Inicio</a>
              </li>
              <li class="breadcrumb-item">
                <a href="./productsMenu">Menú</a>
              </li>
              <li class="breadcrumb-item active">Añadir Edificio</li>
            </ol>
          </div>
          <h3 className="text-center">Edificio</h3>
          <div className="col-auto text-center"></div>
        </div>
  
        <div class="container-fluid content" clear="right">
          <form class="row g-3 formulario text-bg-dark" onSubmit={handleSubmit}>
            <h4 class="card-title ">Agregar un nuevo Edificio</h4>
            <div class="col-md-2">
              <label>ID</label>
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  name="id"
                  required="requiered"
                  value={product.id}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col-md-3">
              <label>Descripción</label>
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  name="description"
                  required="requiered"
                  value={product.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col-md-3">
              <label>Dirección</label>
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control "
                  name="address"
                  required="requiered"
                  value={product.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div class="col-12">
              <button
                type="submit"
                class="btn btn-success"
              >
                Guardar
              </button>
              <button class="btn">
                <a class=" btn btn-danger" href="./usersMenu">
                  Regresar
                </a>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

export default UserForm;
