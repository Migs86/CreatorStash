import React, { useState } from "react";
import FormAlert from "./FormAlert";
import FormField from "./FormField";
import Airtable from './../util/airtable';
import { useForm } from "react-hook-form";

function Suggestion(props) {
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);
  const { handleSubmit, register, errors, reset } = useForm();

  const onSubmit = (data) => {
    // Show pending indicator
    setPending(true);
    Airtable.postRecord('Suggestions', data);
    setFormAlert({
      type: "success",
      message: "Thanks for your suggestion!",
    });
    setPending(false);
  };

  return (
    <>
      {formAlert && (
        <FormAlert type={formAlert.type} message={formAlert.message} />
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field is-horizontal">
          <div className="field-body">
            {props.showNameField && (
              <FormField
                name="Name"
                type="text"
                size="medium"
                placeholder="Name"
                error={errors.Name}
                inputRef={register({
                  required: "Please enter your name",
                })}
              />
            )}

            <FormField
              name="Email"
              type="email"
              size="medium"
              placeholder="Email"
              error={errors.Email}
              inputRef={register({
                required: "Please enter your email",
              })}
            />
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">          
            <FormField
              name="URL"
              type="text"
              size="medium"
              placeholder="www.creatorstash.com"
              error={errors.URL}
              inputRef={register({
                required: "Drop us the link",
              })}
            />
          </div>
        </div>

        
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button
                  className={
                    "button is-medium" +
                    (props.buttonColor ? ` is-${props.buttonColor}` : "") +
                    (props.buttonInverted ? " is-inverted" : "") +
                    (pending ? " is-loading" : "")
                  }
                  type="submit"
                >
                  {props.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Suggestion;
