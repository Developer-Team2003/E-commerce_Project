import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Input from "../Global/Input";
import Button from "../Global/Button/Button";

const Form = () => {
  return (
    <form>
      <div className="flex justify-center ">
        <Input
          type="text"
          className="rounded-sm mx-2 h-[30px] text-sm shadow-sm bg-white border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 px-3 py-1"
          placeholder="Email"
        />
        <Button
          className="text-white py-0 px-[16px] h-[30px] rounded-md bg-blue-500 font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          type="submit"
          label="Subscribe"
        />
      </div>
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string,
};

export default Form;
