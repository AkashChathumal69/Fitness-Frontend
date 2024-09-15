import React from 'react';
import TextField from '@mui/material/TextField';

const CustomTextField = ({
  width,
  className,
  label,
  name,
  value,
  onChange,
  additionalProps,
  icon,
}) => {
  const {
    borderRadius,
    backgroundColor,
    color,
    labelcolor,
    type,
    multiline = false,
    rows = 5,
    height = 'auto',
  } = additionalProps || {};

  const mainColor = 'FFFFFF';

  return (
    <>
      <TextField
        name={name}
        value={value}
        label={label}
        type={type}
        rows={rows}
        multiline={multiline}
        InputProps={{
          startAdornment: icon && <div style={{ marginRight: '8px', color: 'grey' }}>{icon}</div>,
          style: {
            color: color || 'black',
            fontSize: '14px',
          },
          sx: { borderRadius: borderRadius || undefined },
        }}
        sx={{
          background: backgroundColor || undefined,
          borderRadius: borderRadius || undefined,
          width: width,
          height: height,
          '& label': {
            color: 'red',
          },
          '& label.Mui-focused': {
            color: 'black',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: mainColor,
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: mainColor,
            },
            '&:hover fieldset': {
              borderColor: mainColor,
            },
            '&.Mui-focused fieldset': {
              borderColor: mainColor,
            },
          },
          '&:focus': {
            borderColor: 'black',
          },
        }}
        InputLabelProps={{
          style: {
            fontWeight: 400,
            fontFamily: 'League Spartan',
            fontSize: '14px',
            margin: '3px 0px 0px 8px ',
            color: labelcolor || 'black',
          },
        }}
        className={className}
        onChange={onChange}
      />
    </>
  );
};

export default CustomTextField;
