import React from "react";

const EventManagementAllEventPage = () => {
  return (
    <div>
      <h1 className="text-2xl">All Event</h1>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col bg-blue-400 p-4">
          <div className="flex flex-col justify-start items-start py-4">
            <h1 className="text-black text-2xl">Test 1</h1>
            <p className="text-black text-left">
              Lorem ipsum testing Lorem ipsum testing Lorem ipsum testing Lorem
              ipsum testing Lorem ipsum testing Lorem ipsum testing Lorem ipsum
              testing Lorem ipsum testing
            </p>
            <p className="text-black text-left">
              Lorem ipsum testing Lorem ipsum testing Lorem ipsum testing Lorem
              ipsum testing Lorem ipsum testing Lorem ipsum testing Lorem ipsum
              testing Lorem ipsum testing
            </p>
            <p className="text-black text-left">
              Lorem ipsum testing Lorem ipsum testing Lorem ipsum testing Lorem
              ipsum testing Lorem ipsum testing Lorem ipsum testing Lorem ipsum
              testing Lorem ipsum testing
            </p>
          </div>
          <div className="flex flex-row justify-center">
            <h1>Test 1</h1>
            <h1>Test 2</h1>
            <h1>Test 3</h1>
            <h1>Test 4</h1>
          </div>
          <div className="flex flex-row justify-center">
            <h1>Test 1</h1>
            <h1>Test 2</h1>
            <h1>Test 3</h1>
            <h1>Test 4</h1>
          </div>
        </div>
        <div className="p-2"></div>
        <div className="flex p-4 bg-red-400">
          <div className="flex flex-row justify-center">
            <h1>Test 1</h1>
            <h1>Test 2</h1>
            <h1>Test 3</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventManagementAllEventPage;
