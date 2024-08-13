const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe__left">
        <div className="subscribe__title">
          Subscribe to my <span className="aqua-gradient">Newsletters</span>
        </div>

        <div className="subscribe__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus
          a corrupti rerum voluptatem ab quisquam.
        </div>
      </div>

      <div className="subscribe__right">
        <input type="text" className="subscribe__input" placeholder="Enter your Email" />
        <button className="subscribe__button">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
