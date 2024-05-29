import React from "react";

const About = ({ visits }) => {
    return (
        <div>
            <h2>
                About Page
            </h2>
            <p>
                Welcome to About page
            </p>
            <p>
                Home page visited {visits} times.
            </p>
        </div>
    );
}
export default About;