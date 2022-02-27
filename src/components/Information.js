import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
export default function Information() {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between'>
                <Link to="/">
                    <span class="material-icons-outlined" style={{ color: "#1C4A45", fontWeight: "bold" }}>
                        keyboard_backspace
                    </span>
                </Link>
                <h3 className='' style={{ color: "#1C4A45", fontSize: "36px" }}>Privacy Policy</h3>
                <h3 className=''></h3>
            </div>
            <div className='d-flex justify-content-center my-4'>
                <ReactPlayer controls url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' playing={true} />
            </div>

            <div className="mx-5">
                <p className='text-justify' style={{ fontSize: "22px", lineHeight: "42px", color: "#747D88" }}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
                <p className='text-justify' style={{ fontSize: "22px", lineHeight: "42px", color: "#747D88" }}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
            </div>

        </div >
    )
}
