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
            <img
              style={{ marginRight: "2em" }}
              width={20}
              src="https://cdn.shopify.com/s/files/1/0838/7991/files/magnify_2_30x.png?2583"
            />
            <a className="nav_link-outline" href="#">
              Free Trial
            </a>
            <a className="nav_link log_in_show" href="#">
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
          <div className="collection">
            <h2 className="sub_heading">The Collection</h2>
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
            <button className="main_button shop_button"> Shop Now</button>
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
          <p className="as_seen_in" style={{ opacity: "0.5" }}>
            As seen in:
          </p>
          <div className="press_quotes">
            <img width={"500px"} src="./images/press-quotes.png" />
          </div>
          <button className="main_button shop_button">Shop Now</button>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer_left">
            <h4 className="footer_heading">Connect with us</h4>
            <form>
              <input placeholder="Enter your email" />
              <button>Subscribe</button>
            </form>
            <div className="footer_1">
              <p className="footer_disclaimer">
                By clicking Sign Up you agree to receive <br />
                marketing emails from PUBLIC GOODS
              </p>
              <div className="footer_images">
                <img
                  className="social_icon"
                  src="https://cdn.shopify.com/s/files/1/0838/7991/t/202/assets/pinterest.png?v=9200692156590803653"
                />
                <img
                  className="social_icon"
                  src="https://cdn.shopify.com/s/files/1/0838/7991/t/202/assets/facebook.png?v=5136794340258126381"
                />
                <img
                  className="social_icon"
                  src="https://cdn.shopify.com/s/files/1/0838/7991/t/202/assets/twitter.png?v=2080486621711630736"
                />
                <img
                  className="social_icon"
                  src="https://cdn.shopify.com/s/files/1/0838/7991/t/202/assets/instagram.png?v=4210573133226539251"
                />
              </div>
            </div>
            <div className="footer_links">
              <div className="footer_links_left">
                <a>Contact </a>
                <a>Shipping</a>
                <a>Privacy Policy</a>
                <a>Terms and Services</a>
              </div>
              <div className="footer_links_right">
                <span>&copy; PUBLIC GOODS - All Rights Reserved</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
