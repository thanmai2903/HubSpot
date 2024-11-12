import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />

      <ToggleMessage />
      <ToggleMessages />
      <ToggleMessag />
      <ToggleMessa />
      <ToggleMessagees />
      <Card4 />
      <Card5 />
    </>
  );
}

function Header() {
  return (
    <div className="div1">
      <div>
        <span>
          <img
            className="small-image"
            src={
              "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMzguNjU5NjEgOTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMzOC42NTk2MSA5NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBvbHlnb24gZmlsbD0iIzIxMzM0MyIgcG9pbnRzPSIzNi42NzcyNSw1NC4zMzIxOSAxMS44MDkxOCw1NC4zMzIxOSAxMS44MDkxOCw4MC41Mjg1OSAwLDgwLjUyODU5IDAsMTUuODkwODMgMTEuODA5MTgsMTUuODkwODMgCgkJMTEuODA5MTgsNDIuOTcxMDMgMzYuNjc3MjUsNDIuOTcxMDMgMzYuNjc3MjUsMTUuODkwODMgNDguNDgzNzgsMTUuODkwODMgNDguNDgzNzgsODAuNTI4NTkgMzYuNjc3MjUsODAuNTI4NTkgCSIvPgoJPHBhdGggZmlsbD0iIzIxMzM0MyIgZD0iTTg2LjI2OTM2LDU5LjYzNjM0YzAsNS4zODM0NC00LjM4NTMxLDkuNzYzNzUtOS43Njc1NSw5Ljc2Mzc1Yy01LjM4MzY4LDAtOS43NjYxNi00LjM4MDMxLTkuNzY2MTYtOS43NjM3NQoJCXYtMjcuNjg0OUg1NS41NTMzOXYyNy42ODQ5YzAsMTEuNTUwMjUsOS4zOTc2NCwyMC45NDU1OCwyMC45NDg0MiwyMC45NDU1OGMxMS41NDg0MiwwLDIwLjk0NjA1LTkuMzk1MzMsMjAuOTQ2MDUtMjAuOTQ1NTgKCQl2LTI3LjY4NDloLTExLjE3ODVWNTkuNjM2MzR6Ii8+Cgk8cGF0aCBmaWxsPSIjMjEzMzQzIiBkPSJNMTY5LjI0NTU2LDM0LjgwMTljMC01LjY3NjIxLDMuNzU2OTktNy40NzYxNSw3Ljg3MDI1LTcuNDc2MTVjMy4zMTIwMSwwLDcuNjk0NzIsMi41MjA2OSwxMC41NTQyNCw1LjU4MzYxCgkJbDcuMzMzMjUtOC42NDQ0Yy0zLjY2NDUxLTQuOTUxMi0xMS4wODc5MS04LjM3NDEzLTE3LjE3MDc1LTguMzc0MTNjLTEyLjE2NzMxLDAtMjAuOTMzODUsNy4xMTQyNC0yMC45MzM4NSwxOC45MTEwNgoJCWMwLDIxLjg4MDQ2LDI2Ljc0ODIsMTQuOTQ0NzksMjYuNzQ4MiwyNy4xOTQwNGMwLDMuNzc3NTMtMy42NjYzOCw3LjExMjM2LTcuODY5MzQsNy4xMTIzNgoJCWMtNi42MjE3LDAtOC43Njk2MS0zLjI0MTc0LTExLjgwOTg2LTYuNjY0bC04LjE0MTgyLDguNDYyNzJjNS4xOTEyMiw2LjM5MzczLDExLjYzMDA4LDkuNjM3MzYsMTkuMzIzNjUsOS42MzczNgoJCWMxMS41Mzk0OSwwLDIwLjg0MzI1LTcuMjA0MDUsMjAuODQzMjUtMTguNDYxNDlDMTk1Ljk5MjgsMzcuNzcxNDgsMTY5LjI0NTU2LDQ1LjMzNjI3LDE2OS4yNDU1NiwzNC44MDE5eiIvPgoJPHBhdGggZmlsbD0iIzIxMzM0MyIgZD0iTTMzNC43MjA0OSw3MC4yMDI3OGMtNi42MTY5NywwLTguNDk1MDYtMi44NjA5Ni04LjQ5NTA2LTcuMjQ1OThWNDMuNTQ2NThoMTAuMjg0ODJ2LTkuODM4OTJoLTEwLjI4NDgyCgkJVjIwLjczNTE1bC0xMS4zNTc3OSw1LjA5ODI2djM5LjUzOTMxYzAsMTAuMTA5Myw2Ljk3NDY0LDE1LjIwOTIsMTYuNTQyNjYsMTUuMjA5MmMxLjQzMTIxLDAsMy40MDEyMS0wLjA5MjQ4LDQuNDc1NjgtMC4zNTc2NgoJCWwyLjc3MzYyLTEwLjE5NzA2QzMzNy40MDc3NSw3MC4xMTM1NywzMzUuOTc3MDIsNzAuMjAyNzgsMzM0LjcyMDQ5LDcwLjIwMjc4eiIvPgoJPHBhdGggZmlsbD0iIzIxMzM0MyIgZD0iTTEyOC44OTMyMywzMi4yNzUzM2MtNS41NDY3MywwLTkuNDE4MjksMS42MTAwMi0xMy4xNTczNiw1LjI4MDAzVjE2LjI3Njg1aC0xMS4yMTgwOXYzOS40MzU0NgoJCWMwLDE0Ljc2MDQsMTAuNjcxNjEsMjQuODY5NjMsMjIuNjYyMzYsMjQuODY5NjNjMTMuMzI5MDYsMCwyNS4wMDc3Ny0xMC4yODg5OSwyNS4wMDc3Ny0yNC4xNTIzMgoJCUMxNTIuMTg3OTEsNDIuNzQxOTEsMTQxLjQxODY5LDMyLjI3NTMzLDEyOC44OTMyMywzMi4yNzUzM3ogTTEyOC44MjM1LDY5LjI5MTczYy03LjAyNzU0LDAtMTIuNzIzNzQtNS42OTY0Mi0xMi43MjM3NC0xMi43MjM1MwoJCWMwLTcuMDI2ODksNS42OTYyLTEyLjcyMzUzLDEyLjcyMzc0LTEyLjcyMzUzYzcuMDI2NjcsMCwxMi43MjMzMSw1LjY5NjY0LDEyLjcyMzMxLDEyLjcyMzUzCgkJQzE0MS41NDY4MSw2My41OTUzLDEzNS44NTAxNyw2OS4yOTE3MywxMjguODIzNSw2OS4yOTE3M3oiLz4KCTxwYXRoIGZpbGw9IiMyMTMzNDMiIGQ9Ik0yNTAuNjgzNDYsNTUuODQ3MjRjMC0xMy44NjMzMy0xMS42Nzg3My0yNC4xNTIzMi0yNS4wMDc3OC0yNC4xNTIzMgoJCWMtMTEuOTkwNzUsMC0yMi42NjIzNSwxMC4xMDkyMi0yMi42NjIzNSwyNC44Njk2M1Y5NmgxMS4yMTgwOVY3NC43MjE0OWMzLjczOTA2LDMuNjcwMDEsNy42MTA2Myw1LjI4MDAzLDEzLjE1NzM1LDUuMjgwMDMKCQlDMjM5LjkxNDIyLDgwLjAwMTUyLDI1MC42ODM0Niw2OS41MzQ5NCwyNTAuNjgzNDYsNTUuODQ3MjR6IE0yNDAuMDQyMzQsNTUuNzA4NjVjMCw3LjAyNjg5LTUuNjk2NjQsMTIuNzIzNTMtMTIuNzIzMzEsMTIuNzIzNTMKCQljLTcuMDI3NTQsMC0xMi43MjM3NC01LjY5NjY0LTEyLjcyMzc0LTEyLjcyMzUzYzAtNy4wMjcxLDUuNjk2Mi0xMi43MjM1MywxMi43MjM3NC0xMi43MjM1MwoJCUMyMzQuMzQ1Nyw0Mi45ODUxMywyNDAuMDQyMzQsNDguNjgxNTUsMjQwLjA0MjM0LDU1LjcwODY1eiIvPgoJPHBhdGggZmlsbD0iI0ZGNUMzNSIgZD0iTTI4Ni45MzI0NiwzMS4xNTE1NFYxOS44ODMxMmMyLjk0MTE2LTEuMzg5NTEsNS4wMDIwMS00LjM2NTA4LDUuMDAyMDEtNy44MTg1di0wLjI2MDM4CgkJYzAtNC43NjU1Ny0zLjg5OTQ0LTguNjY0OC04LjY2NDgzLTguNjY0OGgtMC4yNjAxNmMtNC43NjU3OCwwLTguNjY1MjIsMy44OTkyMy04LjY2NTIyLDguNjY0OHYwLjI2MDM4CgkJYzAsMy40NTM0MSwyLjA2MTI4LDYuNDI5NDIsNS4wMDI0MSw3LjgxODcydjExLjI2ODQyYy00LjM3OTI0LDAuNjc2NTYtOC4zODA2NSwyLjQ4MjY5LTExLjY4MjE5LDUuMTQwNzlsLTMwLjkzODg3LTI0LjA2NzU2CgkJYzAuMjAzNTEtMC43ODM3NywwLjM0NjQ1LTEuNTkxMjksMC4zNDczMi0yLjQzODY4YzAuMDA2OTctNS4zOTc5MS00LjM2MzEzLTkuNzc5MzMtOS43NjEyNS05Ljc4NjMxCgkJYy01LjM5ODEzLTAuMDA2NzUtOS43Nzk1Niw0LjM2MzU2LTkuNzg2NTMsOS43NjE0N2MtMC4wMDY1Myw1LjM5NzkxLDQuMzYzNTYsOS43NzkzMyw5Ljc2MTY5LDkuNzg2MDkKCQljMS43NTkyOCwwLjAwMjE4LDMuMzg3MzktMC40OTc0NSw0LjgxNDYxLTEuMzA5MTFsMzAuNDM0NjUsMjMuNjc1NzljLTIuNTg4NTksMy45MDY4NS00LjEwNDI1LDguNTg2OC00LjEwNDI1LDEzLjYyNDUyCgkJYzAsNS4yNzQ1OCwxLjY2NjAyLDEwLjE1MjgxLDQuNDgyMDksMTQuMTY1NzdsLTkuMjU1NzQsOS4yNTU3NGMtMC43MzE2OS0wLjIxOTQyLTEuNDkxMjctMC4zNzMwNC0yLjI5NDg2LTAuMzczMDQKCQljLTQuNDM1NDcsMC04LjAzMTYsMy41OTU5Mi04LjAzMTYsOC4wMzE2czMuNTk2MTMsOC4wMzE2LDguMDMxNiw4LjAzMTZjNC40MzU5LDAsOC4wMzE1OS0zLjU5NTkyLDguMDMxNTktOC4wMzE2CgkJYzAtMC44MDMxNi0wLjE1MzM4LTEuNTYyOTYtMC4zNzMwMi0yLjI5NDY1bDkuMTU1NDktOS4xNTUyOGM0LjE1NTcsMy4xNzI1NSw5LjMzMDY5LDUuMDc4MDMsMTQuOTYyODMsNS4wNzgwMwoJCWMxMy42NDU0NSwwLDI0LjcwNzUyLTExLjA2MjI5LDI0LjcwNzUyLTI0LjcwODE3QzMwNy44NDc3NSw0My4xODU4NywyOTguNzcyODYsMzIuOTgwMzMsMjg2LjkzMjQ2LDMxLjE1MTU0eiBNMjgzLjE0MDIzLDY4LjIwNjI4CgkJYy02Ljk5NjE1LDAtMTIuNjY4NC01LjY3MTM3LTEyLjY2ODQtMTIuNjY3NTNjMC02Ljk5NTk0LDUuNjcyMjQtMTIuNjY3NTMsMTIuNjY4NC0xMi42Njc1MwoJCWM2Ljk5NTMsMCwxMi42Njc1NCw1LjY3MTU4LDEyLjY2NzU0LDEyLjY2NzUzQzI5NS44MDc3Nyw2Mi41MzQ5MiwyOTAuMTM1NTMsNjguMjA2MjgsMjgzLjE0MDIzLDY4LjIwNjI4eiIvPgo8L2c+Cjwvc3ZnPgo="
            }
          />
        </span>
        <span className="span">Products</span>
        <span className="span">Solutions</span>
        <span className="span">Pricing</span>
        <span className="span">Resources</span>
        <span className="span">
          <button className="button1">Get started free</button>
        </span>
        <span className="span">
          <button className="button2">Get a demo</button>
        </span>
      </div>
      <button className="button3">
        <div className="div2">
          <div>
            <img
              className="big-image"
              src={
                "https://www.hubspot.com/hs-fs/hubfs/%5BCSOL%5D%20Placeholder%20assets/CMS%20Hub%20Website%20templates-1200x900-dac359f.png?width=810&name=CMS%20Hub%20Website%20templates-1200x900-dac359f.png"
              }
            />
          </div>
          <div>
            <div className="d1">Free CMS Tools</div>
            <div className="d2">
              Build a website for your business with HubSpot’s free CMS software
              to drive traffic, generate leads, and grow revenue.{" "}
            </div>
            <ul className="ul">
              <li>Get premium cloud hosting and powerful security features</li>
              <li>
                Modify your site with flexible themes and drag-and-drop editing
              </li>
              <li>
                Craft a delightful customer journey with content tools that
                integrate seamlessly with your HubSpot customer platform
              </li>
            </ul>
          </div>
        </div>
      </button>
    </div>
  );
}
function Card() {
  return (
    <div className="div2">
      <div className="div3">
        <div className="d1">
          Build a beautiful website to grow your business.
        </div>
        <div className="d2">
          Your website is one of the most important tools you have to engage
          your audience and grow your business. But a website is much more than
          just content. It includes forms, live chat, analytics, and more.
          HubSpot makes it simple to create a remarkable business website. Our
          free CMS software includes a theme library, a drag-and-drop editor,
          premium cloud hosting, website analytics, and much more. Get
          everything you need to get your business up and running online, no
          developer required.
        </div>
      </div>
      <div>
        <img
          className="image"
          src={
            "https://www.hubspot.com/hubfs/2023_CMSHub_Website_Themes-556x600-48510d5.png"
          }
        />
      </div>
    </div>
  );
}
function Card1() {
  return (
    <div>
      <div className="span">Trusted By</div>
      <span className="span1">
        <img
          className="img"
          src={
            "https://www.hubspot.com/hubfs/Imported%20sitepage%20images/CMS%20Hub%20Customer%20classpass%20logo.png"
          }
        />
      </span>
      <span>
        <img
          className="img"
          src={
            "https://www.hubspot.com/hubfs/Imported%20sitepage%20images/CMS%20Hub%20Customer%20WWF%20Logo.png"
          }
        />
      </span>
      <span>
        <img
          className="img"
          src={
            "https://www.hubspot.com/hubfs/Imported%20sitepage%20images/CMS%20Hub%20Customer%20Calm%20Logo.png"
          }
        />
      </span>
      <span>
        <img
          className="img"
          src={
            "https://www.hubspot.com/hubfs/Imported%20sitepage%20images/CMS%20Hub%20Customer%20Coca%20Cola%20Northeast%20Logo.png"
          }
        />
      </span>
      <span>
        <img
          className="img"
          src={
            "https://www.hubspot.com/hubfs/Imported%20sitepage%20images/CMS%20Hub%20Customer%20randstad%20logo.png"
          }
        />
      </span>
    </div>
  );
}

function Card2() {
  return (
    <div>
      <button className="button4">
        <div className="div2">
          <div>
            <img
              className="image1"
              src={
                "https://www.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/WYSIWYG/no-code-web-editor-en.webp"
              }
            />
          </div>
          <div>
            <div className="d3">
              Start building your business website in no time.
            </div>
            <div className="d4">
              Building a professional website can be tricky without technical
              knowledge or coding skills. HubSpot's free CMS tools empower you
              to build your website quickly and easily with flexible themes, a
              drag-and-drop page editor, and more. Create a website by yourself,
              or work with developers for advanced customization.
            </div>
          </div>
        </div>
        <div className="div2">
          <div>
            <div className="d3">Get a truly free CMS.</div>
            <div className="d4 d6">
              Don’t invest time and energy building your website just to find
              out you only get it for a limited time trial period. HubSpot's
              free content management system includes custom domains, premium
              hosting, and more to grow your presence online. No credit card
              required.
            </div>
          </div>
          <div>
            <img
              className="image1"
              src={
                "https://www.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/custom-domain-connection/connect-domain-free-en.webp"
              }
            />
          </div>
        </div>
        <div className="div2">
          <div>
            <img
              className="image1"
              src={
                "https://www.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/free-blog-maker/successful-blog-en.webp"
              }
            />
          </div>
          <div>
            <div className="d3">Understand what’s driving impact.</div>
            <div className="d4">
              When you don’t know how your website is performing, it is
              difficult to grow your business. Don’t get bogged down with
              third-party reporting platforms and endless spreadsheets. Our free
              CMS tools include website analytics at your fingertips to help
              your business make data-driven decisions to drive growth.
            </div>
          </div>
        </div>
        <div className="div2">
          <div>
            <div className="d3">
              Delight your customers with a CMS that integrates across the
              customer platform.
            </div>
            <div className="d4 d6">
              Building a website with HubSpot’s content management tools gives
              you access to all the features included with HubSpot’s customer
              platform. This means you have everything you need to build a
              website, launch marketing campaigns, capture leads, and follow up
              with them in one place. Your team saves time with easy-to-use
              integrated software, and your customers receive delightful
              experiences every time.
            </div>
          </div>
          <div>
            <img
              className="image1"
              src={"https://www.hubspot.com/hubfs/WYSIWYG-editor-en.png"}
            />
          </div>
        </div>
      </button>
    </div>
  );
}
function Card3() {
  return (
    <div className="card3">
      <div className="d7">Related Resources</div>
      <div>
        If you’re interested in HubSpot's free CMS, these related resources may
        help.
      </div>
      <div>
        <img
          className="images"
          src={
            "https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/woman-huging-laptop.png?width=350&name=woman-huging-laptop.png"
          }
        />
        <img
          className="images"
          src={
            "https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/woman-thinking-with-notepad-en.png?width=350&name=woman-thinking-with-notepad-en.png"
          }
        />
        <img
          className="images"
          src={
            "https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/Related%20Resources/male-searching-laptop-en.png?width=350&name=male-searching-laptop-en.png"
          }
        />
      </div>
      <span className="d8">Content Hub Overview</span>
      <span className="spa">CMS Training for Marketers</span>
      <span className="spa">Developer Quick Start Guide</span>
      <div className="d7 sp">Frequently Asked Questions</div>
    </div>
  );
}
const ToggleMessage = () => {
  let [isVisble, setIsVisible] = useState(true);
  console.log("re-render");
  function toggle() {
    setIsVisible(!isVisble);
  }
  return (
    <div>
      <div>
        <button onClick={toggle} className="but">
          <li className="d9">What is a free CMS?</li>
        </button>
      </div>
      {isVisble && (
        <p className="p">
          A free content management system is a set of tools you can use to
          host, build, and manage a website. Many free CMS tools offer
          entry-level features that get more powerful as you upgrade to premium
          editions.
        </p>
      )}
    </div>
  );
};
const ToggleMessages = () => {
  let [isVisble, setIsVisible] = useState(true);
  console.log("re-render");
  function tog() {
    setIsVisible(!isVisble);
  }
  return (
    <div>
      <div>
        <button onClick={tog} className="but">
          <li className="d9">What are the main features of a CMS platform? </li>
        </button>
      </div>
      {isVisble && (
        <p className="p">
          CMS platforms come with everything you need to build and manage a
          website. This can include tools for content editing, like HubSpot’s
          drag-and-drop page editor, and tools for designing the entire look and
          feel of your website, like our flexible themes. As a SaaS CMS, you’ll
          also have access to HubSpot’s premium hosting, providing you with an
          easy way to get started with your website. A CMS platform will also
          include tools to help you report on the success of your website, like
          HubSpot’s website analytics dashboard.
        </p>
      )}
    </div>
  );
};
const ToggleMessag = () => {
  let [isVisble, setIsVisible] = useState(true);
  console.log("re-render");
  function togg() {
    setIsVisible(!isVisble);
  }
  return (
    <div>
      <div>
        <button onClick={togg} className="but">
          <li className="d9">
            What is the difference between a CMS and a CRM?
          </li>
        </button>
      </div>
      {isVisble && (
        <p className="p">
          Though "CMS" and "CRM" sound similar, they are not the same thing. A
          CMS is the platform that enables you to build, edit, and host your
          website. A CRM (customer relationship management) is software for
          organizing and connecting with your organization's prospects, leads,
          and contacts. The best CMS is one that integrates seamlessly with your
          CRM, allowing you to generate leads and turn those leads into
          customers all in one place.
        </p>
      )}
    </div>
  );
};
const ToggleMessa = () => {
  let [isVisble, setIsVisible] = useState(true);
  console.log("re-render");
  function toggl() {
    setIsVisible(!isVisble);
  }
  return (
    <div>
      <div>
        <button onClick={toggl} className="but">
          <li className="d9">
            Do I need a developer to use HubSpot’s free CMS tools?
          </li>
        </button>
      </div>
      {isVisble && (
        <p className="p">
          Not at all. Thanks to features like our flexible themes and
          drag-and-drop page editor, you can get started with HubSpot’s CMS
          tools without any technical skills. As your website's needs become
          more advanced, and you want more complex or customized web elements,
          you can still work with a developer to get the most out of Content Hub
          and the rest of the HubSpot customer platform.
        </p>
      )}
    </div>
  );
};
const ToggleMessagees = () => {
  let [isVisble, setIsVisible] = useState(true);
  console.log("re-render");
  function toggles() {
    setIsVisible(!isVisble);
  }
  return (
    <div>
      <div>
        <button onClick={toggles} className="but">
          <li className="d9">
            Can I use HubSpot’s CMS to build an ecommerce website?
          </li>
        </button>
      </div>
      {isVisble && (
        <p className="p">
          If you’re looking to build an ecommerce website, you have a number of
          different options with Content Hub. Our payments tool allows qualified
          US customers to add payment links directly to any website built with
          Content Hub, making it easy to securely generate revenue off your
          website. And, if you’re already using Shopify for your ecommerce
          store, you can leverage our Shopify integration for a seamless
          integration between the two platforms.
        </p>
      )}
    </div>
  );
};
function Card4() {
  return (
    <div>
      <button className="butt">
        <div className="d10">Popular Features in Content Hub </div>
        <div className="d11">
          Free content management tools are available in Content Hub. Explore
          additional Content Hub features below.
        </div>
        <div className="di di1">
          <ul className="di1">
            <li></li>Popular Features
            <li></li>All Products and Features
            <li></li>Free Meeting Scheduler App
            <li></li>Breeze AI Tools
            <li></li>Email Tracking Software
            <li></li>AI Content Writer
            <li></li>AI Website Generator
            <li></li>Email Marketing Software
            <li></li>Lead Management Software
            <li></li>AI Email Writer
          </ul>
          <ul className="di1">
            <li></li>Free Website Builder
            <li></li>Sales Email Templates
            <li></li>Free Online Form Builder
            <li></li>Free Chatbot Builder
            <li></li>Free Live Chat Software
            <li></li>Marketing Analytics
            <li></li>Free Landing Page Builder
            <li></li>Free Web Hosting
          </ul>
          <ul className="di1">
            <li>Free Tools</li>
            <li>See All Free Business Tools</li>
            <li>AI Search Grader</li>
            <li>Clip Creator</li>
            <li>Website Grader</li>
            <li>Make My Persona</li>
            <li>Email Signature Generator</li>
          </ul>
          <ul className="di2">
            <li>Brand Kit Generator</li>
            <li>Blog Ideas Generator</li>
            <li>Invoice Generator</li>
            <li>Free Business Templates</li>
            <li>Guide Creator</li>
            <li>Software Comparisons Library</li>
            <li>Template Marketplace</li>
            <li>Campaign Assistant</li>
            <li>Landing Page Creator</li>
          </ul>
        </div>
        <div>
          <img
            className="small-images"
            src={
              "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMzguNjU5NjEgOTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMzOC42NTk2MSA5NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBvbHlnb24gZmlsbD0iIzIxMzM0MyIgcG9pbnRzPSIzNi42NzcyNSw1NC4zMzIxOSAxMS44MDkxOCw1NC4zMzIxOSAxMS44MDkxOCw4MC41Mjg1OSAwLDgwLjUyODU5IDAsMTUuODkwODMgMTEuODA5MTgsMTUuODkwODMgCgkJMTEuODA5MTgsNDIuOTcxMDMgMzYuNjc3MjUsNDIuOTcxMDMgMzYuNjc3MjUsMTUuODkwODMgNDguNDgzNzgsMTUuODkwODMgNDguNDgzNzgsODAuNTI4NTkgMzYuNjc3MjUsODAuNTI4NTkgCSIvPgoJPHBhdGggZmlsbD0iIzIxMzM0MyIgZD0iTTg2LjI2OTM2LDU5LjYzNjM0YzAsNS4zODM0NC00LjM4NTMxLDkuNzYzNzUtOS43Njc1NSw5Ljc2Mzc1Yy01LjM4MzY4LDAtOS43NjYxNi00LjM4MDMxLTkuNzY2MTYtOS43NjM3NQoJCXYtMjcuNjg0OUg1NS41NTMzOXYyNy42ODQ5YzAsMTEuNTUwMjUsOS4zOTc2NCwyMC45NDU1OCwyMC45NDg0MiwyMC45NDU1OGMxMS41NDg0MiwwLDIwLjk0NjA1LTkuMzk1MzMsMjAuOTQ2MDUtMjAuOTQ1NTgKCQl2LTI3LjY4NDloLTExLjE3ODVWNTkuNjM2MzR6Ii8+Cgk8cGF0aCBmaWxsPSIjMjEzMzQzIiBkPSJNMTY5LjI0NTU2LDM0LjgwMTljMC01LjY3NjIxLDMuNzU2OTktNy40NzYxNSw3Ljg3MDI1LTcuNDc2MTVjMy4zMTIwMSwwLDcuNjk0NzIsMi41MjA2OSwxMC41NTQyNCw1LjU4MzYxCgkJbDcuMzMzMjUtOC42NDQ0Yy0zLjY2NDUxLTQuOTUxMi0xMS4wODc5MS04LjM3NDEzLTE3LjE3MDc1LTguMzc0MTNjLTEyLjE2NzMxLDAtMjAuOTMzODUsNy4xMTQyNC0yMC45MzM4NSwxOC45MTEwNgoJCWMwLDIxLjg4MDQ2LDI2Ljc0ODIsMTQuOTQ0NzksMjYuNzQ4MiwyNy4xOTQwNGMwLDMuNzc3NTMtMy42NjYzOCw3LjExMjM2LTcuODY5MzQsNy4xMTIzNgoJCWMtNi42MjE3LDAtOC43Njk2MS0zLjI0MTc0LTExLjgwOTg2LTYuNjY0bC04LjE0MTgyLDguNDYyNzJjNS4xOTEyMiw2LjM5MzczLDExLjYzMDA4LDkuNjM3MzYsMTkuMzIzNjUsOS42MzczNgoJCWMxMS41Mzk0OSwwLDIwLjg0MzI1LTcuMjA0MDUsMjAuODQzMjUtMTguNDYxNDlDMTk1Ljk5MjgsMzcuNzcxNDgsMTY5LjI0NTU2LDQ1LjMzNjI3LDE2OS4yNDU1NiwzNC44MDE5eiIvPgoJPHBhdGggZmlsbD0iIzIxMzM0MyIgZD0iTTMzNC43MjA0OSw3MC4yMDI3OGMtNi42MTY5NywwLTguNDk1MDYtMi44NjA5Ni04LjQ5NTA2LTcuMjQ1OThWNDMuNTQ2NThoMTAuMjg0ODJ2LTkuODM4OTJoLTEwLjI4NDgyCgkJVjIwLjczNTE1bC0xMS4zNTc3OSw1LjA5ODI2djM5LjUzOTMxYzAsMTAuMTA5Myw2Ljk3NDY0LDE1LjIwOTIsMTYuNTQyNjYsMTUuMjA5MmMxLjQzMTIxLDAsMy40MDEyMS0wLjA5MjQ4LDQuNDc1NjgtMC4zNTc2NgoJCWwyLjc3MzYyLTEwLjE5NzA2QzMzNy40MDc3NSw3MC4xMTM1NywzMzUuOTc3MDIsNzAuMjAyNzgsMzM0LjcyMDQ5LDcwLjIwMjc4eiIvPgoJPHBhdGggZmlsbD0iIzIxMzM0MyIgZD0iTTEyOC44OTMyMywzMi4yNzUzM2MtNS41NDY3MywwLTkuNDE4MjksMS42MTAwMi0xMy4xNTczNiw1LjI4MDAzVjE2LjI3Njg1aC0xMS4yMTgwOXYzOS40MzU0NgoJCWMwLDE0Ljc2MDQsMTAuNjcxNjEsMjQuODY5NjMsMjIuNjYyMzYsMjQuODY5NjNjMTMuMzI5MDYsMCwyNS4wMDc3Ny0xMC4yODg5OSwyNS4wMDc3Ny0yNC4xNTIzMgoJCUMxNTIuMTg3OTEsNDIuNzQxOTEsMTQxLjQxODY5LDMyLjI3NTMzLDEyOC44OTMyMywzMi4yNzUzM3ogTTEyOC44MjM1LDY5LjI5MTczYy03LjAyNzU0LDAtMTIuNzIzNzQtNS42OTY0Mi0xMi43MjM3NC0xMi43MjM1MwoJCWMwLTcuMDI2ODksNS42OTYyLTEyLjcyMzUzLDEyLjcyMzc0LTEyLjcyMzUzYzcuMDI2NjcsMCwxMi43MjMzMSw1LjY5NjY0LDEyLjcyMzMxLDEyLjcyMzUzCgkJQzE0MS41NDY4MSw2My41OTUzLDEzNS44NTAxNyw2OS4yOTE3MywxMjguODIzNSw2OS4yOTE3M3oiLz4KCTxwYXRoIGZpbGw9IiMyMTMzNDMiIGQ9Ik0yNTAuNjgzNDYsNTUuODQ3MjRjMC0xMy44NjMzMy0xMS42Nzg3My0yNC4xNTIzMi0yNS4wMDc3OC0yNC4xNTIzMgoJCWMtMTEuOTkwNzUsMC0yMi42NjIzNSwxMC4xMDkyMi0yMi42NjIzNSwyNC44Njk2M1Y5NmgxMS4yMTgwOVY3NC43MjE0OWMzLjczOTA2LDMuNjcwMDEsNy42MTA2Myw1LjI4MDAzLDEzLjE1NzM1LDUuMjgwMDMKCQlDMjM5LjkxNDIyLDgwLjAwMTUyLDI1MC42ODM0Niw2OS41MzQ5NCwyNTAuNjgzNDYsNTUuODQ3MjR6IE0yNDAuMDQyMzQsNTUuNzA4NjVjMCw3LjAyNjg5LTUuNjk2NjQsMTIuNzIzNTMtMTIuNzIzMzEsMTIuNzIzNTMKCQljLTcuMDI3NTQsMC0xMi43MjM3NC01LjY5NjY0LTEyLjcyMzc0LTEyLjcyMzUzYzAtNy4wMjcxLDUuNjk2Mi0xMi43MjM1MywxMi43MjM3NC0xMi43MjM1MwoJCUMyMzQuMzQ1Nyw0Mi45ODUxMywyNDAuMDQyMzQsNDguNjgxNTUsMjQwLjA0MjM0LDU1LjcwODY1eiIvPgoJPHBhdGggZmlsbD0iI0ZGNUMzNSIgZD0iTTI4Ni45MzI0NiwzMS4xNTE1NFYxOS44ODMxMmMyLjk0MTE2LTEuMzg5NTEsNS4wMDIwMS00LjM2NTA4LDUuMDAyMDEtNy44MTg1di0wLjI2MDM4CgkJYzAtNC43NjU1Ny0zLjg5OTQ0LTguNjY0OC04LjY2NDgzLTguNjY0OGgtMC4yNjAxNmMtNC43NjU3OCwwLTguNjY1MjIsMy44OTkyMy04LjY2NTIyLDguNjY0OHYwLjI2MDM4CgkJYzAsMy40NTM0MSwyLjA2MTI4LDYuNDI5NDIsNS4wMDI0MSw3LjgxODcydjExLjI2ODQyYy00LjM3OTI0LDAuNjc2NTYtOC4zODA2NSwyLjQ4MjY5LTExLjY4MjE5LDUuMTQwNzlsLTMwLjkzODg3LTI0LjA2NzU2CgkJYzAuMjAzNTEtMC43ODM3NywwLjM0NjQ1LTEuNTkxMjksMC4zNDczMi0yLjQzODY4YzAuMDA2OTctNS4zOTc5MS00LjM2MzEzLTkuNzc5MzMtOS43NjEyNS05Ljc4NjMxCgkJYy01LjM5ODEzLTAuMDA2NzUtOS43Nzk1Niw0LjM2MzU2LTkuNzg2NTMsOS43NjE0N2MtMC4wMDY1Myw1LjM5NzkxLDQuMzYzNTYsOS43NzkzMyw5Ljc2MTY5LDkuNzg2MDkKCQljMS43NTkyOCwwLjAwMjE4LDMuMzg3MzktMC40OTc0NSw0LjgxNDYxLTEuMzA5MTFsMzAuNDM0NjUsMjMuNjc1NzljLTIuNTg4NTksMy45MDY4NS00LjEwNDI1LDguNTg2OC00LjEwNDI1LDEzLjYyNDUyCgkJYzAsNS4yNzQ1OCwxLjY2NjAyLDEwLjE1MjgxLDQuNDgyMDksMTQuMTY1NzdsLTkuMjU1NzQsOS4yNTU3NGMtMC43MzE2OS0wLjIxOTQyLTEuNDkxMjctMC4zNzMwNC0yLjI5NDg2LTAuMzczMDQKCQljLTQuNDM1NDcsMC04LjAzMTYsMy41OTU5Mi04LjAzMTYsOC4wMzE2czMuNTk2MTMsOC4wMzE2LDguMDMxNiw4LjAzMTZjNC40MzU5LDAsOC4wMzE1OS0zLjU5NTkyLDguMDMxNTktOC4wMzE2CgkJYzAtMC44MDMxNi0wLjE1MzM4LTEuNTYyOTYtMC4zNzMwMi0yLjI5NDY1bDkuMTU1NDktOS4xNTUyOGM0LjE1NTcsMy4xNzI1NSw5LjMzMDY5LDUuMDc4MDMsMTQuOTYyODMsNS4wNzgwMwoJCWMxMy42NDU0NSwwLDI0LjcwNzUyLTExLjA2MjI5LDI0LjcwNzUyLTI0LjcwODE3QzMwNy44NDc3NSw0My4xODU4NywyOTguNzcyODYsMzIuOTgwMzMsMjg2LjkzMjQ2LDMxLjE1MTU0eiBNMjgzLjE0MDIzLDY4LjIwNjI4CgkJYy02Ljk5NjE1LDAtMTIuNjY4NC01LjY3MTM3LTEyLjY2ODQtMTIuNjY3NTNjMC02Ljk5NTk0LDUuNjcyMjQtMTIuNjY3NTMsMTIuNjY4NC0xMi42Njc1MwoJCWM2Ljk5NTMsMCwxMi42Njc1NCw1LjY3MTU4LDEyLjY2NzU0LDEyLjY2NzUzQzI5NS44MDc3Nyw2Mi41MzQ5MiwyOTAuMTM1NTMsNjguMjA2MjgsMjgzLjE0MDIzLDY4LjIwNjI4eiIvPgo8L2c+Cjwvc3ZnPgo="
            }
          />
        </div>
        <div className="class">Copyright © 2024 HubSpot, Inc.</div>
      </button>
    </div>
  );
}

function Card5() {}
export default App;
