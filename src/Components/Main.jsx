import React, { useState } from "react";

const Main = ({ allProducts, allProductsGet }) => {
  console.log(allProducts);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const cat = e.target.category.value;
    const img = e.target.img.value;
    const price = e.target.price.value;

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: name,
        price: price,
        description: description,
        image: img,
        category: cat,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  const handleEdit = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  const handleDelete = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <div>
        <input
          name="search"
          type="text"
          placeholder="Filter products..."
          class="search"
          id="lws-searchBook"
        />
        <select class="lws-sort" id="lws-sortBook" name="text-input">
          <option value="">Nothing</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <div className="grid grid-cols-2">
          {allProducts?.map((product, indx) => {
            return (
              <>
                <div key={indx} className="">
                  <div className=" border">
                    <div>
                      <img
                        style={{
                          height: "100px",
                          width: "100px",
                        }}
                        src={product?.image}
                        alt=""
                      />
                    </div>
                    <div>
                      <h1>{product?.title}</h1>
                      <p>{product?.price}</p>
                      <p>{product?.category}</p>
                    </div>
                    <div className="m-4">
                      <button className="border rounded" type="submit">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="border rounded"
                        type="submit"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div>
          <form onSubmit={(e) => handleUpdate(e)} className="m-1">
            <input
              name="name"
              className="border"
              placeholder="Product Name"
              type="text"
            />
            <input name="description" type="text" placeholder="Description" />
            <select name="category" id="cars">
              <option value="electronics">electronics</option>
              <option value="jewelary">jewelary</option>
              <option value="mens">mens</option>
              <option value="womens">womens</option>
            </select>
            <input name="img" type="text" placeholder="Image Url" />
            <input name="price" type="text" placeholder="Price" />
            <button className="border rounded" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
