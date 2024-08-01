function Footer() {
  return (
    <>
      <div className="w-full h-[24px] bg-[#FBD029]"></div>
      <div className="w-full pt-[73px] pb-[44px] bg-[#1F1D14] border-b border-[rgba(242,242,242,0.3)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
            {/* <Image src={logo} alt="logo" width={189} height={59} /> */}
            <div className="flex flex-col items-center lg:items-start gap-5">
              <p className="text-[18px] font-bold text-white">Контакты</p>
              <p className="text-white flex items-center gap-2">
                <i className="bi bi-telephone text-white"></i>+998 (90)
                565-85-85
              </p>
              <p className="text-white flex items-center gap-2">
                <i className="bi bi-envelope text-white"></i>info@gmail.com
              </p>
            </div>
            <p className="text-white flex items-center lg:items-start gap-2 text-center lg:text-left">
              <i className="bi bi-geo-alt text-white"></i>
              <span>
                Tashkent Sh. Chilonzor 9 kvartal <br /> 12 uy
              </span>
            </p>
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-[18px] font-bold text-white">Подписатся</p>
              <form
                action="#"
                className="flex flex-col items-center lg:items-start gap-4 pt-4"
              >
                <input
                  type="text"
                  className="w-full sm:w-[235px] py-2 px-4 bg-white rounded-sm outline-none text-[#9A9EA5] placeholder:text-[#9A9EA5]"
                  placeholder="support@figma.com"
                />
                <button className="w-full sm:w-[235px] py-2 px-4 bg-[#FBD029] rounded-sm text-center">
                  Отправить
                </button>
              </form>
              <div className="flex items-center gap-5 pt-10">
                <i className="bi text-white text-[34px] bi-instagram"></i>
                <i className="bi text-white text-[34px] bi-facebook"></i>
                <i className="bi text-white text-[34px] bi-telegram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-[22px] bg-[#1F1D14] border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-[13px] font-light text-white">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
          <p className="text-[13px] font-light text-white flex flex-col lg:flex-row items-center gap-2 lg:gap-10 text-center lg:text-left">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Sales and Refunds</span>
            <span>Legal</span>
            <span>Site Map</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
