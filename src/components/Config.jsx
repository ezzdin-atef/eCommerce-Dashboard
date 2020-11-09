import React, { useState } from 'react';
import { motion } from "framer-motion";

const Config = () => {
  const [open, setOpen] = useState(false);
  const [schema, setSchema] = useState("Flat UI Palette v1");

  const ChangeColors = () => {
    for (const color in colorSchema[schema]) {
      document.documentElement.style.setProperty(`--${color}`, colorSchema[schema][color]);
    }
  }

  return (
    <>
      <span className="config-icon" onClick={() => setOpen(!open)}>
        <i className="fas fa-cogs"></i>
      </span>
      {open && (
        <motion.div className="config" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="config-section">
            <h4>Colors</h4>
            <select className="colors" name="colors" onChange={(e) => setSchema(e.target.value)} defaultValue={schema}>
              <option value="Flat UI Palette v1">Flat UI Palette v1</option>
              <option value="American Palette">American Palette</option>
              <option value="Aussie Palette">Aussie Palette</option>
              <option value="Canadian Palette">Canadian Palette</option>
            </select>
            <button><i className="fas fa-check" onClick={ChangeColors}></i></button>
          </div>
        </motion.div>
      )}
    </>
  );
}

const colorSchema = {
  "Flat UI Palette v1": {
    "green": "#2A9D8F",
    "green-dark": "#264653",
    "dark": "#264653",
    "yellow": "#E9C46A",
    "yellow-dark": "#dcb964",
    "orange": "#F4A261",
    "red": "#E76F51",
    "red-dark": "#c55a40",
    "blue": "#3498db",
    "blue-dark": "#2980b9",
  },
  "American Palette": {
    "green": "#55efc4",
    "green-dark": "#00b894",
    "dark": "#2d3436",
    "yellow": "#ffeaa7",
    "yellow-dark": "#fdcb6e",
    "orange": "#fab1a0",
    "red": "#ff7675",
    "red-dark": "#d63031",
    "blue": "#74b9ff",
    "blue-dark": "#0984e3",
  },
  "Aussie Palette": {
    "green": "#7ed6df",
    "green-dark": "#22a6b3",
    "dark": "#130f40",
    "yellow": "#f6e58d",
    "yellow-dark": "#f9ca24",
    "orange": "#ffbe76",
    "red": "#ff7979",
    "red-dark": "#eb4d4b",
    "blue": "#686de0",
    "blue-dark": "#4834d4",
  },
  "Canadian Palette": {
    "green": "#00d2d3",
    "green-dark": "#01a3a4",
    "dark": "#222f3e",
    "yellow": "#feca57",
    "yellow-dark": "#ff9f43",
    "orange": "#ff9ff3",
    "red": "#ff6b6b",
    "red-dark": "#ee5253",
    "blue": "#54a0ff",
    "blue-dark": "#2e86de",
  }
}

export default Config;