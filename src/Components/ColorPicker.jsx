import React, { useState } from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";

const ColorPicker = ({ formState, setFormState, picker }) => {
  const defaultState = {
    displayColorPicker: false,
    color: formState[picker],
  };

  const [formStateColor, setFormStateColor] = useState(defaultState);

  const styles = reactCSS({
    default: {
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: `rgba(${formState[picker].r}, ${formState[picker].g}, ${formState[picker].b}, ${formState[picker].a})`,
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  const handleClickColor = () => {
    let oldState = { ...formStateColor };
    oldState["displayColorPicker"] = !formStateColor.displayColorPicker;
    setFormStateColor(oldState);
  };

  const handleCloseColor = () => {
    let oldState = { ...formStateColor };
    oldState["displayColorPicker"] = false;
    setFormStateColor(oldState);
  };

  const handleChangeColor = (color) => {
    let oldStateColor = { ...formStateColor };
    oldStateColor["color"] = color.rgb;
    setFormStateColor(oldStateColor);

    let oldState = { ...formState };
    oldState[picker] = color.rgb;
    setFormState(oldState);
  };

  return (
    <div>
      <div style={styles.swatch} onClick={handleClickColor}>
        <div style={styles.color} />
      </div>
      {formStateColor.displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleCloseColor} />
          <SketchPicker color={formState.color} onChange={handleChangeColor} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
