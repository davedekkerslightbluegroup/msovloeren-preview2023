import "./treatments.css";
import bgImageMSOTop from './../../images/aboutmsov2.jpg';
import { FaTint, FaEraser, FaUmbrella, FaGem } from "react-icons/fa";

function Treatments() {
    return (
        <div>
            <div>
                <div class="home-slider position-relative">
                    <section className="bg-half d-table w-100" style={{backgroundImage: `url(${bgImageMSOTop})`, backgroundSize: "100% 90%"}}>
                        <div className="col-12 text-center text-block-transparent-over-image">
                            <h1 className="title mb-4"><b>Vloeren Onderhoud</b></h1>
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
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 ">
                            <span className="text-primary text-center h1 ">Vloeren worden vuil</span>
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
                                <h4>Het opheffen van de porositeit</h4>
                                <h6 className="text-black">Het opheffen van de porositeit, waardoor vuil minder snel zal indringen en dus beter is weg te halen.</h6>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-12 mt-5">
                        <div className="features text-center">
                            <div className="image position-relative d-inline-block">
                                <FaGem className="h1 text-primary"/>
                            </div>

                            <div className="content mt-4">
                                <h4>Het verhogen van het esthetisch aanzien</h4>
                                <h6 className="text-black">Het verhogen van het esthetisch aanzien van de vloer geeft een schoon effect.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-12 mt-5">
                        <div className="features text-center">
                            <div className="image position-relative d-inline-block">
                                <FaUmbrella className="h1 text-primary"/>
                            </div>

                            <div className="content mt-4">
                                <h4>Het verlengen van de levensduur.</h4>
                                <h6 className="text-black">Het verlengen van de levensduur van een vloer.</h6>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-12 mt-5">
                        <div className="features text-center">
                            <div className="image position-relative d-inline-block">
                                <FaEraser className="h1 text-primary"/>
                            </div>

                            <div className="content mt-4">
                                <h4>Het verhogen van de hygiëne.</h4>
                                <h6 className="text-black">Het verhogen van de hygiëne.</h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-12 text-center">
                        <div className="section-title mb-4 ">
                            <br /><hr /><br />
                            <div className="d-flex mb-4 text-center">   
                                <span className="text-primary h2 mb-0">Vloeren kunnen op verschillende manieren worden beschermd:</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">    
                        <ul>
                            <li  className="col-12 h4"><b>Polymeren op de traditionele manier</b><br />
                                <ul>
                                    <li><i><h5>Schoonmaken en 2 nieuwe waslagen aanbrengen.</h5></i></li>
                                </ul>
                                <br />
                            </li>
                            <li  className="col-12 h4"><b>Polymeren met ons 6 laags systeem.</b><br />
                                <ul>
                                <li><i><h5>Schoonmaken en voorzien van onze primer en waslagen minimaal 4 en maximaal 6 lagen.</h5></i></li>
                                </ul>
                                <br />
                            </li>
                            <li  className="col-12 h4"><b>Vloer voorzien van 2 componenten PU was.</b><br />
                                <ul>
                                <li><i><h5>Schoonmaken en oprollen van 2 lagen 2 componenten PU was zodat hij langer beschermd is (+4 jaar).</h5></i></li>
                                <li><i><h5>Ook kan eerst de vloer worden voorzien van een kleurlaag zodat u een geheel nieuwe vloer heeft.</h5></i></li>
                                </ul>
                                <br />
                            </li>
                            <li  className="col-12 h4"><b>Vloeren voorzien van een ceramische coating.</b><br />
                                <ul>
                                <li><i><h5>Dit is de hardste vloerafwerking die er op dit moment is met 10 jaar fabrieks garantie.</h5></i></li>
                                <li><i><h5>Schoonmaken en de vloer voorzien van een ceramische coating.</h5></i></li>
                                <li><i><h5>Ook hierbij kan eerst de vloer worden gekleurd.</h5></i></li>
                                </ul>
                                <br />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <div className="row justify-content-center">
                    <hr />
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 ">
                            <br />
                            <div className="d-flex mb-4 text-center">   
                                <span className="text-primary h2 mb-0">Periodiek vloeren onderhoud:</span>
                            </div>
                        </div>
                    </div>
                    <div className="section-title mb-4 ">

                        <h5 className="text-black">Alle vloeren met een waslaag kunnen we ook periodiek onderhouden.<br />
                        Hierbij word de de was veel meer gesloten en kan de vervuiling gemakkelijker worden verwijderd.<br />
                        Groot pluspunt is dat door periodiek vloerenonderhoud uw vloer er door het jaar heen veel beter <br />
                        uit blijft zien en het groot onderhoud veel langer kan worden uitgesteld.<br />
                        </h5>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <hr />
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 ">
                            <br />
                            <div className="d-flex mb-4 text-center">   
                                <span className="text-primary h2 mb-0">Onderhoud marmer vloeren:</span>
                            </div>
                        </div>
                    </div>
                    <div className="section-title mb-4 ">

                        <h5 className="text-black">Ook kunnen wij dof geworden marmer vloeren behandelen met diamant en water zodat ze weer mooi<br />
                        en diep gaan glanzen.<br />
                        </h5>
                    </div>
                </div>
            </div>
        

        </div>
    );
}

export default Treatments;

/*
<h1>Behandelingen Overzicht</h1>
           <p>Het onderhoud van vloeren is belangrijk omdat het zorgt voor duurzaamheid, veiligheid, hygiëne en een aantrekkelijk uiterlijk van de vloer. Door regelmatig onderhoud kan de levensduur van de vloer worden verlengd en kunnen risico's voor de veiligheid van de gebruikers worden verminderd, evenals de verspreiding van ziektekiemen en bacteriën.</p>
           <br />
           <h3>Vloeren kunnen op verschillende manieren worden beschermd.</h3>
           <li>
            <h4>Polymeren op de traditionele manier</h4>
            <p>Schoonmaken en 2 nieuwe waslagen aanbrengen.</p>
           </li>
           <li>
            <h4>Polymeren met ons 6 laags systeem</h4>
            <p>Schoonmaken en voorzien van onze primer en waslagen minimaal 4 en maximaal 6 lagen.</p>
           </li>
           <li>
            <h4>Vloer voorzien van 2 componenten PU was</h4>
            <p>Schoonmaken en oprollen van 2 lagen 2 componenten PU was zodat hij langer beschermd is ( + 4 jaar).</p>
            <p>Ook kan eerst de vloer worden voorzien van een kleur laag zodat u een geheel nieuwe vloer hebt.</p>
           </li>
           <li>
            <h4>Vloeren voorzien van een ceramische coating</h4>
            <p>Dit is de hardste vloerafwerking die er op dit moment is met 10 jaar fabrieks garantie.</p>
            <p>Schoonmaken en de vloer voorzien van een ceramische coating.</p>
            <p>Ook hierbij kan eerst de vloer worden gekleurd.</p>
           </li>
           
           
           
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
*/
