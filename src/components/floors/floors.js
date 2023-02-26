import bgImageMSOTop from './../../images/aboutmsov2.jpg';
import { FaCamera, FaTint, FaEraser, FaUmbrella, FaGem } from "react-icons/fa";
import "./floors.css";

function Floors() {
    return (
        <div>
            <div class="home-slider position-relative">
                <section className="bg-half d-table w-100" style={{backgroundImage: `url(${bgImageMSOTop})`, backgroundSize: "100% 90%"}}>
                    <div className="col-12 text-center text-block-transparent-over-image">
                        <h1 className="title mb-8">Vloeren zijn gezichtsbepalende, <br />constructieve onderdelen van een gebouw.</h1>
                    </div>
                </section>
            </div>

            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <br />
                            <span className="text-primary text-center h1 ">Vloeren</span>
                            <br /><br />
                            <h4 className="text-black">Vloeren zijn gezichtsbepalende, constructieve onderdelen van een gebouw. Onafgewerkte vloeren zijn meestal niet geschikt voor gebruik; daarnaast is er het praktische en/of esthetische aspect waarom ze worden voorzien van een vloerafwerking.<br />
                                    <br />Vloerafwerkingen zijn er in een drietal hoofdgroepen:
                            </h4>
                        </div>
                    </div>
                
                    <div className="col-lg-4 col-md-6">
                        <div className="card blog rounded border-0 shadow">
                            <span className="text-primary text-center h4 ">Harde vloeren, steen of hout</span>
                            <div className="position-relative">
                                <img src={require("../../images/receptionfloor2_mso.jpg")} className="card-img-top rounded" width="150px" height="300px" alt="..." />
                            <div className="overlay rounded-top bg-dark"></div>
                            </div>
                            <div className="card-body content">
                            </div>
                            <div className="author">
                                <small className="text-light user d-block"><FaCamera /> MSO Vloeren</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card blog rounded border-0 shadow">
                            <span className="text-primary text-center h4 ">Elastische, flexibele vloeren.</span>
                            <div className="position-relative">
                                <img src={require("../../images/officefloor_mso.jpg")} className="card-img-top rounded" width="150px" height="300px" alt="..." />
                            <div className="overlay rounded-top bg-dark"></div>
                            </div>
                            <div className="card-body content">
                            </div>
                            <div className="author">
                                <small className="text-light user d-block"><FaCamera /> MSO Vloeren</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <a href="softfloors.html">
                            <div className="card blog rounded border-0 shadow">
                                <span className="text-primary text-center h4 ">Zachte vloeren (vloerbedekking)</span>
                                <div className="position-relative">
                                    <img src={require("../../images/softfloors.jpg")} className="card-img-top rounded" width="150px" height="300px" alt="..." />
                                <div className="overlay rounded-top bg-dark"></div>
                                </div>
                                <div className="card-body content">
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
                            <span className="text-primary text-center h3 ">Vloeren worden vuil</span>
                            <br /><br />
                            <h4 className="text-black">Alle vloerafwerkingen hebben één gemeenschappelijk kenmerk. Na bepaalde tijd worden ze vuil.<br /><br /> 
                            Het onderhoud van vloeren is belangrijk omdat het zorgt voor duurzaamheid, veiligheid, hygiëne en een aantrekkelijk uiterlijk van de vloer.                             
                            Iedere vloer heeft een specifieke eigenschap waarmee rekening moet worden gehouden bij reiniging en onderhoud, mede daarom is het van belang dat dit door een professioneel schoonmaakbedrijf wordt gedaan.<br /><br />
                            Om de juiste vloerverzorging te kunnen bepalen zijn een aantal voorwaarden van belang:<br />
                            </h4>
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
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title ">
                                <h5 className="text-muted para-desc mb-0 mx-auto"><br /><br />Bovenstaande oogmerken kunnen integraal, dan wel elk op zich, reden zijn om een vloer te beschermen.</h5>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 ">
                            <br />
                            <span className="text-primary text-center h3 ">Enkele door ons gebruikte vloerverzorgingen:</span>
                            <br /><br />
                            <h4 className="text-black">Naast het regelmatig schoonmaken van uw vloeren zijn er nog een aantal andere manieren om uw vloer langer te laten meegaan, zo te verzorgen dat deze er weer een mooi en fris uitziet:<br />
                            </h4>
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
                            <div className="card-body content  text-center">
                                <h5 className="card-title title text-dark">Polymeren (meerdere lagen)</h5>
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
                            <div className="card-body content text-center">
                                <h5 className="card-title title text-dark">2 componenten PU waslagen (polyurethaan)</h5>
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
                            <div className="card-body content  text-center">
                                <h5 className="card-title title text-dark">Ceramische coating</h5>
                                </div>
                            <div className="author">
                                <small className="text-light user d-block"><FaCamera /> MSO Vloeren</small>
                            </div>
                        </div>
                    </div>

                    


                </div>
            </div>
        </div>
    );
}

export default Floors;