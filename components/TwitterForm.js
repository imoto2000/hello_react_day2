import { useState } from "react";

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

import { useDispatch } from "react-redux";
import { create } from "@/store/tweet";

const TwitterForm = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(create({ text }));
    console.log(">>>>>>>> tweet created!");
  };

  return (
    <Container className="text-center" style={{ padding: "40px 0px" }}>
      <h3>ログイン</h3>
      <Row style={{ maxWidth: "400px", margin: "auto" }}>
        <Col>
          <Form onSubmit={onSubmit}>
            <FormGroup row>
              <Label sm={4}>Text</Label>
              <Col sm={8}>
                <Input
                  type="textarea"
                  value={text}
                  onChange={(ev) => setText(ev.target.value)}
                  name="text"
                  placeholder="text"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default TwitterForm;
