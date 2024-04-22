import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [style, setStyle] = React.useState(0);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    var oldScrollY = window.scrollY;
    const handleScroll = () => {
        if(oldScrollY < window.scrollY){
          setStyle(-200)
        } else {
          setStyle(0)
        }
        oldScrollY = window.scrollY;
    
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="sticky"
      top={style}
      left={0}
      right={0}
    /*   translateX={style}
      translateY={0}
      transitionProperty="transform"
      transitionDuration="1s"
      transitionTimingFunction="ease-in-out" */
      style={{'transition':"height 1s ease-in-out"}}
      backgroundColor="#18181b"
      zIndex={1000}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              {socials.map((socialIcon, index) => {
                return <a href={socialIcon.url}>
                    <FontAwesomeIcon icon={socialIcon.icon} size="2x"></FontAwesomeIcon>
                </a>
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a  onClick={handleClick("contactme")} style={{"cursor":"pointer"}}>Contact Me</a>
              <a  onClick={handleClick("projects")} style={{"cursor":"pointer"}}>Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
