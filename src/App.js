import "./App.css";

function App() {
  return (
    <div className="body">
      <div className="nav">
        <div className="container nav_menu">
          <div className="nav_left">
            <a className="nav_link" href="#">
              Shop Products
            </a>
            <a className="nav_link" href="#">
              About Us
            </a>
            <a className="nav_link" href="#">
              Blog
            </a>
          </div>
          <div className="logo">
            <img
              width={100}
              src="https://cdn.shopify.com/s/files/1/0838/7991/t/202/assets/logo.png?v=10371526358008241703"
            ></img>
          </div>
          <div className="nav_right">
            <a className="nav_link" href="#">
              'SEARCH'
            </a>
            <a className="nav_link-outline" href="#">
              Free Trial
            </a>
            <a className="nav_link" href="#">
              Log In
            </a>
            <a className="nav_link" href="#">
              Cart
            </a>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="container hero_box">
          <h2 className="sub_heading">INTRODUCING</h2>
          <h2 className="hero_h2">
            The first 100%
            <br />
            biodegradable
            <br />
            bamboo maxi pad.
          </h2>
          <p className="hero_text">
            The most eco-friendly menstrual
            <br /> care in the world is here.
          </p>
          <button className="main_button">30 day trial</button>
        </div>
      </div>
      <div className="main_1">
        <div className="container">
          <div className="main_1_1">
            <h2 className="text-white text-center">
              We found that
              <br /> the best care could also be
              <br /> the most sustainable.
            </h2>
            <p className="text-white text-center">
              We started by using organic bamboo because it grows faster
              <br /> and requires less water to produce than cotton or rayon
              <br />
              fibers. It’s also softer and 15% more absorbent.
            </p>
          </div>
          <div className="main_1_2">
            <div className="main_1_2_1">
              <h2>
                No plastics <br />
                or synthetics.
              </h2>
              <p>
                We got rid of plastic and synthetic
                <br /> components that can sit in landfills <br /> for up to 800
                years. Even our
                <br /> wrapper is 100% biodegradable.
              </p>
            </div>
            <div className="main_1_2_2">
              <h2>
                Designed <br />
                for your body.
              </h2>
              <p>Feather-light and ultra thin.</p>
              <p>Super soft for sensitive skin.</p>
              <p>Antimicrobial and hypoallergenic.</p>
              <p>No synthetic fibers or elemental chlorine.</p>
            </div>
          </div>
          <div className="main_1_3">
            <div className="main_1_3_1">
              <img
                className="product_image"
                src="./images/product_images/bamboo-regular-maxi-pad.jpg"
              />
              <span className="product_name">Bamboo Regular Pad</span>
              <span className="product_price">$3.00</span>
            </div>
            <div className="main_1_3_2">
              <img
                className="product_image"
                src="./images/product_images/bamboo-regular-maxi-pad.jpg"
              />
              <span className="product_name">Bamboo Super Pad</span>
              <span className="product_price">$3.00</span>
            </div>
            <div className="main_1_3_3">
              <img
                className="product_image"
                src="./images/product_images/bamboo-regular-maxi-pad.jpg"
              />
              <span className="product_name">Bamboo Overnight Pad</span>
              <span className="product_price">$3.00</span>
            </div>
            <div className="main_1_3_4">
              <img
                className="product_image"
                src="./images/product_images/bamboo-regular-maxi-pad.jpg"
              />
              <span className="product_name">Bamboo Panty Liner</span>
              <span className="product_price">$3.00</span>
            </div>
          </div>

          <div className="text-center">
            <button className="main_button"> Shop Now</button>
          </div>
        </div>
      </div>
      <div className="main_2">
        <div className="container hero_box">
          <h2>New To Public Goods?</h2>
          <p className="hero_text">
            We’re commited to making healthier, better
            <br /> choices easy and affordable to all. Good-for-
            <br />
            you, eco-friendly and beautifully designed home
            <br /> essentials, all in one place and at ultra-low prices.
          </p>
          <p style={{ opacity: "0.5" }}>As seen in:</p>
          <div className="press_quotes">
            <img width={"500px"} src="./images/press-quotes.png" />
          </div>
          <button className="main_button">Shop Now</button>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer_left">
            <p>Connect with us</p>
            <input></input>
            <p>
              By clicking Sign Up you agree to receive marketing emails from
              PUBLIC GOODS
            </p>
          </div>
          <div className="footer_right"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
