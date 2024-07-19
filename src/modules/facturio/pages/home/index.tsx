import { useTranslation } from "react-i18next";
import "./index.css";

export default function Home() {
    const {t} = useTranslation();

    return (
        <div>
            <h1>Facturio Home</h1>
            <h2>{t("helloworld")}</h2>
        </div>
    )
}