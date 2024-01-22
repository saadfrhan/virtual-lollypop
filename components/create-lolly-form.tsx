"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";
import * as Yup from "yup";
import Lolly from "./lolly";
import { useRouter } from "next/navigation";
import { z } from "zod";
import AutoForm, { AutoFormSubmit } from "./auto-form";

const initialValues = {
  to: "",
  message: "",
  from: "",
};

const validationSchema = Yup.object({
  to: Yup.string().required("Recipient name is required"),

  message: Yup.string()
    .required("Message is required")
    .max(500, "Message should be less than 500 characters"),
  from: Yup.string().required("Sender name is Required"),
});

interface FormValues {
  to: string;
  message: string;
  from: string;
}

const CreateLollyForm = () => {
  // const {push} = useRouter();

  const [flavours, setFlavours] = useState({
    flavourTop: "#A4193B",
    flavourMiddle: "#DF4343",
    flavourBottom: "#DB2929",
  });
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    to: z.string().max(50),
    message: z.string().max(250),
    from: z.string().max(50),
  });

  const onSubmit = async (values: FormValues) => {};

  return (
    <div className="p-8 rounded-lg shadow-md flex gap-12 justify-center items-center">
      <Lolly
        flavourTop={flavours.flavourTop}
        flavourMiddle={flavours.flavourMiddle}
        flavourBottom={flavours.flavourBottom}
      />
      <div className="flex flex-col h-80 justify-between">
        {["Top", "Middle", "Bottom"].map((flavor) => (
          <label key={flavor} htmlFor={`${flavor}Flavor`}>
            <input
              className="w-16 h-16 md:w-20 md:h-20"
              value={
                flavours[
                  `flavour${
                    flavor.charAt(0).toUpperCase() + flavor.slice(1)
                  }` as keyof typeof flavours
                ]
              }
              type="color"
              name={`${flavor}Flavor`}
              id={`${flavor}Flavor`}
              onChange={(e) => {
                setFlavours({
                  ...flavours,
                  [`flavour${
                    flavor.charAt(0).toUpperCase() + flavor.slice(1)
                  }`]: e.target.value,
                });
              }}
            />
          </label>
        ))}
      </div>

      <AutoForm
        formSchema={formSchema}
        onSubmit={onSubmit}
        fieldConfig={{
          message: {
            fieldType: "textarea",
          },
        }}
      >
        <AutoFormSubmit>Freeze</AutoFormSubmit>
      </AutoForm>
    </div>
  );
};

export default CreateLollyForm;
