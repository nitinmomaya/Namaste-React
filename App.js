//  Below code shows how to write hello world program with React 

    //{} --> is an object to pass content on specific id {id: "title"}
    //React will override the content to previous content
     const heading= React.createElement("h1",{},"Namaste Nitin from React");
     const root= ReactDOM.createRoot(document.getElementById("root"));

     //passing a react element (heading) to the root
     root.render(heading);





 //Below code show how to write hello world program with JS
 

    const headingj=document.createElement("h1");
    headingj.innerHTML="Namaste Nitin from JavaScript!!";

    const rootj=document.getElementById('jroot');
    rootj.appendChild(headingj);