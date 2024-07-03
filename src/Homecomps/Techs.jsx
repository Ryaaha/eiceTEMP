import React, { useState } from 'react';
import { FaApple, FaAndroid, FaReact } from 'react-icons/fa';
import { IoMdReturnLeft } from 'react-icons/io';
import { SiFlutter, SiIonic, SiSwift, SiKotlin, SiApple} from 'react-icons/si';
import { useHref } from 'react-router-dom';

const categories = [
  { name: "Mobile", id: "mobile" },
  { name: "Front End", id: "frontend" },
  { name: "Database", id: "database" },
  { name: "Backend", id: "backend" },
  { name: "CMS", id: "cms" },
  { name: "Infra and DevOps", id: "devops" }
];

const iconComponents = {
    "apple-icon": FaApple,
    "android-icon": FaAndroid,
    "react-icon": FaReact,
    "flutter-icon": SiFlutter,
    "ionic-icon": SiIonic,
    "swift-icon": SiSwift,
    "kotlin-icon": SiKotlin,
    "objectivec-icon": SiApple,
    
  };

const technologies = {
  mobile: [
    { name: "iOS", icon: "apple-icon", link: "" },
    { name: "Android", icon: "android-icon", link: "" },
    { name: "React Native", icon: "react-icon", link: "" },
    { name: "Flutter", icon: "flutter-icon", link: "" },
    { name: "Ionic", icon: "ionic-icon", link: "" },
    { name: "Swift", icon: "swift-icon", link: "" },
    { name: "Kotlin", icon: "kotlin-icon", link: "" },
    { name: "ObjectiveC", icon: "objectivec-icon", link: "" },
    
  ],
  frontend: [],
  database: [],
  backend: [],
  cms: [],
  devops: []
};



const Technology = ({ name, icon, link }) => {
    
    let linkk = useHref(link);

    const IconComponent = iconComponents[icon];

    return (
        <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="overflow-hidden flex flex-col gap-2 items-center p-3">
            <a href={linkk} className="group cursor-pointer mb-2">
                <IconComponent size={60} className="text-blackk group-hover:text-bloo transition duration-300"/>
            </a>
            <span className="text-sm text-center">{name}</span>
            </div>
        </div>
    )
};

function Techs() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <div className='bg-zinc-50 py-20'>
    <div className="container mx-auto px-4 py-8 font-manrope">
      <header className="text-center mb-12">
        <h1 className="text-bloo font-bold text-xl sm:text-2xl lg:text-3xl text-center mb-2 py-2">Technologies we work with</h1>
        <h1 className="text-blackk font-extrabold text-2xl sm:text-3xl lg:text-4xl text-center mb-12 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
      </header>

      <nav className="mb-12">
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => (
            <li key={category.id} className=''>
              <button
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition ${
                  activeCategory === category.id
                    ? "bg-bloo text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="container mx-auto px-4 pt-4 lg:max-w-7xl w:screen">
        {categories.map((category) => (
          <section
            key={category.id}
            className={`${activeCategory === category.id ? "block" : "hidden"}`}
          >
            <div className="relative ">
              <div className="flex items-center justify-center">
                <div 
                    className="items-center justify-center flex flex-wrap"
                    // className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                >
                    
                  {technologies[category.id].map((tech, index) => (
                    <Technology
                      key={index}
                      name={tech.name}
                      icon={tech.icon}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
    </div>
  );
}

export default Techs;