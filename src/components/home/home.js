import bgImageTop from '../../images/tophomeimagev2.jpg';
//import logo from '../../images/msovloeren-logo-transv2.png';
import { FaRegBuilding, FaFlask, FaRegHospital, FaGraduationCap, FaCamera, FaCaretSquareUp} from "react-icons/fa";
import "./home.css";

function Home() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
      };

    return (
        <div>
            <section className="bg-half-home" style={{backgroundImage: `url(${bgImageTop})`, backgroundSize: "70% 90%"}}>
                <div className="text-light-block-transparent-over-image">
                    <div className="title-heading text-center md-8"> 
                        <br /><br /><br />
                        <h1 className="display-3 title-dark fw-bold text-black  ">Specialistisch Vloerenonderhoud</h1>
                        <br />
                        <h4 className="mx-auto fw-bold text-black ">MSO, dé specialist in Zuidwest Nederland op het gebied van onderhouden van stenen-,<br />
                        linoleum– en pvc gestoffeerde vloeren.<br />
                        Wij doen dat volgens de nieuwste methodieken en met de meest geavanceerde apparatuur. <br />Het periodiek in de was zetten en machinaal onderhouden van vooral linoleum en <br />
                        pvc vloeren is één van onze sterke kanten</h4>
                        <br />
                    </div>
                </div>
            </section>
            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-12 mt-5">
                        <div className="features text-center">
                            <div className="image position-relative d-inline-block">
                                <FaRegBuilding className="h1 text-primary"/>
                            </div>
                            <div class="content mt-4">
                                <h5>Overheid</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-12 mt-5">
                        <div className="features text-center">
                            <div className="image position-relative d-inline-block">
                                <FaFlask className="h1 text-primary"/>
                            </div>
                            <div class="content mt-4">
                                <h5>Petrochemische sector</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-12 mt-5">
                        <div className="features text-center">
                            <div className="image position-relative d-inline-block">
                                <FaRegHospital className="h1 text-primary"/>
                            </div>
                            <div class="content mt-4">
                                <h5>Gezondheidszorg</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-12 mt-5">
                        <div className="features text-center">
                            <div className="image position-relative d-inline-block">
                                <FaGraduationCap className="h1 text-primary"/>
                            </div>
                            <div class="content mt-4">
                                <h5>Onderwijs</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <br /><br />
                        <div className="section-title text-center mb-4 pb-2">
                            <span className="text-primary text-center h2 ">Enkele door ons onderhouden vloeren...</span>
                        </div>
                    </div>
                </div>
          
                
                <div className="row">
                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card blog rounded border-0 shadow">
                            <div className="position-relative">
                                <img src={require("../../images/greenfloor_mso.jpg")} className="card-img-top rounded" width="150px" height="300px" alt="..."/>
                            <div className="overlay rounded-top bg-dark"></div>
                            </div>
                            <div className="author">
                                <small className="text-light user d-block"><FaCamera /> MSO Vloeren</small>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card blog rounded border-0 shadow">
                            <div className="position-relative">
                                <img src={require("../../images/polishedreception_mso.jpg")} className="card-img-top rounded" width="150px" height="300px" alt="..."/>
                            <div className="overlay rounded-top bg-dark"></div>
                            </div>
                            <div className="author">
                                <small className="text-light user d-block"><FaCamera /> MSO Vloeren</small>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card blog rounded border-0 shadow">
                            <div className="position-relative">
                                <img src={require("../../images/officefloor_mso.jpg")} className="card-img-top rounded" width="150px" height="300px" alt="..."/>
                            <div className="overlay rounded-top bg-dark"></div>
                            </div>
                            <div className="author">
                                <small className="text-light user d-block"><FaCamera /> MSO Vloeren</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card blog rounded border-0 shadow">
                            <div className="position-relative">
                                <img src={require("../../images/oldwoodenstrairs_mso.jpg")} className="card-img-top rounded" width="150px" height="300px" alt="..."/>
                            <div className="overlay rounded-top bg-dark"></div>
                            </div>
                            <div className="author">
                                <small className="text-light user d-block"><FaCamera /> MSO Vloeren</small>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card blog rounded border-0 shadow">
                            <div className="position-relative">
                                <img src={require("../../images/receptionfloor2_mso.jpg")} className="card-img-top rounded" width="150px" height="300px" alt="..."/>
                            <div className="overlay rounded-top bg-dark"></div>
                            </div>
                            <div className="author">
                                <small className="text-light user d-block"><FaCamera /> MSO Vloeren</small>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card blog rounded border-0 shadow">
                            <div className="position-relative">
                                <img src={require("../../images/sportsfloor_mso.jpg")} className="card-img-top rounded" width="150px" height="300px" alt="..."/>
                            <div className="overlay rounded-top bg-dark"></div>
                            </div>
                            <div className="author">
                                <small className="text-light user d-block"><FaCamera /> MSO Vloeren</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card blog rounded border-0 shadow">
                            <div className="position-relative">
                                <img src={require("../../images/livingfloor_mso.jpg")} className="card-img-top rounded" width="150px" height="300px" alt="..."/>
                            <div className="overlay rounded-top bg-dark"></div>
                            </div>
                            <div className="author">
                                <small className="text-light user d-block"><FaCamera /> MSO Vloeren</small>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card blog rounded border-0 shadow">
                            <div className="position-relative">
                                <img src={require("../../images/livingfloor2_mso.jpg")} className="card-img-top rounded" width="150px" height="300px" alt="..."/>
                            <div className="overlay rounded-top bg-dark"></div>
                            </div>
                            <div className="author">
                                <small className="text-light user d-block"><FaCamera /> MSO Vloeren</small>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card blog rounded border-0 shadow">
                            <div className="position-relative">
                                <img src={require("../../images/doorpost_mso.jpg")} className="card-img-top rounded" width="150px" height="300px" alt="..."/>
                            <div className="overlay rounded-top bg-dark"></div>
                            </div>
                            <div className="author">
                                <small className="text-light user d-block"><FaCamera /> MSO Vloeren</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <br />
                            <br />
                            <h4 className="title mb-4">Maak een afspraak met ons</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Loop samen met ons door de diensten van <span className="text-primary fw-bold">MSO Vloeren</span> en waar we u verder ter dienst kunnen zijn.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <a href="contact.html" className="btn btn-pills btn-primary">Neem contact op</a>
                    </div>
                </div>
                <br />
                <br />

                <div className="row justify-content-right">
                    <div className="col-12 text-center">
                    <button onClick={scrollToTop} className="btn btn-icon btn-primary back-to-top"><FaCaretSquareUp /> Naar Boven</button>
                    </div>
                </div>
                <br />
                <br />
            </div>
            
        </div>
    );
}

export default Home;