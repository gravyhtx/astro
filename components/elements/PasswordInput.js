const PasswordInput = (value, placeholder, classes, errorClasses, label, labelClasses, onChange, classes, showPassword) => {
  classes = classes ? " "+classes : "";
  labelClasses = labelClasses ? " "+labelClasses : "";
  id = id ? id : "input-password";
  const type = showPassword ? "text" : "password";
    return (<>
      {label ? <label className={"input-label password"+labelClasses} for={id}>{label}</label> : <></>}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          className={"input-field"+classes+errorClasses}
          id={id}
          onChange={onChange} />
    </>)
}