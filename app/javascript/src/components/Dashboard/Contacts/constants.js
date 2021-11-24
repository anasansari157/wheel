import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Avatar, Typography } from "neetoui/v2";
import * as Yup from "yup";

export const CONTACTS = [
  {
    name: "John Doe",
    role: "CEO",
    email: "john.doe@email.com",
    created_at: "2019-01-01",
  },
  {
    name: "Zathin",
    role: "Manager",
    email: "tmunfordr@aboutads.info",
    created_at: "2018-01-01",
  },
  {
    name: "Zacharius",
    role: "Co-Founder",
    email: "cofouneder@aboutads.info",
    created_at: "2018-01-01",
  },
  {
    name: "Nikea",
    role: "Brand Manager",
    email: "nikea@aboutads.info",
    created_at: "2001-01-01",
  },
  {
    name: "Lury",
    role: "HR",
    email: "lury@aboutads.info",
    created_at: "2007-01-01",
  },
];

export const TABS = [
  { label: "All", count: 0 },
  { label: "Archived", count: 0 },
  { label: "Completed", count: 0 },
  { label: "Phase 2", count: 0 },
];

export const SEGMENTS = [];

export const TAGS = [];

export const ROLE_DROPDOWN_VALUES = [
  {
    label: "Funny",
    value: "funny",
  },
  {
    label: "Important",
    value: "important",
  },
  {
    label: "Tech",
    value: "tech",
  },
];

export const columnData = (isAlertOpen, setIsAlertOpen) => [
  {
    dataIndex: "name",
    key: "name",
    render: (name, data) => (
      <div className="name-role-avatar-container flex align-items">
        <Avatar
          size="medium"
          user={{
            name: name,
          }}
        />
        <div className="name-role-container ml-2">
          <Typography style="h5">{name}</Typography>

          <Typography style="h6" weight="light">
            {data.role}
          </Typography>
        </div>
      </div>
    ),
    title: "Name and Role",
    width: 150,
  },
  {
    dataIndex: "email",
    key: "email",
    title: "Email",
    width: 150,
  },
  {
    dataIndex: "created_at",
    key: "created_at",
    title: "Created at",
    width: 250,
  },
  {
    dataIndex: "options",
    key: "options",
    render: () => (
      <MenuHorizontal
        onClick={() => setIsAlertOpen(!isAlertOpen)}
        className="cursor-pointer"
      />
    ),
    title: "",
    width: 150,
  },
];

export const CONTACT_FORM_INITIAL_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  role: "",
};

export const CONTACT_FORM_VALIDATION_SCHEMA = Yup.object({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string().required("Email is required"),
  role: Yup.object().required("Role is required"),
});
