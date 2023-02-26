import "./contact.css";

function Contact() {
    return (
        <div>
            <section class="bg-half-home">
                <div class="container-fluid">
                    <div class="row">
                        <br/>
                    </div>
                    <div class="row">
                    </div>
                    <div class="row">
                        <div class="col-12 p-0">
                            <div class="card map border-0">
                                <div class="card-body p-0">
                                    <iframe src="https://maps.google.com/maps?q=Mon%20Plaisier%20104,%204879%20AT.%20Etten%20Leur,%20Nederland&t=k&z=14&ie=UTF8&iwloc=&output=embed" 
                                        title ="Locatie MSO Vloeren" width="100%" height="550px" style={{ "border":0 }} allowfullscreen="" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>    
            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="title-heading ms-lg-4">
                            <br />
                            <div className="d-flex mb-4">
                                <span className="text-primary h1 mb-0">Contact Details</span>
                            </div>
                            <h4 class="text-black">Neem contact met <span class="text-primary fw-bold">MSO Vloeren</span>, dé specialist in Zuidwest Nederland op het gebied van onderhouden van stenen-, linoleum– en pvc gestoffeerde vloeren. Mocht u vragen hebben over de technieken, periodiek onderhoud of wat we verder voor u kunnen doen.</h4>
                            <br />
                            <div className="col-12">    
                                <ul>
                                    <li  className="col-12 h4"><b>Email</b><br />
                                        <h5><a href="mailto:info@msovloeren.nl" class="text-primary fw-bold">info@msovloeren.nl</a></h5>
                                    </li>
                                    <li  className="col-12 h4"><b>Telefoon</b><br />
                                        <h5><a href="tel:+3176-3033980" class="text-primary fw-bold">076 - 30 33 980</a></h5>
                                    </li>
                                    <li  className="col-12 h4"><b>Adres</b><br />
                                        <h5 class="text-primary fw-bold mb-0">Mon Plaisier 104, 4879 AT Etten-Leur</h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <br/><br />
                </div>
            </section>
        </div>
    );
}

export default Contact;

/*
<iframe src="https://maps.google.com/maps?q=Mon%20Plaisier%20104,%204879%20AT.%20Etten%20Leur,%20Nederland&t=k&z=13&ie=UTF8&iwloc=&output=embed" style="border:0" allowfullscreen></iframe>
*/