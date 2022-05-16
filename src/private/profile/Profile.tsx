import * as Yup from "yup";

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

// import { useSelector } from "react-redux";
import { useFormik } from "formik";

// import { useEffect } from "react";

export const Profile = () => {
  // const user = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      email: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
      currentPassword: Yup.string()
        .min(6)
        .required("Current password is required"),
      newPassword: Yup.string().min(6).required("New password is required"),
      confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf(
          [Yup.ref("newPassword")],
          "Confirm password must match new password"
        ),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  return (
    <>
      <Heading as="h2" mb={4} size="lg">
        Profile
      </Heading>

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
        <form>
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
              isInvalid={!!formik.errors.currentPassword || undefined}
            >
              <FormLabel htmlFor="currentPassword">Current Password</FormLabel>
              <Input
                type="password"
                id="currentPassword"
                {...formik.getFieldProps("currentPassword")}
              />
              <FormErrorMessage>
                {formik.errors.currentPassword}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!!formik.errors.newPassword || undefined}
            >
              <FormLabel htmlFor="newPassword">New Password</FormLabel>
              <Input
                type="password"
                id="newPassword"
                {...formik.getFieldProps("newPassword")}
              />
              <FormErrorMessage>{formik.errors.newPassword}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={!!formik.errors.confirmPassword || undefined}
            >
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <Input
                type="password"
                id="confirmPassword"
                {...formik.getFieldProps("confirmPassword")}
              />
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
              Save
            </Button>
          </Stack>
        </form>
      </Flex>
    </>
  );
};
