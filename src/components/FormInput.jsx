import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    errorMessage,
    handleChange,
    name,
    placeholder,
    required,
    pattern,
    type,
    maxLength,
    classname,
    size,
  } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <input
        onChange={handleChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        placeholder={placeholder}
        name={name}
        required={required}
        pattern={pattern}
        type={type}
        maxLength={maxLength}
        className={classname}
        size={size}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
