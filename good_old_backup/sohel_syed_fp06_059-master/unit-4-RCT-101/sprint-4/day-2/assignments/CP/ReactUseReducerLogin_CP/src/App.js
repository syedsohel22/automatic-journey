import { useState, useReducer } from "react";
import "./App.css";

const initialState = {
  email: "",
  password: "",
};

// const email = (email) => ({
//   type: "email",
//   payload: email,
// });
//should have the cases "email", "password", and "reset", along with the default cases
const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return {
        ...state,
        email: action.value,
      };

    case "password":
      return {
        ...state,
        password: action.value,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.
  const [state, dispatch] = useReducer(reducer, initialState);
  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState({});
  console.log("state", state);

  const handlesubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      ...state,
    });
    dispatch({ type: "reset" });
  };
  console.log(submittedData);
  return (
    <div className="App">
      <h2>useReducer Hook</h2>
      <form
        className="form-wrapper"
        data-testid="form-wrapper"
        onSubmit={handlesubmit}
      >
        <div className="useremail-wrapper">
          <label>User Email</label>
          <input
            type="email"
            data-testid="user-email"
            onChange={(e) =>
              dispatch({
                type: "email",
                value: e.target.value,
              })
            }
          />
        </div>
        <div className="userpassword-wrapper">
          <label>User Password</label>
          <input
            type="password"
            data-testid="user-password"
            onChange={(e) =>
              dispatch({
                type: "password",
                value: e.target.value,
              })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* IF there is data in the submittedData variable after submitting the form, show the data here ELSE show the No details found div. */}
      {submittedData.email && submittedData.password ? (
        <div>
          <div data-testid="submitted-data-email">
            User Email:{submittedData.email}
          </div>
          <div data-testid="submitted-data-password">
            User Password:{submittedData.password}
          </div>
        </div>
      ) : (
        <div data-testid="no-details-container">no details found</div>
      )}
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };
