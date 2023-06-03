import React from "react";

const Main = ({ allProducts }) => {
  console.log(allProducts);
  return (
    <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
      <div className="grid grid-cols-2">
        {allProducts?.map((product) => {
          return (
            <>
              <div className="">
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
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div>
        <form className="m-1">
          <input className="border" placeholder="Product Name" type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
      </div>
    </div>
  );
};

export default Main;
