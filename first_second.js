import React from "react";
import ReactDOM from "react-dom/client";

//Code of 1st and 2nd class combined

/**
 * PARCEL BENEFITS:-
 *
 * HMR-Hot Module Replacement- helps to update any changes in file
 * File Watcher algorithm- written in C++- save file-inclduing node_module c
 * BUNDLING
 * MINIFY
 * cleaning our code
 * Optimization
 * Dev and Production Build
 * SuperFast Build Algorithm
 * Caching while development:- this helps to reduce build time with every buld it create cache
 * Compression
 * comptable with older browser
 * https on devs --https
 * Consistent Hashing Algorithm
 * Transitive Dependecies- Dependency Tree
 * PORT Number
 */

//  Below code shows how to write hello world program with React

//{} --> is an object to pass content on specific id also known as props{id: "title"}
//React will override the content to previous content
const heading = React.createElement("h1", {}, "Namaste Nitin from React");
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element (heading) to the root
root.render(heading);

//Below code show how to write hello world program with JS

const headingj = document.createElement("h1");
headingj.innerHTML = "Namaste Nitin from JavaScript!!";

const rootj = document.getElementById("jroot");
rootj.appendChild(headingj);
