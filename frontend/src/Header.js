import React, { useState } from 'react';
import './style.css';

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
    const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
    const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);
    const [isDropdownOpen6, setIsDropdownOpen6] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };
    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    const handleMouseEnter1 = () => {
        setIsDropdownOpen1(true);
    };
    const handleMouseLeave1 = () => {
        setIsDropdownOpen1(false);
    };

    const handleMouseEnter2 = () => {
        setIsDropdownOpen2(true);
    };
    const handleMouseLeave2 = () => {
        setIsDropdownOpen2(false);
    };

    const handleMouseEnter3 = () => {
        setIsDropdownOpen3(true);
    };
    const handleMouseLeave3 = () => {
        setIsDropdownOpen3(false);
    };

    const handleMouseEnter4 = () => {
        setIsDropdownOpen4(true);
    };
    const handleMouseLeave4 = () => {
        setIsDropdownOpen4(false);
    };

    const handleMouseEnter5 = () => {
        setIsDropdownOpen5(true);
    };
    const handleMouseLeave5 = () => {
        setIsDropdownOpen5(false);
    };

    const handleMouseEnter6 = () => {
        setIsDropdownOpen6(true);
    };
    const handleMouseLeave6 = () => {
        setIsDropdownOpen6(false);
    };

    return (
        <header className="header">
            <div className="Header__FixedHeader">
                <div className="Header__FixedHeaderInner">
                    <nav className="Header__NavContainer">
                        <div className="Header__Logo">
                            <a href="https://dappradar.com" title="Go to homepage">
                                <svg xmlns="http://www.w3.org/2000/svg" width="125px" height="20px" viewBox="0 0 126.676 20.376" className="hide-on-mobile" fill="#ffffff"><path d="M22.615 9.167L17.905 1a2.036 2.036 0 00-1.753-1H6.731a2.025 2.025 0 00-1.753 1.012L.268 9.176a2.043 2.043 0 000 2.024l4.71 8.164a2.015 2.015 0 001.753 1.012h9.42a2.025 2.025 0 001.753-1.012l4.71-8.164a2.059 2.059 0 00.001-2.033zm-11.174 8.025v-1.4a5.609 5.609 0 10-5.609-5.609 5.539 5.539 0 001.143 3.384l1.012-.986a4.16 4.16 0 01-.75-2.4 4.213 4.213 0 114.213 4.213v-1.4a2.809 2.809 0 10-2.817-2.809 2.765 2.765 0 00.375 1.4l1.047-1.021a1.343 1.343 0 01-.052-.375 1.439 1.439 0 111.439 1.439 1.3 1.3 0 01-.41-.07l-3.62 3.532a.56.56 0 01-.113.087c-.009.009-.026.009-.035.017a.407.407 0 01-.087.044c-.017.009-.035.009-.052.017l-.079.026a.111.111 0 00-.049.01c-.026 0-.052.009-.07.009-.026 0-.052-.009-.079-.009a.17.17 0 01-.061-.009l-.079-.026c-.017-.009-.035-.009-.052-.017a.354.354 0 01-.079-.044.191.191 0 01-.044-.026.5.5 0 01-.07-.061c-.009-.009-.026-.017-.035-.035a7.007 7.007 0 115.015 2.12zM28.285 3.62h4.309c4.169-.044 7.24 2.652 7.179 6.542.061 3.812-3.009 6.682-7.179 6.62h-4.309zm4.283 10.738c2.652 0 4.431-1.657 4.431-4.187 0-2.556-1.736-4.108-4.431-4.108h-1.6v8.3h1.6zM49.647 16.791H47.17v-.959a4.089 4.089 0 01-3.009 1.195c-2.093 0-3.411-1.221-3.411-2.948 0-1.779 1.439-2.87 3.733-2.87h2.477v-.436a1.613 1.613 0 00-1.83-1.736 3.372 3.372 0 00-2.617 1.361l-1.4-1.657a5.365 5.365 0 014.317-2.033 3.88 3.88 0 014.23 4.23v5.853zm-2.7-3.812h-2.106c-.881 0-1.378.34-1.378.994s.558 1.073 1.413 1.073a1.965 1.965 0 002.076-1.954zM57.383 17.027a3.947 3.947 0 01-2.957-1.195v4.544h-2.7V6.919h2.477v1.237a3.741 3.741 0 013.18-1.457 4.844 4.844 0 014.789 5.146 4.874 4.874 0 01-4.789 5.182zm-.5-7.894a2.462 2.462 0 00-2.495 2.713 2.477 2.477 0 002.495 2.73 2.551 2.551 0 002.556-2.713 2.537 2.537 0 00-2.553-2.73zM69.429 17.027a3.947 3.947 0 01-2.957-1.195v4.544h-2.7V6.919h2.485v1.237a3.741 3.741 0 013.172-1.457 4.844 4.844 0 014.789 5.146 4.874 4.874 0 01-4.789 5.182zm-.5-7.894a2.462 2.462 0 00-2.495 2.713 2.477 2.477 0 002.495 2.73 2.551 2.551 0 002.556-2.713 2.532 2.532 0 00-2.553-2.73zM84.014 16.791l-3.411-4.649h-1.971v4.649h-2.7V3.62h4.946c2.756 0 4.745 1.718 4.745 4.248a4.081 4.081 0 01-2.311 3.751l3.733 5.164h-3.031zm-5.39-7.021h2.253a1.811 1.811 0 002-1.893 1.825 1.825 0 00-2-1.875h-2.25zM96.094 16.791h-2.477v-.959a4.089 4.089 0 01-3.009 1.195c-2.093 0-3.411-1.221-3.411-2.948 0-1.779 1.439-2.87 3.733-2.87h2.477v-.436a1.613 1.613 0 00-1.832-1.736 3.372 3.372 0 00-2.617 1.361l-1.4-1.657a5.365 5.365 0 014.309-2.032 3.88 3.88 0 014.23 4.23v5.853zm-2.7-3.812h-2.111c-.881 0-1.378.34-1.378.994s.558 1.073 1.413 1.073a1.965 1.965 0 002.076-1.954zM108.062 1.823v14.959h-2.477v-1.221a3.741 3.741 0 01-3.175 1.457 4.849 4.849 0 01-4.789-5.164 4.849 4.849 0 014.789-5.164 3.842 3.842 0 012.957 1.178V1.823zm-5.146 7.31a2.551 2.551 0 00-2.556 2.713 2.532 2.532 0 002.556 2.73 2.462 2.462 0 002.495-2.713 2.486 2.486 0 00-2.495-2.73zM118.511 16.791h-2.477v-.959a4.089 4.089 0 01-3.009 1.195c-2.093 0-3.411-1.221-3.411-2.948 0-1.779 1.439-2.87 3.733-2.87h2.477v-.436a1.613 1.613 0 00-1.832-1.736 3.372 3.372 0 00-2.617 1.361l-1.4-1.657a5.365 5.365 0 014.309-2.032 3.88 3.88 0 014.23 4.23v5.853zm-2.687-3.812h-2.11c-.881 0-1.378.34-1.378.994s.558 1.073 1.413 1.073a1.965 1.965 0 002.076-1.954zM126.667 9.29h-.715a2.385 2.385 0 00-2.652 2.573v4.928h-2.7V6.917h2.477v1.178a3.412 3.412 0 012.713-1.3 2.723 2.723 0 01.881.122V9.29z"></path></svg>
                            </a>
                        </div>
                        <div className="Header__DropdownMenu1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="Header__DropdownMenuWrapper" >
                                <div className="frbYEY">
                                    <svg width="19" height="19" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><path d="M2.5 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-2ZM2.5 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2ZM8.5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V2ZM8.5 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Z"></path></svg>
                                </div>
                            </div>
                            {isDropdownOpen && (
                                <div className="sc-hZDVde jRnuzs">
                                    <div className="sc-iXGltN kitdHP">
                                        <a href="https://dappradar.com/rankings/explorer" title="Rankings">
                                            <div className="sc-dkcEsn hvDcJI">
                                                <div className="sc-jvSYwb kBNZjq">
                                                    <svg width="21px" height="21px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                                                        <path d="M12 22.55c-.33 0-.66-.08-.95-.25l-7.5-4.33a1.92 1.92 0 0 1-.95-1.64V7.67c0-.68.36-1.3.95-1.64l7.5-4.33c.58-.34 1.31-.34 1.9 0l7.49 4.33c.58.34.95.97.95 1.64v8.65c0 .68-.36 1.3-.95 1.64l-7.49 4.33c-.29.17-.62.25-.95.25v.01Zm-7.39-6.28L12 20.54l7.39-4.27V7.73L12 3.47 4.61 7.73v8.54Z"></path>
                                                        <path d="M9.6 11.55h-2v3.52h2v-3.52ZM16.12 10.27h-2v4.8h2v-4.8ZM12.86 8.21h-2v6.86h2V8.21Z"></path>
                                                    </svg>
                                                </div>
                                                <div className="sc-jhrdCu hykivR">
                                                    <div className="sc-jmfXTE cXyWAO">
                                                        <div color="#ffffff" className="sc-hjsNop cORbHN">Rankings</div>
                                                    </div>
                                                    <div color="#B1BBCE" className="sc-bRlCZA gVukNV">Track, discover and analyze the latest dapps</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="sc-iXGltN kitdHP"><a href="https://dappradar.com/rewards/quests" title="Quests"><div className="sc-dkcEsn hvDcJI"><div className="sc-jvSYwb kBNZjq"><svg xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 24 24" fill="#ffffff"><path d="M16.21 22.3H7.78c-3.36 0-6.09-2.73-6.09-6.09V7.79C1.7 4.43 4.43 1.7 7.78 1.7h8.43c3.36 0 6.09 2.73 6.09 6.09v8.43c0 3.36-2.73 6.09-6.09 6.09v-.01ZM7.78 3.7c-2.25 0-4.09 1.83-4.09 4.09v8.43c0 2.25 1.83 4.09 4.09 4.09h8.43c2.25 0 4.09-1.83 4.09-4.09V7.79c0-2.25-1.83-4.09-4.09-4.09H7.78Z"></path><path d="M11.57 13.48h-.05a1.48 1.48 0 0 1-1.15-.64l-1.9-2.86a1.001 1.001 0 1 1 1.67-1.11l1.48 2.22 3.31-4.23c.34-.44.97-.51 1.4-.17.44.34.51.97.17 1.4l-3.78 4.84c-.27.35-.7.55-1.14.55h-.01ZM15.23 16.91H8.77c-.55 0-1-.45-1-1s.45-1 1-1h6.46c.55 0 1 .45 1 1s-.45 1-1 1Z"></path></svg></div><div className="sc-jhrdCu hykivR"><div className="sc-jmfXTE cXyWAO"><div color="#ffffff" className="sc-hjsNop cORbHN">Quests</div><div className="sc-edLOhm egwvgN">Hot</div></div><div color="#B1BBCE" className="sc-bRlCZA gVukNV">Discover projects and earn rewards</div></div></div></a></div>
                                    <div className="sc-iXGltN kitdHP"><a href="https://dappradar.com/developers" title="Submit a project"><div className="sc-dkcEsn hvDcJI"><div className="sc-jvSYwb kBNZjq"><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="21px" width="21px" fill="#ffffff"><defs><clipPath id="clippath"><path d="M0 0h24v24H0z"></path></clipPath></defs><g id="Layer_1-2"><path d="M12 22.55c-.33 0-.66-.08-.95-.25l-7.5-4.33a1.92 1.92 0 0 1-.95-1.64V7.67c0-.68.36-1.3.95-1.64l7.5-4.33c.58-.34 1.31-.34 1.9 0l7.49 4.33c.58.34.95.97.95 1.64v8.65c0 .68-.36 1.3-.95 1.64l-7.49 4.33c-.29.17-.62.25-.95.25Zm-7.39-6.28L12 20.54l7.39-4.27V7.73L12 3.47 4.61 7.73v8.53Z"></path><path d="M11.99 16.26c-.55 0-1-.45-1-1V8.74c0-.55.45-1 1-1s1 .45 1 1v6.52c0 .55-.45 1-1 1Z"></path><path d="M15.26 13H8.74c-.55 0-1-.45-1-1s.45-1 1-1h6.52c.55 0 1 .45 1 1s-.45 1-1 1Z"></path></g></svg></div><div className="sc-jhrdCu hykivR"><div className="sc-jmfXTE cXyWAO"><div color="#ffffff" className="sc-hjsNop cORbHN">Submit a project</div></div><div color="#B1BBCE" className="sc-bRlCZA gVukNV">List a dapp on the World’s Dapp Store</div></div></div></a></div>
                                    <div className="sc-iXGltN kitdHP"><a href="https://dappradar.com/hub/airdrops" title="Airdrops"><div className="sc-dkcEsn dWifOM"><div className="sc-jvSYwb kBNZjq"><svg width="21px" height="21px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><path d="M22.182 11.072c0-.048 0-.096-.008-.144C22.014 5.424 17.558 1 12.094 1s-9.92 4.424-10.08 9.928c-.008.056-.008.104-.008.152a.536.536 0 0 0 0 .16c.024.464.232.904.624 1.272l7.352 6.12H8.726a.572.572 0 0 0-.568.576v2.912a.57.57 0 0 0 .568.568h6.464a.57.57 0 0 0 .568-.568v-2.912a.572.572 0 0 0-.568-.576h-1.224l7.616-6.152c.36-.336.576-.776.6-1.24.008-.024.008-.04.008-.064 0-.032 0-.064-.008-.104ZM12.094 3c3.168 0 5.912 1.856 7.24 4.56a4.006 4.006 0 0 0-1.168-.176c-.992 0-1.912.376-2.632 1.04a4.142 4.142 0 0 0-3.44-1.84c-1.432 0-2.704.744-3.456 1.864a3.737 3.737 0 0 0-2.624-1.064c-.4 0-.792.064-1.16.176C6.182 4.856 8.926 3 12.094 3Zm-8.08 8.064c.192-.968 1.024-1.68 2-1.68 1.36 0 1.904 1.408 2.04 1.84l1.68 4.6-5.72-4.76Zm7.976 5.096-2.032-5.552s-.008-.024-.016-.04c.112-1.112 1.032-1.984 2.152-1.984s1.984.824 2.136 1.896l-2.24 5.68Zm2.288-.344 1.896-4.824c.016-.056.048-.12.08-.2.232-.496.8-1.408 1.912-1.408.976 0 1.816.712 2 1.672l-5.888 4.76Z"></path></svg></div><div className="sc-jhrdCu hykivR"><div className="sc-jmfXTE cXyWAO"><div color="#ffffff" className="sc-hjsNop cORbHN">Airdrops</div></div><div color="#B1BBCE" className="sc-bRlCZA gVukNV">Sign up for free DappRadar Airdrops</div></div></div></a></div>
                                    <div className="sc-iXGltN kitdHP"><a href="https://dappradar.com/hub/wallet" title="Portfolio"><div className="sc-dkcEsn hvDcJI"><div className="sc-jvSYwb kBNZjq"><svg width="21px" height="21px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><path d="M4.96 5.54c-1.454 0-2.71 1.262-2.71 2.87v3.2c0 .709.547 1.23 1.14 1.23h4.46v1.5H3.39c-1.487 0-2.64-1.259-2.64-2.73v-3.2c0-2.372 1.864-4.37 4.21-4.37h14.07c2.347 0 4.2 1.99 4.2 4.37v3.2c0 1.471-1.153 2.73-2.64 2.73h-4.53v-1.5h4.53c.593 0 1.14-.521 1.14-1.23v-3.2c0-1.62-1.247-2.87-2.7-2.87H4.96Z"></path><path d="M2.66 12.84h5.01v1.5H4.16v4.02a2.79 2.79 0 0 0 2.79 2.79h10.1a2.79 2.79 0 0 0 2.79-2.79v-4.02h-3.62v-1.5h5.12v5.52a4.29 4.29 0 0 1-4.29 4.29H6.95a4.29 4.29 0 0 1-4.29-4.29v-5.52Z"></path><path d="M10.59 10.88a2.09 2.09 0 0 0-2.09 2.09v1.23a2.09 2.09 0 0 0 2.09 2.09h2.83a2.09 2.09 0 0 0 2.09-2.09v-1.23a2.09 2.09 0 0 0-2.09-2.09h-2.83ZM7 12.97a3.59 3.59 0 0 1 3.59-3.59h2.83a3.59 3.59 0 0 1 3.59 3.59v1.23a3.59 3.59 0 0 1-3.59 3.59h-2.83A3.59 3.59 0 0 1 7 14.2v-1.23ZM8.14 4.79A3.857 3.857 0 0 1 12 .93a3.857 3.857 0 0 1 3.86 3.86h-1.5A2.357 2.357 0 0 0 12 2.43a2.357 2.357 0 0 0-2.36 2.36h-1.5Z"></path></svg></div><div className="sc-jhrdCu hykivR"><div className="sc-jmfXTE cXyWAO"><div color="#ffffff" className="sc-hjsNop cORbHN">Portfolio</div><div className="sc-edLOhm egwvgN">Popular</div></div><div color="#B1BBCE" className="sc-bRlCZA gVukNV">Track, analyze and manage your wallets</div></div></div></a></div>
                                    <div className="sc-iXGltN kitdHP"><a href="https://dappradar.com/reports" title="Reports"><div className="sc-dkcEsn hvDcJI"><div className="sc-jvSYwb kBNZjq"><svg width="21px" height="21px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><path fillRule="evenodd" d="m17.04 4.52-1.58-1.58-5.54 5.54 1.58 1.58 5.54-5.54ZM14.76.81c.19-.19.45-.29.7-.29.25 0 .51.1.7.29l3.01 3.01c.39.39.39 1.01 0 1.4l-7.67 7.67-.02-.02.01.03-3.73 1.19c-.15.05-.3.07-.45.07v-.01c-.39 0-.76-.15-1.04-.43-.39-.39-.53-.96-.36-1.49L7.1 8.5l.014.005-.024-.025L14.76.81ZM3.49 19.39h13.07a2.88 2.88 0 0 0 2.88-2.88v-6.15a.38.38 0 0 0-.38-.38h-1.24a.38.38 0 0 0-.38.38v6.15c0 .49-.39.88-.88.88H3.49c-.49 0-.88-.39-.88-.88V3.45c0-.49.39-.88.88-.88h6.15c.21 0 .38-.17.38-.38V.95a.38.38 0 0 0-.38-.38H3.49A2.88 2.88 0 0 0 .61 3.45v13.06a2.88 2.88 0 0 0 2.88 2.88Z"></path></svg></div><div className="sc-jhrdCu hykivR"><div className="sc-jmfXTE cXyWAO"><div color="#ffffff" className="sc-hjsNop cORbHN">Reports</div></div><div color="#B1BBCE" className="sc-bRlCZA gVukNV">Read the latest industry reports</div></div></div></a></div>
                                    <div className="sc-iXGltN kitdHP"><a href="https://dappradar.com/rankings/hot-contracts" title="Hot contracts"><div className="sc-dkcEsn hvDcJI"><div className="sc-jvSYwb kBNZjq"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="21px" width="21px" fill="#ffffff"><path d="M12.53 22.41c-.78 0-1.58-.1-2.38-.3-2.44-.61-4.42-2.06-5.43-3.97-.99-1.87-1.19-4.3-.51-6.21.3-.82.59-1.44.95-2 .87-1.36 1.82-2.14 2.45-2.66l.24-.2c1.13-.98 1.98-2.46 2.53-4.4.06-.32.28-.59.58-.72.37-.16.79-.09 1.08.18.89.83 2.45 2.63 2.89 5.37.16 1.03.15 2.09-.05 3.13.22-.08.45-.21.66-.41.57-.54.64-1.26.64-1.54 0-.39.23-.75.59-.91s.78-.09 1.08.17c.32.29 3.14 2.94 2.75 7.07-.04.4-.44 4.02-3.5 6.07-1.31.88-2.9 1.33-4.58 1.33Zm-.77-17.56c-.64 1.56-1.51 2.82-2.59 3.75l-.27.22c-.56.46-1.34 1.1-2.04 2.2-.28.43-.51.92-.75 1.59-.57 1.59-.21 3.45.39 4.59.73 1.39 2.28 2.49 4.15 2.96 1.95.49 3.9.22 5.35-.75 2.33-1.56 2.61-4.47 2.62-4.59.16-1.7-.41-3.08-.99-4.03-.19.32-.42.62-.7.88-1.47 1.39-3.34 1.08-3.54 1.05a.992.992 0 0 1-.68-.48c-.15-.25-.17-.55-.08-.83.41-1.19.53-2.4.34-3.6-.2-1.23-.69-2.23-1.2-2.97Z" className="cls-3"></path><path d="M12.11 18.45c-.37 0-.75-.05-1.12-.14-1.15-.29-2.09-.99-2.58-1.91a.996.996 0 0 1 .42-1.35.996.996 0 0 1 1.35.42c.22.42.71.75 1.3.9.63.16 1.26.08 1.7-.22a1.001 1.001 0 1 1 1.11 1.67c-.63.42-1.39.63-2.18.63Z" className="cls-3"></path></svg></div><div className="sc-jhrdCu hykivR"><div className="sc-jmfXTE cXyWAO"><div color="#ffffff" className="sc-hjsNop cORbHN">Hot contracts</div></div><div color="#B1BBCE" className="sc-bRlCZA gVukNV">Real time insights on the most active contracts</div></div></div></a></div>
                                    <div className="sc-iXGltN kitdHP"><a href="https://dappradar.com/account/alerts" title="Alerts"><div className="sc-dkcEsn hvDcJI"><div className="sc-jvSYwb kBNZjq"><svg width="21px" height="21px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><path d="M9.627 3.757a.75.75 0 0 0-.134-1.494 8.488 8.488 0 0 0-6.506 4.07.75.75 0 0 0 1.286.774 6.988 6.988 0 0 1 5.354-3.35Zm7.56.715a.75.75 0 0 1 1.021-.285 8.446 8.446 0 0 1 4.227 6.333.75.75 0 0 1-1.49.18 6.946 6.946 0 0 0-3.473-5.207.75.75 0 0 1-.286-1.021Zm-3.054.977a.75.75 0 1 0-1.466-.318l-.19.878-.752-.14a5.126 5.126 0 0 0-5.428 4.023l-.758 3.51a.744.744 0 0 1-.371.49l-1.714.903h-.002c-1.897.989-1.5 3.802.58 4.249l12.22 2.64c2.075.444 3.605-1.943 2.29-3.633v-.002l-1.178-1.527-.009-.01a.701.701 0 0 1-.132-.596l.76-3.518a5.125 5.125 0 0 0-3.925-6.091l-.107-.02.182-.838ZM12.07 7.433l2.01.43a3.627 3.627 0 0 1 2.436 4.219l-.76 3.52-.001.005a2.2 2.2 0 0 0 .424 1.836l1.176 1.525.002.003c.443.57-.066 1.4-.791 1.246l-12.219-2.64h-.001c-.719-.154-.842-1.119-.201-1.451l1.71-.9c.6-.31.997-.869 1.143-1.482l.002-.008.762-3.528a3.625 3.625 0 0 1 4.308-2.775Z"></path></svg></div><div className="sc-jhrdCu hykivR"><div className="sc-jmfXTE cXyWAO"><div color="#ffffff" className="sc-hjsNop cORbHN">Alerts</div></div><div color="#B1BBCE" className="sc-bRlCZA gVukNV">Stay in the know with Alerts</div></div></div></a></div>
                                </div>
                            )}
                        </div>
                        <div className="Header__SearchBar">
                            <div className="Header__SearchBarWrapper">
                                <div className="Header__SearchBarInner">
                                    <input id="MainSearchBar" type="text" maxLength="42" placeholder="Search wallets" className="SearchBar" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.696" height="13.698" viewBox="0 0 13.696 13.698" fill="#b1bbce" className="searchBarSVG"><path d="M13.51,11.843,10.843,9.176a.642.642,0,0,0-.455-.187H9.952a5.562,5.562,0,1,0-.963.963v.436a.642.642,0,0,0,.187.455l2.667,2.667a.639.639,0,0,0,.907,0l.757-.757A.645.645,0,0,0,13.51,11.843ZM5.564,8.989A3.424,3.424,0,1,1,8.989,5.564,3.422,3.422,0,0,1,5.564,8.989Z" transform="translate(0 0)"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div className="Header__SecondaryNavContainer">
                            <div className="Header__SecondaryNavContainer__Nav">
                                <div className="Header__SecondaryNavContainer__NavWrapper">
                                    <div className="Header__SecondaryNavItem" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                                        <span className="Header__SecondaryNavItemWrapper">
                                            <div className="Header__SecondaryNavItemContainer">
                                                <div className="Header__SecondaryNavItem_Title">
                                                    <span title="Rankings" className="Header__SecondaryNavItem_TitleSpan">
                                                        <div color="#8EBEFF" className="secondary-link-title">Rankings</div>
                                                    </span>
                                                </div>
                                                <button type="button" padding="0px" className="Header__SecondaryNavItem_DropdownButton">
                                                    <span className="button-svg">
                                                        <svg width="10px" height="8px" viewBox="0 0 11 6" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M.793.293a1 1 0 0 1 1.414 0L5.5 3.586 8.793.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"></path>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                            {isDropdownOpen1 && (<div className="sc-gukea dNlJzE"><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/rankings/explorer" title="Explorer"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Explorer</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/rankings" title="All rankings"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">All rankings</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/rankings/hot-contracts" title="Hot contracts"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Hot contracts</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/rankings/chains" title="Chains"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Chains</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/rankings/games" title="Games"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Games</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/rankings/nft/collections" title="NFTs"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">NFTs</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/rankings/defi" title="DeFi"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">DeFi</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/rankings/social" title="Social"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Social</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/rankings/gambling" title="Gambling"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Gambling</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/rankings/high-risk" title="High-risk"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">High-risk</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/rankings/misc" title="Misc. dapps"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Misc. dapps</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/rankings/tokens" title="Tokens"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Tokens</div></div></div></a></div></div>)}
                                        </span>
                                    </div>
                                    <div className="Header__SecondaryNavItem" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                                        <span className="Header__SecondaryNavItemWrapper">
                                            <div className="Header__SecondaryNavItemContainer">
                                                <div className="Header__SecondaryNavItem_Title">
                                                    <span title="Rewards" className="Header__SecondaryNavItem_TitleSpan">
                                                        <div color="#8EBEFF" className="secondary-link-title">Rewards</div>
                                                    </span>
                                                </div>
                                                <button type="button" padding="0px" className="Header__SecondaryNavItem_DropdownButton">
                                                    <span className="button-svg">
                                                        <svg width="10px" height="8px" viewBox="0 0 11 6" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M.793.293a1 1 0 0 1 1.414 0L5.5 3.586 8.793.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"></path>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                            {isDropdownOpen2 && (<div className="sc-gukea dNlJzE"><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/rewards" title="Reward center"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Reward center</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/rewards/quests" title="Quests"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Quests</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a title="Airdrops" href="/hub/airdrops"><div className="sc-ktLMLx jwoxZc"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Airdrops</div></div></div></a></div></div>)}
                                        </span>
                                    </div>
                                    <div className="Header__SecondaryNavItem" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                                        <span className="Header__SecondaryNavItemWrapper">
                                            <div className="Header__SecondaryNavItemContainer">
                                                <div className="Header__SecondaryNavItem_Title">
                                                    <span title="Contribute" className="Header__SecondaryNavItem_TitleSpan">
                                                        <div color="#8EBEFF" className="secondary-link-title">Contribute</div>
                                                    </span>
                                                </div>
                                                <button type="button" padding="0px" className="Header__SecondaryNavItem_DropdownButton">
                                                    <span className="button-svg">
                                                        <svg width="10px" height="8px" viewBox="0 0 11 6" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M.793.293a1 1 0 0 1 1.414 0L5.5 3.586 8.793.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"></path>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                            {isDropdownOpen3 && (<div className="sc-gukea dNlJzE"><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/dashboard/submit-dapp" title="Submit a project"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Submit a project</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/rewards/quests/my-quests" title="Submit a quest"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Submit a quest</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/dashboard/my-dapps" title="Manage your projects"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Manage your projects</div></div></div></a></div></div>)}
                                        </span>
                                    </div>
                                    <div className="Header__SecondaryNavItem" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
                                        <span className="Header__SecondaryNavItemWrapper">
                                            <div className="Header__SecondaryNavItemContainer">
                                                <div className="Header__SecondaryNavItem_Title">
                                                    <span title="Services" className="Header__SecondaryNavItem_TitleSpan">
                                                        <div color="#8EBEFF" className="secondary-link-title">Services</div>
                                                    </span>
                                                </div>
                                                <button type="button" padding="0px" className="Header__SecondaryNavItem_DropdownButton">
                                                    <span className="button-svg">
                                                        <svg width="10px" height="8px" viewBox="0 0 11 6" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M.793.293a1 1 0 0 1 1.414 0L5.5 3.586 8.793.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"></path>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                            {isDropdownOpen4 && (<div className="sc-gukea dNlJzE"><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/api" title="API"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">API</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/dashboard/referrals" title="Referral program"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Referral program</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/advertise" title="Advertising"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Advertising</div></div></div></a></div></div>)}
                                        </span>
                                    </div>
                                    <div className="Header__SecondaryNavItem" onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
                                        <span className="Header__SecondaryNavItemWrapper">
                                            <div className="Header__SecondaryNavItemContainer">
                                                <div className="Header__SecondaryNavItem_Title">
                                                    <span title="Blog" className="Header__SecondaryNavItem_TitleSpan">
                                                        <div color="#8EBEFF" className="secondary-link-title">Blog</div>
                                                    </span>
                                                </div>
                                                <button type="button" padding="0px" className="Header__SecondaryNavItem_DropdownButton">
                                                    <span className="button-svg">
                                                        <svg width="10px" height="8px" viewBox="0 0 11 6" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M.793.293a1 1 0 0 1 1.414 0L5.5 3.586 8.793.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"></path>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                            {isDropdownOpen5 && (<div className="sc-gukea dNlJzE"><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/blog/" title="All articles"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">All articles</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/blog/category/games" title="Games"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Games</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/blog/category/defi" title="DeFi"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">DeFi</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/blog/category/collectibles" title="NFTs"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">NFTs</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/blog/category/social" title="Social"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Social</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/blog/category/blockchains" title="Blockchains"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Blockchains</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/reports" title="Industry reports"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Industry reports</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/blog/category/dappradar" title="DappRadar updates"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">DappRadar updates</div></div></div></a></div></div>)}
                                        </span>
                                    </div>
                                    <div className="Header__SecondaryNavItem" onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
                                        <span className="Header__SecondaryNavItemWrapper">
                                            <div className="Header__SecondaryNavItemContainer">
                                                <div className="Header__SecondaryNavItem_Title">
                                                    <span title="RADAR" className="Header__SecondaryNavItem_TitleSpan">
                                                        <div color="#8EBEFF" className="secondary-link-title">RADAR</div>
                                                    </span>
                                                </div>
                                                <button type="button" padding="0px" className="Header__SecondaryNavItem_DropdownButton">
                                                    <span className="button-svg">
                                                        <svg width="10px" height="8px" viewBox="0 0 11 6" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M.793.293a1 1 0 0 1 1.414 0L5.5 3.586 8.793.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"></path>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                            {isDropdownOpen6 && (<div className="sc-gukea dNlJzE"><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/account/pro-membership" title="PRO membership"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">PRO membership</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/radar/overview" title="Discover RADAR"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Discover RADAR</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://dappradar.com/radar/governance" title="Governance"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Governance</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://whitepaper.dappradar.com/" title="Whitepaper"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Whitepaper</div></div></div></a></div><div className="sc-fyBusP cwCNtN"><a href="https://discord.com/invite/2Mvnwtfn9C" title="Discord community"><div className="sc-ktLMLx gkvGSw"><div className="sc-bGhRYA gTmUET"><div className="sc-gYpcnp bVRbUb">Discord community</div></div></div></a></div></div>)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="hKTHHN">
                                <div role="button" className="dQAuKf">
                                    <span className="giRBaq">1</span>
                                    <svg aria-hidden="true" data-prefix="fas" data-icon="bell" className="prefix__svg-inline--fa prefix__fa-bell prefix__fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="20px" fill="#FFFFFF" cursor="pointer"><path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>
                                </div>
                            </div>
                            {/* <div className="cLHoFh">
                                <div className="hQDyZu">
                                    <div className="dLFUSS">
                                        Connect
                                        <svg width="17" height="14" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg" className="jcOWax">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.793.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.086 8H1.5a1 1 0 0 1 0-2h11.586L8.793 1.707a1 1 0 0 1 0-1.414Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
