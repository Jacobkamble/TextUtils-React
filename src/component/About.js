export default function About(props) {

    return (
        <>
            <div className="container">
                <div className={`accordion container my-1`} id="accordionExample">
                    <h2 className={` text-${props.mode === "navbar-light bg-light" ? "dark" : "light"} `}>About Us</h2>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className={`accordion-button text-${props.mode === "navbar-light bg-light" ? "dark" : "light"} bg-${props.mode === "navbar-light bg-light" ? "light" : "dark"}`}
                                type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze Your Text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className={`accordion-body text-${props.mode === "navbar-light bg-light" ? "dark" : "light"} bg-${props.mode === "navbar-light bg-light" ? "light" : "dark"}`}>
                                <strong>TextUtils </strong> gives you a way to analyze Your text quickly
                                and efficiently.Be it word count,characters count,copy text,remove extra spaces
                                and to convert text to uppercase and to lowercase.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className={`accordion-button collapsed text-${props.mode === "navbar-light bg-light" ? "dark" : "light"} bg-${props.mode === "navbar-light bg-light" ? "light" : "dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

                                <strong>Free to use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className={`accordion-body text-${props.mode === "navbar-light bg-light" ? "dark" : "light"} bg-${props.mode === "navbar-light bg-light" ? "light" : "dark"}`}>
                                <strong>TextUtils </strong> is a free characters counter tool that provides
                                instant characters count and word count statictics for given text.TextUtils reports the
                                number of word and characters.
                                Thus it is suitable for writing text with word/charcters limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className={`accordion-button collapsed text-${props.mode === "navbar-light bg-light" ? "dark" : "light"} bg-${props.mode === "navbar-light bg-light" ? "light" : "dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className={`accordion-collapse collapse text-${props.mode === "navbar-light bg-light" ? "dark" : "light"} bg-${props.mode === "navbar-light bg-light" ? "light" : "dark"}`} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This word counter software work in any web browser such as Chrome,FireFox,
                                Internet Explorer,Safari,Opera.It suits to count characters in Facebook,blog,
                                book,excel document,pdf document and essay etc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
