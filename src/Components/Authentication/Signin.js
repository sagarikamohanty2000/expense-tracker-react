import React from "react";
import classes from "./Signin.module.css";
import { Form, Button } from "react-bootstrap";

const Signin = () => {
  return (
    <>
    <div className={classes.frame}>
      <h2 className={classes.signUpLabel}>SignUp</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className={classes.emailLabel}
            type="email"
            placeholder="Email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className={classes.pswdLabel}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className={classes.cnfrmPswd}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>

        <Button className={classes.submBtn} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    <Button className={classes.loginBtn} variant="primary" type="submit">
    Have an account? Login
  </Button>
  </>
  );
};

export default Signin;
