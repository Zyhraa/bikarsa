import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "website",
    link: "websiteinikosong.me",
    href: "https://jackwhiters.me",
  },
  {
    social: "email",
    link: "jackwhiters@gmail.com",
    href: "jackwhiters@gmail.com",
  },
  {
    social: "github",
    link: "jackwhiters",
    href: "https://github.com/jackwhiters",
  },
  {
    social: "linkedin",
    link: "jackwhiters",
    href: "https://www.linkedin.com/in/jackwhiter/",
  },
  {
    social: "twitter",
    link: "iamnitinr",
    href: "https://www.twitter.com/jackwhiters",
  },
  {
    social: "instagram",
    link: "junnn",
    href: "https://www.instagram.com/jackwhiters",
  },
  {
    social: "polywork",
    link: "junnn",
    href: "https://www.polywork.com/junn",
  },
  {
    social: "telegram",
    link: "junn",
    href: "https://t.me/junn",
  },
  {
    social: "codepen",
    link: "junn",
    href: "https://codepen.io/junn",
  },
  {
    social: "codesandbox",
    link: "junn",
    href: "https://codesandbox.io/u/junn",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
