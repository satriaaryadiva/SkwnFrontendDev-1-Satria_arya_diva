export default function Features() {
  const data = [
    {
      id: 1,
      title: "Manufactured with quality materials",
      svg: (
        <div className="min-w-[40px] min-h-[40px]">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#E5F0B6" fillOpacity="0.5" />
            <g clipPath="url(#clip0_1)">
              <path
                d="M23.5 22H22.71L22.43 21.73C23.63 20.33 24.25 18.42 23.91 16.39C23.44 13.61 21.12 11.39 18.32 11.05C14.09 10.53 10.53 14.09 11.05 18.32C11.39 21.12 13.61 23.44 16.39 23.91C18.42 24.25 20.33 23.63 21.73 22.43L22 22.71V23.5L26.25 27.75C26.66 28.16 27.33 28.16 27.74 27.75C28.15 27.34 28.15 26.67 27.74 26.26L23.5 22ZM17.5 22C15.01 22 13 19.99 13 17.5C13 15.01 15.01 13 17.5 13C19.99 13 22 15.01 22 17.5C22 19.99 19.99 22 17.5 22Z"
                fill="#F4F4F4"
              />
            </g>
            <defs>
              <clipPath id="clip0_1">
                <rect width="24" height="24" fill="white" transform="translate(8 8)" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
    },
    {
      id: 2,
      title: "5 YEARS OF WARRANTY FOR EACH PRODUCT",
      svg: (
        <div className="min-w-[40px] min-h-[40px]">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#E5F0B6" fillOpacity="0.5" />
            <path
              d="M20.0554 29.2386C18.8509 29.2386 17.777 29.017 16.8338 28.5739C15.8963 28.1307 15.152 27.5199 14.6009 26.7415C14.0497 25.9631 13.7628 25.071 13.7401 24.0653H17.3196C17.3594 24.7415 17.6435 25.2898 18.1719 25.7102C18.7003 26.1307 19.3281 26.3409 20.0554 26.3409C20.6349 26.3409 21.1463 26.2131 21.5895 25.9574C22.0384 25.696 22.3878 25.3352 22.6378 24.875C22.8935 24.4091 23.0213 23.875 23.0213 23.2727C23.0213 22.6591 22.8906 22.1193 22.6293 21.6534C22.3736 21.1875 22.0185 20.8239 21.5639 20.5625C21.1094 20.3011 20.5895 20.1676 20.0043 20.1619C19.4929 20.1619 18.9957 20.267 18.5128 20.4773C18.0355 20.6875 17.6634 20.9744 17.3963 21.3381L14.1151 20.75L14.9418 11.5455H25.6122V14.5625H17.9844L17.5327 18.9347H17.6349C17.9418 18.5028 18.4048 18.1449 19.0241 17.8608C19.6435 17.5767 20.3366 17.4347 21.1037 17.4347C22.1548 17.4347 23.0923 17.6818 23.9162 18.1761C24.7401 18.6705 25.3906 19.3494 25.8679 20.2131C26.3452 21.071 26.581 22.0597 26.5753 23.179C26.581 24.3551 26.3082 25.4006 25.7571 26.3153C25.2116 27.2244 24.4474 27.9403 23.4645 28.4631C22.4872 28.9801 21.3509 29.2386 20.0554 29.2386Z"
              fill="white"
            />
          </svg>
        </div>
      ),
    },
    {
      id: 3,
      title: "20 YEARS OF EXPERIENCE",
      svg: (
        <div className="min-w-[40px] min-h-[40px]">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#E5F0B6" fillOpacity="0.5" />
            <g clipPath="url(#clip0_3)">
              <path
                d="M22 14V12H18V14H22ZM12 17V26C12 26.55 12.45 27 13 27H27C27.55 27 28 26.55 28 26V17C28 16.45 27.55 16 27 16H13C12.45 16 12 16.45 12 17ZM28 14C29.11 14 30 14.89 30 16V27C30 28.11 29.11 29 28 29H12C10.89 29 10 28.11 10 27L10.01 16C10.01 14.89 10.89 14 12 14H16V12C16 10.89 16.89 10 18 10H22C23.11 10 24 10.89 24 12V14H28Z"
                fill="#F4F4F4"
              />
            </g>
            <defs>
              <clipPath id="clip0_3">
                <rect width="24" height="24" fill="white" transform="translate(8 8)" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-[#2F241F] flex flex-col justify-center md:py-[72px] md:h-[486px] w-full min-h-96 px-6 py-8 md:px-[142px] text-white">
      <div className="w-80 justify-center">
        <h1 className="text-sm/5 md:text-2xl text-[#E5F0B6] mb-4 md:text-left text-center">WHY CHOOSE US?</h1>
      </div>
      <h2 className="text-2xl md:text-[64px] md:text-left font-bold text-center">
        We care about details and the quality of our products
      </h2>
      <div className="flex flex-col w-full md:flex-row md:justify-around text-[#E5F0B6] mt-6 gap-6 md:gap-16">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 text-sm/5 md:text-2xl/[36px] font-bold uppercase md:text-left text-center"
          >
            {item.svg}
            <span className="max-w-[240px] text-left">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
