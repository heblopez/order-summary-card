import HeroImg from "../assets/illustration-hero.svg"
import MusicIcon from "../assets/icon-music.svg"

export function OrderSummaryCard() {
  return (
    <article>
      <figure>
        <img src={HeroImg} alt="hero-image" />
      </figure>
      <div>
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
      </div>
      <div>
        <img src={MusicIcon} alt="music-icon" />
        <div>
          <h2>Annual Plan</h2>
          <p>$59.99/year</p>
        </div>
        <a href="#">Change</a>
      </div>
      <button>Proceed to Payment</button>
      <button>Cancel Order</button>
    </article>
  );
}
