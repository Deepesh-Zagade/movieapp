import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
                <div className="container-fluid ">
                    <a className="navbar-brand mx-4" href="/">Cinephile</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">

                        <form className="d-flex mx-4 w-25" role="search">
                            <input className="form-control me-2" value={props.search} onChange={props.Ontextchange} type="search" placeholder="Search" aria-label="Search" /> 

                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
