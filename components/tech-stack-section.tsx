import backendIcon from "../images/backend.png";
import frontendIcon from "../images/frontend.png";
import mobileIcon from "../images/mobile.png";
import blockchainIcon from "../images/blockchain.png";
import devopsIcon from "../images/devops.png";
import ecommerceIcon from "../images/ecomerce.png";

const technologies = [
  {
    name: "Backend Development",
    iconImg: backendIcon,
    iconStyle: {
      width: 48,
      height: 47.111114501953125,
      opacity: 1,
      position: "relative",
      top: 0,
      left: 0,
      transform: "rotate(0deg)",
    },
    techs: [
      ".NET",
      "C/C++",
      "DJANGO",
      "Firebase",
      "GOLANG",
      "SYMFONY",
      "LARAVEL",
      "NODE",
      "PHP",
      "PYTHON",
      "RUBY ON RAILS",
      "JAVA",
    ],
    bgColor: "bg-blue-50",
    borderColor: "border-b-4 border-blue-400",
  },
  {
    name: "Fronted Development",
    iconImg: frontendIcon,
    iconStyle: {
      width: 48,
      height: 47.111114501953125,
      opacity: 1,
      position: "relative",
      top: 0,
      left: 0,
      transform: "rotate(0deg)",
    },
    techs: [
      ".NET",
      "C/C++",
      "DJANGO",
      "Firebase",
      "GOLANG",
      "SYMFONY",
      "LARAVEL",
      "NODE",
      "PHP",
      "PYTHON",
      "RUBY ON RAILS",
      "JAVA",
    ],
    bgColor: "bg-orange-50",
    borderColor: "border-b-4 border-orange-400",
  },
  {
    name: "Mobile Development",
    iconImg: mobileIcon,
    iconStyle: {
      width: 56,
      height: 54.96295166015625,
      opacity: 1,
      position: "relative",
      top: 0,
      left: 0,
      transform: "rotate(0deg)",
    },
    techs: [
      ".NET",
      "C/C++",
      "DJANGO",
      "Firebase",
      "GOLANG",
      "SYMFONY",
      "LARAVEL",
      "NODE",
      "PHP",
      "PYTHON",
      "RUBY ON RAILS",
      "JAVA",
    ],
    bgColor: "bg-purple-50",
    borderColor: "border-b-4 border-purple-400",
  },
  {
    name: "Blockchain, AI/ML",
    iconImg: blockchainIcon,
    iconStyle: {
      width: 48,
      height: 47.111114501953125,
      opacity: 1,
      position: "relative",
      top: 0,
      left: 0,
      transform: "rotate(0deg)",
    },
    techs: [
      ".NET",
      "C/C++",
      "DJANGO",
      "Firebase",
      "GOLANG",
      "SYMFONY",
      "LARAVEL",
      "NODE",
      "PHP",
      "PYTHON",
      "RUBY ON RAILS",
      "JAVA",
    ],
    bgColor: "bg-cyan-50",
    borderColor: "border-b-4 border-cyan-400",
  },
  {
    name: "DevOps & Low-Code",
    iconImg: devopsIcon,
    iconStyle: {
      width: 48,
      height: 47.111114501953125,
      opacity: 1,
      position: "relative",
      top: 0,
      left: 0,
      transform: "rotate(0deg)",
    },
    techs: [
      ".NET",
      "C/C++",
      "DJANGO",
      "Firebase",
      "GOLANG",
      "SYMFONY",
      "LARAVEL",
      "NODE",
      "PHP",
      "PYTHON",
      "RUBY ON RAILS",
      "JAVA",
    ],
    bgColor: "bg-yellow-50",
    borderColor: "border-b-4 border-orange-400",
  },
  {
    name: "E-commerce & CMS",
    iconImg: ecommerceIcon,
    iconStyle: {
      width: 56,
      height: 54.96295166015625,
      opacity: 1,
      position: "relative",
      top: 0,
      left: 0,
      transform: "rotate(0deg)",
    },
    techs: [
      ".NET",
      "C/C++",
      "DJANGO",
      "Firebase",
      "GOLANG",
      "SYMFONY",
      "LARAVEL",
      "NODE",
      "PHP",
      "PYTHON",
      "RUBY ON RAILS",
      "JAVA",
    ],
    bgColor: "bg-pink-50",
    borderColor: "border-b-4 border-pink-400",
  },
]

export default function TechStackSection() {
  return (
    <section className="bg-pink-50 py-16 md:py-24 relative">
      <div className="absolute top-8 left-8 text-gray-400 text-4xl opacity-50">↗</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Diverse Technology Competency</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The
            Industry's Standard Dummy Text Ever Since
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className={`${tech.bgColor} ${tech.borderColor} p-8 rounded-lg transition-transform hover:shadow-lg`}
            >
              <div className="text-4xl mb-4">
                {tech.iconImg && (
                  <img
                    src={typeof tech.iconImg === "string" ? tech.iconImg : (tech.iconImg?.src ?? "")}
                    alt={tech.name + " icon"}
                    style={tech.iconStyle as React.CSSProperties}
                  />
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">{tech.name}</h3>

              <div className="flex flex-wrap gap-2">
                {tech.techs.map((t) => (
                  <span key={t} className="text-xs font-semibold text-gray-700 px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
