import React from "react";

import { Formik, Form } from "formik";
import { Toastr, Button } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";

import { ROLE_DROPDOWN_VALUES } from "components/Dashboard/Contacts/constants";
import formInitialValues from "constants/formInitialValues";
import formValidationSchemas from "constants/formValidationSchemas";

export default function NewContactForm({ onClose }) {
  const handleSubmit = () => {
    onClose();
    Toastr.success("Contact Added successfully!");
  };

  return (
    <Formik
      initialValues={formInitialValues.newContactForm}
      onSubmit={handleSubmit}
      validationSchema={formValidationSchemas.newContactForm}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <div className="name-input-container flex space-x-3">
            <Input label="First Name" name="first_name" type="text" required />
            <Input label="Last Name" name="last_name" type="text" required />
          </div>

          <Input label="Email Address" name="email" type="email" required />

          <Select
            label="Role"
            name="role"
            options={ROLE_DROPDOWN_VALUES}
            placeholder={`Select role`}
            required
          />

          <div className="nui-pane__footer nui-pane__footer--absolute justify-start">
            <Button
              type="submit"
              label="Submit"
              size="large"
              style="primary"
              disabled={isSubmitting}
              loading={isSubmitting}
            />

            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="secondary"
              className="ml-2"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
