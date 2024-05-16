import '../css/contact.css'

let Contact =()=>{
    return(
        <>
            <section id="contact">
                <div class="bg-light">
                    <h3 class="text-center py-5">CONTACT</h3>
                    <hr />
                    <div class="container py-5">
                        <div class="mx-5 px-5">
                            <div class="row">
                                <div class="col-md-6">
                                    <form>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input type="text" placeholder="Name*" class="form-control border-0" />
                                            </div>
                                            <div class="col-md-6">
                                                <input type="text" placeholder="Email*" class="form-control border-0" />
                                            </div>
                                        </div>
                                        <div class="my-4">
                                            <input type="text" placeholder="Subject" class="form-control border-0" />
                                        </div>
                                        <div class="my-4">
                                            <textarea class="form-control border-0" rows="8" id="comment" name="text" placeholder="Message"></textarea>
                                        </div>
                                        <button type="submit" class="btn w-100 text-white">Submit</button>
                                    </form>
                                </div>
                                <div class="col-md-6">
                                    <div class="ps-5 ms-5">
                                        <h4>Deepthi Talapagala</h4>
                                        <p class="text-secondary pb-4">Frontend Developer/ Angular Developer</p>
                                        <h6>Phone</h6>
                                        <p class="text-secondary py-2">+91 8106192272</p>
                                        <h6>Email</h6>
                                        <p class="text-secondary py-2">deepthitalapagala@gmail.com</p>
                                        <h6>LinkedIn</h6>
                                        <p class="text-secondary py-2">linkedin.com/in/talapagala-deepthi-2906b1182</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact