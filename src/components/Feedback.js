import '../assets/css/Feedback.css';
import { Link } from "react-router-dom";
function Feedback() {
    return (
        <div className="container">
            <div className='d-flex justify-content-between'>
                <Link to="/">
                    <span class="material-icons-outlined" style={{ color: "#1C4A45", fontWeight: "bold" }}>
                        keyboard_backspace
                    </span>
                </Link>
                <h3 className='' style={{ color: "#1C4A45", fontSize: "36px" }}>Share Your Feedback</h3>
                <h3 className=''></h3>
            </div>
            <div className="mx-5">
                <p className="text-justify feedback-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
                    laudantium pariatur
                    obcaecati, eaque voluptatum adipisicing elit. Incidunt, laudantium pariaturadipisicing elit. Incidunt,
                    laudantium pariatur.</p>
                <h4 className="text-center mt-5" style={{ color: "rgba(64, 64, 64, 0.87)" }}>Rate your Experience?</h4>
                <div className="rating d-flex justify-content-center">
                    <span class="material-icons-outlined">
                        star
                    </span>
                    <span class="material-icons-outlined">
                        star
                    </span>
                    <span class="material-icons-outlined">
                        star
                    </span>
                    <span class="material-icons-outlined">
                        star
                    </span>
                    <span class="material-icons-outlined">
                        star
                    </span>
                </div>
                <textarea
                    style={{ width: "100%", height: "200px", top: "0", border: "1.90656px solid #979797", boxSizing: "border-box", borderRadius: "9.53281px", color: "#747D88", fontSize: "25px", padding: "20px" }}></textarea>
                <h4 className="text-center mt-5" style={{ color: "rgba(64, 64, 64, 0.87)" }}>How was your Experience?</h4>
                <div className='text-center'>
                    <div className="reviews">
                        <button>Good</button>
                        <button>Average</button>
                        <button>Bad</button>
                        {/* <input type="radio" name="select" id="option-1" checked />
                        <input type="radio" name="select" id="option-2" />
                        <input type="radio" name="select" id="option-3" />
                        <label for="option-1" className="option option-1">
                            <span>Good</span>
                        </label>
                        <label for="option-2" className="option option-2">
                            <span>Average</span>
                        </label>
                        <label for="option-3" className="option option-3">
                            <span>Bad</span>
                        </label> */}
                    </div>
                </div>
                <br />
                <button className="send-btn">Send Now</button>
            </div>
        </div >
    )
}

export default Feedback;
