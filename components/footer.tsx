export default function Footer() {
  return (
    <footer className="absolute bottom-0 my-5 w-full">
      <div className="hidden md:grid md:grid-cols-3">
        <div className="text-center">
          <a href="tel:+6282219738846">
            <i className="bg-white rounded-full text-black text-2xl p-2 mx-2 fas fa-phone"></i>
          </a>
          <a href="https://wa.me/6282219738846">
            <i className="bg-white rounded-full text-black text-2xl p-2 mx-2 fab fa-whatsapp"></i>
          </a>
          <a href="https://linkedin/in/husinzz">
            <i className="bg-white rounded-full text-black text-2xl p-2 mx-2 fab fa-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/channel/UC2kAQEKEYzDF9CuP1qr5AUw">
            <i className="bg-white rounded-full text-black text-2xl p-2 mx-2 fab fa-youtube"></i>
          </a>
        </div>
        <div className="">
          <p className="text-white text-center">Made with code</p>
        </div>
        <div className="text-white text-center">
          Copyright © 2021 Artorios "Beaver" Fart
        </div>
      </div>
      <div className="block md:hidden">
        <div className="text-center">
          <a href="tel:+6282219738846">
            <i className="bg-white rounded-full text-black text-3xl p-3 mx-5 fas fa-phone"></i>
          </a>
          <a href="https://wa.me/6282219738846">
            <i className="bg-white rounded-full text-black text-3xl p-3 mx-5 fab fa-whatsapp"></i>
          </a>
          <a href="https://linkedin/in/husinzz">
            <i className="bg-white rounded-full text-black text-3xl p-3 mx-5 fab fa-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/channel/UC2kAQEKEYzDF9CuP1qr5AUw">
            <i className="bg-white rounded-full text-black text-3xl p-3 mx-5 fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
