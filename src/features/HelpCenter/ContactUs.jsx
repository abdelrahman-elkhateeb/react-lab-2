import { Link } from "react-router-dom";

function contactUs() {
  return (
    <div className="text-center">
      <h1 className="my-5 text-3xl font-bold text-orange">ContactUs</h1>

      <h2 className="text-xl font-semibold">
        We're here to help! Whether you have a question about your account, need
        assistance with a product, or want to provide feedback, we're just a
        message away. Please fill out the form below, and our support team will
        get back to you as soon as possible.
      </h2>
      <ul className="mt-2 grid gap-3 text-left">
        <li>
          <p className="text-lg font-semibold">
            General Inquiries: For any general questions or comments, feel free
            to reach out. We aim to respond within 24 hours.
          </p>
        </li>
        <li>
          <p className="text-lg font-semibold">
            Technical Support: If you're experiencing issues with our website or
            services, please provide as much detail as possible so we can assist
            you quickly
          </p>
        </li>
        <li>
          <p className="text-lg font-semibold">
            Feedback: Your feedback is important to us. Let us know how we're
            doing or suggest improvements.
          </p>
        </li>
      </ul>
      <div className="flex justify-center gap-5">
        <Link
          to="/HelpCenter/faq"
          className="block rounded bg-orange p-4 font-bold text-neutral-100"
        >
          faq
        </Link>
        <Link
          to="/HelpCenter/faq"
          className="block rounded bg-orange p-4 font-bold text-neutral-100"
        >
          book a demo
        </Link>
      </div>
    </div>
  );
}

export default contactUs;
