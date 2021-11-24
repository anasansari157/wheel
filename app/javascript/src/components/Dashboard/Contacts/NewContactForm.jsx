import React from "react";

import { Formik, Form } from "formik";
import { Toastr, Button } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";

import {
  CONTACT_FORM_INITIAL_VALUES,
  CONTACT_FORM_VALIDATION_SCHEMA,
  ROLE_DROPDOWN_VALUES,
} from "components/Dashboard/Contacts/constants";

export default function NewContactForm({ onClose }) {
  const handleSubmit = () => {
    onClose();
    Toastr.success("Contact Added successfully!");
  };

  return (
    <Formik
      initialValues={CONTACT_FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={CONTACT_FORM_VALIDATION_SCHEMA}
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
