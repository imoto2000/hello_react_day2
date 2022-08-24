import { useState } from "react";
import { useRouter } from "next/router";

import { auth } from "@/plugins/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useDispatch } from "react-redux";
import { login } from "@/store/account";
import { create } from "@/store/user";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  //Optional error handling
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    setError(null);

    if (passwordOne === passwordTwo) {
      createUserWithEmailAndPassword(auth, email, passwordOne)
        .then((user) => {
          console.log("Success. The user is created in firebase");

          updateProfile(auth.currentUser, {
            displayName: name,
          });

          dispatch(
            login({
              id: user.user.uid,
              name: name,
              email: user.user.email,
            })
          );

          dispatch(
            create({
              id: user.user.uid,
              name: name,
              email: user.user.email,
            })
          );

          router.push("/");
        })
        .catch((error) => {
          console.log(">>>>> error", error);
          setError(error.message);
        });
    } else {
      setError("Password do not match");
    }
  };

  return (
    <Container className="text-center" style={{ padding: "40px 0px" }}>
      <h3>アカウント作成</h3>
      <Row>
        <Col>
          <Form
            style={{ maxWidth: "400px", margin: "auto" }}
            onSubmit={onSubmit}
          >
            {error && <Alert color="danger">{error}</Alert>}

            <FormGroup row>
              <Label for="signUpName" sm={4}>
                Name
              </Label>
              <Col sm={8}>
                <Input
                  type="text"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  name="Name"
                  id="signUpName"
                  placeholder="Name"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="signUpEmail" sm={4}>
                Email
              </Label>
              <Col sm={8}>
                <Input
                  type="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  name="email"
                  id="signUpEmail"
                  placeholder="Email"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpPassword" sm={4}>
                Password
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="passwordOne"
                  value={passwordOne}
                  onChange={(ev) => setPasswordOne(ev.target.value)}
                  id="signUpPassword"
                  placeholder="Password"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="signUpPassword2" sm={4}>
                Confirm Password
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  value={passwordTwo}
                  onChange={(ev) => setPasswordTwo(ev.target.value)}
                  id="signUpPassword2"
                  placeholder="Password"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Button>Sign Up</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
