import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    borderRadius: 6,
    height: 42,
    width: 200,
    border: '#646C9A',
    fontSize: '16px',
    fontWeight: '600',
  },
  label: {
    textTransform: 'capitalize',
  },
});

export default function StyledButton({variant, children}) {
  const classes = useStyles();

  return (
    <Button
      variant={variant}
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
      style={{
        color: (variant === "contained")? "#fff": "#000",
        background: (variant === "contained")? "#646C9A": "#000"
      }}
    >
      {children}
    </Button>
  );
}

StyledButton.propTypes = {
  variant: PropTypes.string, 
  children: PropTypes.node
};
