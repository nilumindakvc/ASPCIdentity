import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home({isEverythingReady}) {
  const navigate=useNavigate();

  
  return (
    <div>
      {isEverythingReady==true?
    <>
      <div className="site_describe_container_pic  ">
        <div className="hero_section_main_para fs-5  ">
          <h1 className="display-1" id="main_tag_line">Walk the Road Alone?</h1>
          <p className="lh-1">
            Let us guide you to trusted agencies, verified jobs, and a safer
            path to your global career.
          </p>
          <p className="lh-1">global destinations.</p>
        </div>

        <div className="hero_section_para fs-5">
          <p className="display-5 text-warning fw-lighter">
            Looking for overseas job opportunities{" "}
            <span className="text-danger">overwhelming?</span>
          </p>
          <p className="fw-lighter">
            especially with so many agencies claiming to be trustworthy. Our
            platform is designed to simplify that journey. We connect job
            seekers with verified, rated, and reviewed recruitment agencies
            across key global destinations. Whether you're searching for better
            opportunities, checking an agency’s credibility, or exploring what's
            possible abroad, we're here to make sure you take every step with
            confidence and clarity. Join a growing community that believes in
            safe migration, informed choices, and honest guidance.
          </p>
        </div>
      </div>

      <div className="main_section">
        <div className="text_left">
          <h1 class="display-3">Explore The Globe</h1>
          <h1 class="display-3">With Trusted Partners</h1>
          <p className="lh-1">
            Search verified agencies, read real reviews, and apply for
          </p>
          <p className="lh-1">
            for international job opportunities with confidence.
          </p>
          <button type="button" class="btn btn-primary btn-lg" onClick={()=>navigate("/Home")}>
            Find Your Partner
          </button>
        </div>
        <div className="img_right mask_image image_sec_1">
      
        </div>
      </div>

      <div className="main_section_para fs-5 bg-success-subtle text-success">
        <p className="display-5  fw-lighter ">
          Your gateway to safe and seamless international experiences.
        </p>
        <p className="fw-lighter">
          "Explore the globe with trusted partners and unlock a world of
          opportunities. Whether you're seeking new adventures, career
          prospects, or global connections, our verified partners ensure you
          move forward with confidence. From reliable guidance to secure
          services, we're here to make your international journey smooth, safe,
          and rewarding."
        </p>
      </div>

      <div className="main_section ">
        <div className="img_left mask_image image_sec_2"></div>
        <div className="text_right">
          <h1 class="display-3">Discover Global Carrer</h1>
          <p className="lh-1">
            Browse verified job listings from trusted agencies in top
          </p>
          <p className="lh-1">global destinations.</p>
          <button type="button" class="btn btn-secondary btn-lg" onClick={()=>navigate("/Home")}>
            Explore Jobs
          </button>
        </div>
      </div>
      <div className="main_section_para fs-5 bg-secondary-subtle text-dark">
        <p className="display-5 fw-lighter">Where talent meets the world</p>
        <p className="fw-lighter">
          Discover global career opportunities that match your skills, dreams,
          and ambitions. Whether you're seeking to work abroad, grow
          professionally, or connect with top international employers, we
          provide the guidance and trusted connections to make it happen. Step
          into a future without borders—confidently and securely.
        </p>
      </div>

      <div className="main_section">
        <div className="text_left">
          <h1 class="display-3">Register your Agency </h1>
          <h1 class="display-3">Today</h1>
          <p className="lh-1">
            Stand out as a verified recruiter and reach thousands of
          </p>
          <p className="lh-1">overseas job seekers.</p>
          <button type="button" class="btn btn-primary btn-lg" onClick={()=>navigate("/Home")}>
            Get Register Now
          </button>
        </div>
        <div className="img_right mask_image image_sec_3"></div>
      </div>
      <div className="main_section_para fs-5 bg-info-subtle text-primary-emphasis">
        <p className="display-5 fw-lighter">Build trust. Grow globally.</p>
        <p className="fw-lighter">
          especially with so many agencies claiming to be trustworthy. Our
          platform is designed to simplify that journey. We connect job seekers
          with verified, rated, and reviewed recruitment agencies across key
          global destinations. Whether you're searching for better
          opportunities, checking an agency’s credibility, or exploring what's
          possible abroad, we're here to make sure you take every step with
          confidence and clarity. 
        </p>
      </div>

      <div className="main_section">
        <div className="img_left mask_image image_sec_4"></div>
        <div className="text_right">
          <h1 className="display-3">Reviews That Build </h1>
          <h1 className="display-3">Trust</h1>
          <p className="lh-1">
            See how each agency is rated by real people who used
          </p>
          <p className="lh-1">their services.</p>
          <button type="button" class="btn btn-secondary btn-lg" onClick={()=>navigate("/Home")} id="button_to_get_ratings_page">
            See Ratings
          </button>
        </div>
      </div>
      
      <Footer />
    </>:
    <>
    <div className="starter_agent bg-light d-flex flex-column justify-content-center align-items-center">
       <p className="text-warning fw-lighter text-primary-emphasis fs-4"> 
            Agent is on the way
       </p>
       <div className="d-flex justify-content-center gap-1">
          <div class="spinner-grow spinner-grow-sm text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow spinner-grow-sm text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow spinner-grow-sm text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
       </div>
      
    </div>
    </>
  
    }</div>);
}
