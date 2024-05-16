import '../css/navbar.css'

let Navbar=()=>{
    let brand = "DEEPTHI"
    let nav = ["ABOUT", "EDUCATION", "SKILLS", "EXPERIENCE", "CONTACT"]

    return(
        <>
            <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top shadow">
                <div class="container-fluid py-3">
                <a class="navbar-brand">{brand}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link px-4" href="#about">{nav[0]}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-4" href="#education">{nav[1]}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-4" href="#skills">{nav[2]}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-4" href="#experience">{nav[3]}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-4" href="#contact">{nav[4]}</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar