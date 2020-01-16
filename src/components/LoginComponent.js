import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input, AppBar, Typography, TextField } from "@material-ui/core";
import * as passwordHash from "password-hash";
import * as adminUser from "../authorization/admin.json";

const LoginComponent = () => {
  //console.log(adminUser.default.adminLogin);
  return (
    <div>
      <AppBar position="static" style={{ marginBottom: "10vw" }}>
        <Typography variant="h6">Login</Typography>
      </AppBar>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log(values);
            if (
              values.email === adminUser.default.adminLogin.Email &&
              passwordHash.verify(
                values.password,
                adminUser.default.adminLogin.Password
              ) === true
            ) {
              alert("Succesful Admin Login");
            } else {
              alert("failed Login");
            }
            resetForm();
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginComponent;
