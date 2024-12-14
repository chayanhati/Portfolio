import Service from "./Service";
const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level.",
  }
];

const About = () => {
  return (
    <div>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
        Hello, I am Chayan Hati, a third-year Computer Science and Engineering student at the Government College of Engineering and Textile Technology, Berhampore.
        </p>
        <p>I am a skilled full-stack web developer, passionate about creating dynamic and user-friendly web solutions. With a strong technical foundation and hands-on experience, I am committed to leveraging my skills to solve real-world challenges and innovate in the field of technology.</p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
