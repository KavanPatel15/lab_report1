import React, { useEffect } from "react";

const home = ({ visits, setVisits }) => {
    useEffect(() => {
        setVisits(previousvisits => previousvisits + 1);
    }, [setVisits]);

    return (
        <div>
            <h2>
                Home Page
            </h2>
            <p>
                Kavan Dineshbbhai Patel
                <br></br><br></br>B00944396
            </p>
            <p>
                Home page visited {visits} times.
            </p>
        </div>
    );
}
export default home;
