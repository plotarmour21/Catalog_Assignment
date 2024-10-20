import { FaGithub, FaLink } from "react-icons/fa";

const Dev = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" text-zinc py-6 ">
      <div className="container mx-auto flex flex-col items-center justify-center gap-5 md:flex-row">
        <div className="flex items-center space-x-4">
          <FaLink className="text-xl text-blue-400" />
          <a
            href="https://www.portfolio.sumith.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base font-medium hover:underline"
          >
            Sumith.dev
          </a>
        </div>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <FaGithub className="text-xl" />
          <a
            href="https://github.com/plotarmour21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base font-medium hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-2 pt-2">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Sumith. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
               Developed by Sumith
              </p>
            </div>
    </footer>
  );
};

export default Dev;
