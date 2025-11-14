import type { Route } from "./+types/home";
import Container from "~/components/Container";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const bannerImages = [
    "/img/home/banner-img-1.webp",
    "/img/home/banner-img-2.webp",
    "/img/home/banner-img-3.webp",
  ];
  return (
    <section
      className="xl:pt-[140px] md:pt-[120px] pt-[200px] md:pb-[60px] pb-10 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, #0009, #0009), url(${bannerImages[0]})`,
      }}
    >
      <Container>
        <div className="max-w-[800px] flex flex-col xl:gap-8 md:gap-7 gap-5 lg:mb-20 md:mb-[50px]">
          <h1 className="xl:text-[80px] md:text-[70px] text-[36px] leading-[100%] text-white font-semibold">
            Whatever you're into, there's a trip waiting.
          </h1>
          <p className="text-white md:text-xl text-lg leading-[120%] font-medium max-w-[410px]">
            Make this summer count. Dive in, slow down, and fall in love with
            travel all over again.
          </p>
          <div className="flex sm:flex-row flex-col gap-3 items-center">
            <a
              href="#"
              className="text-[#2e2e38] bg-white border-2 border-white px-3.5 py-2 rounded-full text-sm font-semibold transition-all ease-in-out duration-300 leading-[120%] transform hover:scale-95 sm:w-auto w-full text-center"
            >
              Book a Packages
            </a>
            <a
              href="#"
              className="text-white bg-transparent border-2 border-white px-3.5 py-2 rounded-full text-sm font-semibold transition-all ease-in-out duration-300 leading-[120%] transform hover:scale-95 sm:w-auto w-full text-center"
            >
              Discover Destination
            </a>
          </div>
        </div>
        <div className="h-[260px] w-full items-end md:flex hidden">
          <div className="flex gap-2 items-center">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1067_64)">
                <path
                  d="M9 15.55C8.48619 15.55 7.98954 15.3618 7.60148 15.02C5.76042 13.3984 2.67188 10.1779 2.67188 6.82812C2.67188 3.3388 5.51067 0.5 9 0.5C12.4893 0.5 15.3281 3.3388 15.3281 6.82812C15.3281 10.1779 12.2395 13.3984 10.3985 15.02C10.0105 15.3618 9.51381 15.55 9 15.55ZM9 1.90625C6.28608 1.90625 4.07812 4.1142 4.07812 6.82812C4.07812 9.7295 7.19213 12.7855 8.53095 13.9647C8.66204 14.0802 8.82861 14.1438 9 14.1438C9.17139 14.1438 9.33796 14.0802 9.46902 13.9647C10.8079 12.7855 13.9219 9.7295 13.9219 6.82812C13.9219 4.1142 11.7139 1.90625 9 1.90625Z"
                  fill="white"
                  fill-opacity="0.5"
                ></path>
                <path
                  d="M9 18.5C7.05533 18.5 5.21789 18.27 3.82613 17.8525C3.107 17.6368 2.53118 17.3776 2.11454 17.0821C1.41289 16.5844 1.26562 16.049 1.26562 15.6875C1.26562 15.3037 1.43096 14.7379 2.21861 14.222C2.6885 13.9141 3.33506 13.6488 4.14035 13.4334C4.5154 13.3331 4.90096 13.5558 5.00129 13.9309C5.10163 14.3061 4.87891 14.6915 4.50376 14.7919C3.13189 15.1589 2.72401 15.5744 2.67465 15.6875C2.72257 15.7966 3.11164 16.1971 4.41376 16.5586C5.65696 16.9037 7.28571 17.0937 9 17.0937C10.7143 17.0937 12.343 16.9037 13.5862 16.5586C14.8884 16.197 15.2774 15.7966 15.3253 15.6875C15.276 15.5744 14.8681 15.1589 13.4962 14.7919C13.1211 14.6915 12.8984 14.3061 12.9987 13.9309C13.0991 13.5558 13.4844 13.333 13.8597 13.4334C14.6649 13.6488 15.3115 13.9142 15.7814 14.222C16.569 14.7379 16.7344 15.3037 16.7344 15.6875C16.7344 16.049 16.5871 16.5844 15.8855 17.0821C15.4689 17.3776 14.893 17.6368 14.1739 17.8525C12.7821 18.27 10.9446 18.5 9 18.5Z"
                  fill="white"
                  fill-opacity="0.5"
                ></path>
                <path
                  d="M9 9.64062C7.44919 9.64062 6.1875 8.37894 6.1875 6.82812C6.1875 5.27731 7.44919 4.01562 9 4.01562C10.5508 4.01562 11.8125 5.27731 11.8125 6.82812C11.8125 8.37894 10.5508 9.64062 9 9.64062ZM9 5.42188C8.22459 5.42188 7.59375 6.05272 7.59375 6.82812C7.59375 7.60353 8.22459 8.23438 9 8.23438C9.77541 8.23438 10.4062 7.60353 10.4062 6.82812C10.4062 6.05272 9.77541 5.42188 9 5.42188Z"
                  fill="white"
                  fill-opacity="0.5"
                ></path>
              </g>
            </svg>
            <p className="text-base font-semibold text-white leading-[120%]">
              Mount Batur - Kintamani region of North-East Bali, Indonesia
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
