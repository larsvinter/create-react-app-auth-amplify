import React, { Component } from "react";
import FormComponent from "./FormComponent";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Formik } from "formik";
import * as yup from "yup";

function FormattedDate(props) {
  const formatted =
    ((props.months / 12) | 0) + " years and " + (props.months % 12) + " months";
  return <span>{formatted}</span>;
}

class LoanForm extends Component {
  state = {
    loansize: 0,
    maturity: 12,
  };

  formFieldUpdated = (a) => {
    // const newState = Object.assign(this.state, a);
    // this.setState(newState);
    // console.log(this.state);
    console.log(a);
  };

  formSaved = (a) => {
    alert(JSON.stringify(a));
  };

  render() {
    const schema = yup.object({
      lender: yup.string().required(),
      borrower: yup.string().required(),
      amount: yup.number().required(),
      currency: yup.string().required(),
      duration: yup.number().required(),
      interest: yup.number().required(),
    });

    return (
      <Formik
        validationSchema={schema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        initialValues={{
          currency: "EUR",
          duration: 36,
          interest: 2,
          lender: "Rasmus Vang",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <div>
            <Container>
              <Row>
                <Col>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formLenderName">
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
                      <Form.Text>
                        {errors.lender && touched.lender && errors.lender}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBorrowerName">
                      <Form.Label>Name of borrower</Form.Label>
                      <Form.Control
                        type="text"
                        name="borrower"
                        value={values.borrower}
                        placeholder="First and last name"
                        isValid={touched.borrower && !errors.borrower}
                        isInvalid={touched.borrower && errors.borrower}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Form.Text>
                        {errors.borrower && touched.borrower && errors.borrower}
                      </Form.Text>
                    </Form.Group>
                    <Form.Row>
                      <Col xs={7}>
                        <Form.Group controlId="formLoanAmount">
                          <Form.Label>Amount of loan</Form.Label>
                          <Form.Control
                            type="number"
                            name="amount"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.amount && !errors.amount}
                            isInvalid={touched.amount && errors.amount}
                          ></Form.Control>
                          <Form.Text>
                            {errors.amount && touched.amount && errors.amount}
                          </Form.Text>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="formCurrency">
                          <Form.Label>Currency</Form.Label>
                          <Form.Control
                            name="currency"
                            as="select"
                            value={values.currency}
                            onChange={handleChange}
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
                        <Form.Group controlId="formDuration">
                          <Form.Label>Duration</Form.Label>
                          <Form.Control
                            name="duration"
                            type="range"
                            min="1"
                            max="120"
                            step="1"
                            value={values.duration}
                            onChange={handleChange}
                          />
                          <Form.Text>
                            <FormattedDate months={values.duration} />
                          </Form.Text>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="FormInterestRate">
                          <Form.Label>Annual Interest Rate</Form.Label>
                          <Form.Control
                            name="interest"
                            type="number"
                            value={values.interest}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </Formik>
    );
  }
}

export default LoanForm;
