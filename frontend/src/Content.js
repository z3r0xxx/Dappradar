import './style.css';

const Content = ({ openModal, closeModal }) => {
    return (
        <div className="app_container">
            <div className="PageContainer">
                <div className="Sidebar_Nav_Wrapper">
                    <div className="Sidebar_Nav_Inner">
                        <div className="sc-ehvNnt gHfnAE"><div className="sc-oZIhv jILGnp"><a className="sc-eJDSGI kjxZaa" href="/hub/wallet/eth/"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.96 5.54c-1.454 0-2.71 1.262-2.71 2.87v3.2c0 .709.547 1.23 1.14 1.23h4.46v1.5H3.39c-1.487 0-2.64-1.259-2.64-2.73v-3.2c0-2.372 1.864-4.37 4.21-4.37h14.07c2.347 0 4.2 1.99 4.2 4.37v3.2c0 1.471-1.153 2.73-2.64 2.73h-4.53v-1.5h4.53c.593 0 1.14-.521 1.14-1.23v-3.2c0-1.62-1.247-2.87-2.7-2.87H4.96Z"></path><path d="M2.66 12.84h5.01v1.5H4.16v4.02a2.79 2.79 0 0 0 2.79 2.79h10.1a2.79 2.79 0 0 0 2.79-2.79v-4.02h-3.62v-1.5h5.12v5.52a4.29 4.29 0 0 1-4.29 4.29H6.95a4.29 4.29 0 0 1-4.29-4.29v-5.52Z"></path><path d="M10.59 10.88a2.09 2.09 0 0 0-2.09 2.09v1.23a2.09 2.09 0 0 0 2.09 2.09h2.83a2.09 2.09 0 0 0 2.09-2.09v-1.23a2.09 2.09 0 0 0-2.09-2.09h-2.83ZM7 12.97a3.59 3.59 0 0 1 3.59-3.59h2.83a3.59 3.59 0 0 1 3.59 3.59v1.23a3.59 3.59 0 0 1-3.59 3.59h-2.83A3.59 3.59 0 0 1 7 14.2v-1.23ZM8.14 4.79A3.857 3.857 0 0 1 12 .93a3.857 3.857 0 0 1 3.86 3.86h-1.5A2.357 2.357 0 0 0 12 2.43a2.357 2.357 0 0 0-2.36 2.36h-1.5Z"></path></svg>Portfolio</a></div><div className="sc-oZIhv jILGnp"><a className="sc-eJDSGI jdlNBB" href="/hub/airdrops"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.182 11.072c0-.048 0-.096-.008-.144C22.014 5.424 17.558 1 12.094 1s-9.92 4.424-10.08 9.928c-.008.056-.008.104-.008.152a.536.536 0 0 0 0 .16c.024.464.232.904.624 1.272l7.352 6.12H8.726a.572.572 0 0 0-.568.576v2.912a.57.57 0 0 0 .568.568h6.464a.57.57 0 0 0 .568-.568v-2.912a.572.572 0 0 0-.568-.576h-1.224l7.616-6.152c.36-.336.576-.776.6-1.24.008-.024.008-.04.008-.064 0-.032 0-.064-.008-.104ZM12.094 3c3.168 0 5.912 1.856 7.24 4.56a4.006 4.006 0 0 0-1.168-.176c-.992 0-1.912.376-2.632 1.04a4.142 4.142 0 0 0-3.44-1.84c-1.432 0-2.704.744-3.456 1.864a3.737 3.737 0 0 0-2.624-1.064c-.4 0-.792.064-1.16.176C6.182 4.856 8.926 3 12.094 3Zm-8.08 8.064c.192-.968 1.024-1.68 2-1.68 1.36 0 1.904 1.408 2.04 1.84l1.68 4.6-5.72-4.76Zm7.976 5.096-2.032-5.552s-.008-.024-.016-.04c.112-1.112 1.032-1.984 2.152-1.984s1.984.824 2.136 1.896l-2.24 5.68Zm2.288-.344 1.896-4.824c.016-.056.048-.12.08-.2.232-.496.8-1.408 1.912-1.408.976 0 1.816.712 2 1.672l-5.888 4.76Z"></path></svg>Airdrops</a></div><div className="sc-oZIhv jILGnp"><a className="sc-eJDSGI kjxZaa" href="/hub/nft-value-estimator"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18.408 19.248V4.752H5.592v14.496h12.816ZM4.824 2.752h14.344l.008-.008c.688 0 1.24.56 1.24 1.24v16.032c0 .688-.56 1.24-1.24 1.24H4.824c-.688 0-1.24-.56-1.24-1.24V3.992c0-.688.56-1.24 1.24-1.24Zm2.952 9.824H9.36c.115 0 .208.093.208.208v3.592a.208.208 0 0 1-.208.208H7.776a.208.208 0 0 1-.208-.208v-3.592c0-.115.093-.208.208-.208Zm8.448-2.352H14.64a.208.208 0 0 0-.208.208v5.952c0 .115.093.208.208.208h1.584a.208.208 0 0 0 .208-.208v-5.952a.208.208 0 0 0-.208-.208Zm-5.016-2.816h1.584c.115 0 .208.093.208.208v8.768a.208.208 0 0 1-.208.208h-1.584a.208.208 0 0 1-.208-.208V7.616c0-.115.093-.208.208-.208Z"></path></svg>NFT Value Estimator</a></div><div className="sc-oZIhv jILGnp"><a href="https://dappradar.com/rankings/nft/collections" className="sc-eJDSGI kjxZaa"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.056 22.224c.288.176.616.256.944.256l-.008-.016c.328 0 .656-.08.944-.248l7.448-4.296c.584-.336.944-.96.944-1.632V7.696c0-.672-.36-1.296-.944-1.632l-7.44-4.296a1.894 1.894 0 0 0-1.888 0l-7.44 4.304c-.584.336-.944.96-.944 1.632v8.592c0 .664.36 1.296.944 1.632l7.44 4.296Zm.944-1.76-7.328-4.232V7.768L12 3.536l7.328 4.232v8.464L12 20.464ZM13.472 9.64l-1.28-2.008a.404.404 0 0 0-.68 0l-1.28 2.008a.406.406 0 0 1-.24.176l-2.304.592a.408.408 0 0 0-.208.648l1.512 1.832c.064.08.088.176.088.28l-.144 2.376a.404.404 0 0 0 .552.4l2.216-.872a.38.38 0 0 1 .296 0l2.216.872a.405.405 0 0 0 .552-.4l-.144-2.376a.393.393 0 0 1 .088-.28l1.512-1.832a.4.4 0 0 0-.208-.648l-2.304-.592a.406.406 0 0 1-.24-.176Z"></path></svg>NFT Explorer</a></div></div>
                    </div>
                </div>
                <div className="Airdrops_Container">
                    <h1 className="airdrops--header css-hi5zbn">Airdrops</h1>
                    <div className="airdrops--featured-container">
                        <div className="featured-airdrop-card">
                            <div className="featured-airdrop-card--card-footer">
                                <div className="featured-airdrop-card--left-box">
                                    <div className="featured-airdrop-card--image-container">
                                        <img src="https://static.dappradar.com/website-fe-pr/public-assets/image-not-found-dark.svg" className="img-loaded" alt="airdrop-img" />
                                    </div>
                                    <div className="css-12hpwr4"><div className="featured-airdrop-card--title css-vurnku">PRO Airdrop: Explore Optimism with OP tokens</div><div className="featured-airdrop-card--subtitle css-vurnku">12 OP tokens per winner</div></div>
                                </div>
                                <div className="featured-airdrop-card--actions-container"><div className="featured-airdrop-card--expired css-vurnku"><span>Expired in 7 days</span></div><span className="sc-dkrFOg AavfT" onClick={openModal}>Join</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="airdrops--bg">

                        <div className="airdrop-card css-4cffwv">
                            <div className="airdrop-card--left-box css-1d8qyez">
                                <div className="airdrop-card--image-container css-1uoge8i">
                                    <img src="https://dashboard-assets.dappradar.com/staging/airdrops/65b0f3460e165_Realty X-logo-20240123-100927.png" className="img-loaded" alt="airdrop-item" />
                                </div>
                                <div className="css-12hpwr4">
                                    <div className="airdrop-card--title css-vurnku">RealtyX Launch Pass NFTs airdrop</div>
                                    <div className="airdrop-card--text css-vurnku">1000 RealtyX Launch Pass NFTs</div>
                                </div>
                            </div>
                            <div className="airdrop-card--right-box css-4cffwv">
                                <div className="airdrop-card--expired-a css-vurnku">
                                    <span>Expired</span>
                                </div>
                                <span className="sc-dkrFOg bUHCON">
                                    <span>Details</span>
                                </span>
                            </div>
                        </div>

                        <a href="https://dappradar.com/rewards/quests" className="AirdropsMaintenanceMessageCard__AirdropsMaintenanceMessageCardWrapper-sc-1az6nwu-0 jLbVzB">
                            <div className="AirdropsMaintenanceMessageCard__AirdropsMaintenanceMessageCardTitle-sc-1az6nwu-1 cuOBRp">
                                <span className="g">Exciting News!</span>
                            </div>
                            <div className="AirdropsMaintenanceMessageCard__AirdropsMaintenanceMessageCardDescription-sc-1az6nwu-2 cmbsRI">
                                <span>We're working on a new version for the airdrops page.<br/> In the meantime, explore the Quests page for exciting opportunities!</span>
                            </div>
                            <span className="sc-dkrFOg kKBVsP">
                                <span>Explore Quests</span>
                            </span>
                        </a>

                        <div className="airdrop-card css-4cffwv">
                            <div className="airdrop-card--left-box css-1d8qyez">
                                <div className="airdrop-card--image-container css-1uoge8i">
                                    <img src="https://dashboard-assets.dappradar.com/staging/airdrops/654de35a8c197_CAKE-logo.png" className="img-loaded" alt="airdrop-item" />
                                </div>
                                <div className="css-12hpwr4">
                                    <div className="airdrop-card--title css-vurnku">PancakeSwap (CAKE) airdrop</div>
                                    <div className="airdrop-card--text css-vurnku">$400 worth of CAKE to 100 lucky winners</div>
                                </div>
                            </div>
                            <div className="airdrop-card--right-box css-4cffwv">
                                <div className="airdrop-card--expired-a css-vurnku">
                                    <span>Expired</span>
                                </div>
                                <span className="sc-dkrFOg bUHCON">
                                    <span>Details</span>
                                </span>
                            </div>
                        </div>

                        <div className="subscribe-to-newsletter subscribe-to-newsletter css-4cffwv">
                            <div className="subscribe-to-newsletter--left-box css-l3rx45">
                                <div className="subscribe-to-newsletter__title css-1f978ju">
                                    <span>New airdrop notifications</span>
                                </div>
                                <div className="subscribe-to-newsletter__subtitle join-sub css-vurnku">
                                    <span>
                                        Unsubscribe at any time. <a className="h" href="https://dappradar.com/terms">T&amp;Cs</a>
                                    </span>
                                </div>
                            </div>
                            <form className="css-zadiel">
                                <div className="css-rxk9pl">
                                    <div className="subscribe-to-newsletter--form css-4cffwv">
                                        <input id="emailInput" type="email" name="email" className="subscribe-to-newsletter__input css-vurnku" placeholder="Your E-mail" required="" />
                                        <button type="submit" className="sc-dkrFOg AavfT">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="airdrop-card css-4cffwv">
                            <div className="airdrop-card--left-box css-1d8qyez">
                                <div className="airdrop-card--image-container css-1uoge8i">
                                    <img src="https://dashboard-assets.dappradar.com/staging/airdrops/6540cb4550097_ORB-logo.png" className="img-loaded" alt="airdrop-item" />
                                </div>
                                <div className="css-12hpwr4">
                                    <div className="airdrop-card--title css-vurnku">Orbcity (ORB) airdrop</div>
                                    <div className="airdrop-card--text css-vurnku">$400 worth of ORB to 100 lucky winners</div>
                                </div>
                            </div>
                            <div className="airdrop-card--right-box css-4cffwv">
                                <div className="airdrop-card--expired-a css-vurnku">
                                    <span>Expired</span>
                                </div>
                                <span className="sc-dkrFOg bUHCON">
                                    <span>Details</span>
                                </span>
                            </div>
                        </div>

                        <div className="airdrop-card css-4cffwv">
                            <div className="airdrop-card--left-box css-1d8qyez">
                                <div className="airdrop-card--image-container css-1uoge8i">
                                    <img src="https://dashboard-assets.dappradar.com/staging/airdrops/653f6b7910f3a_Haloween_Pumpkin-logo-A80404B7DB-seeklogo.com.png" className="img-loaded" alt="airdrop-item" />
                                </div>
                                <div className="css-12hpwr4">
                                    <div className="airdrop-card--title css-vurnku">DappRadar’s Spooky Halloween Hunt</div>
                                    <div className="airdrop-card--text css-vurnku">$1000 worth of MATIC to 100 lucky winners</div>
                                </div>
                            </div>
                            <div className="airdrop-card--right-box css-4cffwv">
                                <div className="airdrop-card--expired-a css-vurnku">
                                    <span>Expired</span>
                                </div>
                                <span className="sc-dkrFOg bUHCON">
                                    <span>Details</span>
                                </span>
                            </div>
                        </div>

                        <div className="airdrop-card css-4cffwv">
                            <div className="airdrop-card--left-box css-1d8qyez">
                                <div className="airdrop-card--image-container css-1uoge8i">
                                    <img src="https://dashboard-assets.dappradar.com/staging/airdrops/65321fc205372_REVV-logo.png" className="img-loaded" alt="airdrop-item" />
                                </div>
                                <div className="css-12hpwr4">
                                    <div className="airdrop-card--title css-vurnku">REVV Motosport (REVV) airdrop</div>
                                    <div className="airdrop-card--text css-vurnku">$400 worth of REVV to 100 lucky winners</div>
                                </div>
                            </div>
                            <div className="airdrop-card--right-box css-4cffwv">
                                <div className="airdrop-card--expired-a css-vurnku">
                                    <span>Expired</span>
                                </div>
                                <span className="sc-dkrFOg bUHCON">
                                    <span>Details</span>
                                </span>
                            </div>
                        </div>

                        <div className="airdrop-card css-4cffwv">
                            <div className="airdrop-card--left-box css-1d8qyez">
                                <div className="airdrop-card--image-container css-1uoge8i">
                                    <img src="https://dashboard-assets.dappradar.com/staging/airdrops/6528e3073004e_DTUBE-logo-20231010-132810.png" className="img-loaded" alt="airdrop-item" />
                                </div>
                                <div className="css-12hpwr4">
                                    <div className="airdrop-card--title css-vurnku">DTube (DTUBE) airdrop</div>
                                    <div className="airdrop-card--text css-vurnku">$400 worth of DTUBE to 100 lucky winners</div>
                                </div>
                            </div>
                            <div className="airdrop-card--right-box css-4cffwv">
                                <div className="airdrop-card--expired-a css-vurnku">
                                    <span>Expired</span>
                                </div>
                                <span className="sc-dkrFOg bUHCON">
                                    <span>Details</span>
                                </span>
                            </div>
                        </div>

                        <div className="airdrop-card css-4cffwv">
                            <div className="airdrop-card--left-box css-1d8qyez">
                                <div className="airdrop-card--image-container css-1uoge8i">
                                    <img src="https://dashboard-assets.dappradar.com/staging/airdrops/651fbd5e1fa43_XCAD-logo2-20231006-072041.png" className="img-loaded" alt="airdrop-item" />
                                </div>
                                <div className="css-12hpwr4">
                                    <div className="airdrop-card--title css-vurnku">XCAD Network (XCAD) airdrop</div>
                                    <div className="airdrop-card--text css-vurnku">$400 worth of XCAD to 100 lucky winners</div>
                                </div>
                            </div>
                            <div className="airdrop-card--right-box css-4cffwv">
                                <div className="airdrop-card--expired-a css-vurnku">
                                    <span>Expired</span>
                                </div>
                                <span className="sc-dkrFOg bUHCON">
                                    <span>Details</span>
                                </span>
                            </div>
                        </div>

                        <div className="airdrop-card css-4cffwv">
                            <div className="airdrop-card--left-box css-1d8qyez">
                                <div className="airdrop-card--image-container css-1uoge8i">
                                    <img src="https://dashboard-assets.dappradar.com/staging/airdrops/6516757b124b3_HOOK-logo-20230926-094518.png" className="img-loaded" alt="airdrop-item" />
                                </div>
                                <div className="css-12hpwr4">
                                    <div className="airdrop-card--title css-vurnku">Hooked Protocol (HOOK) airdrop</div>
                                    <div className="airdrop-card--text css-vurnku">$400 worth of HOOK to 100 lucky winners</div>
                                </div>
                            </div>
                            <div className="airdrop-card--right-box css-4cffwv">
                                <div className="airdrop-card--expired-a css-vurnku">
                                    <span>Expired</span>
                                </div>
                                <span className="sc-dkrFOg bUHCON">
                                    <span>Details</span>
                                </span>
                            </div>
                        </div>

                        <div className="airdrop-card css-4cffwv">
                            <div className="airdrop-card--left-box css-1d8qyez">
                                <div className="airdrop-card--image-container css-1uoge8i">
                                    <img src="https://dashboard-assets.dappradar.com/staging/airdrops/650d3dee6e0a6_GHST-logo-20230922-065219.png" className="img-loaded" alt="airdrop-item" />
                                </div>
                                <div className="css-12hpwr4">
                                    <div className="airdrop-card--title css-vurnku">Aavegotchi (GHST) token</div>
                                    <div className="airdrop-card--text css-vurnku">$400 worth of GHST to 100 lucky winners</div>
                                </div>
                            </div>
                            <div className="airdrop-card--right-box css-4cffwv">
                                <div className="airdrop-card--expired-a css-vurnku">
                                    <span>Expired</span>
                                </div>
                                <span className="sc-dkrFOg bUHCON">
                                    <span>Details</span>
                                </span>
                            </div>
                        </div>

                        <div className="airdrop-card css-4cffwv">
                            <div className="airdrop-card--left-box css-1d8qyez">
                                <div className="airdrop-card--image-container css-1uoge8i">
                                    <img src="https://dashboard-assets.dappradar.com/staging/airdrops/6504052d76d28_1inch-logo.png" className="img-loaded" alt="airdrop-item" />
                                </div>
                                <div className="css-12hpwr4">
                                    <div className="airdrop-card--title css-vurnku">1inch (1INCH) airdrop</div>
                                    <div className="airdrop-card--text css-vurnku">$400 worth of 1INCH to 100 lucky winners</div>
                                </div>
                            </div>
                            <div className="airdrop-card--right-box css-4cffwv">
                                <div className="airdrop-card--expired-a css-vurnku">
                                    <span>Expired</span>
                                </div>
                                <span className="sc-dkrFOg bUHCON">
                                    <span>Details</span>
                                </span>
                            </div>
                        </div>

                        <div className="airdrop-card css-4cffwv">
                            <div className="airdrop-card--left-box css-1d8qyez">
                                <div className="airdrop-card--image-container css-1uoge8i">
                                    <img src="https://dashboard-assets.dappradar.com/staging/airdrops/64fad4e4812be_TLM-logo.png" className="img-loaded" alt="airdrop-item" />
                                </div>
                                <div className="css-12hpwr4">
                                    <div className="airdrop-card--title css-vurnku">Alien Worlds (TLM) airdrop</div>
                                    <div className="airdrop-card--text css-vurnku">$400 worth of TLM to 100 lucky winners</div>
                                </div>
                            </div>
                            <div className="airdrop-card--right-box css-4cffwv">
                                <div className="airdrop-card--expired-a css-vurnku">
                                    <span>Expired</span>
                                </div>
                                <span className="sc-dkrFOg bUHCON">
                                    <span>Details</span>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
