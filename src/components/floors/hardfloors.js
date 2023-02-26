import { FaCamera, FaTint, FaEraser, FaUmbrella, FaGem } from "react-icons/fa";
import "./floors.css";

function HardFloors() {
    return (
        <div>
            <div class="home-slider position-relative">
                
                <section className="bg-auth-home align-items-center" >
                    <div className="container" >
                        <div className="row align-items-center">
                            <div className="title-heading position-relative mt-4 bg-text" >
                                <h1 className="heading mb-3">Harde vloeren.</h1>       
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="row"><br /><br /></div>
            <div className="container">
                <div className="row">
                    <br /><br /><br /><br />
                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card blog rounded border-0 shadow">
                            <div className="position-relative">
                                <img src={require("../../images/receptionfloor2_mso.jpg")} className="card-img-top rounded" width="150px" height="300px" alt="..." />
                            <div className="overlay rounded-top bg-dark"></div>
                            </div>
                            <div className="card-body content">
                                <h5><a href="/hardevloeren" className="card-title title text-dark">Harde vloeren, steen of hout</a></h5>
                                </div>
                            <div className="author">
                                <small className="text-light user d-block"><FaCamera /> MSO Vloeren</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card blog rounded border-0 shadow">
                            <div className="position-relative">
                                <img src={require("../../images/officefloor_mso.jpg")} className="card-img-top rounded" width="150px" height="300px" alt="..." />
                            <div className="overlay rounded-top bg-dark"></div>
                            </div>
                            <div className="card-body content">
                                <h5><a href="/flexibelevloeren" className="card-title title text-dark">Elastische, flexibele vloeren.</a></h5>
                                </div>
                            <div className="author">
                                <small className="text-light user d-block"><FaCamera /> MSO Vloeren</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <a href="softfloors.html">
                            <div className="card blog rounded border-0 shadow">
                                <div className="position-relative">
                                    <img src={require("../../images/softfloors.jpg")} className="card-img-top rounded" width="150px" height="300px" alt="..." />
                                <div className="overlay rounded-top bg-dark"></div>
                                </div>
                                <div className="card-body content">
                                    <h5><a href="/zachtevloeren" className="card-title title text-dark">Zachte vloeren (vloerbedekking).</a></h5>
                                    </div>
                                <div className="author">
                                    <small className="text-light user d-block"><FaCamera /> MSO Vloeren</small>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 ">
                            <br />
                            <h4 className="title mb-4">Vloeren worden vuil</h4>
                            <h5 className="text-muted para-desc mb-0 mx-auto">Alle vloerafwerkingen hebben één gemeenschappelijk kenmerk. Na bepaalde tijd worden ze vuil. Iedere vloer heeft een specifieke eigenschap waarmee rekening moet worden gehouden bij reiniging en onderhoud.<br /><br /><br />Om de juiste vloerverzorging te kunnen bepalen zijn een aantal voorwaarden van belang:<br />
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3 col-12 mt-5">
                        <div className="features text-center">
                            <div className="image position-relative d-inline-block">
                                <FaTint className="h1 text-primary"/>
                            </div>

                            <div className="content mt-4">
                                <h5>Het opheffen van de porositeit</h5>
                                <p className="text-muted mb-0">Het opheffen van de porositeit, waardoor vuil minder snel zal indringen en dus beter is weg te halen.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-12 mt-5">
                        <div className="features text-center">
                            <div className="image position-relative d-inline-block">
                                <FaGem className="h1 text-primary"/>
                            </div>

                            <div className="content mt-4">
                                <h5>Het verhogen van het esthetisch aanzien</h5>
                                <p className="text-muted mb-0">Het verhogen van het esthetisch aanzien van de vloer geeft een schoon effect.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-12 mt-5">
                        <div className="features text-center">
                            <div className="image position-relative d-inline-block">
                                <FaUmbrella className="h1 text-primary"/>
                            </div>

                            <div className="content mt-4">
                                <h5>Het verlengen van de levensduur van een vloer.</h5>
                                <p className="text-muted mb-0">Het verlengen van de levensduur van een vloer.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-12 mt-5">
                        <div className="features text-center">
                            <div className="image position-relative d-inline-block">
                                <FaEraser className="h1 text-primary"/>
                            </div>

                            <div className="content mt-4">
                                <h5>Het verhogen van de hygiëne.</h5>
                                <p className="text-muted mb-0">Het verhogen van de hygiëne.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card blog rounded border-0 shadow">
                            <div className="position-relative">
                                <img src={require("../../images/treatmentA.jpg")} className="card-img-top rounded" width="150px" height="300px" alt="..." />
                            <div className="overlay rounded-top bg-dark"></div>
                            </div>
                            <div className="card-body content">
                                <h5><a href="/behandelingen" className="card-title title text-dark">Behandelmethode 1</a></h5>
                                </div>
                            <div className="author">
                                <small className="text-light user d-block"><FaCamera /> MSO Vloeren</small>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card blog rounded border-0 shadow">
                            <div className="position-relative">
                                <img src={require("../../images/treatmentB.jpg")} className="card-img-top rounded" width="150px" height="300px" alt="..." />
                            <div className="overlay rounded-top bg-dark"></div>
                            </div>
                            <div className="card-body content">
                                <h5><a href="/behandelingen" className="card-title title text-dark">Behandelmethode 2</a></h5>
                                </div>
                            <div className="author">
                                <small className="text-light user d-block"><FaCamera /> MSO Vloeren</small>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
                        <div className="card blog rounded border-0 shadow">
                            <div className="position-relative">
                                <img src={require("../../images/treatmentC.jpg")} className="card-img-top rounded" width="150px" height="300px" alt="..." />
                            <div className="overlay rounded-top bg-dark"></div>
                            </div>
                            <div className="card-body content">
                                <h5><a href="/behandelingen" className="card-title title text-dark">Behandelmethode 3</a></h5>
                                </div>
                            <div className="author">
                                <small className="text-light user d-block"><FaCamera /> MSO Vloeren</small>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title mb-4 pb-2">
                                <h5 className="text-muted para-desc mb-0 mx-auto"><br /><br />Bovenstaande oogmerken kunnen integraal, dan wel elk op zich, reden zijn om een vloer te beschermen.</h5>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default HardFloors;