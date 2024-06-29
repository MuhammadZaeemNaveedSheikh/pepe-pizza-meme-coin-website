
import { Col, Container, Row } from 'react-bootstrap'
import heroBg from '../assets/img/heroBG.jpg'
// import twitter from '../assets/img/twitter.svg'
// import telegram from '../assets/img/telegram.svg'
import socialIcon3 from '../assets/img/socialIcon3.png'
import socialIcon4 from '../assets/img/socialIcon4.svg'
import CopyToClipboard from './CopyToClipboard';
import raydium from '../assets/img/raydium.png'
import bitmart from '../assets/img/bitmart.png'
import jup from '../assets/img/jup.png'
import Social from './Social';
import twitter from '../assets/img/twitter.svg'
import telegram from '../assets/img/telegram.svg'

export default function Banner(){
    const socials = [
        {
          icon:<img src={socialIcon3} alt="Social Icon" />,
          url: "https://www.dextools.io/app/en/solana/pair-explorer/H2NCMtgzeBhGjvZCnuXmxpncDxT64qP3MXLygaZtCL3j?t=1717760125430",
        },
        {
          icon:<img src={socialIcon4} alt="Social Icon" />,
          url: "https://dexscreener.com/solana/h2ncmtgzebhgjvzcnuxmxpncdxt64qp3mxlygaztcl3j",
        },
        {
            icon:<img src={raydium} alt="Social Icon" />,
            url: "https://raydium.io/swap/?inputMint=sol&outputMint=4kLRpxuNPzViyhW3cKm5D9c4g2AKzVe2dtLi5cfUPvrY",
          },
          {
            icon:<img src={jup} alt="Social Icon" />,
            url: "https://jup.ag/swap/4kLRpxuNPzViyhW3cKm5D9c4g2AKzVe2dtLi5cfUPvrY-SOL",
          },
      ];
      const socialsbanner = [
        {
            icon: <img src={twitter} alt="Social Icon" />,
            url: "https://x.com/pizpepe",
        },
        {
            icon: <img src={telegram} alt="Social Icon" />,
            url: "https://t.me/+-uqniTrsSvc5ODZh",
        },
    ];
    return(
        <div className="banner">
            <div className="banner-social position-absolute d-flex align-items-end justify-content-center"><Social /></div>
            <figure className='heroBg'>
                <img src="" alt="" />
                <img src={heroBg} alt="" />
            </figure>
            <Container>
                <Row className='justify-content-center justify-content-lg-start'>
                    <Col lg={8} md={10}>
                        <div className="banner-content text-center text-lg-start">
                            <h1> <span>Pepe</span> Pizzeria</h1>
                            <p>Join us and become part of the First Pepe Pizzeria</p>
                            <div className='d-flex justify-content-center justify-content-lg-start align-items-center flex-wrap gap-4'>
                                <div className='d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center flex-wrap gap-3 w-100 w-md-none'>
                                    <a href="https://www.bitmart.com/trade/en-US?symbol=PIZPEPE_USDT" target='_blank' className="btn d-inline-flex align-items-center gap-2">
                                        <img src={bitmart} alt="" />
                                    </a>
                                </div>
                                
                                <ul className="socials d-flex align-items-center p-0 border-0 mb-5 mb-md-0">
                                    {socials.map((item, index)=>(
                                    <li  key={index}> <a href={item.url} target='_blank' className='d-flex align-items-center justify-content-center'>{item.icon}</a></li>
                                    ))}
                                    <div className='responsiveSocial'>
                                        <ul className="socials d-flex flex-wrap align-items-center flex-wrap">
                                            {socialsbanner.map((item, index) => (
                                                <li key={index}> <a href={item.url} target='_blank'>{item.icon}</a></li>
                                            ))}
                                        </ul> 
                                    </div>
                                </ul>
                            </div>
                            <CopyToClipboard />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
