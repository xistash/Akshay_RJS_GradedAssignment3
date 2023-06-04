import { ChangeEvent, Fragment, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "../styles/Navbar.css"
import Main from "./Main"
import MovieDetails from "./MovieDetails"

function Navbar() {
    const [search, setSearch] = useState("")

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <Fragment>
            <Router>
                <nav>
                    <div>
                        <Link to={"/"} state={{ tab: "movies-in-theaters" }}>
                            <span> Movies in Theater</span>
                        </Link>
                        <Link to={""} state={{ tab: "movies-coming" }}>
                            <span> Coming Soon</span>
                        </Link>
                        <Link to={""} state={{ tab: "top-rated-india" }}>
                            <span> Top rated Indian</span>
                        </Link>
                        <Link to={""} state={{ tab: "top-rated-movies" }}>
                            <span> Top rated Movies</span>
                        </Link>
                        <Link to={""} state={{ tab: "favourite" }}>
                            <span> Favourites </span>
                        </Link>
                    </div>
                    <div className="input-tag">
                        <input type="text" placeholder="Search" onChange={handleSearch} />
                    </div>
                </nav>

                <Routes>
                    <Route path="" element={<Main searchValue={search} />} />
                    <Route path="/:MovieName" element={<MovieDetails />} />
                </Routes>
            </Router>
        </Fragment>
    )
}

export default Navbar