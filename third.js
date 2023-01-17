import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement=> Object => HTML (DOM)

//Code for class third and assignment

//1. Created a nested heading using React.createElement

const heading = React.createElement(
  "div",
  {
    id: "container",
  },
  [
    React.createElement(
      "div",
      {
        id: "title-1",
        key: 1,
      },
      "Heading 1"
    ),

    React.createElement(
      "div",
      {
        id: "title-2",
        key: 2,
      },
      [
        "Heading 2",
        React.createElement(
          "ul",
          {
            id: "ul",
            key: 4,
          },
          [
            React.createElement(
              "li",
              {
                id: "ul",
                key: 7,
              },
              "Home"
            ),

            React.createElement(
              "li",
              {
                id: "ul",
                key: 5,
              },
              "About Us"
            ),

            React.createElement(
              "li",
              {
                id: "ul",
                key: 6,
              },
              "Contact Us"
            ),
          ]
        ),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "title-3",
        key: 3,
      },
      "Heading 3"
    ),
  ]
);

//JSX=React.createElement=> Object => HTML (DOM) done by babel

const Head = () => <h1>Hello from JSX</h1>;

//functional Component

const Comp = () => {
  return <h1>Hello from functional JSX Component</h1>;
};

//without return

const Comp2 = () => (
  <div>
    <h1>Hello from functional JSX Component 2</h1>
    <Comp />
    <Comp3 />
  </div>
);

const Comp3 = () => <h1>Hello from functional JSX Component 3</h1>;

// navbar

const Navbar = () => (
  <div className="container">
    <div className="left"> Namaste Food</div>

    <div className="searchbox">
      <input
        type="text"
        placeholder="Search any food and restaurant..."
      ></input>
    </div>
    <div className="right">
      <ul>
        <li>Home</li>
        <li>Restaurants</li>
        <li>Cart</li>
        <button className="button">Sign In</button>
      </ul>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Navbar />
    {heading}
    <Comp2 />
    <Head></Head>{" "}
  </>
);
