import React from "react";
import "../components/library.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer-fluid";

function Library() {
  return (
    <>
      <div className="banner-container">
        <Navbar />
      </div>

      <div
        className="hero-section text-center"
        style={{ backgroundImage: 'url("/library.png") ', height: "600px" }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">Library</h1>
          <h4 className="hero-subtitle">Discover Knowledge and Serenity</h4>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-8">
            <h2>The Library</h2>

            <div className="card mb-4">
              <img src="./library.png" alt="cozy" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Cozy Lounge</h5>
                <p className="card-text">
                  Step into our cozy lounge, designed for book lovers, featuring
                  plush seating, warm lighting, and a tranquil ambiance. Whether
                  you seek a quiet corner or a space to share thoughts, this
                  lounge offers the perfect setting for a relaxing literary
                  escape.
                </p>
              </div>
            </div>

            <div className="card mb-4">
              <img src="./library-1.png" alt="relax" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Relax and Unwind</h5>
                <p className="card-text">
                  Unwind in our peaceful library space, designed for relaxation
                  and a quiet escape into literature.
                </p>
              </div>
            </div>

            <div className="card mb-4">
              <img
                src="./library-2.png"
                alt="socialize"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Socialize with Readers</h5>
                <p className="card-text">
                  Connect with fellow readers in a comfortable environment,
                  perfect for lively discussions and sharing thoughts.
                </p>
              </div>
            </div>

            <div className="card mb-4">
              <img src="./library-3.png" alt="books" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Curated Library</h5>
                <p className="card-text">
                  For those who appreciate the company of a good book, our
                  private lobby boasts a curated library section. Immerse
                  yourself in a world of literature, selecting from our
                  collection of books to complement your mood and preferences.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Library Hours</h5>
                <ul>
                  <li>Monday - Friday: 9 AM - 9 PM</li>
                  <li>Saturday: 10 AM - 9 PM</li>
                  <li>Sunday: 10 AM - 9 PM</li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Follow Us</h5>
                <p>Stay connected with us through our social media channels:</p>
                <ul>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Library;
