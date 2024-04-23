const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-3 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm">
            &copy; 2024 Covid-19 Map. All rights reserved.
          </p>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
