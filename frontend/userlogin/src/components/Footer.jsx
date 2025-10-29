import "./Footer.css"

export default function Footer(){
    return(
        
        <div className="footer_container d-flex flex-column justify-content-center align-items-center">
        <footer className="bg-light text-dark  p-3 h-100 text-center mt-5 ">
            <div className="container">
                <hr className="mb-4"/>
                <p className="footer_text">
                  Our platform is designed to be the ultimate hub for individuals seeking overseas 
                  job opportunities and trustworthy recruitment partners. Whether you are a job seeker
                   looking for your next career move abroad, or a recruitment agency aiming to connect with a 
                   wider audience, our website offers a reliable and user-friendly solution. Job seekers can easily 
                   search and explore a vast range of international job openings tailored to their 
                   skills and aspirations. We connect you with verified and reputable agents, giving
                   you the confidence that you are dealing with professionals who prioritize
                   your success. Our built-in review and rating system empowers users to share
                   honest feedback about their experiences with agencies, helping others make 
                   informed decisions. For recruitment agencies, our platform provides a space 
                   to register, build your credibility, and publish your latest job opportunities
                   to attract the right candidates. By fostering transparency, trust, and accessibility, 
                   we are committed to creating a safe and efficient bridge between global talent and legitimate employers.
                </p>
                <p className="mb-0">© {new Date().getFullYear()} The Agent is Looking. All rights reserved.</p>
            </div>
        </footer>
        </div>
        
    )
}