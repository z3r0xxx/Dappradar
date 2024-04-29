import './style.css';
import './roboto.css';

function AuthQRForm() {
    return (
        <>
            <div id="auth-qr-form" className="custom-scroll">
                <div className="auth-form qr">
                    <div className="qr-outer">
                        <div className="qr-inner opacity-transition slow open shown">
                            <div className="qr-container"><svg width="280" height="280">
                                <defs>
                                    <clipPath id="clip-path-dot-color">
                                        <path d="M 10 94v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,13.5,97.5)"></path>
                                        <path d="M 10 101v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,13.5,104.5)"></path>
                                        <path d="M 10 136v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,13.5,139.5)"></path>
                                        <path d="M 10 143v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,13.5,146.5)"></path>
                                        <path d="M 10 171v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,13.5,174.5)"></path>
                                        <path d="M 10 178v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,13.5,181.5)"></path>
                                        <path d="M 10 192v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,13.5,195.5)"></path>
                                        <path d="M 10 199v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,13.5,202.5)"></path>
                                        <path d="M 17 66v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,20.5,69.5)"></path>
                                        <path d="M 17 101v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,20.5,104.5)"></path>
                                        <path d="M 17 115v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,20.5,118.5)"></path>
                                        <path d="M 17 122v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,20.5,125.5)"></path>
                                        <rect x="17" y="136" width="7" height="7" transform="rotate(0,20.5,139.5)"></rect>
                                        <rect x="17" y="143" width="7" height="7" transform="rotate(0,20.5,146.5)"></rect>
                                        <path d="M 17 164v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,20.5,167.5)"></path>
                                        <path d="M 17 185v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,20.5,188.5)"></path>
                                        <path d="M 17 192v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,20.5,195.5)"></path>
                                        <rect x="24" y="66" width="7" height="7" transform="rotate(0,27.5,69.5)"></rect>
                                        <rect x="24" y="73" width="7" height="7" transform="rotate(0,27.5,76.5)"></rect>
                                        <path d="M 24 80v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,27.5,83.5)"></path>
                                        <path d="M 24 108v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,27.5,111.5)"></path>
                                        <path d="M 24 136v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,27.5,139.5)"></path>
                                        <rect x="24" y="143" width="7" height="7" transform="rotate(0,27.5,146.5)"></rect>
                                        <rect x="24" y="150" width="7" height="7" transform="rotate(0,27.5,153.5)"></rect>
                                        <rect x="24" y="157" width="7" height="7" transform="rotate(0,27.5,160.5)"></rect>
                                        <path d="M 24 164v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,27.5,167.5)"></path>
                                        <path d="M 24 178v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,27.5,181.5)"></path>
                                        <path d="M 24 199v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,27.5,202.5)"></path>
                                        <path d="M 31 66v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,34.5,69.5)"></path>
                                        <rect x="31" y="73" width="7" height="7" transform="rotate(0,34.5,76.5)"></rect>
                                        <rect x="31" y="80" width="7" height="7" transform="rotate(0,34.5,83.5)"></rect>
                                        <path d="M 31 87v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,34.5,90.5)"></path>
                                        <rect x="31" y="108" width="7" height="7" transform="rotate(0,34.5,111.5)"></rect>
                                        <path d="M 31 122v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,34.5,125.5)"></path>
                                        <path d="M 31 129v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,34.5,132.5)"></path>
                                        <path d="M 31 143v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,34.5,146.5)"></path>
                                        <rect x="31" y="150" width="7" height="7" transform="rotate(0,34.5,153.5)"></rect>
                                        <path d="M 31 157v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,34.5,160.5)"></path>
                                        <path d="M 31 178v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,34.5,181.5)"></path>
                                        <rect x="31" y="185" width="7" height="7" transform="rotate(0,34.5,188.5)"></rect>
                                        <rect x="31" y="192" width="7" height="7" transform="rotate(0,34.5,195.5)"></rect>
                                        <rect x="31" y="199" width="7" height="7" transform="rotate(0,34.5,202.5)"></rect>
                                        <path d="M 31 206v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,34.5,209.5)"></path>
                                        <path d="M 38 80v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,41.5,83.5)"></path>
                                        <path d="M 38 94v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,41.5,97.5)"></path>
                                        <rect x="38" y="101" width="7" height="7" transform="rotate(0,41.5,104.5)"></rect>
                                        <rect x="38" y="108" width="7" height="7" transform="rotate(0,41.5,111.5)"></rect>
                                        <path d="M 38 115v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,41.5,118.5)"></path>
                                        <path d="M 38 150v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,41.5,153.5)"></path>
                                        <path d="M 38 164v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,41.5,167.5)"></path>
                                        <path d="M 38 171v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,41.5,174.5)"></path>
                                        <path d="M 38 185v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,41.5,188.5)"></path>
                                        <rect x="38" y="192" width="7" height="7" transform="rotate(0,41.5,195.5)"></rect>
                                        <rect x="38" y="206" width="7" height="7" transform="rotate(0,41.5,209.5)"></rect>
                                        <path d="M 45 87v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,48.5,90.5)"></path>
                                        <rect x="45" y="94" width="7" height="7" transform="rotate(0,48.5,97.5)"></rect>
                                        <rect x="45" y="108" width="7" height="7" transform="rotate(0,48.5,111.5)"></rect>
                                        <path d="M 45 136v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,48.5,139.5)"></path>
                                        <path d="M 45 157v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,48.5,160.5)"></path>
                                        <rect x="45" y="164" width="7" height="7" transform="rotate(0,48.5,167.5)"></rect>
                                        <path d="M 45 178v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,48.5,181.5)"></path>
                                        <rect x="45" y="192" width="7" height="7" transform="rotate(0,48.5,195.5)"></rect>
                                        <rect x="45" y="206" width="7" height="7" transform="rotate(0,48.5,209.5)"></rect>
                                        <path d="M 52 66v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,55.5,69.5)"></path>
                                        <circle cx="55.5" cy="83.5" r="3.5" transform="rotate(0,55.5,83.5)"></circle>
                                        <path d="M 52 94v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,55.5,97.5)"></path>
                                        <rect x="52" y="108" width="7" height="7" transform="rotate(0,55.5,111.5)"></rect>
                                        <path d="M 52 122v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,55.5,125.5)"></path>
                                        <path d="M 52 136v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,55.5,139.5)"></path>
                                        <path d="M 52 150v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,55.5,153.5)"></path>
                                        <path d="M 52 164v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,55.5,167.5)"></path>
                                        <path d="M 52 178v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,55.5,181.5)"></path>
                                        <rect x="52" y="192" width="7" height="7" transform="rotate(0,55.5,195.5)"></rect>
                                        <rect x="52" y="206" width="7" height="7" transform="rotate(0,55.5,209.5)"></rect>
                                        <rect x="59" y="66" width="7" height="7" transform="rotate(0,62.5,69.5)"></rect>
                                        <path d="M 59 73v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,62.5,76.5)"></path>
                                        <path d="M 59 101v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,62.5,104.5)"></path>
                                        <rect x="59" y="108" width="7" height="7" transform="rotate(0,62.5,111.5)"></rect>
                                        <rect x="59" y="115" width="7" height="7" transform="rotate(0,62.5,118.5)"></rect>
                                        <path d="M 59 122v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,62.5,125.5)"></path>
                                        <rect x="59" y="150" width="7" height="7" transform="rotate(0,62.5,153.5)"></rect>
                                        <path d="M 59 157v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,62.5,160.5)"></path>
                                        <rect x="59" y="192" width="7" height="7" transform="rotate(0,62.5,195.5)"></rect>
                                        <rect x="59" y="206" width="7" height="7" transform="rotate(0,62.5,209.5)"></rect>
                                        <circle cx="69.5" cy="13.5" r="3.5" transform="rotate(0,69.5,13.5)"></circle>
                                        <circle cx="69.5" cy="55.5" r="3.5" transform="rotate(0,69.5,55.5)"></circle>
                                        <rect x="66" y="66" width="7" height="7" transform="rotate(0,69.5,69.5)"></rect>
                                        <circle cx="69.5" cy="90.5" r="3.5" transform="rotate(0,69.5,90.5)"></circle>
                                        <rect x="66" y="101" width="7" height="7" transform="rotate(0,69.5,104.5)"></rect>
                                        <path d="M 66 115v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,69.5,118.5)"></path>
                                        <circle cx="69.5" cy="139.5" r="3.5" transform="rotate(0,69.5,139.5)"></circle>
                                        <rect x="66" y="150" width="7" height="7" transform="rotate(0,69.5,153.5)"></rect>
                                        <rect x="66" y="157" width="7" height="7" transform="rotate(0,69.5,160.5)"></rect>
                                        <path d="M 66 164v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,69.5,167.5)"></path>
                                        <circle cx="69.5" cy="181.5" r="3.5" transform="rotate(0,69.5,181.5)"></circle>
                                        <rect x="66" y="192" width="7" height="7" transform="rotate(0,69.5,195.5)"></rect>
                                        <rect x="66" y="199" width="7" height="7" transform="rotate(0,69.5,202.5)"></rect>
                                        <rect x="66" y="206" width="7" height="7" transform="rotate(0,69.5,209.5)"></rect>
                                        <rect x="66" y="213" width="7" height="7" transform="rotate(0,69.5,216.5)"></rect>
                                        <path d="M 66 220v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,69.5,223.5)"></path>
                                        <path d="M 66 241v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,69.5,244.5)"></path>
                                        <rect x="66" y="248" width="7" height="7" transform="rotate(0,69.5,251.5)"></rect>
                                        <path d="M 66 255v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,69.5,258.5)"></path>
                                        <path d="M 73 17v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,76.5,20.5)"></path>
                                        <rect x="73" y="24" width="7" height="7" transform="rotate(0,76.5,27.5)"></rect>
                                        <rect x="73" y="31" width="7" height="7" transform="rotate(0,76.5,34.5)"></rect>
                                        <rect x="73" y="38" width="7" height="7" transform="rotate(0,76.5,41.5)"></rect>
                                        <path d="M 73 45v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,76.5,48.5)"></path>
                                        <rect x="73" y="66" width="7" height="7" transform="rotate(0,76.5,69.5)"></rect>
                                        <path d="M 73 94v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,76.5,97.5)"></path>
                                        <rect x="73" y="101" width="7" height="7" transform="rotate(0,76.5,104.5)"></rect>
                                        <circle cx="76.5" cy="132.5" r="3.5" transform="rotate(0,76.5,132.5)"></circle>
                                        <rect x="73" y="150" width="7" height="7" transform="rotate(0,76.5,153.5)"></rect>
                                        <path d="M 73 164v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,76.5,167.5)"></path>
                                        <path d="M 73 185v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,76.5,188.5)"></path>
                                        <rect x="73" y="192" width="7" height="7" transform="rotate(0,76.5,195.5)"></rect>
                                        <rect x="73" y="199" width="7" height="7" transform="rotate(0,76.5,202.5)"></rect>
                                        <path d="M 73 206v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,76.5,209.5)"></path>
                                        <path d="M 73 220v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,76.5,223.5)"></path>
                                        <rect x="73" y="227" width="7" height="7" transform="rotate(0,76.5,230.5)"></rect>
                                        <rect x="73" y="234" width="7" height="7" transform="rotate(0,76.5,237.5)"></rect>
                                        <rect x="73" y="241" width="7" height="7" transform="rotate(0,76.5,244.5)"></rect>
                                        <rect x="73" y="248" width="7" height="7" transform="rotate(0,76.5,251.5)"></rect>
                                        <path d="M 73 255v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,76.5,258.5)"></path>
                                        <path d="M 80 10v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,83.5,13.5)"></path>
                                        <rect x="80" y="17" width="7" height="7" transform="rotate(0,83.5,20.5)"></rect>
                                        <rect x="80" y="24" width="7" height="7" transform="rotate(0,83.5,27.5)"></rect>
                                        <circle cx="83.5" cy="55.5" r="3.5" transform="rotate(0,83.5,55.5)"></circle>
                                        <rect x="80" y="66" width="7" height="7" transform="rotate(0,83.5,69.5)"></rect>
                                        <path d="M 80 73v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,83.5,76.5)"></path>
                                        <rect x="80" y="94" width="7" height="7" transform="rotate(0,83.5,97.5)"></rect>
                                        <rect x="80" y="101" width="7" height="7" transform="rotate(0,83.5,104.5)"></rect>
                                        <path d="M 80 108v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,83.5,111.5)"></path>
                                        <circle cx="83.5" cy="139.5" r="3.5" transform="rotate(0,83.5,139.5)"></circle>
                                        <path d="M 80 150v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,83.5,153.5)"></path>
                                        <path d="M 80 157v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,83.5,160.5)"></path>
                                        <path d="M 80 171v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,83.5,174.5)"></path>
                                        <path d="M 80 178v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,83.5,181.5)"></path>
                                        <rect x="80" y="192" width="7" height="7" transform="rotate(0,83.5,195.5)"></rect>
                                        <path d="M 80 199v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,83.5,202.5)"></path>
                                        <rect x="80" y="241" width="7" height="7" transform="rotate(0,83.5,244.5)"></rect>
                                        <path d="M 80 248v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,83.5,251.5)"></path>
                                        <circle cx="83.5" cy="265.5" r="3.5" transform="rotate(0,83.5,265.5)"></circle>
                                        <path d="M 87 10v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,90.5,13.5)"></path>
                                        <rect x="87" y="17" width="7" height="7" transform="rotate(0,90.5,20.5)"></rect>
                                        <rect x="87" y="24" width="7" height="7" transform="rotate(0,90.5,27.5)"></rect>
                                        <rect x="87" y="31" width="7" height="7" transform="rotate(0,90.5,34.5)"></rect>
                                        <rect x="87" y="38" width="7" height="7" transform="rotate(0,90.5,41.5)"></rect>
                                        <path d="M 87 45v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,90.5,48.5)"></path>
                                        <path d="M 87 66v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,90.5,69.5)"></path>
                                        <path d="M 87 80v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,90.5,83.5)"></path>
                                        <rect x="87" y="87" width="7" height="7" transform="rotate(0,90.5,90.5)"></rect>
                                        <path d="M 87 94v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,90.5,97.5)"></path>
                                        <path d="M 87 115v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,90.5,118.5)"></path>
                                        <path d="M 87 122v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,90.5,125.5)"></path>
                                        <path d="M 87 171v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,90.5,174.5)"></path>
                                        <path d="M 87 192v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,90.5,195.5)"></path>
                                        <path d="M 87 206v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,90.5,209.5)"></path>
                                        <rect x="87" y="213" width="7" height="7" transform="rotate(0,90.5,216.5)"></rect>
                                        <path d="M 87 220v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,90.5,223.5)"></path>
                                        <path d="M 87 234v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,90.5,237.5)"></path>
                                        <rect x="87" y="241" width="7" height="7" transform="rotate(0,90.5,244.5)"></rect>
                                        <circle cx="90.5" cy="258.5" r="3.5" transform="rotate(0,90.5,258.5)"></circle>
                                        <path d="M 94 17v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,97.5,20.5)"></path>
                                        <rect x="94" y="24" width="7" height="7" transform="rotate(0,97.5,27.5)"></rect>
                                        <rect x="94" y="31" width="7" height="7" transform="rotate(0,97.5,34.5)"></rect>
                                        <rect x="94" y="38" width="7" height="7" transform="rotate(0,97.5,41.5)"></rect>
                                        <path d="M 94 52v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,97.5,55.5)"></path>
                                        <path d="M 94 59v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,97.5,62.5)"></path>
                                        <path d="M 94 73v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,97.5,76.5)"></path>
                                        <rect x="94" y="80" width="7" height="7" transform="rotate(0,97.5,83.5)"></rect>
                                        <rect x="94" y="87" width="7" height="7" transform="rotate(0,97.5,90.5)"></rect>
                                        <path d="M 94 136v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,97.5,139.5)"></path>
                                        <rect x="94" y="143" width="7" height="7" transform="rotate(0,97.5,146.5)"></rect>
                                        <path d="M 94 150v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,97.5,153.5)"></path>
                                        <path d="M 94 185v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,97.5,188.5)"></path>
                                        <path d="M 94 199v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,97.5,202.5)"></path>
                                        <rect x="94" y="206" width="7" height="7" transform="rotate(0,97.5,209.5)"></rect>
                                        <path d="M 94 220v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,97.5,223.5)"></path>
                                        <path d="M 94 227v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,97.5,230.5)"></path>
                                        <path d="M 94 241v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,97.5,244.5)"></path>
                                        <path d="M 94 262v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,97.5,265.5)"></path>
                                        <rect x="101" y="24" width="7" height="7" transform="rotate(0,104.5,27.5)"></rect>
                                        <rect x="101" y="31" width="7" height="7" transform="rotate(0,104.5,34.5)"></rect>
                                        <rect x="101" y="38" width="7" height="7" transform="rotate(0,104.5,41.5)"></rect>
                                        <path d="M 101 45v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,104.5,48.5)"></path>
                                        <circle cx="104.5" cy="69.5" r="3.5" transform="rotate(0,104.5,69.5)"></circle>
                                        <path d="M 101 87v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,104.5,90.5)"></path>
                                        <path d="M 101 122v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,104.5,125.5)"></path>
                                        <path d="M 101 129v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,104.5,132.5)"></path>
                                        <path d="M 101 150v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,104.5,153.5)"></path>
                                        <circle cx="104.5" cy="174.5" r="3.5" transform="rotate(0,104.5,174.5)"></circle>
                                        <path d="M 101 185v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,104.5,188.5)"></path>
                                        <rect x="101" y="199" width="7" height="7" transform="rotate(0,104.5,202.5)"></rect>
                                        <rect x="101" y="206" width="7" height="7" transform="rotate(0,104.5,209.5)"></rect>
                                        <rect x="101" y="227" width="7" height="7" transform="rotate(0,104.5,230.5)"></rect>
                                        <path d="M 101 248v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,104.5,251.5)"></path>
                                        <rect x="101" y="255" width="7" height="7" transform="rotate(0,104.5,258.5)"></rect>
                                        <rect x="101" y="262" width="7" height="7" transform="rotate(0,104.5,265.5)"></rect>
                                        <path d="M 108 10v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,111.5,13.5)"></path>
                                        <rect x="108" y="17" width="7" height="7" transform="rotate(0,111.5,20.5)"></rect>
                                        <rect x="108" y="24" width="7" height="7" transform="rotate(0,111.5,27.5)"></rect>
                                        <path d="M 108 52v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,111.5,55.5)"></path>
                                        <path d="M 108 59v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,111.5,62.5)"></path>
                                        <circle cx="111.5" cy="76.5" r="3.5" transform="rotate(0,111.5,76.5)"></circle>
                                        <path d="M 108 192v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,111.5,195.5)"></path>
                                        <rect x="108" y="199" width="7" height="7" transform="rotate(0,111.5,202.5)"></rect>
                                        <rect x="108" y="206" width="7" height="7" transform="rotate(0,111.5,209.5)"></rect>
                                        <path d="M 108 213v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,111.5,216.5)"></path>
                                        <rect x="108" y="227" width="7" height="7" transform="rotate(0,111.5,230.5)"></rect>
                                        <rect x="108" y="234" width="7" height="7" transform="rotate(0,111.5,237.5)"></rect>
                                        <rect x="108" y="241" width="7" height="7" transform="rotate(0,111.5,244.5)"></rect>
                                        <rect x="108" y="248" width="7" height="7" transform="rotate(0,111.5,251.5)"></rect>
                                        <rect x="108" y="255" width="7" height="7" transform="rotate(0,111.5,258.5)"></rect>
                                        <rect x="108" y="262" width="7" height="7" transform="rotate(0,111.5,265.5)"></rect>
                                        <rect x="115" y="10" width="7" height="7" transform="rotate(0,118.5,13.5)"></rect>
                                        <rect x="115" y="24" width="7" height="7" transform="rotate(0,118.5,27.5)"></rect>
                                        <rect x="115" y="31" width="7" height="7" transform="rotate(0,118.5,34.5)"></rect>
                                        <rect x="115" y="38" width="7" height="7" transform="rotate(0,118.5,41.5)"></rect>
                                        <path d="M 115 45v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,118.5,48.5)"></path>
                                        <circle cx="118.5" cy="69.5" r="3.5" transform="rotate(0,118.5,69.5)"></circle>
                                        <path d="M 115 87v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,118.5,90.5)"></path>
                                        <path d="M 115 94v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,118.5,97.5)"></path>
                                        <circle cx="118.5" cy="181.5" r="3.5" transform="rotate(0,118.5,181.5)"></circle>
                                        <rect x="115" y="192" width="7" height="7" transform="rotate(0,118.5,195.5)"></rect>
                                        <rect x="115" y="199" width="7" height="7" transform="rotate(0,118.5,202.5)"></rect>
                                        <rect x="115" y="206" width="7" height="7" transform="rotate(0,118.5,209.5)"></rect>
                                        <rect x="115" y="213" width="7" height="7" transform="rotate(0,118.5,216.5)"></rect>
                                        <path d="M 115 227v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,118.5,230.5)"></path>
                                        <path d="M 115 234v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,118.5,237.5)"></path>
                                        <rect x="115" y="248" width="7" height="7" transform="rotate(0,118.5,251.5)"></rect>
                                        <rect x="115" y="262" width="7" height="7" transform="rotate(0,118.5,265.5)"></rect>
                                        <rect x="122" y="10" width="7" height="7" transform="rotate(0,125.5,13.5)"></rect>
                                        <rect x="122" y="17" width="7" height="7" transform="rotate(0,125.5,20.5)"></rect>
                                        <rect x="122" y="24" width="7" height="7" transform="rotate(0,125.5,27.5)"></rect>
                                        <rect x="122" y="31" width="7" height="7" transform="rotate(0,125.5,34.5)"></rect>
                                        <path d="M 122 38v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,125.5,41.5)"></path>
                                        <path d="M 122 52v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,125.5,55.5)"></path>
                                        <path d="M 122 59v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,125.5,62.5)"></path>
                                        <rect x="122" y="94" width="7" height="7" transform="rotate(0,125.5,97.5)"></rect>
                                        <circle cx="125.5" cy="174.5" r="3.5" transform="rotate(0,125.5,174.5)"></circle>
                                        <path d="M 122 185v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,125.5,188.5)"></path>
                                        <path d="M 122 192v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,125.5,195.5)"></path>
                                        <rect x="122" y="206" width="7" height="7" transform="rotate(0,125.5,209.5)"></rect>
                                        <rect x="122" y="213" width="7" height="7" transform="rotate(0,125.5,216.5)"></rect>
                                        <path d="M 122 220v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,125.5,223.5)"></path>
                                        <path d="M 122 241v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,125.5,244.5)"></path>
                                        <rect x="122" y="248" width="7" height="7" transform="rotate(0,125.5,251.5)"></rect>
                                        <rect x="122" y="255" width="7" height="7" transform="rotate(0,125.5,258.5)"></rect>
                                        <path d="M 122 262v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,125.5,265.5)"></path>
                                        <rect x="129" y="10" width="7" height="7" transform="rotate(0,132.5,13.5)"></rect>
                                        <rect x="129" y="17" width="7" height="7" transform="rotate(0,132.5,20.5)"></rect>
                                        <path d="M 129 45v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,132.5,48.5)"></path>
                                        <path d="M 129 59v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,132.5,62.5)"></path>
                                        <circle cx="132.5" cy="83.5" r="3.5" transform="rotate(0,132.5,83.5)"></circle>
                                        <path d="M 129 94v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,132.5,97.5)"></path>
                                        <path d="M 129 101v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,132.5,104.5)"></path>
                                        <circle cx="132.5" cy="181.5" r="3.5" transform="rotate(0,132.5,181.5)"></circle>
                                        <path d="M 129 199v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,132.5,202.5)"></path>
                                        <rect x="129" y="206" width="7" height="7" transform="rotate(0,132.5,209.5)"></rect>
                                        <path d="M 129 220v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,132.5,223.5)"></path>
                                        <path d="M 129 227v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,132.5,230.5)"></path>
                                        <path d="M 129 241v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,132.5,244.5)"></path>
                                        <rect x="129" y="248" width="7" height="7" transform="rotate(0,132.5,251.5)"></rect>
                                        <rect x="136" y="10" width="7" height="7" transform="rotate(0,139.5,13.5)"></rect>
                                        <rect x="136" y="17" width="7" height="7" transform="rotate(0,139.5,20.5)"></rect>
                                        <rect x="136" y="24" width="7" height="7" transform="rotate(0,139.5,27.5)"></rect>
                                        <rect x="136" y="31" width="7" height="7" transform="rotate(0,139.5,34.5)"></rect>
                                        <rect x="136" y="38" width="7" height="7" transform="rotate(0,139.5,41.5)"></rect>
                                        <rect x="136" y="45" width="7" height="7" transform="rotate(0,139.5,48.5)"></rect>
                                        <path d="M 136 52v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,139.5,55.5)"></path>
                                        <circle cx="139.5" cy="76.5" r="3.5" transform="rotate(0,139.5,76.5)"></circle>
                                        <path d="M 136 87v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,139.5,90.5)"></path>
                                        <path d="M 136 101v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,139.5,104.5)"></path>
                                        <circle cx="139.5" cy="174.5" r="3.5" transform="rotate(0,139.5,174.5)"></circle>
                                        <path d="M 136 185v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,139.5,188.5)"></path>
                                        <rect x="136" y="192" width="7" height="7" transform="rotate(0,139.5,195.5)"></rect>
                                        <rect x="136" y="199" width="7" height="7" transform="rotate(0,139.5,202.5)"></rect>
                                        <rect x="136" y="206" width="7" height="7" transform="rotate(0,139.5,209.5)"></rect>
                                        <path d="M 136 227v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,139.5,230.5)"></path>
                                        <path d="M 136 234v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,139.5,237.5)"></path>
                                        <path d="M 136 248v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,139.5,251.5)"></path>
                                        <path d="M 136 262v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,139.5,265.5)"></path>
                                        <path d="M 143 10v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,146.5,13.5)"></path>
                                        <rect x="143" y="87" width="7" height="7" transform="rotate(0,146.5,90.5)"></rect>
                                        <path d="M 143 94v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,146.5,97.5)"></path>
                                        <circle cx="146.5" cy="181.5" r="3.5" transform="rotate(0,146.5,181.5)"></circle>
                                        <rect x="143" y="192" width="7" height="7" transform="rotate(0,146.5,195.5)"></rect>
                                        <rect x="143" y="199" width="7" height="7" transform="rotate(0,146.5,202.5)"></rect>
                                        <path d="M 143 206v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,146.5,209.5)"></path>
                                        <rect x="143" y="234" width="7" height="7" transform="rotate(0,146.5,237.5)"></rect>
                                        <rect x="143" y="262" width="7" height="7" transform="rotate(0,146.5,265.5)"></rect>
                                        <path d="M 150 24v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,153.5,27.5)"></path>
                                        <path d="M 150 45v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,153.5,48.5)"></path>
                                        <rect x="150" y="52" width="7" height="7" transform="rotate(0,153.5,55.5)"></rect>
                                        <rect x="150" y="59" width="7" height="7" transform="rotate(0,153.5,62.5)"></rect>
                                        <path d="M 150 66v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,153.5,69.5)"></path>
                                        <path d="M 150 80v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,153.5,83.5)"></path>
                                        <rect x="150" y="87" width="7" height="7" transform="rotate(0,153.5,90.5)"></rect>
                                        <rect x="150" y="94" width="7" height="7" transform="rotate(0,153.5,97.5)"></rect>
                                        <path d="M 150 101v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,153.5,104.5)"></path>
                                        <path d="M 150 192v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,153.5,195.5)"></path>
                                        <rect x="150" y="199" width="7" height="7" transform="rotate(0,153.5,202.5)"></rect>
                                        <circle cx="153.5" cy="223.5" r="3.5" transform="rotate(0,153.5,223.5)"></circle>
                                        <rect x="150" y="234" width="7" height="7" transform="rotate(0,153.5,237.5)"></rect>
                                        <path d="M 150 248v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,153.5,251.5)"></path>
                                        <rect x="150" y="255" width="7" height="7" transform="rotate(0,153.5,258.5)"></rect>
                                        <rect x="150" y="262" width="7" height="7" transform="rotate(0,153.5,265.5)"></rect>
                                        <path d="M 157 17v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,160.5,20.5)"></path>
                                        <rect x="157" y="24" width="7" height="7" transform="rotate(0,160.5,27.5)"></rect>
                                        <path d="M 157 31v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,160.5,34.5)"></path>
                                        <rect x="157" y="45" width="7" height="7" transform="rotate(0,160.5,48.5)"></rect>
                                        <path d="M 157 73v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,160.5,76.5)"></path>
                                        <path d="M 157 101v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,160.5,104.5)"></path>
                                        <circle cx="160.5" cy="174.5" r="3.5" transform="rotate(0,160.5,174.5)"></circle>
                                        <path d="M 157 185v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,160.5,188.5)"></path>
                                        <rect x="157" y="199" width="7" height="7" transform="rotate(0,160.5,202.5)"></rect>
                                        <path d="M 157 213v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,160.5,216.5)"></path>
                                        <path d="M 157 227v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,160.5,230.5)"></path>
                                        <rect x="157" y="234" width="7" height="7" transform="rotate(0,160.5,237.5)"></rect>
                                        <path d="M 157 241v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,160.5,244.5)"></path>
                                        <rect x="157" y="262" width="7" height="7" transform="rotate(0,160.5,265.5)"></rect>
                                        <path d="M 164 31v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,167.5,34.5)"></path>
                                        <rect x="164" y="45" width="7" height="7" transform="rotate(0,167.5,48.5)"></rect>
                                        <rect x="164" y="52" width="7" height="7" transform="rotate(0,167.5,55.5)"></rect>
                                        <rect x="164" y="59" width="7" height="7" transform="rotate(0,167.5,62.5)"></rect>
                                        <rect x="164" y="66" width="7" height="7" transform="rotate(0,167.5,69.5)"></rect>
                                        <rect x="164" y="73" width="7" height="7" transform="rotate(0,167.5,76.5)"></rect>
                                        <path d="M 164 80v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,167.5,83.5)"></path>
                                        <circle cx="167.5" cy="97.5" r="3.5" transform="rotate(0,167.5,97.5)"></circle>
                                        <path d="M 164 178v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,167.5,181.5)"></path>
                                        <path d="M 164 185v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,167.5,188.5)"></path>
                                        <rect x="164" y="199" width="7" height="7" transform="rotate(0,167.5,202.5)"></rect>
                                        <rect x="164" y="206" width="7" height="7" transform="rotate(0,167.5,209.5)"></rect>
                                        <rect x="164" y="213" width="7" height="7" transform="rotate(0,167.5,216.5)"></rect>
                                        <rect x="164" y="220" width="7" height="7" transform="rotate(0,167.5,223.5)"></rect>
                                        <rect x="164" y="227" width="7" height="7" transform="rotate(0,167.5,230.5)"></rect>
                                        <rect x="164" y="234" width="7" height="7" transform="rotate(0,167.5,237.5)"></rect>
                                        <path d="M 164 248v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,167.5,251.5)"></path>
                                        <rect x="164" y="255" width="7" height="7" transform="rotate(0,167.5,258.5)"></rect>
                                        <rect x="164" y="262" width="7" height="7" transform="rotate(0,167.5,265.5)"></rect>
                                        <path d="M 171 17v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,174.5,20.5)"></path>
                                        <path d="M 171 38v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,174.5,41.5)"></path>
                                        <rect x="171" y="45" width="7" height="7" transform="rotate(0,174.5,48.5)"></rect>
                                        <path d="M 171 59v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,174.5,62.5)"></path>
                                        <path d="M 171 87v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,174.5,90.5)"></path>
                                        <circle cx="174.5" cy="146.5" r="3.5" transform="rotate(0,174.5,146.5)"></circle>
                                        <path d="M 171 157v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,174.5,160.5)"></path>
                                        <path d="M 171 171v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,174.5,174.5)"></path>
                                        <rect x="171" y="178" width="7" height="7" transform="rotate(0,174.5,181.5)"></rect>
                                        <path d="M 171 199v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,174.5,202.5)"></path>
                                        <rect x="171" y="206" width="7" height="7" transform="rotate(0,174.5,209.5)"></rect>
                                        <path d="M 171 213v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,174.5,216.5)"></path>
                                        <rect x="171" y="227" width="7" height="7" transform="rotate(0,174.5,230.5)"></rect>
                                        <rect x="171" y="234" width="7" height="7" transform="rotate(0,174.5,237.5)"></rect>
                                        <path d="M 171 255v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,174.5,258.5)"></path>
                                        <path d="M 171 262v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,174.5,265.5)"></path>
                                        <path d="M 178 10v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,181.5,13.5)"></path>
                                        <rect x="178" y="17" width="7" height="7" transform="rotate(0,181.5,20.5)"></rect>
                                        <rect x="178" y="24" width="7" height="7" transform="rotate(0,181.5,27.5)"></rect>
                                        <rect x="178" y="31" width="7" height="7" transform="rotate(0,181.5,34.5)"></rect>
                                        <rect x="178" y="38" width="7" height="7" transform="rotate(0,181.5,41.5)"></rect>
                                        <rect x="178" y="45" width="7" height="7" transform="rotate(0,181.5,48.5)"></rect>
                                        <path d="M 178 52v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,181.5,55.5)"></path>
                                        <path d="M 178 66v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,181.5,69.5)"></path>
                                        <path d="M 178 80v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,181.5,83.5)"></path>
                                        <rect x="178" y="87" width="7" height="7" transform="rotate(0,181.5,90.5)"></rect>
                                        <path d="M 178 94v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,181.5,97.5)"></path>
                                        <path d="M 178 115v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,181.5,118.5)"></path>
                                        <rect x="178" y="122" width="7" height="7" transform="rotate(0,181.5,125.5)"></rect>
                                        <rect x="178" y="129" width="7" height="7" transform="rotate(0,181.5,132.5)"></rect>
                                        <path d="M 178 136v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,181.5,139.5)"></path>
                                        <path d="M 178 157v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,181.5,160.5)"></path>
                                        <path d="M 178 171v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,181.5,174.5)"></path>
                                        <path d="M 178 178v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,181.5,181.5)"></path>
                                        <rect x="178" y="206" width="7" height="7" transform="rotate(0,181.5,209.5)"></rect>
                                        <path d="M 178 220v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,181.5,223.5)"></path>
                                        <rect x="178" y="227" width="7" height="7" transform="rotate(0,181.5,230.5)"></rect>
                                        <rect x="178" y="234" width="7" height="7" transform="rotate(0,181.5,237.5)"></rect>
                                        <path d="M 178 241v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,181.5,244.5)"></path>
                                        <rect x="185" y="10" width="7" height="7" transform="rotate(0,188.5,13.5)"></rect>
                                        <path d="M 185 17v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,188.5,20.5)"></path>
                                        <path d="M 185 45v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,188.5,48.5)"></path>
                                        <rect x="185" y="66" width="7" height="7" transform="rotate(0,188.5,69.5)"></rect>
                                        <path d="M 185 80v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,188.5,83.5)"></path>
                                        <path d="M 185 101v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,188.5,104.5)"></path>
                                        <path d="M 185 108v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,188.5,111.5)"></path>
                                        <path d="M 185 122v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,188.5,125.5)"></path>
                                        <rect x="185" y="129" width="7" height="7" transform="rotate(0,188.5,132.5)"></rect>
                                        <circle cx="188.5" cy="195.5" r="3.5" transform="rotate(0,188.5,195.5)"></circle>
                                        <path d="M 185 206v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,188.5,209.5)"></path>
                                        <path d="M 185 227v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,188.5,230.5)"></path>
                                        <path d="M 185 255v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,188.5,258.5)"></path>
                                        <rect x="192" y="10" width="7" height="7" transform="rotate(0,195.5,13.5)"></rect>
                                        <path d="M 192 24v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,195.5,27.5)"></path>
                                        <path d="M 192 31v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,195.5,34.5)"></path>
                                        <circle cx="195.5" cy="55.5" r="3.5" transform="rotate(0,195.5,55.5)"></circle>
                                        <rect x="192" y="66" width="7" height="7" transform="rotate(0,195.5,69.5)"></rect>
                                        <circle cx="195.5" cy="97.5" r="3.5" transform="rotate(0,195.5,97.5)"></circle>
                                        <path d="M 192 129v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,195.5,132.5)"></path>
                                        <path d="M 192 136v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,195.5,139.5)"></path>
                                        <path d="M 192 150v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,195.5,153.5)"></path>
                                        <path d="M 192 157v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,195.5,160.5)"></path>
                                        <path d="M 192 171v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,195.5,174.5)"></path>
                                        <path d="M 192 178v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,195.5,181.5)"></path>
                                        <path d="M 192 199v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,195.5,202.5)"></path>
                                        <path d="M 192 213v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,195.5,216.5)"></path>
                                        <path d="M 192 234v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,195.5,237.5)"></path>
                                        <rect x="192" y="241" width="7" height="7" transform="rotate(0,195.5,244.5)"></rect>
                                        <rect x="192" y="248" width="7" height="7" transform="rotate(0,195.5,251.5)"></rect>
                                        <rect x="192" y="255" width="7" height="7" transform="rotate(0,195.5,258.5)"></rect>
                                        <path d="M 192 262v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,195.5,265.5)"></path>
                                        <rect x="199" y="10" width="7" height="7" transform="rotate(0,202.5,13.5)"></rect>
                                        <path d="M 199 24v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,202.5,27.5)"></path>
                                        <rect x="199" y="31" width="7" height="7" transform="rotate(0,202.5,34.5)"></rect>
                                        <path d="M 199 38v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,202.5,41.5)"></path>
                                        <path d="M 199 59v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,202.5,62.5)"></path>
                                        <path d="M 199 66v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,202.5,69.5)"></path>
                                        <path d="M 199 80v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,202.5,83.5)"></path>
                                        <path d="M 199 101v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,202.5,104.5)"></path>
                                        <circle cx="202.5" cy="118.5" r="3.5" transform="rotate(0,202.5,118.5)"></circle>
                                        <path d="M 199 136v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,202.5,139.5)"></path>
                                        <rect x="199" y="150" width="7" height="7" transform="rotate(0,202.5,153.5)"></rect>
                                        <rect x="199" y="171" width="7" height="7" transform="rotate(0,202.5,174.5)"></rect>
                                        <rect x="199" y="199" width="7" height="7" transform="rotate(0,202.5,202.5)"></rect>
                                        <rect x="199" y="213" width="7" height="7" transform="rotate(0,202.5,216.5)"></rect>
                                        <path d="M 199 227v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,202.5,230.5)"></path>
                                        <rect x="199" y="234" width="7" height="7" transform="rotate(0,202.5,237.5)"></rect>
                                        <rect x="199" y="248" width="7" height="7" transform="rotate(0,202.5,251.5)"></rect>
                                        <rect x="199" y="255" width="7" height="7" transform="rotate(0,202.5,258.5)"></rect>
                                        <path d="M 206 10v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,209.5,13.5)"></path>
                                        <path d="M 206 38v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,209.5,41.5)"></path>
                                        <circle cx="209.5" cy="55.5" r="3.5" transform="rotate(0,209.5,55.5)"></circle>
                                        <path d="M 206 80v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,209.5,83.5)"></path>
                                        <rect x="206" y="101" width="7" height="7" transform="rotate(0,209.5,104.5)"></rect>
                                        <path d="M 206 122v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,209.5,125.5)"></path>
                                        <path d="M 206 129v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,209.5,132.5)"></path>
                                        <rect x="206" y="150" width="7" height="7" transform="rotate(0,209.5,153.5)"></rect>
                                        <path d="M 206 164v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,209.5,167.5)"></path>
                                        <rect x="206" y="171" width="7" height="7" transform="rotate(0,209.5,174.5)"></rect>
                                        <path d="M 206 192v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,209.5,195.5)"></path>
                                        <rect x="206" y="199" width="7" height="7" transform="rotate(0,209.5,202.5)"></rect>
                                        <rect x="206" y="206" width="7" height="7" transform="rotate(0,209.5,209.5)"></rect>
                                        <rect x="206" y="213" width="7" height="7" transform="rotate(0,209.5,216.5)"></rect>
                                        <rect x="206" y="220" width="7" height="7" transform="rotate(0,209.5,223.5)"></rect>
                                        <rect x="206" y="227" width="7" height="7" transform="rotate(0,209.5,230.5)"></rect>
                                        <rect x="206" y="234" width="7" height="7" transform="rotate(0,209.5,237.5)"></rect>
                                        <rect x="206" y="248" width="7" height="7" transform="rotate(0,209.5,251.5)"></rect>
                                        <path d="M 206 255v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,209.5,258.5)"></path>
                                        <path d="M 213 66v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,216.5,69.5)"></path>
                                        <path d="M 213 73v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,216.5,76.5)"></path>
                                        <path d="M 213 87v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,216.5,90.5)"></path>
                                        <rect x="213" y="101" width="7" height="7" transform="rotate(0,216.5,104.5)"></rect>
                                        <path d="M 213 115v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,216.5,118.5)"></path>
                                        <rect x="213" y="122" width="7" height="7" transform="rotate(0,216.5,125.5)"></rect>
                                        <rect x="213" y="129" width="7" height="7" transform="rotate(0,216.5,132.5)"></rect>
                                        <rect x="213" y="136" width="7" height="7" transform="rotate(0,216.5,139.5)"></rect>
                                        <rect x="213" y="143" width="7" height="7" transform="rotate(0,216.5,146.5)"></rect>
                                        <path d="M 213 150v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,216.5,153.5)"></path>
                                        <rect x="213" y="164" width="7" height="7" transform="rotate(0,216.5,167.5)"></rect>
                                        <rect x="213" y="171" width="7" height="7" transform="rotate(0,216.5,174.5)"></rect>
                                        <path d="M 213 185v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,216.5,188.5)"></path>
                                        <rect x="213" y="206" width="7" height="7" transform="rotate(0,216.5,209.5)"></rect>
                                        <rect x="213" y="234" width="7" height="7" transform="rotate(0,216.5,237.5)"></rect>
                                        <rect x="213" y="241" width="7" height="7" transform="rotate(0,216.5,244.5)"></rect>
                                        <path d="M 213 248v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,216.5,251.5)"></path>
                                        <path d="M 220 73v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,223.5,76.5)"></path>
                                        <rect x="220" y="80" width="7" height="7" transform="rotate(0,223.5,83.5)"></rect>
                                        <path d="M 220 87v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,223.5,90.5)"></path>
                                        <path d="M 220 101v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,223.5,104.5)"></path>
                                        <rect x="220" y="115" width="7" height="7" transform="rotate(0,223.5,118.5)"></rect>
                                        <rect x="220" y="122" width="7" height="7" transform="rotate(0,223.5,125.5)"></rect>
                                        <rect x="220" y="143" width="7" height="7" transform="rotate(0,223.5,146.5)"></rect>
                                        <path d="M 220 157v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,223.5,160.5)"></path>
                                        <rect x="220" y="164" width="7" height="7" transform="rotate(0,223.5,167.5)"></rect>
                                        <rect x="220" y="171" width="7" height="7" transform="rotate(0,223.5,174.5)"></rect>
                                        <rect x="220" y="178" width="7" height="7" transform="rotate(0,223.5,181.5)"></rect>
                                        <rect x="220" y="185" width="7" height="7" transform="rotate(0,223.5,188.5)"></rect>
                                        <path d="M 220 192v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,223.5,195.5)"></path>
                                        <rect x="220" y="206" width="7" height="7" transform="rotate(0,223.5,209.5)"></rect>
                                        <circle cx="223.5" cy="223.5" r="3.5" transform="rotate(0,223.5,223.5)"></circle>
                                        <rect x="220" y="234" width="7" height="7" transform="rotate(0,223.5,237.5)"></rect>
                                        <path d="M 220 255v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,223.5,258.5)"></path>
                                        <path d="M 220 262v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,223.5,265.5)"></path>
                                        <rect x="227" y="80" width="7" height="7" transform="rotate(0,230.5,83.5)"></rect>
                                        <path d="M 227 108v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,230.5,111.5)"></path>
                                        <rect x="227" y="115" width="7" height="7" transform="rotate(0,230.5,118.5)"></rect>
                                        <rect x="227" y="122" width="7" height="7" transform="rotate(0,230.5,125.5)"></rect>
                                        <rect x="227" y="129" width="7" height="7" transform="rotate(0,230.5,132.5)"></rect>
                                        <rect x="227" y="136" width="7" height="7" transform="rotate(0,230.5,139.5)"></rect>
                                        <path d="M 227 143v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,230.5,146.5)"></path>
                                        <path d="M 227 164v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,230.5,167.5)"></path>
                                        <path d="M 227 171v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,230.5,174.5)"></path>
                                        <path d="M 227 199v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,230.5,202.5)"></path>
                                        <rect x="227" y="206" width="7" height="7" transform="rotate(0,230.5,209.5)"></rect>
                                        <rect x="227" y="234" width="7" height="7" transform="rotate(0,230.5,237.5)"></rect>
                                        <path d="M 227 241v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,230.5,244.5)"></path>
                                        <path d="M 227 255v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,230.5,258.5)"></path>
                                        <rect x="227" y="262" width="7" height="7" transform="rotate(0,230.5,265.5)"></rect>
                                        <path d="M 234 73v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,237.5,76.5)"></path>
                                        <path d="M 234 80v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,237.5,83.5)"></path>
                                        <path d="M 234 115v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,237.5,118.5)"></path>
                                        <rect x="234" y="122" width="7" height="7" transform="rotate(0,237.5,125.5)"></rect>
                                        <circle cx="237.5" cy="160.5" r="3.5" transform="rotate(0,237.5,160.5)"></circle>
                                        <path d="M 234 178v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,237.5,181.5)"></path>
                                        <path d="M 234 192v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,237.5,195.5)"></path>
                                        <rect x="234" y="199" width="7" height="7" transform="rotate(0,237.5,202.5)"></rect>
                                        <rect x="234" y="206" width="7" height="7" transform="rotate(0,237.5,209.5)"></rect>
                                        <rect x="234" y="213" width="7" height="7" transform="rotate(0,237.5,216.5)"></rect>
                                        <rect x="234" y="220" width="7" height="7" transform="rotate(0,237.5,223.5)"></rect>
                                        <rect x="234" y="227" width="7" height="7" transform="rotate(0,237.5,230.5)"></rect>
                                        <rect x="234" y="234" width="7" height="7" transform="rotate(0,237.5,237.5)"></rect>
                                        <rect x="234" y="241" width="7" height="7" transform="rotate(0,237.5,244.5)"></rect>
                                        <path d="M 234 248v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,237.5,251.5)"></path>
                                        <path d="M 234 262v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,237.5,265.5)"></path>
                                        <path d="M 241 87v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,244.5,90.5)"></path>
                                        <path d="M 241 101v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,244.5,104.5)"></path>
                                        <path d="M 241 108v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,244.5,111.5)"></path>
                                        <rect x="241" y="122" width="7" height="7" transform="rotate(0,244.5,125.5)"></rect>
                                        <circle cx="244.5" cy="139.5" r="3.5" transform="rotate(0,244.5,139.5)"></circle>
                                        <path d="M 241 178v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,244.5,181.5)"></path>
                                        <path d="M 241 185v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,244.5,188.5)"></path>
                                        <path d="M 241 206v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,244.5,209.5)"></path>
                                        <rect x="241" y="213" width="7" height="7" transform="rotate(0,244.5,216.5)"></rect>
                                        <path d="M 241 220v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,244.5,223.5)"></path>
                                        <circle cx="244.5" cy="258.5" r="3.5" transform="rotate(0,244.5,258.5)"></circle>
                                        <circle cx="251.5" cy="76.5" r="3.5" transform="rotate(0,251.5,76.5)"></circle>
                                        <path d="M 248 87v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,251.5,90.5)"></path>
                                        <path d="M 248 101v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,251.5,104.5)"></path>
                                        <path d="M 248 115v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,251.5,118.5)"></path>
                                        <rect x="248" y="122" width="7" height="7" transform="rotate(0,251.5,125.5)"></rect>
                                        <path d="M 248 129v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,251.5,132.5)"></path>
                                        <path d="M 248 143v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,251.5,146.5)"></path>
                                        <path d="M 248 157v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,251.5,160.5)"></path>
                                        <path d="M 248 164v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,251.5,167.5)"></path>
                                        <circle cx="251.5" cy="195.5" r="3.5" transform="rotate(0,251.5,195.5)"></circle>
                                        <path d="M 248 213v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,251.5,216.5)"></path>
                                        <circle cx="251.5" cy="230.5" r="3.5" transform="rotate(0,251.5,230.5)"></circle>
                                        <path d="M 248 262v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,251.5,265.5)"></path>
                                        <path d="M 255 136v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,258.5,139.5)"></path>
                                        <rect x="255" y="143" width="7" height="7" transform="rotate(0,258.5,146.5)"></rect>
                                        <path d="M 255 150v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,258.5,153.5)"></path>
                                        <path d="M 255 178v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(180,258.5,181.5)"></path>
                                        <circle cx="258.5" cy="223.5" r="3.5" transform="rotate(0,258.5,223.5)"></circle>
                                        <rect x="255" y="262" width="7" height="7" transform="rotate(0,258.5,265.5)"></rect>
                                        <path d="M 262 66v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,265.5,69.5)"></path>
                                        <path d="M 262 73v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,265.5,76.5)"></path>
                                        <path d="M 262 87v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,265.5,90.5)"></path>
                                        <path d="M 262 94v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,265.5,97.5)"></path>
                                        <path d="M 262 108v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,265.5,111.5)"></path>
                                        <rect x="262" y="115" width="7" height="7" transform="rotate(0,265.5,118.5)"></rect>
                                        <rect x="262" y="122" width="7" height="7" transform="rotate(0,265.5,125.5)"></rect>
                                        <path d="M 262 129v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,265.5,132.5)"></path>
                                        <path d="M 262 150v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,265.5,153.5)"></path>
                                        <path d="M 262 171v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(-90,265.5,174.5)"></path>
                                        <rect x="262" y="178" width="7" height="7" transform="rotate(0,265.5,181.5)"></rect>
                                        <path d="M 262 185v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(90,265.5,188.5)"></path>
                                        <circle cx="265.5" cy="209.5" r="3.5" transform="rotate(0,265.5,209.5)"></circle>
                                        <path d="M 262 262v 7h 3.5a 3.5 3.5, 0, 0, 0, 0 -7" transform="rotate(0,265.5,265.5)"></path>
                                        <path clipRule="evenodd"
                                            d="M 10 27.5v 14a 17.5 17.5, 0, 0, 0, 17.5 17.5h 14a 17.5 17.5, 0, 0, 0, 17.5 -17.5v -14a 17.5 17.5, 0, 0, 0, -17.5 -17.5h -14a 17.5 17.5, 0, 0, 0, -17.5 17.5M 27.5 17h 14a 10.5 10.5, 0, 0, 1, 10.5 10.5v 14a 10.5 10.5, 0, 0, 1, -10.5 10.5h -14a 10.5 10.5, 0, 0, 1, -10.5 -10.5v -14a 10.5 10.5, 0, 0, 1, 10.5 -10.5"
                                            transform="rotate(0,34.5,34.5)"></path>
                                        <path d="M 24 24v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,27.5,27.5)"></path>
                                        <rect x="24" y="31" width="7" height="7" transform="rotate(0,27.5,34.5)"></rect>
                                        <path d="M 24 38v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,27.5,41.5)"></path>
                                        <rect x="31" y="24" width="7" height="7" transform="rotate(0,34.5,27.5)"></rect>
                                        <rect x="31" y="31" width="7" height="7" transform="rotate(0,34.5,34.5)"></rect>
                                        <rect x="31" y="38" width="7" height="7" transform="rotate(0,34.5,41.5)"></rect>
                                        <path d="M 38 24v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,41.5,27.5)"></path>
                                        <rect x="38" y="31" width="7" height="7" transform="rotate(0,41.5,34.5)"></rect>
                                        <path d="M 38 38v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,41.5,41.5)"></path>
                                        <path clipRule="evenodd"
                                            d="M 220 27.5v 14a 17.5 17.5, 0, 0, 0, 17.5 17.5h 14a 17.5 17.5, 0, 0, 0, 17.5 -17.5v -14a 17.5 17.5, 0, 0, 0, -17.5 -17.5h -14a 17.5 17.5, 0, 0, 0, -17.5 17.5M 237.5 17h 14a 10.5 10.5, 0, 0, 1, 10.5 10.5v 14a 10.5 10.5, 0, 0, 1, -10.5 10.5h -14a 10.5 10.5, 0, 0, 1, -10.5 -10.5v -14a 10.5 10.5, 0, 0, 1, 10.5 -10.5"
                                            transform="rotate(90,244.5,34.5)"></path>
                                        <path d="M 234 24v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,237.5,27.5)"></path>
                                        <rect x="234" y="31" width="7" height="7" transform="rotate(0,237.5,34.5)"></rect>
                                        <path d="M 234 38v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,237.5,41.5)"></path>
                                        <rect x="241" y="24" width="7" height="7" transform="rotate(0,244.5,27.5)"></rect>
                                        <rect x="241" y="31" width="7" height="7" transform="rotate(0,244.5,34.5)"></rect>
                                        <rect x="241" y="38" width="7" height="7" transform="rotate(0,244.5,41.5)"></rect>
                                        <path d="M 248 24v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,251.5,27.5)"></path>
                                        <rect x="248" y="31" width="7" height="7" transform="rotate(0,251.5,34.5)"></rect>
                                        <path d="M 248 38v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,251.5,41.5)"></path>
                                        <path clipRule="evenodd"
                                            d="M 10 237.5v 14a 17.5 17.5, 0, 0, 0, 17.5 17.5h 14a 17.5 17.5, 0, 0, 0, 17.5 -17.5v -14a 17.5 17.5, 0, 0, 0, -17.5 -17.5h -14a 17.5 17.5, 0, 0, 0, -17.5 17.5M 27.5 227h 14a 10.5 10.5, 0, 0, 1, 10.5 10.5v 14a 10.5 10.5, 0, 0, 1, -10.5 10.5h -14a 10.5 10.5, 0, 0, 1, -10.5 -10.5v -14a 10.5 10.5, 0, 0, 1, 10.5 -10.5"
                                            transform="rotate(-90,34.5,244.5)"></path>
                                        <path d="M 24 234v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(-90,27.5,237.5)"></path>
                                        <rect x="24" y="241" width="7" height="7" transform="rotate(0,27.5,244.5)"></rect>
                                        <path d="M 24 248v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(180,27.5,251.5)"></path>
                                        <rect x="31" y="234" width="7" height="7" transform="rotate(0,34.5,237.5)"></rect>
                                        <rect x="31" y="241" width="7" height="7" transform="rotate(0,34.5,244.5)"></rect>
                                        <rect x="31" y="248" width="7" height="7" transform="rotate(0,34.5,251.5)"></rect>
                                        <path d="M 38 234v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(0,41.5,237.5)"></path>
                                        <rect x="38" y="241" width="7" height="7" transform="rotate(0,41.5,244.5)"></rect>
                                        <path d="M 38 248v 7h 7v -3.5a 3.5 3.5, 0, 0, 0, -3.5 -3.5" transform="rotate(90,41.5,251.5)"></path>
                                    </clipPath>
                                </defs>
                                <rect x="0" y="0" height="280" width="280" clip-path="url('#clip-path-background-color')" fill="#fff"></rect>
                                <rect x="0" y="0" height="280" width="280" clip-path="url('#clip-path-dot-color')" fill="#000"></rect>
                                <image x="116" y="116" width="47px" height="47px"
                                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">
                                </image>
                            </svg></div>
                            <div className="AnimatedSticker qr-plane opacity-transition slow open shown">
                                <div className="image_logo"></div>
                            </div>
                        </div>
                    </div>
                    <h1>Быстрый вход по QR-коду</h1>
                    <ol>
                        <li>
                            <span>Откройте Telegram с телефона</span>
                        </li>
                        <li>
                            <span>Перейдите в Настройки &gt; Устройства &gt; Подключить устройство</span>
                        </li>
                        <li>
                        <span>Для подтверждения направьте камеру телефона на этот экран.</span>
                        </li>
                    </ol>
                    <button type="button" className="Button default primary text">Вход по номеру телефона</button>
                </div>
            </div>
        </>
    );
}

export default AuthQRForm;
