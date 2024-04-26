import Produkte from "../components/Produkte.jsx";
import { DATA } from "../products.js";

const produktImg1 = "/produktImg1.jpg";
const produktImg2 = "/produktImg2.jpg";
const produktImg3 = "/produktImg3.jpg";

function Products() {
  return (
    <>
      <div className="flex justify-center h-[565px]">
        <div className="justify-center flex gap-10 md:gap-20 lg:gap-32">
          {DATA.map((produkt, i) => {
            return <Produkte key={i} data={produkt} />;
          })}
        </div>
      </div>
      <h1 className="text-6xl font-bold text-center my-8 text-gray-900">
        Product Pictures
      </h1>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        <div className="opacity-100 md:opacity-70 md:hover:opacity-100 transform md:hover:scale-105 transition duration-300 ease-in-out">
          <img
            className="rounded-md shadow-md mx-auto"
            src={produktImg1}
            alt="Black Product Image"
          />
        </div>
        <div className="opacity-100 md:opacity-70 md:hover:opacity-100 transform md:hover:scale-105 transition duration-300 ease-in-out">
          <img
            className="rounded-md shadow-md mx-auto"
            src={produktImg2}
            alt="Blue Product Image"
          />
        </div>
        <div className="opacity-100 md:opacity-70 md:hover:opacity-100 transform md:hover:scale-105 transition duration-300 ease-in-out">
          <img
            className="rounded-md shadow-md mx-auto"
            src={produktImg3}
            alt="Grey Product Image"
          />
        </div>
      </div>
    </>
  );
}

export default Products;
