import './about.css'

let About=()=>{
    return(
        <>
            <section id="about">
                <h3 class="text-center py-5">ABOUT ME</h3>
                <hr />
                <div class="container">
                    <div class="row py-5">
                        <div class="col-md-6 px-5">
                            <p class="fw-bold">I am a Professional Frontend Developer. I have 1+ Years of Hands on Experience as Front-End developer using technologies HTML5, CSS3, JavaScript, jQuery, Bootstrap, Typescript and Angular.</p>
                            <p class="text-secondary">Good knowledge on creating Responsive Web Design (RWD) for Mobile and Tablets, Responsive web pages using Bootstrap and media queries. Responsible for development of technical change requests and defect corrections of the existing applications, as well as for software enhancements. Developed the front-end web pages by using HTML5, CSS3, jQuery, JavaScript, taking advantage of Bootstrap 4, 5 and Angular frameworks. Converted HTML projects to Angular Hands on experience on Routing, Binding, fetching dynamic data from APIs. Implemented complex Angular applications, directives, services, and components. Hands-on experience with Rest API. Proven ability in quick understanding and learning of new technologies and their application in business solutions. Oversees creation and maintenance of front-end standard documents. Built and installed reusable codes and libraries for future reference. Proficient in using Git and experienced in collaborative software development on platforms like GitHub and GitLab. Good knowledge on RXJS and NGRX state management. Passionate to learn and adapt quickly to the emerging new technologies.</p>
                            <hr />
                            <div class="row">
                                <div class="col-md-3">
                                    <p class="fw-bold">Phone</p>
                                    <p class="text-secondary size">8106192272</p>
                                </div>
                                <div class="col-md-5">
                                    <p class="fw-bold">Email</p>
                                    <p class="text-secondary size">deepthitalapagala@gmail.com</p>
                                </div>
                                <div class="col-md-4">
                                    <p class="fw-bold">LinkedIn</p>
                                    <p class="text-secondary size">linkedin.com/in/talapagala-deepthi-2906b1182</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 px-5">
                            <img src="assets/images/profile.jpg" alt="profile" class="img-fluid w-100" />
                        </div>
                    </div>
                </div>
            </section>
            </>
    )
}

export default About