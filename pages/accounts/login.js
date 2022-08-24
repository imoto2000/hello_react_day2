import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { auth } from "@/plugins/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { login } from "@/store/account";

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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    setError(null);

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        dispatch(
          login({
            id: user.user.uid,
            email: user.user.email,
            name: user.user.displayName,
          })
        );
        router.push("/");
      })
      .catch((err) => {
        console.log(">>>>>> auth login error", err);
      });
  };

  return (
    <Container className="text-center" style={{ padding: "40px 0px" }}>
      <h3>ログイン</h3>
      <Row style={{ maxWidth: "400px", margin: "auto" }}>
        <Col>
          <Form onSubmit={onSubmit}>
            {error && <Alert color="danger">{error}</Alert>}
            <FormGroup row>
              <Label for="loginEmail" sm={4}>
                Email
              </Label>
              <Col sm={8}>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  id="loginEmail"
                  placeholder="Email"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="loginPassword" sm={4}>
                Password
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="loginPassword"
                  placeholder="Password"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Button>Login</Button>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                No account? <Link href="/sign_up">Create one</Link>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
