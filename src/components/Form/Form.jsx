import React, { useContext } from "react";
import { LanguageContext } from "../lang/Lang";
import "./Form.scss";
import logo from "/twitter-logo-4 1.png"

export default function Form() {
  const { language, languages, strings, changeLanguage } =
    useContext(LanguageContext);
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <h1 className="logo">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
            </h1>
            <div className="dropdown">
              <button className="dropbtn">Languages</button>
              <div className="dropdown-content">
                <div onClick={() => changeLanguage("uz")}>
                  {strings?.languages.uz}
                </div>
                <div onClick={() => changeLanguage("en")}>
                  {strings?.languages.en}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <h2 className="title-contact">{strings?.form?.title}</h2>
          <form>
            <input
              type="text"
              className="input"
              placeholder={strings.form["placeholder-name"]}
            />
            <input
              type="text"
              className="input"
              placeholder={strings.form["placeholder-phone"]}
            />
            <h3 className="link-email">
              {strings?.form.href}
            </h3>
            <h3 className="date">{strings.form.date}</h3>
            <p className="info-form">{strings.form.info}</p>
            <div className="select-box">
              <select className="select-month">
                <option selected disabled>
                  {strings.form.month}
                </option>
                <option>{strings.form.january}</option>
                <option>{strings.form.february}</option>
                <option>{strings.form.march}</option>
                <option>{strings.form.april}</option>
                <option>{strings.form.may}</option>
                <option>{strings.form.june}</option>
                <option>{strings.form.july}</option>
                <option>{strings.form.august}</option>
                <option>{strings.form.september}</option>
                <option>{strings.form.october}</option>
                <option>{strings.form.november}</option>
                <option>{strings.form.december}</option>
              </select>
              <select className="select-day">
                <option selected disabled>
                  {strings.form.day}
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>
              <input
                type="number"
                placeholder={strings.form.year}
                className="input-date"
              />
            </div>
            <button type="button" className="btn-next">
              {strings.form.btn}
            </button>
          </form>
        </div>
      </main>
      <footer>
        <div className="container">
          <p className="last-text">{strings.form.rights}</p>
        </div>
      </footer>
    </>
  );
}