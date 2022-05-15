// import { Button } from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import {
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Input,
  Button,
  Heading,
  Stack,
  Link,
  Checkbox,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { signIn } from "../utils/firebase/signIn";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    }),
    onSubmit: async (values) => {
      console.log(values);
      const user = await signIn(values.email, values.password);
      console.log(user);

      if (!user) return alert("Invalid Credentials");

      navigate("/dashboard");
    },
  });

  return (
    <>
      <Heading as="h2">Sign in to your account</Heading>
      <Text fontSize={"lg"} color={"gray.600"}>
        to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
      </Text>
      <Flex
        p={8}
        shadow="lg"
        direction="column"
        borderRadius="lg"
        minW="md"
        gap="2"
        borderWidth="1px"
        m="auto"
      >
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={4}>
            <FormControl
              isRequired
              isInvalid={!!formik.errors.email || undefined}
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                id="email"
                {...formik.getFieldProps("email")}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!!formik.errors.password || undefined}
            >
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                id="password"
                {...formik.getFieldProps("password")}
              />
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox
                  id="remember-me"
                  {...formik.getFieldProps("remember")}
                >
                  Remember me
                </Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
            </Stack>
            <Button
              type="submit"
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Sign in
            </Button>
          </Stack>
        </form>
      </Flex>
    </>
  );
}

export default Login;
