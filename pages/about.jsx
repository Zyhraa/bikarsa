const AboutPage = () => {
  return (
    <>
      <h3>HELLO!!!! :3</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
