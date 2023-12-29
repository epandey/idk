import { NavLink } from 'react-router-dom';
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from 'react-icons/fa';
import { BiAnalyse, BiSearch } from 'react-icons/bi';
import { BiCog } from 'react-icons/bi';
import { AiFillHeart, AiTwotoneFileExclamation } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SidebarMenu from './SidebarMenu';
const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: <FaHome />,
  },
  {
    path: '/projects',
    name: 'Projects',
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: '/projects/addproject',
        name: 'Add Project',
        icon: <AiTwotoneFileExclamation />,
      },
      {
        path: '/projects/findproject',
        name: 'Find Project',
        icon: <AiTwotoneFileExclamation />,
        subsubRoutes: [
          {
            path: '/dashboard',
            name: 'Dashboard',
            icon: <FaHome />,
          },
        ],
      },
    ],
  },
  {
    path: '/users',
    name: 'Users',
    icon: <FaUser />,
    subRoutes: [
      {
        path: '/tools/vendors',
        name: 'Vendors',
        icon: <FaUser />,
      },
      {
        path: '/tools/subcontractors',
        name: 'Subcontractors',
        icon: <FaMoneyBill />,
      },
      {
        path: '/tools/profile',
        name: 'Customer ',
        icon: <FaUser />,
      },
    ],
  },
  {
    path: '/tools',
    name: 'Tools',
    icon: <BiCog />,
    exact: true,
    // subRoutes: [
    //   {
    //     path: '/tools/profile',
    //     name: 'Profile ',
    //     icon: <FaLock />,
    //   },
    //   {
    //     path: '/tools/vendors',
    //     name: 'Vendors',
    //     icon: <FaUser />,
    //   },
    //   {
    //     path: '/tools/subcontractors',
    //     name: 'Subcontractors',
    //     icon: <FaMoneyBill />,
    //   },
    // ],
  },
  {
    path: '/reports',
    name: 'Reports',
    icon: <BiAnalyse />,
  },

  {
    path: '/saved',
    name: 'Saved',
    icon: <AiFillHeart />,
  },

 
];
const routes1 = [
  {
    path: '/logout',
    name: 'Logout',
    icon: <BiLogOut />,
  },
]
const subsubRoutes=[
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: <FaHome />,
  },
]
const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  // const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: '140px',
      padding: '5px 15px',
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: 'auto',
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div 
          animate={{
            width: isOpen ? '200px' : '45px',

            transition: {
              duration: 0.5,
              type: 'spring',
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  MCS
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">{/* <FaBars onClick={toggle} /> */}</div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                    
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
                
              );
            })}
          </section>
          <section className="routes1">
            {routes1.map((route, index) => {
              
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                  style={{position:"fixed",bottom:15,width:100}}
                  
                >
                 
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
                
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
