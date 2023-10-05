import "./Footerstyles.css";

const Footer=()=>{
    return(
        <div className="footer">
            <div className="top-row">
            <div>
                <h1>TravelUp!</h1>
                <p>Choose your next destination.</p>
            </div>
            <div>
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-youtube-square"></i>
                </a>
            </div>

            </div>
            <div className="bottom-row">
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">Licence</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Communities</h4>
                <a href="/">Twitter</a>
                <a href="/">Facebook</a>
                <a href="/">Instagram</a>
                <a href="/">YouTube</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshooting</a>
                <a href="/">Contact Us</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href="/">Terms and Services</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Licence</a>
            </div>
                
            </div>
        </div>

    )
}

export default Footer