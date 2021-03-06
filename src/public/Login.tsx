import * as Yup from "yup";

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import { signIn } from "../common/utils/firebase/signIn";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

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
      const user = await signIn(values.email, values.password);

      if (!user) return alert("Invalid Credentials");

      localStorage.setItem("token", JSON.stringify(user));

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
              bg={"gray.900"}
              color={"white"}
              _hover={{
                bg: "gray.700",
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
