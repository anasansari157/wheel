import React from "react";

import { Formik, Form } from "formik";
// import { Button } from "neetoui";
import { Input, Textarea } from "neetoui/formik";
import { Dropdown, Label, Toastr, Button } from "neetoui/v2";
import * as yup from "yup";

import { CONTACTS } from "constants/notes";

export default function NewNoteForm({ onClose }) {
  const handleSubmit = () => {
    onClose();
    Toastr.success("Note Added successfully!");
  };

  const Dropdowns = () => (
    <>
      <Label className="mb-1 neeto-ui-text-black">Contacts</Label>
      <div className="contacts-dropdown">
        <Dropdown
          buttonStyle="text"
          label="Select Role"
          position="bottom-end"
          className="m-1"
          name="contacts"
        >
          <li>{CONTACTS[0]}</li>
        </Dropdown>
      </div>

      <Label className="mb-1 mt-4 neeto-ui-text-black">Tags</Label>
      <div className="contacts-dropdown">
        <Dropdown
          buttonStyle="text"
          label="Select Role"
          position="bottom-end"
          className="m-1"
          name="tags"
        >
          <li>{CONTACTS[0]}</li>
        </Dropdown>
      </div>
    </>
  );
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        title: yup.string().required("Title is required"),
        description: yup.string().required("Description is required"),
      })}
    >
      {({ isSubmitting }) => (
        <Form>
          <Input label="Title" name="title" className="mb-6" />
          <Textarea
            label="Description"
            name="description"
            rows={1}
            className="mb-6"
          />
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
