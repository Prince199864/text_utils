import React from 'react'

function Footer(props) {
    return (
        <div className='border-top py-3 mt-4' style={props.mode === "dark" ? { backgroundColor: "#2b3035" } : { backgroundColor: '#fff9f5' }}>
            <div className="container">
                <footer className={`d-flex flex-wrap justify-content-between align-items-center`}>
                    <div className={`col-md-4 d-flex align-items-center`}>
                        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                            <i className={`bi bi-chat-square-dots text-${props.mode === 'dark' ? 'white' : 'dark'}`}></i>
                        </a>
                        <span className={`mb-3 mb-md-0 text-${props.mode === 'light' ? 'dark' : 'white'}`}>© 2023 Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className={`text-${props.mode === 'light' ? 'body-secondary' : 'white'}`} href="#"><i className="bi bi-twitter"></i></a></li>
                        <li className="ms-3"><a className={`text-${props.mode === 'light' ? 'body-secondary' : 'white'}`} href="#"><i className="bi bi-instagram"></i></a></li>
                        <li className="ms-3"><a className={`text-${props.mode === 'light' ? 'body-secondary' : 'white'}`} href="#"><i className="bi bi-facebook"></i></a></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer
