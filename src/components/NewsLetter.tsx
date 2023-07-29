import "../css/NewsLetter.css";

function NewsLetter() {
  return (
    <div className="newsletter">
      <div className="newsletter_wrapper">
      <div id="logo_newsletter"></div>
      <h1>Suscribe to our Newsletter</h1>
      <p>
        Fusce id velit placerat, efficitur libero placerat, sodales ante.
        Curabitur sed erosat orci congue vestibulum.
      </p>
      <div className="sub_to_newsletter">
        <input type="text" className="mail"></input>
        <button className="button_newsletter"></button>
      </div>
      </div>
    </div>
  );
}

export default NewsLetter;
