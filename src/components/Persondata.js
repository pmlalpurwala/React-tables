import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Persondata = ({
  per,
  person,
  currentScreen,
  setCurrentScreen,
  setPerson,
}) => {
  //console.log(per);

  return (
    <>
      {currentScreen ? (
        <>
          <tr>
            <td>Name</td>
            <td>{per.name}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() =>
                  setPerson(
                    person.filter((person1) => person1.name !== per.name)
                  )
                }
              >
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{per.age}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() =>
                  setPerson(
                    person.filter((person1) => person1.name !== per.name)
                  )
                }
              >
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>Friends</td>
            <td>{per.friends}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() =>
                  setPerson(
                    person.filter((person1) => person1.name !== per.name)
                  )
                }
              >
                Delete
              </button>
            </td>
          </tr>{" "}
        </>
      ) : (
        <>
          {" "}
          <tr>
            <td>name</td>
            <td>{per.name}</td>
          </tr>
          <tr>
            <td>age</td>
            <td>{per.age}</td>
          </tr>
          <tr>
            <td>friends</td>
            <td>{per.friends}</td>
          </tr>{" "}
        </>
      )}
    </>
  );
};

export default Persondata;
