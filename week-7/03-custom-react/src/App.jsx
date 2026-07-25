import { useEffect } from "react";

// Step 1: Create a React-like element object
const anchorElement = {
  type: "a",
  props: {
    href: "https://google.com/",
    target: "_blank",
    innerText: "Click me",
  },
};

// Step 2: Function to generate HTML from the object
const generateHTML = (element) => {
  const { type, props } = element;

  // Exclude innerText from HTML attributes
  const attributes = Object.keys(props)
    .filter((key) => key !== "innerText")
    .map((key) => `${key}="${props[key]}"`)
    .join(" ");

  // Return HTML string
  return `<${type} ${attributes}>${props.innerText}</${type}>`;
};

// Step 3: Function to render HTML into the target element
const customRender = (element, targetSelector) => {
  const html = generateHTML(element);

  const targetElement = document.querySelector(targetSelector);

  if (targetElement) {
    targetElement.innerHTML = html;
  }
};

function App() {
  // Render once after the component mounts
  useEffect(() => {
    customRender(anchorElement, "#custom-root");
  }, []);

  return (
    <div>
      <h1>Custom React Renderer</h1>

      {/* Custom renderer will render inside this div */}
      <div id="custom-root"></div>
    </div>
  );
}

export default App;