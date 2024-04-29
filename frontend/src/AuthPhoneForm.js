import './style.css';
import './roboto.css';

function AuthPhoneForm() {
    return (
        <>
            <div className="auth-form">
                <div id="logo"></div>
                <h1>Telegram</h1>
                <p className="note">Проверьте код страны и введите свой номер телефона.</p>
                <form className="form" action="">
                    <div className="DropdownMenu CountryCodeInput">
                        <div className="input-group"><input className="form-control focus" type="text" id="sign-in-phone-code"
                            autocomplete="off" /><label>Страна</label><i className="css-icon-down open"></i></div>
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
                    </div>
                    <div className="input-group with-label">
                        <input className="form-control" type="text" id="sign-in-phone-number" dir="auto" inputMode="tel" aria-label="Your phone number" />
                        <label for="sign-in-phone-number">Номер телефона</label>
                    </div>
                    
                    
                    <label className="Checkbox">
                        <input type="checkbox" id="sign-in-keep-session" />
                        <div className="Checkbox-main">
                            <span className="label" dir="auto">Запомнить меня</span>
                        </div>
                    </label>

                    <button type="submit" className="pr Button default primary has-ripple">
                        Далее
                        <div className="ripple-container"></div>
                    </button>
                    
                    <button type="button" className="Button default primary text has-ripple">
                        Вход по QR-коду
                        <div className="ripple-container"></div>
                    </button>
                </form>
            </div>
        </>
    );
}

export default AuthPhoneForm;
