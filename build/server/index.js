import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, NavLink, Outlet, Meta, Links, ScrollRestoration, Scripts, Link } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { FaHouseChimney, FaUser, FaSuitcase, FaEnvelopeOpen, FaAngleLeft, FaAngleRight, FaPython, FaHtml5, FaCss3, FaReact, FaJs, FaGitAlt } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import emailjs from "@emailjs/browser";
import { FaCheckCircle, FaTimesCircle, FaArrowCircleUp } from "react-icons/fa";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const stylesheet = "/assets/tailwind-D_Q-m_mL.css";
const styles = "/assets/app-Dwj1ddF5.css";
function Header() {
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-900 overflow-visible pt-4 pb-2", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between max-w-[40rem] text-amber-500 font-semibold first:ml-4 last:mr-4 border-b-[1px] border-gray-500", children: [
    /* @__PURE__ */ jsxs(
      NavLink,
      {
        prefetch: "intent",
        to: "/",
        end: true,
        className: "flex flex-col items-center rounded-tr-3xl border-2 border-gray-600 px-4 pt-4 gap-1 size-16 xs:size-[4.5rem] sm:size-20 transition-all duration-150 ease-in-out hover:text-[#F5BB0A] hover:-translate-y-1 hover:scale-[102%] active:scale-[96%] focus:text-gray-100",
        children: [
          /* @__PURE__ */ jsx(FaHouseChimney, { className: "text-xl sm:text-2xl" }),
          /* @__PURE__ */ jsx("h3", { className: "text-sm xs:text-base", children: "Home" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      NavLink,
      {
        prefetch: "intent",
        to: "/about",
        end: true,
        className: "flex flex-col items-center rounded-tr-3xl border-2 border-gray-600 px-4 pt-4 gap-1 size-16 xs:size-[4.5rem] sm:size-20 transition-all duration-150 ease-in-out hover:text-[#F5BB0A] hover:-translate-y-1 hover:scale-[102%] active:scale-[96%] focus:text-gray-100",
        children: [
          /* @__PURE__ */ jsx(FaUser, { className: "text-xl sm:text-2xl" }),
          /* @__PURE__ */ jsx("h3", { className: "text-sm xs:text-base", children: "About" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      NavLink,
      {
        prefetch: "intent",
        to: "/portfolio",
        end: true,
        className: "flex flex-col items-center rounded-tr-3xl border-2 border-gray-600 px-4 pt-4 gap-1 size-16 xs:size-[4.5rem] sm:size-20 transition-all duration-150 ease-in-out hover:text-[#F5BB0A] hover:-translate-y-1 hover:scale-[102%] active:scale-[96%] focus:text-gray-100",
        children: [
          /* @__PURE__ */ jsx(FaSuitcase, { className: "text-xl sm:text-2xl" }),
          /* @__PURE__ */ jsx("h3", { className: "text-sm xs:text-base", children: "Work" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      NavLink,
      {
        prefetch: "intent",
        to: "/contact",
        end: true,
        className: "flex flex-col items-center rounded-tr-3xl border-2 border-gray-600 px-4 pt-4 gap-1 size-16 xs:size-[4.5rem] sm:size-20 transition-all duration-150 ease-in-out hover:text-[#F5BB0A] hover:-translate-y-1 hover:scale-[102%] active:scale-[96%] focus:text-gray-100",
        children: [
          /* @__PURE__ */ jsx(FaEnvelopeOpen, { className: "text-xl sm:text-2xl" }),
          /* @__PURE__ */ jsx("h3", { className: "text-sm xs:text-base", children: "Contact" })
        ]
      }
    )
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("div", { className: "bg-gray-950 min-h-24 p-4", children: /* @__PURE__ */ jsx("ul", { className: "list-none text-amber-500", children: /* @__PURE__ */ jsx("li", { children: "Hire Me!" }) }) });
}
const links = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: styles }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }
      ),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
          rel: "stylesheet"
        }
      ),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { className: "flex flex-col min-h-screen font-Montserrat", children: [
      /* @__PURE__ */ jsx("div", { className: "sticky top-0 z-[100]", children: /* @__PURE__ */ jsx(Header, {}) }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 bg-gray-400", children }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Footer, {}) }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links
}, Symbol.toStringTag, { value: "Module" }));
const ExampleImages = [
  {
    src: "/images/cooledtured/carousel.svg",
    alt: "Feature Carousel Example",
    title: "Timed Interactive Carousels!",
    url: "https://cooledtured.com"
  },
  {
    src: "/images/cooledtured/mobileCarousel.svg",
    alt: "Mobile Feature Carousel Example",
    title: "Responsive Design!",
    url: "https://cooledtured.com"
  },
  {
    src: "/images/cooledtured/animatedFrames.svg",
    alt: "Banner example image",
    title: "Animated Banners!",
    url: "https://cooledtured.com"
  },
  {
    src: "/images/cooledtured/blog.svg",
    alt: "Blog Example",
    title: "Blog Layouts!",
    url: "https://cooledtured.com/blogs/news"
  },
  {
    src: "/images/cooledtured/blogExample.svg",
    alt: "Blog Article Example",
    title: "Articles!",
    url: "https://cooledtured.com/blogs/news"
  },
  {
    src: "/images/cooledtured/brandMenu.svg",
    alt: "Icon Menu Selection Example",
    title: "Content Menus!",
    url: "https://cooledtured.com/brandCollections"
  },
  {
    src: "/images/cooledtured/cart.svg",
    alt: "Cart Example",
    title: "Cart Essentials!",
    url: "https://cooledtured.com"
  },
  {
    src: "/images/cooledtured/discordWidgetbot.svg",
    alt: "Discord integration - WidgetBot",
    title: "Integrate your community!",
    url: "https://cooledtured.com"
  },
  {
    src: "/images/cooledtured/featuredCards.svg",
    alt: "Card Menu Example",
    title: "Modern Menu Design!",
    url: "https://cooledtured.com"
  },
  {
    src: "/images/cooledtured/footer.svg",
    alt: "Footer Example",
    title: "Footers!",
    url: "https://cooledtured.com"
  },
  {
    src: "/images/cooledtured/header.svg",
    alt: "Header Example",
    title: "Headers & Nav Bars!",
    url: "https://cooledtured.com"
  },
  {
    src: "/images/cooledtured/mobileMenu.svg",
    alt: "Mobile Navigation Menu Example",
    title: "Mobile Navigation!",
    url: "https://cooledtured.com"
  },
  {
    src: "/images/cooledtured/login.svg",
    alt: "Login Example",
    title: "Login Templates!",
    url: "https://cooledtured.com/account/login"
  },
  {
    src: "/images/cooledtured/newestPreOrders.svg",
    alt: "Selection Example - Slider with dynamic queries",
    title: "Sliding menus!",
    url: "https://cooledtured.com"
  },
  {
    src: "/images/cooledtured/searchFunctionality.svg",
    alt: "Search Page Example",
    title: "Search Pages!",
    url: "https://cooledtured.com/search"
  },
  {
    src: "/images/cooledtured/searchFilters.svg",
    alt: "Search filter options Example",
    title: "Filter your content!",
    url: "https://cooledtured.com/search"
  },
  {
    src: "/images/cooledtured/sleekVisuals.svg",
    alt: "Visuals Example",
    title: "Visuals as you wish!",
    url: "https://cooledtured.com/community"
  },
  {
    src: "/images/cooledtured/submenus.svg",
    alt: "Submenu Example",
    title: "Intuitive Sub-Navigation",
    url: "https://cooledtured.com"
  },
  {
    src: "/images/cooledtured/videosPage.svg",
    alt: "Video Integration Example - Twitch & Youtube w/ dynamic updates via APIs",
    title: "Showcase your Content!",
    url: "https://cooledtured.com/videos"
  }
];
const imageData = {
  ExampleImages
};
function Cooledtured() {
  const exampleImages = imageData.ExampleImages;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % exampleImages.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + exampleImages.length) % exampleImages.length
    );
  };
  const setImageIndex = (index) => {
    setCurrentImageIndex(index);
  };
  return /* @__PURE__ */ jsxs("div", { className: "grid place-items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "p-4 max-w-[65ch] flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-center items-center gap-8", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-bold text-4xl sm:text-5xl", children: "Cooledtured V3" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/cooledtured/cooledturedLogo.svg",
            alt: "cooledtured logo",
            className: "aspect-square size-20"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "indent-4 flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("p", { children: "Cooledtured operates in the E-commerce domain, specializing in pop-culture merchandise. During my tenure at Cooledtured, I spearheaded a team of 8 intern developers and collaborated closely with both the management and design teams." }),
        /* @__PURE__ */ jsx("p", { children: "Our project's primary objective was to enhance the website by introducing social and community features. To achieve this, we transitioned from Shopify's Liquid template engine to a more robust and flexible front-end architecture using Shopify's Hydrogen framework along with Remix, which leverages React for seamless integration with the existing back-end systems." }),
        /* @__PURE__ */ jsx("p", { children: "Embracing Hydrogen and Remix presented a significant learning curve as they were novel technologies to me. I'm proud to say that not only did we meet our initial goals, but I'm also leading ongoing developments and the maintenance of the platform, ensuring its continuous evolution." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex place-items-center mx-auto max-w-[60rem] h-[28rem] sm:h-[34rem] w-full px-4 pb-4 rounded-md gap-2", children: [
      /* @__PURE__ */ jsx(
        FaAngleLeft,
        {
          onClick: prevImage,
          className: "text-6xl cursor-pointer"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "w-full h-full flex flex-col place-content-center", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: exampleImages[currentImageIndex].url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex relative justify-center font-bold text-amber-500 bg-gray-900 rounded-t-lg px-4 pb-4 pt-3",
            children: [
              /* @__PURE__ */ jsx("h3", { className: "flex w-max justify-center text-center text-xl sm:text-2xl md:text-3xl hover:text-blue-800 transition-all duration-150 ease-out hover:scale-[102%] active:scale-95", children: exampleImages[currentImageIndex].title }),
              /* @__PURE__ */ jsxs("p", { className: "absolute right-2 top-2 z-10 text-xs sm:text-base hover:text-blue-800 transition-all duration-150 ease-out hover:scale-[102%] active:scale-95", children: [
                currentImageIndex + 1,
                "/",
                exampleImages.length
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "place-items-center justify-center flex aspect-video w-full bg-slate-700 rounded-b-lg shadow-md p-4 gap-4", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: exampleImages[currentImageIndex].src,
            alt: exampleImages[currentImageIndex].alt,
            className: "h-auto max-h-80 sm:max-h-[28rem] object-contain rounded-lg shadow-md select-none"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(
        FaAngleRight,
        {
          onClick: nextImage,
          className: "text-6xl cursor-pointer"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-scroll p-4 max-w-full lg:max-w-[60rem]", children: /* @__PURE__ */ jsx("div", { className: "grid grid-flow-col grid-rows-2 gap-4 p-4", children: exampleImages.map((image, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "cursor-pointer w-32 sm:w-36 flex flex-col",
        onClick: () => setImageIndex(index),
        children: [
          /* @__PURE__ */ jsx("h3", { className: "truncate text-sm text-center bg-black text-white rounded-t-md font-medium", children: image.title }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: image.src,
              alt: image.alt,
              className: "w-full h-full aspect-square object-cover rounded-b-md shadow-lg hover:opacity-75 transition-opacity duration-150"
            }
          )
        ]
      },
      index
    )) }) })
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cooledtured
}, Symbol.toStringTag, { value: "Module" }));
const renderPortfolio = (portfolio) => {
  return /* @__PURE__ */ jsx("div", { className: "flex gap-4 flex-wrap", children: portfolio.map((port, idx) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: "image-box relative flex flex-grow flex-shrink basis-1/5 h-80 place-content-center  rounded-lg max-w-72 w-full overflow-clip hover:after:opacity-30 after:transition-all after:duration-300 after:ease-portfolio after:bg-gradient-to-t after:from-[#ffd700] after:to-black after:bottom-0 after:absolute after:w-full after:h-full after:z-[2] after:opacity-0 group transition-all duration-200 ease-in",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "portfolio-image relative z-[2] object-contain h-full aspect-square",
              src: port.image,
              alt: "porfolio"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "content group-hover:bottom-0 w-full absolute z-[3] py-3 px-5 transition-all duration-300 ease-portfolio bottom-[-4.2rem] hover:bottom-0 hover:bg-transparent bg-gradient-to-t from-black from-40% to-100%", children: [
            /* @__PURE__ */ jsx("p", { className: "title my-0 text-white text-[1.5rem] leading-6 font-medium", children: port.name }),
            /* @__PURE__ */ jsx("h4", { className: "description text-[0.9rem] mb-[0.4rem] text-white font-normal", children: port.description }),
            /* @__PURE__ */ jsx(Link, { to: `/portfolio/${port.component}`, children: /* @__PURE__ */ jsx("button", { className: "btn mt-8 mb-[0.65rem] px-5 h-10 text-[0.9rem] leading-[2.1rem] border-4 border-[#ffd700] rounded-md text-white bg-transparent uppercase font-medium transition-all duration-300 ease-portfolio cursor-pointer hover:translate-y-[-0.2rem] hover:bg-[#ffd700] hover:text-black hover:font-bold", children: "View" }) })
          ] })
        ]
      },
      idx
    );
  }) });
};
const firebaseConfig = {
  apiKey: "AIzaSyCA_EtaiGKUJFuOuv09Wch_xiWjbUCan7Y",
  authDomain: "react-portfolio-dashboar-73ad5.firebaseapp.com",
  projectId: "react-portfolio-dashboar-73ad5",
  storageBucket: "react-portfolio-dashboar-73ad5.appspot.com",
  messagingSenderId: "384498161382",
  appId: "1:384498161382:web:dcd20295b8d6e21d248d27"
};
const app = initializeApp(firebaseConfig);
getAuth();
new GoogleAuthProvider();
const db = getFirestore(app);
getStorage(app);
function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    getPortfolio();
  }, []);
  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, "portfolio"));
    const portfolioData = querySnapshot.docs.map((doc) => doc.data());
    console.log(portfolioData);
    setPortfolio(portfolioData);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col max-w-[80rem] justify-center place-items-center mx-auto my-8 gap-12", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-6xl font-bold", children: "My Portfolio " }),
    /* @__PURE__ */ jsx("div", { className: "flex w-full place-content-center justify-center", children: renderPortfolio(portfolio) })
  ] });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Portfolio
}, Symbol.toStringTag, { value: "Module" }));
const ContactForm = () => {
  const formRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showSendErrorPopup, setShowSendErrorPopup] = useState(false);
  const [showSendSuccessPopup, setShowSendSuccessPopup] = useState(false);
  const isValidEmail = (email2) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email2);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      console.error("Invalid email address");
      setShowSendErrorPopup(true);
      return;
    }
    if (formRef.current) {
      emailjs.sendForm(
        "service_02pm7vj",
        "template_vkv09cw",
        formRef.current,
        "bZlI94pnaQIQkcjqN"
      ).then(
        () => {
          console.log("Email sent successfully");
          setShowSendSuccessPopup(true);
          setName("");
          setEmail("");
          setPhoneNumber("");
          setMessage("");
          setTimeout(() => {
            setShowSendSuccessPopup(false);
          }, 2e3);
        },
        (error) => {
          console.error("Failed to send email:", error);
          setShowSendErrorPopup(true);
        }
      );
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "form",
      {
        ref: formRef,
        onSubmit: handleSubmit,
        className: "flex flex-col gap-4  max-w-md bg-gray-900 border-2 border-amber-500 shadow-md rounded-lg px-4 pb-4 pt-2",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-center w-full text-5xl font-bold text-gray-100 py-2 rounded-md -mb-2 border-b-4 border-b-blue-900", children: "Reach out!" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full gap-6 bg-gray-800 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsxs("div", { className: "", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "user_name",
                  className: "block text-sm font-medium text-gray-100 mb-2",
                  children: "Name"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "user_name",
                  id: "user_name",
                  value: name,
                  onChange: (e) => setName(e.target.value),
                  placeholder: "Your Name",
                  required: true,
                  className: "mt-1 p-2 w-full border rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "user_phone",
                  className: "block text-sm font-medium text-gray-100 mb-2",
                  children: "Phone Number"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "tel",
                  name: "user_phone",
                  id: "user_phone",
                  value: phoneNumber,
                  onChange: (e) => setPhoneNumber(e.target.value),
                  placeholder: "(xxx)xxx-xxxx",
                  className: "mt-1 p-2 w-full border rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "user_email",
                  className: "block text-sm font-medium text-gray-100 mb-2",
                  children: "Email"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  name: "user_email",
                  id: "user_email",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  placeholder: "Your Email",
                  required: true,
                  className: "mt-1 p-2 w-full border rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "message",
                  className: "block text-sm font-medium text-gray-100 mb-2",
                  children: "Message"
                }
              ),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  name: "message",
                  id: "message",
                  value: message,
                  onChange: (e) => setMessage(e.target.value),
                  placeholder: "Write your message here...",
                  required: true,
                  className: "mt-1 p-2 w-full border rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-32 resize-none"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "glow-effect-orange bg-blue-950 hover:bg-green-900 hover:text-gray-100 text-amber-500 px-4 py-2 rounded-md font-semibold self-start shadow-sm hover:shadow-lg transition-all duration-150 ease-in-out",
              children: "Send the Email!"
            }
          )
        ]
      }
    ),
    showSendSuccessPopup && /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx("p", { children: "Email sent successfully!" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "text-xl",
          onClick: () => setShowSendSuccessPopup(false),
          children: /* @__PURE__ */ jsx(FaCheckCircle, { className: "text-emerald-800" })
        }
      )
    ] }),
    showSendErrorPopup && /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx("p", { children: "Failed to send email. Please try again later." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "text-xl",
          onClick: () => setShowSendErrorPopup(false),
          children: /* @__PURE__ */ jsx(FaTimesCircle, { className: "text-red-900" })
        }
      )
    ] })
  ] });
};
function Contact() {
  return /* @__PURE__ */ jsxs("div", { className: " flex flex-col gap-8 my-8 mx-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold", children: "Contact Me" }),
    /* @__PURE__ */ jsxs("p", { className: "max-w-[60ch]", children: [
      /* @__PURE__ */ jsx("strong", { children: "As a full-stack web developer" }),
      ", I'm actively seeking both employment and freelance opportunities; particularly those that involve challenging and large-scale projects. Should you have any inquiries or require my expertise, please don't hesitate to reach out via my provided contact details or utilize the form below for direct communication."
    ] }),
    /* @__PURE__ */ jsx("p", { className: "font-medium", children: "I'll be sure to send a prompt response!" }),
    /* @__PURE__ */ jsx(ContactForm, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-xl", children: "Christopher Lowden" }),
      /* @__PURE__ */ jsx("h4", { className: "italic font-medium text-lg", children: "FullStack Web Developer" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.google.com/maps/place/Vienna,+WV/@39.3223107,-81.5525149,14z/data=!3m1!4b1!4m6!3m5!1s0x8849b53735c6f761:0x290a19e3a152c0e!8m2!3d39.3270191!4d-81.5484578!16zL20vMDEwejVf?entry=ttu",
          target: "_blank",
          rel: "noreferrer",
          className: "",
          children: "Vienna, WV, 26105"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "mailto:klowdensolutions@gmail.com",
          className: "text-blue-700 hover:text-sky-800 text-base",
          children: "klowdensolutions@gmail.com"
        }
      )
    ] })
  ] });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact
}, Symbol.toStringTag, { value: "Module" }));
const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-16 my-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-16 mx-4 xs:ml-8", children: [
      /* @__PURE__ */ jsxs("header", { className: "flex flex-col text-left gap-4", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-bold text-[2.5rem] leading-none xxs:text-5xl xs:text-6xl", children: "Christopher Lowden" }),
        /* @__PURE__ */ jsx("h2", { className: "text-gray-800 text-2xl xs:text-3xl", children: "Fullstack Web Application Developer" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Got a project?" }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsx("button", { className: "glow-effect-orange text-xl text-amber-500 px-8 py-2 bg-gray-950 hover:text-[#F5BB0A] hover:bg-gray-900 transition-all duration-150 ease-out hover:-rotate-[4deg] hover:scale-[103%] active:scale-95 rounded-sm", children: "Let's chat!" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full xxs:w-max mx-auto sm:ml-8 p-4 bg-gray-950 text-gray-100 rounded-md gap-4 border-amber-500 border-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl text-amber-500 font-semibold", children: "Services Offered:" }),
        /* @__PURE__ */ jsxs("div", { className: "w-max xxs:ml-2", children: [
          /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-2 list-disc list-inside font-medium text-sm text-wrap xxs:text-base xs:text-lg", children: [
            /* @__PURE__ */ jsx("li", { children: "Website Development" }),
            /* @__PURE__ */ jsx("li", { children: "Website/Database Maintenance" }),
            /* @__PURE__ */ jsx("li", { children: "Consultation - Various" }),
            /* @__PURE__ */ jsx("li", { children: "Brand Management" }),
            /* @__PURE__ */ jsx("li", { children: "API Development & Integration" }),
            /* @__PURE__ */ jsx("li", { children: "Ecommerce Storefront Development" }),
            /* @__PURE__ */ jsx("li", { children: "Database Design and Migration" }),
            /* @__PURE__ */ jsx("li", { children: "Feature Implementation" })
          ] }),
          /* @__PURE__ */ jsx("h4", { className: "text-right text-lg font-semibold", children: "... and More!" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/contact",
          className: "flex mx-auto w-max sm:ml-4 items-center gap-2  px-4 pt-4 text-2xl font-medium underline underline-offset-8 hover:text-amber-800 hover:scale-[103%] active:scale-95",
          children: [
            /* @__PURE__ */ jsx(FaArrowCircleUp, {}),
            "Ask about my rates!"
          ]
        }
      )
    ] })
  ] });
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function About() {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center lg:items-start mx-auto max-w-[70rem]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row flex-wrap gap-4 sm:mx-0 mt-8 place-items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 max-w-[62ch] lg:max-w-[55ch] text-wrap mx-1 sm:mx-2 p-2 xs:p-4 my-0 xs:my-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold", children: "About Me" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 text-base mr-8", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "As a dedicated freelance web developer" }),
          " and software engineer, I am always on the search for dynamic projects and collaborations. My goal is to join forces with innovative teams to push the boundaries of current technology."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "With a proven track record" }),
          " for solving intricate problems and utilizing flexible approaches to changing demands, I pride myself on my ability to enhance any project I'm a part of. I'm committed to delivering top-tier software solutions and ready to make a significant impact right from the start."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Beyond the code," }),
          " I am deeply invested in fostering a culture of innovation and creativity. I am a lifelong learner, drawing inspiration from a broad spectrum of interests. I firmly believe in the synergy between personal growth and professional excellence in the tech industry."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto w-full lg:w-max h-56 mt-16 ml-16 lg:ml-8 mlg:ml-16 xl:ml-20", children: /* @__PURE__ */ jsxs("div", { className: "cubespinner relative w-full mx-auto xxs:mx-12 xs:mx-20 mxs:mx-32 lg:mx-16 grid grid-cols-1", children: [
      /* @__PURE__ */ jsx("div", { className: "face1 text-[#0072B2]", children: /* @__PURE__ */ jsx(FaPython, {}) }),
      /* @__PURE__ */ jsx("div", { className: "face2 text-[#e34c26]", children: /* @__PURE__ */ jsx(FaHtml5, {}) }),
      /* @__PURE__ */ jsx("div", { className: "face3 text-[#264de4]", children: /* @__PURE__ */ jsx(FaCss3, {}) }),
      /* @__PURE__ */ jsx("div", { className: "face4 text-[#61DBFB]", children: /* @__PURE__ */ jsx(FaReact, {}) }),
      /* @__PURE__ */ jsx("div", { className: "face5 text-[#F7DF1E]", children: /* @__PURE__ */ jsx(FaJs, {}) }),
      /* @__PURE__ */ jsx("div", { className: "face6 text-[#F05032]", children: /* @__PURE__ */ jsx(FaGitAlt, {}) })
    ] }) })
  ] }) });
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-C2PWhSuo.js", "imports": ["/assets/jsx-runtime-3WVvLOaR.js", "/assets/components-CblWDzHJ.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-Dk7o7UhT.js", "imports": ["/assets/jsx-runtime-3WVvLOaR.js", "/assets/components-CblWDzHJ.js", "/assets/iconBase-D5vtBmQp.js", "/assets/index-CoPAUOMS.js"], "css": [] }, "routes/portfolio.cooledtured": { "id": "routes/portfolio.cooledtured", "parentId": "root", "path": "portfolio/cooledtured", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/portfolio.cooledtured-D4de1yBr.js", "imports": ["/assets/jsx-runtime-3WVvLOaR.js", "/assets/iconBase-D5vtBmQp.js", "/assets/index-CoPAUOMS.js"], "css": [] }, "routes/portfolio._index": { "id": "routes/portfolio._index", "parentId": "root", "path": "portfolio", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/portfolio._index-BUhUwq8v.js", "imports": ["/assets/jsx-runtime-3WVvLOaR.js", "/assets/components-CblWDzHJ.js"], "css": [] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/contact-C3LqgXKQ.js", "imports": ["/assets/jsx-runtime-3WVvLOaR.js", "/assets/iconBase-D5vtBmQp.js", "/assets/index-D-_2vZFm.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-Dkc57uyp.js", "imports": ["/assets/jsx-runtime-3WVvLOaR.js", "/assets/iconBase-D5vtBmQp.js", "/assets/index-D-_2vZFm.js", "/assets/components-CblWDzHJ.js"], "css": [] }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/about-j4wIwoSC.js", "imports": ["/assets/jsx-runtime-3WVvLOaR.js", "/assets/iconBase-D5vtBmQp.js", "/assets/index-CoPAUOMS.js"], "css": [] } }, "url": "/assets/manifest-7f1e64fa.js", "version": "7f1e64fa" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/portfolio.cooledtured": {
    id: "routes/portfolio.cooledtured",
    parentId: "root",
    path: "portfolio/cooledtured",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/portfolio._index": {
    id: "routes/portfolio._index",
    parentId: "root",
    path: "portfolio",
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route4
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
