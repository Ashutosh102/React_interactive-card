import "./App.css";
import FRONT_IMG from "./assets/bg-card-front.png";
import FRONT_LOGO from "./assets/card-logo.svg";
import BACK_IMG from "./assets/bg-card-back.png";
import Form from "./components/Form";
import { useState } from "react";
import Thankyou from "./components/Thankyou";
function App() {
  const [state, setState] = useState(true);
  const [form, setForm] = useState({
    name: null,
    number: null,
    month: null,
    year: null,
    cvc: null,
  });

  const onChange = (e) => {
    if (e.target.name === "number" && e.target.value) {
      e.target.value = e.target.value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .replace(/^[0-9]{19}$/)
        .trim()
        .slice(0, 19);
    }

    if (e.target.name === "month" || e.target.name === "year") {
      e.target.value = e.target.value
        .toString()
        .replace(/[^0-9]/g, "")
        .substring(0, 2);
      if (e.target.name === "month" && e.target.value > 12)
        e.target.value = "12";
    }

    if (e.target.name === "cvc") {
      e.target.value = e.target.value.substring(0, 4);
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    setState(true);
    setForm({
      name: null,
      number: null,
      month: null,
      year: null,
      cvc: null,
    });
  };
  const handleState = () => {
    setState(false);
  };
  return (
    <main>
      {/* CARDS SECTION */}
      <section className="card__side">
        <div className="cards">
          {/* BACK OF CARD */}
          <div className="cards__card--back">
            <img
              src={BACK_IMG}
              alt="card--back--picture"
              className="card__back--img"
            />
            <section className="card__back--info">
              <p className="info__number--back">{form.cvc || "000"}</p>
            </section>
          </div>
          {/* BACK OF CARD END */}
          {/* FRONT OF CARD */}
          <div className="cards__card--front">
            <img
              src={FRONT_IMG}
              alt="card--front--picture"
              className="card__front--img"
            />
            <section className="card__front--info">
              <div className="info__logo">
                <img
                  src={FRONT_LOGO}
                  alt="front card logo"
                  className="info__logo"
                />
              </div>
              <h3 className="info__number">
                {form.number || "0000 0000 0000 0000"}
              </h3>
              <div className="info__name--and--date">
                <p className="info__name">{form.name || "Ashutosh Mohanty"}</p>
                <p className="info__date">
                  {form.month || "00"}/{form.year || "00"}
                </p>
              </div>
            </section>
          </div>
          {/* FRONT OF CARD END */}
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="form__side">
        {state === true ? (
          <>
            <Form handleChange={onChange} handleState={handleState} />
          </>
        ) : (
          <>
            <Thankyou handleContinue={handleContinue} />
          </>
        )}
      </section>
    </main>
  );
}

export default App;
