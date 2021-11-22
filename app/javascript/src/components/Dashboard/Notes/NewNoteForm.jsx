import React from "react";

import { Formik, Form } from "formik";
import { Input, Textarea } from "neetoui/formik";
import { Toastr, Button } from "neetoui/v2";
import { Select } from "neetoui/v2/formik";
import * as yup from "yup";

import {
  CONTACTS_DROPDOWN_VALUES,
  TAGS_DROPDOWN_VALUES,
} from "constants/notes";

export default function NewNoteForm({ onClose }) {
  const handleSubmit = () => {
    onClose();
    Toastr.success("Note Added successfully!");
  };

  const Dropdowns = () => {
    const createDrowpdown = (label, name, options) => (
      <div className="mb-6">
        <Select
          label={label}
          name={name}
          options={options}
          placeholder={`Select ${name}`}
          required
        />
      </div>
    );
    return (
      <>
        {createDrowpdown(
          "Assigned Contact",
          "contacts",
          CONTACTS_DROPDOWN_VALUES
        )}
        {createDrowpdown("Tags", "tags", TAGS_DROPDOWN_VALUES)}
      </>
    );
  };

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        contacts: "",
        tags: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        title: yup.string().required("Title is required"),
        description: yup.string().required("Description is required"),
        contacts: yup.object().required("Contact is required"),
        tags: yup.object().required("Tags are required"),
      })}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <Input label="Title" name="title" required />
          <Textarea label="Description" name="description" rows={1} required />

          <Dropdowns />

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
