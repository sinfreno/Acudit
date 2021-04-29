import React, {useState} from "react"


function Chiste() {

    const [broma, setBroma] = useState("");

    //API FETCH
    const getBroma = () => {
        fetch('https://icanhazdadjoke.com/slack', {
        })
            .then(res => res.json())
            .then(res => setBroma(res.attachments[0].text));
    };
    return (
        <div>
            <div>{broma}</div>
            <button onClick={() => getBroma()}>següent</button>
        </div>
    );


}

export default Chiste