import '../styles/link-preview.css';

const LinkPreview = () => (
  <a className="fragment" href="google.com">
    <img src="http://placehold.it/116x116" alt="some description" />
    <h3>quite the title we got here</h3>
    <p className="text">
      this is a short description yada yada peanuts etc this is a short
      description yada yada peanuts etc this is a short description yada yada
      peanuts etc this is a short description yada yada peanuts etcthis is a
      short description yada yada peanuts etc
    </p>
  </a>
);

export { LinkPreview };
