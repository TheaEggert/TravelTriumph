// get an individual city that matches the label


export default function Description({appDescription}) {

    return(
        <div style={{textAlign: "left"}}>
            <div style={{ color: "GrayText", marginTop: "30px" }}>
                Description
            </div>
            <p style={{ marginTop: "30px" }}>{appDescription}</p>
        </div>
    );
}