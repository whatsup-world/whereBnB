import React from "react";
import "./HomePage.css"

const HomePage = () => {
    return (
        <div id="home-page-container">
            {/* <img src="../../../../public/attachment_112087138.jpeg"></img> */}
            <img src="https://images.unsplash.com/photo-1581553680321-4fffae59fccd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
            <div id="home-welcome">
                <h1>Live any where!</h1>
                <a id="get-started" href="/listings"><button>Get Started</button></a>
            </div>
        </div>

    )
}
export default HomePage
