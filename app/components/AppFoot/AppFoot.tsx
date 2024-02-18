import { Copyright } from "lucide-react";

export default function AppFoot() {
  const appVersion = process.env.APP_VERSION;
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="constrained flex justifyContents-spaceBetween alignItems-center">
        <div className="flex alignItems-center gap-x-sm">
          <Copyright size="16" />
          <div>chrisbrett.info {currentYear}</div>
          <span className="footer-meta footer-version">
            &ndash; <code>v{appVersion}</code>
          </span>
        </div>
        <ul className="naked-list flex">
          <li className="list-item flex">
            <a href="https://github.com/chic-geek" className="flex">
              <svg
                className="icon"
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check out my Github account</title>
                <path
                  className="icon-squircle"
                  d="M45 22.5C45 28.7914 44.3219 36.3836 40.1596 40.4668C36.1006 44.4486 28.6351 45 22.5 45C16.3649 45 8.89936 44.4486 4.84044 40.4668C0.67812 36.3836 6.89257e-10 28.7914 6.89257e-10 22.5C6.89257e-10 16.3649 0.465272 8.81322 4.44703 4.7543C8.53022 0.591977 16.2086 0 22.5 0C28.7914 0 36.4698 0.591977 40.553 4.7543C44.5347 8.81322 45 16.3649 45 22.5Z"
                  fill="#10B981"
                />
                <g clipPath="url(#clip0_40_46)">
                  <path
                    d="M23 11.297C16.37 11.297 11 16.67 11 23.297C11 28.6 14.438 33.097 19.205 34.682C19.805 34.795 20.025 34.424 20.025 34.105C20.025 33.82 20.015 33.065 20.01 32.065C16.672 32.789 15.968 30.455 15.968 30.455C15.422 29.07 14.633 28.7 14.633 28.7C13.546 27.956 14.717 27.971 14.717 27.971C15.922 28.055 16.555 29.207 16.555 29.207C17.625 31.042 19.364 30.512 20.05 30.205C20.158 29.429 20.467 28.9 20.81 28.6C18.145 28.3 15.344 27.268 15.344 22.67C15.344 21.36 15.809 20.29 16.579 19.45C16.444 19.147 16.039 17.927 16.684 16.274C16.684 16.274 17.689 15.952 19.984 17.504C20.944 17.237 21.964 17.105 22.984 17.099C24.004 17.105 25.024 17.237 25.984 17.504C28.264 15.952 29.269 16.274 29.269 16.274C29.914 17.927 29.509 19.147 29.389 19.45C30.154 20.29 30.619 21.36 30.619 22.67C30.619 27.28 27.814 28.295 25.144 28.59C25.564 28.95 25.954 29.686 25.954 30.81C25.954 32.416 25.939 33.706 25.939 34.096C25.939 34.411 26.149 34.786 26.764 34.666C31.565 33.092 35 28.592 35 23.297C35 16.67 29.627 11.297 23 11.297Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_40_46">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(11 11)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
          <li className="list-item flex">
            <a
              href="https://www.linkedin.com/in/chris-brett-ba7a4149"
              className="flex"
            >
              <svg
                className="icon"
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Peruse my LinkedIn account</title>
                <path
                  className="icon-squircle"
                  d="M45 22.5C45 28.7914 44.3219 36.3836 40.1596 40.4668C36.1006 44.4486 28.6351 45 22.5 45C16.3649 45 8.89936 44.4486 4.84044 40.4668C0.67812 36.3836 6.89257e-10 28.7914 6.89257e-10 22.5C6.89257e-10 16.3649 0.465272 8.81322 4.44703 4.7543C8.53022 0.591977 16.2086 0 22.5 0C28.7914 0 36.4698 0.591977 40.553 4.7543C44.5347 8.81322 45 16.3649 45 22.5Z"
                  fill="#10B981"
                />
                <g clipPath="url(#clip0_40_50)">
                  <path
                    d="M31.447 31.452H27.893V25.883C27.893 24.555 27.866 22.846 26.041 22.846C24.188 22.846 23.905 24.291 23.905 25.785V31.452H20.351V20H23.765V21.561H23.811C24.288 20.661 25.448 19.711 27.181 19.711C30.782 19.711 31.448 22.081 31.448 25.166V31.452H31.447ZM16.337 18.433C15.193 18.433 14.274 17.507 14.274 16.368C14.274 15.23 15.194 14.305 16.337 14.305C17.477 14.305 18.401 15.23 18.401 16.368C18.401 17.507 17.476 18.433 16.337 18.433ZM18.119 31.452H14.555V20H18.119V31.452ZM33.225 11H12.771C11.792 11 11 11.774 11 12.729V33.271C11 34.227 11.792 35 12.771 35H33.222C34.2 35 35 34.227 35 33.271V12.729C35 11.774 34.2 11 33.222 11H33.225Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_40_50">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(11 11)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
