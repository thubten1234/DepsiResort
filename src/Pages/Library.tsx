import "../components/App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer-fluid";

function Library() {
  return (
    <div>
      <div className="banner-container">
        <Navbar />
      </div>
      <div
        className="hero-section text-center"
        style={{ backgroundImage: 'url("/library.png") ' }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">Library</h1>
          <h4 className="hero-subtitle">Discover Knowledge and Serenity</h4>
        </div>
      </div>
      <div>
        {" "}
        <section className="library-section">
          <div
            className="library-banner"
            style={{ backgroundImage: 'url("/booksbanner.png")' }}
          ></div>
          <div className="library-content">
            <h1 className="library-title">Library Section</h1>
            <p className="library-description">
              For those who appreciate the company of a good book, our private
              lobby boasts a curated library section. Immerse yourself in a
              world of literature, selecting from our collection of books to
              complement your mood and preferences.
            </p>
          </div>
        </section>
        <section className="library-section">
          <div
            className="library-banner"
            style={{ backgroundImage: 'url("/libraryseating.png")' }}
          ></div>
          <div className="library-content">
            <h1 className="library-title">Comfortable Lounges</h1>
            <p className="library-description">
              Step into our small and cozy lounge, thoughtfully designed for
              book lovers. With plush seating, warm lighting, and a tranquil
              ambiance, it's the perfect haven to immerse yourself in a
              captivating read from our library. Whether you prefer a quiet
              corner or a shared space to exchange thoughts with fellow readers,
              this lounge promises comfort and serenity for your literary
              escape.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Library;
