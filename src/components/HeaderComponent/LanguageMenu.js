import React from "react";
import { Motion, StaggeredMotion, spring } from "react-motion";

import { ReactComponent as CrossSVG } from "../../styles/assets/icons/cross.svg";
import { ReactComponent as EarthSVG } from "../../styles/assets/icons/earth.svg";

export default class RadialMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false,
      timeout: null
    };

    this.onClick = this.onClick.bind(this);
    this.leaveTimeout = this.leaveTimeout.bind(this);
    this.leaveTimeout = this.leaveTimeout.bind(this);
  }

  onClick() {
    this.setState({
      active: !this.state.active,
      timeout: null
    });
  }

  pickLanguage(lang) {
    this.props.handleLanguageChange(lang);
    this.setState({
      active: !this.state.active,
      timeout: null
    });
  }

  leaveTimeout() {
    if (this.state.active && !this.state.timeout) {
      const timeout = setTimeout(() => {
        if (this.state.active) {
          this.setState({
            active: false,
            timeout: timeout
          });
        }
      }, 1000);
    }
  }

  render() {
    const values = ["en", "ru", "ua"];
    const tooltips = ["English", "Русский", "Україньска"];

    return (
      <ButtonGroup leaveTimeout={this.leaveTimeout}>
        <StaggeredMotion
          defaultStyles={[{ x: -45, o: 0 }, { x: -45, o: 0 }, { x: -45, o: 0 }]}
          styles={prevInterpolatedStyles =>
            prevInterpolatedStyles.map((_, i) => {
              return i === prevInterpolatedStyles.length - 1
                ? {
                    x: spring(this.state.active ? 0 : -45, {
                      stiffness: 330,
                      damping: 20
                    }),
                    o: spring(this.state.active ? 1 : 0, {
                      stiffness: 330,
                      damping: 20
                    })
                  }
                : {
                    x: spring(prevInterpolatedStyles[i + 1].x, {
                      stiffness: 330,
                      damping: 20
                    }),
                    o: spring(prevInterpolatedStyles[i + 1].o, {
                      stiffness: 330,
                      damping: 20
                    })
                  };
            })
          }
        >
          {interpolatingStyles => (
            <ButtonGroup>
              {interpolatingStyles.map((style, i) => (
                <button
                  key={i}
                  className="lang-button theme-background-second theme-color-main theme-fill-main"
                  style={{
                    position: "relative",
                    right: style.x,
                    opacity: style.o,
                    pointerEvents: this.state.active ? "auto" : "none"
                  }}
                  onClick={() => this.pickLanguage(values[i])}
                  title={tooltips[i]}
                >
                  {values[i]}
                </button>
              ))}
            </ButtonGroup>
          )}
        </StaggeredMotion>

        <Motion
          defaultStyle={{ s: 1 }}
          style={{
            s: spring(this.state.active ? 1.25 : 1, {
              stiffness: 330,
              damping: 14
            })
          }}
        >
          {interpolatingStyles => (
            <button
              className="lang-button lang-button--large theme-background-second theme-color-main theme-fill-main"
              style={{
                transform: "scale(" + interpolatingStyles.s + ")"
              }}
              onClick={this.onClick}
              title={this.props.languageWord}
            >
              <EarthSVG
                className={this.state.active ? "earth active" : "earth"}
              />
              <CrossSVG
                className={this.state.active ? "cross active" : "cross"}
              />
            </button>
          )}
        </Motion>
      </ButtonGroup>
    );
  }
}

const ButtonGroup = props => (
  <div
    className="lang-button-group"
    style={props.style}
    onMouseLeave={props.leaveTimeout}
  >
    {props.children}
  </div>
);
