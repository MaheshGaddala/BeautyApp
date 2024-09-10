import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <div className="home-bg-container">
          <div>
            <h1 className="home-heading">Glow Up Beauty paradise</h1>
            <p className="home-desc">Creative Styling</p>
            <button type="button" className="home-button">
              Get An Appointment
            </button>
          </div>
        </div>

        <div className="home-container-1">
          <div>
            <h1 className="home-container-heading">
              Our Salon is Most Popular
            </h1>
            <p>Hair and Beauty Salon Offers - Beauty Services</p>
          </div>
          <div>
            <img
              className="home-img-1"
              src="https://glowup.aeriestec.com/assets/images/18.jpeg"
              alt="about-img"
            />
            <img
              className="home-img-1"
              src="https://glowup.aeriestec.com/assets/images/10.jpg"
              alt="about-img"
            />
          </div>
        </div>

        <div className="home-container-2">
          <h1 className="home-container-heading">
            Come experience the secrets of relaxation
          </h1>
          <p className="home-container-desc">
            Best Beauty expert at your home and provides beauty salon at home.
            Home Salon provide well trained beauty professionals for beauty
            services at home including Facial, Clean Up, Bleach,
            Waxing,Pedicure, Manicure, etc.
          </p>
          <button className="home-button" type="button">
            Get An Appointment
          </button>
        </div>

        <div className="home-container-3">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.RHKGM84oObIOHTFZ1spAHAHaEK&pid=Api&P=0&h=220"
            alt="making-img"
            className="making-img"
          />
          <div className="sub-container">
            <h1 className="home-container-heading">Glowup Beauty Academy</h1>
            <p className="home-container-desc">
              Our Beauty academy offer a wide range of courses covering
              different areas of beauty and cosmetology. These courses may
              include hairstyling, makeup artistry, nail technology .
            </p>
            <ul>
              <li>Hair Styling</li>
              <li>Makeup Artistry</li>
              <li>Threading</li>
              <li>Nail Technology</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="home-container-4">
            <div className="bottom-container">
              <h1 className="home-heading">Contact Us</h1>
              <div>
                <p className="route-links">
                  <span className="span-element">Address:</span> 49-45-11,
                  Akkayapalem, Visakhapatnam 530016.
                </p>
                <p className="route-links">
                  <span className="span-element">Contact:</span>
                  +8367004173
                </p>
                <p className="route-links">
                  <span className="span-element">Email:</span>
                  beautyparadisevizag@gmail.com
                </p>
              </div>
            </div>
            <div className="bottom-container">
              <h1 className="home-heading">Useful Links</h1>

              <div>
                <p>
                  <Link className="route-links" to="/">
                    Home
                  </Link>
                </p>
                <p>
                  <Link className="route-links" to="/about">
                    About
                  </Link>
                </p>
                <p>
                  <Link className="route-links" to="/contact">
                    Contact
                  </Link>
                </p>
              </div>
            </div>
            <div className="bottom-container">
              <h1 className="home-heading">About Us</h1>
              <p className="bottom-description">
                Our main focus is on quality and hygiene. Our Parlour is well
                equipped with advanced technology equipments and provides best
                quality services. Our staff is well trained and experienced,
                offering advanced services in Skin, Hair and Body Shaping that
                will provide you with a luxurious experience that leave you
                feeling relaxed and stress free. The specialities in the parlour
                are, apart from regular bleachings and Facials, many types of
                hairstyles, Bridal and cine make-up and different types of
                Facials & fashion hair colourings.
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
