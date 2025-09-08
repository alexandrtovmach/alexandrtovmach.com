import React from 'react';

interface HomeProps {
  imageSrc?: string;
}

const Home: React.FC<HomeProps> = ({ imageSrc = "/src/assets/images/main.jpg" }) => {
  const handleCVPress = () => {
    // Analytics tracking can be added here
  };

  const handleBlogPress = () => {
    // Analytics tracking can be added here
  };

  return (
    <main className="flex flex-wrap justify-center w-full max-w-6xl mx-auto px-4 py-8">
      <div className="flex-shrink-0 flex-grow-0 w-full max-w-sm m-2">
        <img
          alt="My Photo"
          className="w-full h-auto rounded-lg shadow-lg"
          src={imageSrc}
          loading="lazy"
        />
      </div>
      <article className="flex-shrink-0 flex-grow-0 w-full max-w-sm m-2">
        <h1 className="label text-3xl font-bold mb-6 text-gray-900">Hi, I'm Alexandr Tovmach.</h1>
        <p className="text mb-4 text-gray-700 leading-relaxed">
          I'm full stack engineer & UI/UX designer. My expertise is JS
          ecosystem, especially React and Node.js, but I consider my vision and
          real experience to be significantly wider.
        </p>
        <p className="text mb-4 text-gray-700 leading-relaxed">
          Founded and led&nbsp;
          <a
            target="_blank"
            title="Link to soft4manufacture company website"
            rel="noopener noreferrer"
            href="http://soft4manufacture.com/"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            soft4manufacture
          </a>
          &nbsp; company, which provides development services and
          IT solutions for manufacturing companies.
        </p>
        <p className="text mb-4 text-gray-700 leading-relaxed">
          My&nbsp;
          <a
            target="_blank"
            title="Link to attech-org project"
            rel="noopener noreferrer"
            href="https://github.com/attech-org"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            web development course
          </a>
          &nbsp;helped 20 students obtain valuable skills for their future
          careers.
        </p>
        <p className="text mb-4 text-gray-700 leading-relaxed">
          I've started several open-source packages (e.g.&nbsp;
          <a
            target="_blank"
            title="Link to react-microsoft-login project"
            rel="noopener noreferrer"
            href="https://www.npmjs.com/package/react-microsoft-login"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            react-microsoft-login
          </a>
          ,&nbsp;
          <a
            target="_blank"
            title="Link to react-figma-plugin-ds project"
            rel="noopener noreferrer"
            href="https://www.npmjs.com/package/react-figma-plugin-ds"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            react-figma-plugin-ds
          </a>
          ) , and was active contributor of&nbsp;
          <a
            target="_blank"
            title="Link to Node.js project"
            rel="noopener noreferrer"
            href="https://github.com/nodejs/"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            Node.js
          </a>
          ,&nbsp;
          <a
            target="_blank"
            title="Link to SemVer project"
            rel="noopener noreferrer"
            href="https://github.com/semver/"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            SemVer
          </a>
          ,&nbsp;
          <a
            target="_blank"
            title="Link to Gatsby project"
            rel="noopener noreferrer"
            href="https://github.com/gatsbyjs/"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            Gatsby
          </a>
          ,&nbsp;
          <a
            target="_blank"
            title="Link to Friends of Figma project"
            rel="noopener noreferrer"
            href="https://friends.figma.com/plugins/"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            Friends of Figma
          </a>
          , and other projects.
        </p>
        <p className="text mb-4 text-gray-700 leading-relaxed">
          In my free time I write and translate&nbsp;
          <a 
            href="/blog" 
            onClick={handleBlogPress}
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            articles
          </a>
          &nbsp; on&nbsp;
          <a
            target="_blank"
            title="Link to my profile on Medium"
            rel="noopener noreferrer"
            href="https://medium.com/@alexandrtovmach"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            Medium
          </a>
          ,&nbsp;
          <a
            target="_blank"
            title="Link to my profile on DOU"
            rel="noopener noreferrer"
            href="https://dou.ua/users/aleksandr-tovmach/articles"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            DOU
          </a>
          , and also speak at meet-ups and&nbsp;
          <a
            target="_blank"
            title="JSFest 2019: JAMStack"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=wCNSK4iFCuE"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            conferences
          </a>
          .
        </p>
        <p className="text mb-4 text-gray-700 leading-relaxed">
          To contact with me&nbsp;
          <a
            target="_blank"
            title="Calendly"
            rel="noopener noreferrer"
            href="https://calendly.com/alexandrtovmach"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            book an appointment
          </a>
          &nbsp; or simply&nbsp;
          <a 
            href="mailto:alexandrtovmach@gmail.com"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            mail me
          </a>
          . You can find more details about my experience in a&nbsp;
          <a 
            href="/cv" 
            className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200" 
            onClick={handleCVPress}
          >
            printable CV
          </a>
          .
        </p>
      </article>
    </main>
  );
};

export default Home;
