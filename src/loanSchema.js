import * as yup from "yup";

const schema = yup.object({
  lender: yup.string().required("You must specify the full name of the lender"),
  borrower: yup.string().required(),
  amount: yup.number().required(),
  currency: yup.string().required(),
  duration: yup.number().required(),
  interest: yup.number().required(),
});

export default schema;
