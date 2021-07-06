import './LandingPage.css';
import logo from '../../assets/img/logo.png';
import brain from '../../assets/img/brain.png';
import book from '../../assets/img/book.png';
import party from '../../assets/img/party.png';
import handphone from '../../assets/img/iphone-12--black.png';
import deck from '../../assets/img/Deck-o-putih.png';
import playstore from '../../assets/img/playstore.png';
import Register from '../../Components/Header/Register';
import Login from '../../Components/Header/Login';

const LandingPage = () => {
  return (
    <div>
      <header
        id="header"
        className="header pt-5"
        style={{ backgroundColor: '#FFF0CD' }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src={logo} style={{ fill: 'none' }} alt="logo.png"></img>
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              <a href="#" style={{ color: 'rgb(53, 52, 52)' }}>
                <span className="fa fa-user"></span>&nbsp; <Login />
              </a>
              <li>
                <a className="getstarted scrollto" href="#">
                  <span className="fa fa-chevron-right">
                    <Register />
                  </span>
                </a>
              </li>{' '}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up" style={{ color: 'rgb(37, 37, 37)' }}>
                Become your most <br></br>{' '}
                <span style={{ color: '#E6C7FF' }}>Unstoppable</span> self
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Master any subject, one success at a time.
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <a
                    href="#"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Get Started</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-5 pt-5 mb-5 pb-5" data-aos="fade-up">
        <header className="section-header">
          <p>
            90% of student who use{' '}
            <span style={{ color: '#E6C7FF' }}> Deck-o </span>report higher
            grades. 💯✨
          </p>
        </header>
      </div>

      <div id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row gx-0">
              <div className="col-sm-6 text-center">
                <img src={brain} alt="brain.png"></img>
              </div>
              <div className="col-sm-6 pt-5">
                <h1>
                  You bring the brains, we’ll <br></br> bring everything else
                </h1>
                <p>
                  Deck-o breaks down topics and subjects, so you accomplish{' '}
                  <br></br> something new every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about1" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row gx-0">
              <div className="col-sm-6 pt-5 text-center">
                <h1>
                  You bring the brains, we’ll <br></br> bring everything else
                </h1>
                <p>
                  Deck-o breaks down topics and subjects, so you accomplish{' '}
                  <br></br> something new every step of the way.
                </p>
              </div>

              <div className="col-sm-6 text-center">
                <img src={book} alt="book.png"></img>
              </div>
            </div>
          </div>
        </section>

        <section id="about2" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row gx-0">
              <div className="col-sm-6 text-center">
                <img src={party} alt="party.png"></img>
              </div>

              <div className="col-sm-6 pt-5">
                <h1>
                  You bring the brains, we’ll <br></br> bring everything else
                </h1>
                <p>
                  Deck-o breaks down topics and subjects, so you accomplish{' '}
                  <br></br> something new every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container mt-5 pt-5 mb-5 pb-5" data-aos="fade-up">
          <header className="section-header">
            <p style={{ color: '#E6C7FF' }}>What they said about Deck-o 📣</p>
            <p style={{ fontSize: '15px' }} className="text-center">
              Deck-o has helped me to understand just how fun and important and
              fun studying can be! <br></br> This school year, in chemistry
              className i put my terms on Deck-o and I already feel better about{' '}
              <br></br> my upcoming test.{' '}
            </p>
            <p
              style={{ fontSize: '15px', color: 'lightgrey' }}
              className="text-center"
            >
              – kangsolb, AGE 19
            </p>
          </header>
        </div>

        <section id="about4" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h1 className="">Ready to stat getting better grades?</h1>
                <br></br>
                <a
                  href="/about"
                  className="text-center tombol scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Get Started</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about5"
          className="about"
          style={{ marginBottom: '-62px' }}
        >
          <div className="container" data-aos="fade-up">
            <div className="row gx-0">
              <div className="col-sm-6 text-center">
                <img src={handphone} alt="iphone.png"></img>
              </div>

              <div className="col-sm-6 pt-5">
                <h1>
                  Attack your weaknesses. <br></br> Take your learning with you.
                </h1>
                <p>Available on</p>
                <span className="">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-512/playstore-8-675406.png"
                    width="30px"
                    alt="iconscout"
                  ></img>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1724px-Apple_logo_black.svg.png"
                    width="25px"
                    alt="apple_logo"
                  ></img>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="footer" className="footer" style={{ color: 'white' }}>
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-2 col-6 footer-links">
                <h4 style={{ color: 'white' }}>About</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <a href="/">Privacy</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <a href="/">Ad and Cookie Policy</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <a href="/">Terms</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4>Support</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <a href="/">Sign up</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <a href="/">Help Center</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <a href="/">FAQ</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <a href="/">Contact Us</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <ul></ul>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <ul></ul>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <ul></ul>
              </div>

              <div className="col-lg-2 col-md-12 footer-info">
                <a href="index.html" className="logo d-flex align-items-center">
                  <img src={deck} alt=""></img>
                </a>
                <p>Available on</p>
                <div className="social-links mt-3">
                  <a href="/" className="twitter">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1200px-Apple_logo_white.svg.png"
                      width="30px"
                      alt=""
                    ></img>
                  </a>
                  <a href="/" className="facebook">
                    <img src={playstore} alt="" width="25px"></img>
                    <i></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="/"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
