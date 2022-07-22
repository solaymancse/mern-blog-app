import TextField from "@mui/material/TextField";

export const TextInputField = ({ state, name, onChange, ...rest }) => {
  const { data, errors } = state;
  let label = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <TextField
      id={label}
      size="small"
      name={name}
      label={label}
      variant="outlined"
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name] ? errors[name] : null}
      onChange={onChange}
      {...rest}
    />
  );
};
