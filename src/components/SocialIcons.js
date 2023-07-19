const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/Emin0342">
        <i className="fa-brands fa-github" aria-hidden="true" title="Michael Yeates' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedhttps://www.linkedin.com/in/emin-corumlu-b0764a214/in.com/in/mdyeates/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Michael Yeates' LinkedIn Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
