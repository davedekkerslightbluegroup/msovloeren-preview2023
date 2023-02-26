import bgImageMSOTop from './../../images/aboutmsov2.jpg';
import "./about.css";

function About() {
    return (
        <div>
            <div>
                <div class="home-slider position-relative">
                    <section className="bg-half d-table w-100" style={{backgroundImage: `url(${bgImageMSOTop})`, backgroundSize: "100% 90%"}}>>
                        <div className="col-12 text-center text-block-transparent-over-image">
                            <h1 className="title mb-4"><b> Over MSO Vloeren </b></h1>
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
        
            <section className="section">
                <div className="container">
                    <div className="row align-items-center" id="counter">
                        <div className="col-md-6">
                            <img src={require("./../../images/vloerroosendaal.jpg")} height="auto" className="img-fluid" alt="" />
                        </div>

                        <div className="col-md-6">
                            <div className="ms-lg-4">
                                <div className="d-flex mb-4">
                                    <span className="text-primary h1 mb-0"><span className="counter-value display-1 fw-bold" data-target="20">20</span>+</span>
                                    <span className="h6 align-self-end ms-2">Jaar <br /> Ervaring</span>
                                    
                                </div>
                                <div className="section-title">
                                    <div className="d-flex mb-4">
                                        <span className="text-primary h1 mb-0">Uw bedrijfscultuur</span>
                                    </div>
                                    <h4 className="text-black">Het menselijk denken en handelen bepalen in hoge mate Uw bedrijfscultuur en daarmee het succes van Uw organisatie.<br /><br />
                                        MSO vloeren Onderhoud wil aan dat succes een bijdrage leveren door het aanbieden van kwalitatief hoogwaardige vloeren werk. Onze werkwijze kenmerkt zich door betrokkenheid bij onze opdrachtgevers.
                                        In ons bijna twintig jarig bestaan heeft deze aanpak geleid tot nu al langdurige relaties. Daar zijn we trots op.</h4>
                                    <a href="contact.html" className="btn btn-primary mt-3">Neem contact op</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <hr />
                </div>
                
                <div className="container">
                    <div className="row justify-content-center">
                        
                        <div className="col-12">
                            <div className="section-title text-center mb-4 pb-2">
                                <span className="text-primary text-center h1 ">Onze bedrijfscultuur</span>
                                <h4 className="text-black para-desc mx-auto mb-0"><br /><b>Wij lopen onze klanten niet voor de voeten. </b>Wij onderhouden Uw pand op momenten dat het U uitkomt. Met VCA-gecertificeerd personeel dat er genoegen in schept te kunnen meewerken aan een schone, hygiënische en veilige werkomgeving bij u ter plaatse.
                                    Volgens van tevoren gemaakte afspraken zodat we weten wat we van elkaar kunnen verwachten.
                                    Periodiek evalueren wij met u onze dienstverlening. Omdat wij u graag als klant hebben en houden.</h4>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <div className="container">
                    <hr />
                    <br />
                    <div className="row align-items-center" id="counter">
                        <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="ms-lg-4">
                                <div className="d-flex mb-4">
                                    <span className="text-primary h1 mb-0">Onze Dienstverlening</span>
                                </div>
                                <div className="section-title text-center text-md-start">
                                    <h4 className="text-black mb-0 para-desc">Onze dienstverlening bestrijkt een breed terrein.
                                        Wij werken in zowel de profit-  als de non-profit sector. In kantoorpanden, trappenhuizen, scholen, industriële omgevingen, verzorgingsinstellingen en overheid.</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <img src={require("./../../images/vloerkantine-aboutmso.jpg")} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;

/*
        <div>
            <div class="home-slider position-relative">
                <section className="bg-half d-table w-100" style={{backgroundImage: `url(${bgImageMSOTop})`, backgroundSize: "100% 90%"}}>>
                    <div className="col-12 text-center text-block-transparent-over-image">
                        <h1 className="title mb-4"><b> Over MSO Vloeren </b></h1>
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





    <div>
            <section className="bg-half d-table w-100" style={{backgroundImage: `url(${bgImageMSOTop})`, backgroundSize: "100% 90%"}}>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <div className="page-next-level title-heading">
                            <h1 className="text-white title-dark"> Over MSO Vloeren </h1>
                            <p className="text-white para-desc mb-0 mx-auto">MSO, dé specialist in Zuidwest Nederland op het gebied van onderhouden van stenen-, linoleum– en pvc gestoffeerde vloeren.</p>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        */
