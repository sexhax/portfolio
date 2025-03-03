import React, { useState } from "react";
import "./App.css";


function App() {
  const [activeTab, setActiveTab] = useState("about");
  <title>Eclipse</title>
  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <section className="about-me">
            <h2>👨‍💻 About Me</h2>
            <ul>
              <li>🌍 From <strong>The Netherlands</strong></li>
              <li>📚 <strong>Self-taught</strong> in tech, security, & networking</li>
              <li>🔧 Contributor to <strong>CrowSploit</strong> penetration testing tool</li>
              <li>🔐 Focused on <strong>ethical hacking</strong> & security improvements</li>
            </ul>
          </section>
        );
      case "skills":
        return (
          <section className="skills">
            <h2>🔧 Technical Skills</h2>
            <p>
              Proficient in various languages and technologies used for ethical
              hacking and development:
            </p>
            <a
              href="https://skillicons.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://skillicons.dev/icons?i=arch,linux,debian,cs,go,py,js,html,mysql,css,npm,flask,aftereffects,ps,robloxstudio,windows,powershell&perline=50"
                alt="Skills"
              />
            </a>
          </section>
        );
      case "projects":
        return (
          <section className="projects">
            <h2>🚀 Projects & Contributions</h2>
            <div className="project">
              <h3>🔨 CrowSploit</h3>
              <p>
                <strong>Role</strong>: Contributor<br />
                <strong>Description</strong>: Penetration testing tool for assessing system
                vulnerabilities. Added modules for network attacks and optimized
                exploit detection.
                <br />
                <strong>Tech</strong>: Python, Bash, Nmap, Metasploit, Linux
              </p>
            </div>
          </section>
        );
      case "github":
        return (
          <section className="github-stats">
            <h2>📈 GitHub Stats</h2>
            <div className="github-stats-img">
              <img
                src="https://github-readme-stats.vercel.app/api?username=sexhax&show_icons=true&theme=radical"
                alt="GitHub Stats"
              />
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=sexhax&layout=compact&theme=radical"
                alt="Top Languages"
              />
            </div>
          </section>
        );
      default:
        return <div>Select a tab to view the content</div>;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi there 👋</h1>
        <h2>I'm Eclipse, a Freelance Developer & Ethical Hacker</h2>
        <p>
          Passionate about <strong>ethical hacking</strong> and <strong>cybersecurity</strong>. Expanding
          expertise in <strong>penetration testing</strong> and <strong>exploit development</strong>.
        </p>
        <div className="portfolio-links">
          <a
            href="https://github.com/sexhax"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            Check out my GitHub
          </a>
        </div>
      </header>

      <div className="tabs">
        <div
          className={`tab ${activeTab === "about" ? "active" : ""}`}
          onClick={() => setActiveTab("about")}
        >
          About Me
        </div>
        <div
          className={`tab ${activeTab === "skills" ? "active" : ""}`}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </div>
        <div
          className={`tab ${activeTab === "projects" ? "active" : ""}`}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </div>
        <div
          className={`tab ${activeTab === "github" ? "active" : ""}`}
          onClick={() => setActiveTab("github")}
        >
          GitHub Stats
        </div>
      </div>

      {renderTabContent()}

      <footer>
        <h3>🌱 Get in Touch</h3>
        <p>
          Always open to collaborating or chatting about tech. Feel free to
          connect!
        </p>
        <p>
        <strong>GitHub</strong>:{" "}
          <a
            href="https://github.com/sexhax"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/sexhax
          </a>
        </p>
        <p>
        <strong>Discord</strong>:{" "}
          <a
            href="https://discord.com/users/1329066711449735211/"
            target="_blank"
            rel="noopener noreferrer"
          >
            skidmaxxing
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
