import React from 'react';

// Capitalize the first letter of each word in a string
export const capitalizeFirstLetterOfEachWord = (
  text: string | null | undefined
): string => {
  if (!text) {
    return ''; // Return an empty string if input is null or undefined
  }
  return text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
};

// First letter only
export const capitalizeFirstLetter = (str: string | null | undefined) => {
  if (!str) {
    return;
  }
  if (!str) return str; // Return empty string if input is empty
  return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
};

export const renderTextWithBreaks = (text: string) => {
  return text.split('\\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < text.split('\\n').length - 1 && <br />}
    </React.Fragment>
  ));
};

export const formatReg = (reg: string) => {
  if (reg.length === 7) {
    return (reg.slice(0, 4) + ' ' + reg.slice(4)).toUpperCase();
  } else return reg.toUpperCase();
};

export const ordinalSuffix = (n: number): string => {
  const j = n % 10,
    k = n % 100;

  if (j === 1 && k !== 11) return `${n}st`;
  if (j === 2 && k !== 12) return `${n}nd`;
  if (j === 3 && k !== 13) return `${n}rd`;
  return `${n}th`;
};
