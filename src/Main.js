import React, { Component } from "react";

import './style.css';

class Main extends Component {
  render() {
    return (
      <div class="container">
        <section class="form-group">
          <label for="instance-url" class="field-label">
            Instance url (required)
          </label>
          <input
            type="text"
            id="instance-url"
            name="instance-url"
            class="field-input"
            placeholder="The url of Gatsby Cloud instance"
            onchange="validateInput()"
          />
        </section>
        <a
          href="www.google.com"
          alt="Instance url"
          target="_blank"
          rel="noopener noreferrer"
          class="preview-link"
        >
          <button type="button" class="preview-button">
            Open Preview
          </button>
        </a>
        <div class="powered-by">
          <p>Powered by:</p>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.7143 20H25.7143V22.8571H32.5714C31.5714 27.1429 28.4286 30.7143 24.2857 32.1429L7.85715 15.7143C9.57144 10.7143 14.4286 7.14286 20 7.14286C24.2857 7.14286 28.1429 9.28571 30.5714 12.5714L32.7143 10.7143C29.8572 6.85714 25.2857 4.28571 20 4.28571C12.5714 4.28571 6.28572 9.57143 4.71429 16.5714L23.5714 35.4286C30.4286 33.7143 35.7143 27.4286 35.7143 20Z"
              fill="white"
            />
            <path
              d="M4.28571 20.1429C4.28571 24.1429 5.85713 28 8.85713 31C11.8571 34 15.8571 35.5714 19.7143 35.5714L4.28571 20.1429Z"
              fill="white"
            />
            <path
              d="M20 0C9 0 0 9 0 20C0 31 9 40 20 40C31 40 40 31 40 20C40 9 31 0 20 0ZM8.85714 31.1429C5.85714 28.1429 4.28571 24.1429 4.28571 20.2857L19.8571 35.7143C15.8571 35.5714 11.8571 34.1429 8.85714 31.1429ZM23.4286 35.2857L4.71429 16.5714C6.28571 9.57143 12.5714 4.28571 20 4.28571C25.2857 4.28571 29.8571 6.85714 32.7143 10.7143L30.5714 12.5714C28.1429 9.28571 24.2857 7.14286 20 7.14286C14.4286 7.14286 9.71429 10.7143 7.85714 15.7143L24.2857 32.1429C28.4286 30.7143 31.5714 27.1429 32.5714 22.8571H25.7143V20H35.7143C35.7143 27.4286 30.4286 33.7143 23.4286 35.2857Z"
              fill="#663399"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default Main;
