import React, { useState } from 'react'

function About() {
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "wheat"
    });
    const [mode, setMode] = useState(false);
    const [btnText, setBtnText] = useState("Enable Dark Mode");
    const toggleMode = () => {
        if (mode === false) {
            setMode(true);
            setBtnText("Enable Light Mode");
            setMyStyle({
                color: "white",
                backgroundColor: "black"
            })
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        } else {
            setMode(false);
            setBtnText("Enable Dark Mode");
            setMyStyle({
                color: "black",
                backgroundColor: "wheat"
            })
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
    }
    return (
        <div className='container my-4' style={myStyle}>
            <h2>About our Text Utility App</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            Convert Your Text Into Your Need
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>

                            Introducing our versatile text utility app, a comprehensive solution for refining and customizing your textual content with unparalleled ease. One of its standout features lies in its dynamic text transformation capabilities. Users can effortlessly convert strings of letters to uppercase or lowercase, ensuring consistency and clarity in their communication. Moreover, the app tackles the common issue of excess spaces, offering a seamless function to eliminate unwanted gaps, enhancing the overall tidiness of the text. What sets our app apart is its commitment to user customization , whether you aim to capitalize specific words, transform sentences to lowercase for stylistic purposes, or remove redundant spaces, the app accommodates your unique preferences. With a user-friendly interface and a suite of text-editing functionalities, our utility app empowers users to tailor their text precisely as desired, simplifying the process of creating polished and professional content.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            Word Count and Character Count
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Introducing our innovative text utility app, designed to streamline your writing experience with precision and efficiency. One standout feature is its robust Word Count and Character Count functionality. Whether you're crafting a concise message or working on a lengthy document, our app provides real-time counts, empowering users with an accurate gauge of their content's length. This indispensable tool not only helps meet specific word or character requirements but also promotes effective communication by ensuring conciseness or expansiveness as needed. The seamless integration of Word Count and Character Count into the user interface exemplifies our commitment to simplicity and utility, making our text app an essential companion for anyone keen on mastering the art of impactful and well-measured expression.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            User Friendly
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Discover the ultimate companion for effortless and effective text editing with our user-friendly text utility app. Designed with simplicity in mind, this app is a powerful yet intuitive tool that caters to users of all skill levels. Whether you're a professional crafting a document or a casual user enhancing your messages, our app ensures a seamless experience. With a clean and straightforward interface, users can easily access a variety of features, from basic text formatting to advanced functions like converting text to uppercase or lowercase, removing extra spaces, and more. The app's commitment to user convenience makes it a go-to solution for anyone seeking a hassle-free and efficient way to refine and customize their text. Say goodbye to complexity and hello to a text utility app that prioritizes your needs, providing a helpful and enjoyable editing experience.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3 d-flex justify-content-end">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{btnText}</label>
                </div>
            </div>
        </div>
    )
}

export default About
