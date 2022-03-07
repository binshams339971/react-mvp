import '../assets/css/Feedback.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import feedbackService from '../services/FeedbackService.js';
function Feedback() {
    let [rating, setRating] = useState(0);
    let [comment, setComment] = useState("");
    const [radio, setRadio] = useState(0);
    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    const submitButton = () => {
        feedbackService.insertFeedback(rating, comment, radio).then((res) => {
            console.log(res.status);
            if (res.status == 'success') {
                setRating(0);
                setComment("");
                setRadio(0);
            }
        })
    }
    //console.log(radio);
    return (
        <div className="container" id="content">
            <div className='d-flex justify-content-between'>
                <Link to="/">
                    <span className="material-icons-outlined" style={{ color: "#1C4A45", fontWeight: "bold" }}>
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
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={48}
                        activeColor="#daec70"
                    />
                </div>
                <textarea onChange={e => setComment(e.target.value)}
                    style={{ width: "100%", height: "200px", top: "0", border: "1.90656px solid #979797", boxSizing: "border-box", borderRadius: "9.53281px", color: "#747D88", fontSize: "25px", padding: "20px" }}></textarea>
                <h4 className="text-center mt-5" style={{ color: "rgba(64, 64, 64, 0.87)" }}>How was your Experience?</h4>
                <div className='text-center'>
                    <div className="reviews">
                        <input type="radio" id="radioA" value="radioA" checked={radio === "radioA"} onChange={(e) => { setRadio(e.target.value) }} />
                        <input type="radio" id="radioB" value="radioB" checked={radio === "radioB"} onChange={(e) => { setRadio(e.target.value) }} />
                        <input type="radio" id="radioC" value="radioC" checked={radio === "radioC"} onChange={(e) => { setRadio(e.target.value) }} />
                        <label for="radioA" className={radio == "radioA" ? "activeRadio" : ''}>
                            <span>Good</span>
                        </label>
                        <label for="radioB" className={radio == "radioB" ? "activeRadio" : ''}>
                            <span>Average</span>
                        </label>
                        <label for="radioC" className={radio == "radioC" ? "activeRadio" : ''} >
                            <span>Bad</span>
                        </label>
                    </div>
                </div>
                <br />
                <button className="send-btn" onClick={submitButton}>Send Now</button>
            </div>
        </div >
    )
}

export default Feedback;
