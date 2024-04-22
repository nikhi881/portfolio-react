import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Select,
	Textarea,
	VStack,
	Spinner,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
	const { isLoading, response, submit } = useSubmit();
	const { onOpen } = useAlertContext();
	const formik = useFormik({
		initialValues: {
			firstName: "",
			email: "",
			comment: "",
		},
		validationSchema: Yup.object({
			firstName: Yup.string().required("Required"),
			email: Yup.string().email("Invalid email").required("Required"),
			comment: Yup.string()
				.min(25, "Must be at least 25 characters")
				.required("Required"),
		}),
		onSubmit: async (values) => {
			await submit("", values);
			// if(!isLoading)
			console.log("response-2",response)
			onOpen(response.type, response.message);
		},
	});

	return (
		<FullScreenSection
			isDarkBackground
			backgroundColor="#512DA8"
			py={16}
			spacing={8}
		>
			<VStack w="1024px" p={32} alignItems="flex-start">
				<Heading as="h1" id="contactme-section">
					Contact me
				</Heading>
				<Box p={6} rounded="md" w="100%">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							formik.handleSubmit(e);
						}}
					>
						<VStack spacing={4}>
							<FormControl
								isInvalid={
									formik.touched.firstName && formik.errors.firstName
										? true
										: false
								}
							>
								<FormLabel htmlFor="firstName">Name</FormLabel>
								<Input
									id="firstName"
									type="text"
									{...formik.getFieldProps("firstName")}
								/>
								{formik.touched.firstName && formik.errors.firstName ? (
									<FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
								) : null}
							</FormControl>
							<FormControl
								isInvalid={
									formik.touched.email && formik.errors.email ? true : false
								}
							>
								<FormLabel htmlFor="email">Email Address</FormLabel>
								<Input
									id="email"
									type="email"
									{...formik.getFieldProps("email")}
								/>
								{formik.touched.email && formik.errors.email ? (
									<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
								) : null}
							</FormControl>
							<FormControl>
								<FormLabel htmlFor="type">Type of enquiry</FormLabel>
								<Select id="type" name="type">
									<option value="hireMe">Freelance project proposal</option>
									<option value="openSource">
										Open source consultancy session
									</option>
									<option value="other">Other</option>
								</Select>
							</FormControl>
							<FormControl
								isInvalid={
									formik.touched.comment && formik.errors.comment ? true : false
								}
							>
								<FormLabel htmlFor="comment">Your message</FormLabel>
								<Textarea
									id="comment"
									height={250}
									{...formik.getFieldProps("comment")}
								/>
								{formik.touched.comment && formik.errors.comment ? (
									<FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
								) : null}
							</FormControl>
							<Button
								type="submit"
								colorScheme="purple"
								width="full"
								disabled={isLoading}
							>
								{isLoading ? (
									<Spinner
										thickness="4px"
										speed="0.65s"
										emptyColor="gray.200"
										color="blue.500"
										size="md"
									/>
								) : (
									"Submit"
								)}
							</Button>
						</VStack>
					</form>
				</Box>
			</VStack>
		</FullScreenSection>
	);
};

export default LandingSection;
