import { Heading, HStack, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
	// Implement the UI for the Card component according to the instructions.
	// You should be able to implement the component with the elements imported above.
	// Feel free to import other UI components from Chakra UI if you wish to.
	return (
		<Box bg="white" borderRadius="lg">
			<VStack spacing="3">
				<Image
					src={imageSrc}
					alt="Green double couch with wooden legs"
					borderRadius="lg"
					width="100%"
				/>
				<Box padding="5" borderRadius="lg">
					<VStack spacing="3" alignItems="flex-start">
						<Heading color="black" size="md">
							{title}
						</Heading>
						<Text color="black">
							{description}
						</Text>
            <Link color="black" fontSize="sm" fontWeight="bold">See more  <FontAwesomeIcon icon={faArrowRight} ></FontAwesomeIcon></Link>
					</VStack>
				</Box>
			</VStack>
		</Box>
	);
};

export default Card;
