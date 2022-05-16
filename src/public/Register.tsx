import * as Yup from "yup";

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { setUser } from "../common/state/user";
import { signUp } from "../common/utils/firebase/signUp";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().min(6).required("Password is required"),
      confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf(
          [Yup.ref("password")],
          "Confirm password must match new password"
        ),
    }),
    onSubmit: async (values) => {
      try {
        const user = await signUp(values.email, values.password);

        if (user !== null) {
          localStorage.setItem("token", JSON.stringify(user));

          dispatch(setUser(user));
          navigate("/dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <Heading as="h2">Sign up</Heading>
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
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...formik.getFieldProps("password")}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!!formik.errors.confirmPassword || undefined}
            >
              <FormLabel htmlFor="confirmPassword ">
                Confirm Password{" "}
              </FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  {...formik.getFieldProps("confirmPassword")}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {formik.errors.confirmPassword}
              </FormErrorMessage>
            </FormControl>

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

export default Register;
