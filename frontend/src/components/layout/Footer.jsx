import { useI18n } from "../../i18n";
import "./Footer.css";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="footer">
      <span>{t.profile.name}</span>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
