import '../css/education.css'

let Education =()=>{
    return(
        <>
            <section id="education">
                <div class="bg-light">
                    <h3 class="text-center py-5">EDUCATION</h3>
                    <hr />
                    <div class="container py-5">
                        <div class="row">
                            <div class="col-md-4">
                                <p>2018-2021</p>
                                <p class="text-secondary">Bachelor of Bussiness Administration</p>
                            </div>
                            <div class="col-md-4">
                                <p>2016-2018</p>
                                <p class="text-secondary">Intermediate</p>
                            </div>
                            <div class="col-md-4">
                                <p>2015-2016</p>
                                <p class="text-secondary">SSC</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                            <ul id="progress-bar" class="progressbar">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <h6>BANGALORE UNIVERSITY</h6>
                                <p class="text-secondary">International School of Management Excellence<br />Bangalore, Karnataka<br /><span class="text-dark">CGPA -</span> 8.22</p>
                            </div>
                            <div class="col-md-4">
                                <h6>TELANGANA STATE BOARD OF INTERMEDIATE EDUCATION</h6>
                                <p class="text-secondary">Sri Chaitanya Junior Kalasala<br />Hydarabad, Telangana<br /><span class="text-dark">CGPA -</span> 9.01</p>
                            </div>
                            <div class="col-md-4">
                                <h6>BOARD OF SECONDARY EDUCATION</h6>
                                <p class="text-secondary">Gowtham Moderm EM School<br />Tadipatri, Andhra Pradesh<br /><span class="text-dark">CGPA -</span> 8.70</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education