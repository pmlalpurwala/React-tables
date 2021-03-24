import React from "react";
import { useState } from "react";
import Persondata from "./Persondata";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Screen1 = ({ person, setPerson, currentScreen, setCurrentScreen }) => {
  // console.log(person[0].name);

  const handleAddPerson = () => {
    let name = prompt("Enter your name");
    let age = prompt("Enter your age");
    let friends = prompt("Enter your friend");
    let obj = { name, age, friends };
    setPerson([...person, obj]);
    // setCurrentScreen(false);
  };

  return (
    <div>
      {currentScreen ? (
        <>
          <h1>Screen 2</h1>
          <button
            className="btn btn-success"
            onClick={() => setCurrentScreen(false)}
          >
            Back
          </button>
          <table className="table table-bordered">
            <tr>
              <th>Name</th>
              <th>Value</th>
              <tn>....</tn>
            </tr>

            {person.map((per) => {
              return (
                <Persondata
                  per={per}
                  person={person}
                  setPerson={setPerson}
                  currentScreen={currentScreen}
                  setCurrentScreen={setCurrentScreen}
                />
              );
            })}

            <tr>
              <button className="btn btn-primary" onClick={handleAddPerson}>
                Add new row
              </button>
            </tr>
          </table>
        </>
      ) : (
        <>
          <h1>Screen 1</h1>
          <table className="table table-bordered">
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>

            {person.map((per) => {
              return (
                <Persondata
                  per={per}
                  person={person}
                  setPerson={setPerson}
                  currentScreen={currentScreen}
                  setCurrentScreen={setCurrentScreen}
                />
              );
            })}
          </table>
        </>
      )}

      <button
        className="btn btn-success"
        onClick={() => setCurrentScreen(true)}
      >
        Edit
      </button>
    </div>
  );
};

export default Screen1;
