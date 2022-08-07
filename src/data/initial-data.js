import { nanoid } from "nanoid";
export const SIDEBAR_ITEM = "sidebarItem";
export const ROW = "row";
export const COLUMN = "column";
export const COMPONENT = "component";

export const SIDEBAR_ITEMS = [
  {
    id: nanoid(3),
    type: SIDEBAR_ITEM,
    component: {
      type: "input",
      content: "Some input",
    },
  },
  {
    id: nanoid(3),
    type: SIDEBAR_ITEM,
    component: {
      type: "name",
      content: "Some name",
    },
  },
  {
    id: nanoid(3),
    type: SIDEBAR_ITEM,
    component: {
      type: "email",
      content: "Some email",
    },
  },
  {
    id: nanoid(3),
    type: SIDEBAR_ITEM,
    component: {
      type: "phone",
      content: "Some phone",
    },
  },
  {
    id: nanoid(3),
    type: SIDEBAR_ITEM,
    component: {
      type: "image",
      content: "Some image",
    },
  },
];

export const initialContainerData = {
  layout: [
    {
      type: ROW,
      id: "row0",
      children: [
        {
          type: COLUMN,
          id: "column0",
          children: [
            {
              type: COMPONENT,
              id: "component0",
            },
            {
              type: COMPONENT,
              id: "component1",
            },
          ],
        },
        {
          type: COLUMN,
          id: "column1",
          children: [
            {
              type: COMPONENT,
              id: "component2",
            },
          ],
        },
      ],
    },
    {
      type: ROW,
      id: "row1",
      children: [
        {
          type: COLUMN,
          id: "column2",
          children: [
            {
              type: COMPONENT,
              id: "component3",
            },
            {
              type: COMPONENT,
              id: "component0",
            },
            {
              type: COMPONENT,
              id: "component2",
            },
          ],
        },
      ],
    },
  ],
  components: {
    component0: { id: "component0", type: "input", content: "Some input" },
    component1: { id: "component1", type: "image", content: "Some image" },
    component2: { id: "component2", type: "email", content: "Some email" },
    component3: { id: "component3", type: "name", content: "Some name" },
    component4: { id: "component4", type: "phone", content: "Some phone" },
  },
};
