import { t } from "i18next";

const Footer = () => {
    return (
    <footer className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <p className="mb-0">
                        © 2023 - <a className="text-muted">{t("classbon")}</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;