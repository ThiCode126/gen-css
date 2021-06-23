import React, { useState } from "react";
import reactCSS from "reactcss";
import ColorPicker from "../Components/ColorPicker";
import { ReactSVG } from "react-svg";
import { CopyToClipboard } from "react-copy-to-clipboard";

import dataExample from "../data.json";

const BoxShadow = () => {
  const defaultStateForm = {
    horizontal: 0,
    vertical: 0,
    spread: 8,
    blur: 25,
    color: {
      r: "149",
      g: "157",
      b: "165",
      a: "0.5",
    },
    inset: false,
  };

  const defaultStatePreview = {
    boxColor: {
      r: "229",
      g: "229",
      b: "229",
      a: "1",
    },
    prevBlockColor: {
      r: "229",
      g: "229",
      b: "229",
      a: "1",
    },
    textColor: {
      r: "55",
      g: "55",
      b: "55",
      a: "1",
    },
    copied: false,
  };

  const [formState, setFormState] = useState(defaultStateForm);
  const [formStatePreview, setFormStatePreview] = useState(defaultStatePreview);

  const styles = reactCSS({
    default: {
      previewBlock: {
        background: `rgba(${formStatePreview.prevBlockColor.r}, ${formStatePreview.prevBlockColor.g}, ${formStatePreview.prevBlockColor.b}, ${formStatePreview.prevBlockColor.a})`,
      },
      bts: {
        boxShadow: `${formState.inset ? "inset" : ""} ${
          formState.horizontal
        }px ${formState.vertical}px ${formState.blur}px ${
          formState.spread
        }px rgba(${formState.color.r}, ${formState.color.g}, ${
          formState.color.b
        }, ${formState.color.a})`,
        background: `rgba(${formStatePreview.boxColor.r}, ${formStatePreview.boxColor.g}, ${formStatePreview.boxColor.b}, ${formStatePreview.boxColor.a})`,
        color: `rgba(${formStatePreview.textColor.r}, ${formStatePreview.textColor.g}, ${formStatePreview.textColor.b}, ${formStatePreview.textColor.a})`,
      },
      btsEx: {
        background: `rgba(${formStatePreview.boxColor.r}, ${formStatePreview.boxColor.g}, ${formStatePreview.boxColor.b}, ${formStatePreview.boxColor.a})`,
        color: `rgba(${formStatePreview.textColor.r}, ${formStatePreview.textColor.g}, ${formStatePreview.textColor.b}, ${formStatePreview.textColor.a})`,
      },
    },
  });

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;

    let oldState = { ...formState };
    oldState[name] = value;
    setFormState(oldState);
  };

  const handleCopy = () => {
    console.log("Copy");
    let oldState = { ...formState };
    oldState["copied"] = true;
    setFormState(oldState);
  };

  return (
    <section id="boxshadow">
      <div className="content-wrapper">
        <div className="in-section">
          <div className="settings-zone">
            <div className="settings">
              <h2>Réglages</h2>

              <h3>Zone Aperçu</h3>
              <div className="row">
                <label>Background Aperçu</label>

                <ColorPicker
                  formState={formStatePreview}
                  setFormState={setFormStatePreview}
                  picker="prevBlockColor"
                />
              </div>
              <div className="row">
                <label>Background Block</label>

                <ColorPicker
                  formState={formStatePreview}
                  setFormState={setFormStatePreview}
                  picker="boxColor"
                />
              </div>
              <div className="row">
                <label>Texte</label>

                <ColorPicker
                  formState={formStatePreview}
                  setFormState={setFormStatePreview}
                  picker="textColor"
                />
              </div>

              <h3>Box Shadow</h3>

              <div className="row">
                <label htmlFor="horizontal">Position horizontale</label>
                <input
                  type="number"
                  name="horizontal"
                  id="horizontal"
                  value={formState.horizontal}
                  onChange={handleChange}
                  min="-50"
                  max="50"
                />
              </div>
              <div className="row">
                <label htmlFor="vertical">Position vertical</label>
                <input
                  type="number"
                  name="vertical"
                  id="vertical"
                  value={formState.vertical}
                  onChange={handleChange}
                  min="-50"
                  max="50"
                />
              </div>
              <div className="row">
                <label htmlFor="spread">Spread</label>
                <input
                  type="number"
                  name="spread"
                  id="spread"
                  value={formState.spread}
                  onChange={handleChange}
                  min="-50"
                  max="50"
                />
              </div>
              <div className="row">
                <label htmlFor="blur">Blur</label>
                <input
                  type="number"
                  name="blur"
                  id="blur"
                  value={formState.blur}
                  onChange={handleChange}
                  min="-50"
                  max="50"
                />
              </div>
              <div className="row">
                <label>Couleur</label>
                <ColorPicker
                  formState={formState}
                  setFormState={setFormState}
                  picker="color"
                />
              </div>
              <div className="row">
                <label>Inset</label>
                <input
                  type="checkbox"
                  name="inset"
                  id="inset"
                  checked={formState.inset}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="preview">
              <h2>Aperçu</h2>
              <div style={styles.previewBlock} className="preview-block">
                <div style={styles.bts} className="box-to-shadow">
                  <h4>ThiCode</h4>
                  <img src="/assets/lake.jpg" alt="lake" />
                </div>
              </div>
            </div>
          </div>
          <div className="result-zone">
            <h2 id="rendu">Rendu</h2>
            <div className="result-text">
              <input
                type="text"
                name="result"
                id="result"
                aria-labelledby="rendu"
                readOnly
                value={`box-shadow: ${formState.inset ? "inset" : ""} ${
                  formState.horizontal
                }px ${formState.vertical}px ${formState.blur}px ${
                  formState.spread
                }px rgba(${formState.color.r}, ${formState.color.g}, ${
                  formState.color.b
                }, ${formState.color.a})`}
              />
              <CopyToClipboard
                text={`box-shadow: ${formState.inset ? "inset" : ""} ${
                  formState.horizontal
                }px ${formState.vertical}px ${formState.blur}px ${
                  formState.spread
                }px rgba(${formState.color.r}, ${formState.color.g}, ${
                  formState.color.b
                }, ${formState.color.a})`}
                onCopy={handleCopy}
              >
                <span>
                  <ReactSVG
                    src="/assets/copy.svg"
                    className="copy-icon"
                    wrapper="svg"
                  />
                </span>
              </CopyToClipboard>
            </div>
          </div>
          <div className="example">
            <h2>Exemples</h2>
            <div className="example-cards" style={styles.previewBlock}>
              {dataExample.map((item, k) => (
                <div
                  className="card"
                  key={k}
                  style={{
                    boxShadow: `${item.inset ? "inset" : ""} ${
                      item.horizontal
                    }px ${item.vertical}px ${item.blur}px ${
                      item.spread
                    }px rgba(${item.color.r}, ${item.color.g}, ${
                      item.color.b
                    }, ${item.color.a})`,
                    background: `rgba(${formStatePreview.boxColor.r}, ${formStatePreview.boxColor.g}, ${formStatePreview.boxColor.b}, ${formStatePreview.boxColor.a})`,
                    color: `rgba(${formStatePreview.textColor.r}, ${formStatePreview.textColor.g}, ${formStatePreview.textColor.b}, ${formStatePreview.textColor.a})`,
                  }}
                  onClick={() => setFormState(item)}
                >
                  <h4>ThiCode</h4>
                  <img src="/assets/lake.jpg" alt="lake" />
                </div>
              ))}
            </div>
          </div>
          <div className="documentation">
            <h2>Documentation</h2>
            <p>
              <a
                href="https://developer.mozilla.org/fr/docs/Web/CSS/box-shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN Web Docs
              </a>
            </p>
            <p>
              <a
                href="https://www.w3schools.com/cssref/css3_pr_box-shadow.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                W3 Schools
              </a>
            </p>
          </div>
          <div className="compatibility">
            <h2>Compatibilité</h2>
            <p>
              <a
                href="https://caniuse.com/css-boxshadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Can I use
              </a>
            </p>
            <img src="/assets/screen/box-shadow.png" alt="box-shadow" />
            <p className="more">Compatibilité au 23/06/2021</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxShadow;
