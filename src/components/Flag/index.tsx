import React from 'react';

interface Props {
  language: string;
}

const Flag: React.FunctionComponent<Props> = ({ language }) => {
  switch (language) {
    case 'uk':
      return <span>🇺🇦</span>;
    case 'ru':
      return <span>🇷🇺</span>;
    case 'en':
      return <span>🇺🇸</span>;
    default:
      return <span>🇺🇸</span>;
  }
};

export default Flag;
