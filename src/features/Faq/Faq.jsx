import Question from "./Question";

function Faq() {
  const questions = [
    {
      id: 1,
      question:
        "What technologies did you use to build the Fast React Pizza Application?",
      answer:
        "The Fast React Pizza Application was built using Tailwind CSS for styling, React Router for navigation, and Redux Toolkit for state management.",
    },
    {
      id: 2,
      question:
        "Can you describe your role in the development of the e-commerce app hosted at https://sneakars-ecommerce.netlify.app?",
      answer:
        "I worked on the UI/UX design and implementation using Tailwind CSS and managed state using the Context API.",
    },
    {
      id: 3,
      question:
        "What kind of projects have you worked on as a frontend developer?",
      answer:
        "I have worked on various projects, including a community platform for sharing trip experiences, a web application for trip customization and booking, an e-commerce app, and websites such as https://guide.ahmed-yehia.me/ and https://ecommerce-playstation-app.netlify.app, where I focused on creating responsive layouts and interactive user interfaces using HTML, CSS, JavaScript, and frameworks like React.",
    },
  ];

  return <Question questions={questions} />;
}

export default Faq;
