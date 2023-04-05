import React from "react";
import ReactDOM from "react-dom";


class Home extends React.Component {
  

  render() {
    return  (
    <div className="bg-gray-50 min-h-screen">
      
    {/* Motivational Quotes */}
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Motivational Quotes</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          rhoncus scelerisque sem, nec congue ligula efficitur vel. Donec
          ullamcorper volutpat dui, vel rhoncus quam tempor ut.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            Generate Quote
          </button>
        </div>
      </div>
    </div>

    {/* Sports News */}
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Sports News</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          rhoncus scelerisque sem, nec congue ligula efficitur vel. Donec
          ullamcorper volutpat dui, vel rhoncus quam tempor ut.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            Read More
          </button>
        </div>
      </div>
    </div>

    {/* Weather */}
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Weather Information</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          rhoncus scelerisque sem, nec congue ligula efficitur vel. Donec
          ullamcorper volutpat dui, vel rhoncus quam tempor ut.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            Check Weather
          </button>
        </div>
      </div>
    </div>

    {/* Health Tips */}
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Health Tips</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          rhoncus scelerisque sem, nec congue ligula efficitur vel. Donec
          ullamcorper volutpat dui, vel rhoncus quam tempor ut.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            Get Tips
          </button>
        </div>
      </div>
    </div>
  </div>
);
  }
}


export default Home; 