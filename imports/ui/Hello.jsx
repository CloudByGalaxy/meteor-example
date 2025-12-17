import React, { useState } from 'react';
import MeteorLogo from "./meteor-logo.svg";

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="bg-white shadow sm:rounded-lg mb-4">
      <div className="px-4 py-5 sm:p-6">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center">
              <h1 className="text-3xl text-gray-900 font-bold">
                Welcome to Meteor!
              </h1>
              <div>
                <MeteorLogo width={50} height={50} />
              </div>
            </div>
            <div className="mt-2 max-w-xl text-gray-500 text-lg">
              <p>
                You've pressed the button <b>{counter}</b> times.
              </p>
            </div>
          </div>
          <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
            <button
              onClick={increment}
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-lg"
            >
              Click Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};
