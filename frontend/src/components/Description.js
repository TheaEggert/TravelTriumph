import React from 'react'; // for testing, we need to import React everywhere

export default function Description({appDescription}) {

    return(
        <div>
            <div style={{ color: "GrayText", marginTop: "30px" }}>
                Description
            </div>
            <div style={{ textAlign: "left", marginTop: "30px", wordWrap: "break-word", width: "400px" }}>
                {appDescription}
            </div>
        </div>
    );
}