import React from 'react';

interface Props {
  language: string;
}

const Flag: React.FunctionComponent<Props> = ({ language }) => {
  switch (language) {
    case 'uk':
      return (
        <span role="img" aria-label="ukrainian">
          🇺🇦
        </span>
      );
    case 'ru':
      return (
        <span role="img" aria-label="russian">
          🇷🇺
        </span>
      );
    case 'en':
      return (
        <span role="img" aria-label="english">
          🇺🇸
        </span>
      );
    default:
      return (
        <span role="img" aria-label="unknown">
          🏴‍☠️
        </span>
      );
  }
};

export default Flag;
