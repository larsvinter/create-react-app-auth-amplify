import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Formik } from "formik";
import schema from "./loanSchema";
import FormattedDate from "./FormattedDate";

function LoanForm() {
  return (
    <Formik
      validationSchema={schema}
      validateOnMount={true}
      initialValues={{
        lender: "",
        borrower: "",
        currency: "USD",
        duration: 36,
        interest: 2,
        amount: 100,
      }}
    >
      {({
        handleReset,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>Name of lender</Form.Label>
              <Form.Control
                name="lender"
                type="text"
                placeholder="First and last name"
                value={values.lender}
                isValid={touched.lender && !errors.lender}
                isInvalid={touched.lender && errors.lender}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Form.Text>{touched.lender && errors.lender}</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Name of borrower</Form.Label>
              <Form.Control
                type="text"
                name="borrower"
                placeholder="First and last name"
                value={values.borrower}
                isValid={touched.borrower && !errors.borrower}
                isInvalid={touched.borrower && errors.borrower}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Form.Text>{touched.borrower && errors.borrower}</Form.Text>
            </Form.Group>
            <Form.Row>
              <Col xs={7}>
                <Form.Group>
                  <Form.Label>Amount of loan</Form.Label>
                  <Form.Control
                    type="number"
                    name="amount"
                    value={values.amount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.amount && !errors.amount}
                    isInvalid={touched.amount && errors.amount}
                  ></Form.Control>
                  <Form.Text>{touched.amount && errors.amount}</Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Currency</Form.Label>
                  <Form.Control
                    name="currency"
                    as="select"
                    value={values.currency}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>DKK</option>
                    <option>SEK</option>
                    <option>NOK</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col xs={10}>
                <Form.Group>
                  <Form.Label>Duration</Form.Label>
                  <Form.Control
                    name="duration"
                    type="range"
                    min="1"
                    max="120"
                    step="1"
                    value={values.duration}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Form.Text>
                    <FormattedDate months={values.duration} />
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Annual Interest Rate</Form.Label>
                  <Form.Control
                    name="interest"
                    type="number"
                    step="0.1"
                    value={values.interest}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
          </Form>
          <Row>
            <Col sm>
              <Button block variant="secondary" onClick={handleReset}>
                Reset
              </Button>
            </Col>
            <Col sm>
              <Button block variant="primary" disabled={!isValid}>
                Get PDF
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
  );
}

export default LoanForm;
