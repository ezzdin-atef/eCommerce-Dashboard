import React from "react";

const ButtonsPage = () => {
  return (
    <div className="components">
      <header>
        <h2>Buttons</h2>
      </header>
      <div className="content">
        <div className="components-section">
          <h4>Pick your Color</h4>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-danger">Danger</button>
          <br />
          <button className="btn btn-primary-light">Light</button>
          <button className="btn btn-success-light">Primary</button>
          <button className="btn btn-info-light">Info</button>
          <button className="btn btn-warning-light">Warning</button>
          <button className="btn btn-danger-light">Danger</button>
        </div>

        <div className="components-section">
          <h4>Buttons with Label</h4>
          <button className="btn btn-primary">
            <i className="fas fa-chevron-left"></i> Left
          </button>
          <button className="btn btn-primary">
            Right <i className="fas fa-chevron-right"></i>
          </button>
          <button className="btn btn-success">
            <i className="fas fa-check"></i> Success
          </button>
          <button className="btn btn-info">
            <i className="fas fa-exclamation"></i> Info
          </button>
          <button className="btn btn-warning">
            <i className="fas fa-exclamation-triangle"></i> Warning
          </button>
          <button className="btn btn-danger">
            <i className="far fa-trash-alt"></i> Danger
          </button>
        </div>

        <div className="components-section">
          <h4>Pick your Size</h4>
          <button className="btn btn-xm btn-primary">XSmall</button>
          <button className="btn btn-sm btn-primary">Small</button>
          <button className="btn btn btn-primary">Regular</button>
          <button className="btn btn-lg btn-primary">Large</button>
        </div>

        <div className="components-section">
          <h4>Pick your Style</h4>
          <button className="btn btn-primary">Default</button>
          <button className="btn btn-round btn-primary">Rounded</button>
          <button className="btn btn-round btn-primary">
            <i className="fas fa-heart"></i> With Icon
          </button>
          <button className="btn btn-round-full btn-primary">
            <i className="fas fa-heart"></i>
          </button>
        </div>

        <div className="components-section">
          <h4>Button Group</h4>
          <div className="button-group">
            <button className="btn btn-info">Left</button>
            <button className="btn btn-info">Middle</button>
            <button className="btn btn-info">Right</button>
          </div>{" "}
          <div className="button-group">
            <button className="btn btn-info">1</button>
            <button className="btn btn-info">2</button>
            <button className="btn btn-info">3</button>
            <button className="btn btn-info">4</button>
            <button className="btn btn-info">5</button>
            <button className="btn btn-info">6</button>
          </div>
        </div>

        <div className="components-section" style={{ flexBasis: "100%" }}>
          <h4>Social buttons</h4>
          <button className="btn btn-facebook">
            <i class="fab fa-facebook-square"></i> Facebook
          </button>
          <button className="btn btn-twitter">
            <i class="fab fa-twitter-square"></i> Twitter
          </button>
          <button className="btn btn-youtube">
            <i class="fab fa-youtube"></i> Youtube
          </button>
          <button className="btn btn-linkedin">
            <i class="fab fa-linkedin"></i> LinkedIn
          </button>
          <button className="btn btn-instagram">
            <i class="fab fa-instagram"></i> Instagram
          </button>
          <button className="btn btn-pinterest">
            <i class="fab fa-pinterest-square"></i> Pinterest
          </button>
          <button className="btn btn-behance">
            <i class="fab fa-behance-square"></i> Behance
          </button>
          <button className="btn btn-dribbble">
            <i class="fab fa-dribbble-square"></i> Dribbble
          </button>
          <button className="btn btn-reddit">
            <i class="fab fa-reddit-alien"></i> Reddit
          </button>

          <br />

          <button className="btn btn-facebook-light">
            <i class="fab fa-facebook-f"></i> Facebook
          </button>
          <button className="btn btn-twitter-light">
            <i class="fab fa-twitter"></i> Twitter
          </button>
          <button className="btn btn-youtube-light">
            <i class="fab fa-youtube"></i> Youtube
          </button>
          <button className="btn btn-linkedin-light">
            <i class="fab fa-linkedin-in"></i> LinkedIn
          </button>
          <button className="btn btn-instagram-light">
            <i class="fab fa-instagram"></i> Instagram
          </button>
          <button className="btn btn-pinterest-light">
            <i class="fab fa-pinterest"></i> Pinterest
          </button>
          <button className="btn btn-behance-light">
            <i class="fab fa-behance"></i> Behance
          </button>
          <button className="btn btn-dribbble-light">
            <i class="fab fa-dribbble"></i> Dribbble
          </button>
          <button className="btn btn-reddit-light">
            <i class="fab fa-reddit-alien"></i> Reddit
          </button>

          <br />

          <button className="btn btn-round-full btn-facebook">
            <i class="fab fa-facebook-f"></i>
          </button>
          <button className="btn btn-round-full btn-twitter">
            <i class="fab fa-twitter"></i>
          </button>
          <button className="btn btn-round-full btn-youtube">
            <i class="fab fa-youtube"></i>
          </button>
          <button className="btn btn-round-full btn-linkedin">
            <i class="fab fa-linkedin-in"></i>
          </button>
          <button className="btn btn-round-full btn-instagram">
            <i class="fab fa-instagram"></i>
          </button>
          <button className="btn btn-round-full btn-pinterest">
            <i class="fab fa-pinterest"></i>
          </button>
          <button className="btn btn-round-full btn-behance">
            <i class="fab fa-behance"></i>
          </button>
          <button className="btn btn-round-full btn-dribbble">
            <i class="fab fa-dribbble"></i>
          </button>
          <button className="btn btn-round-full btn-reddit">
            <i class="fab fa-reddit-alien"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonsPage;
