// components/Footer.tsx
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Лого */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png" // Путь к логотипу в public/
            alt="Логотип"
            width={48}
            height={48}
          />
        </div>

        {/* Слоган */}
        <div className="text-center">
          <p className="text-lg italic">
            &quot;Space AI – ваш щоденний дохід&quot;
          </p>
        </div>

        {/* Контакты */}
        <div className="text-right space-y-1">
          {/* <p>📞 +3 (067) 456-78-90</p> */}
          <p>📧 info@company.com</p>
          <p>📍 https://www.spaios.us/</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
