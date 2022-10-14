import i18next from "i18next";
import cookies from "js-cookie";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Navbar = (props) => {
  let url = "";
  const languages = props.langs;
  const { t } = useTranslation();

  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);
  // console.log(languages);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href={url}>
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href={url}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={url}>
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href={url}
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.globalIncon}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <span className="dropdown-item">{t("language")}</span>
                </li>
                {languages.map((lang) => (
                  <li key={lang.country_code}>
                    <button
                      className="dropdown-item"
                      onClick={() => i18next.changeLanguage(lang.code)}
                      disabled={lang.code === currentLanguageCode}
                    >
                      <span
                        className={`fi fi-${lang.country_code} mx-2`}
                        style={{
                          opacity: lang.code === currentLanguageCode ? 0.5 : 1,
                        }}
                      ></span>

                      {lang.name}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href={url}
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
