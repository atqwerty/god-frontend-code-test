import React, { useState, useEffect } from "react";
import { TextInput } from "vcc-ui";

interface SearchBarProps {
  callback: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ callback }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    callback(value);
  }, [value]);

  return (
    <TextInput
      value={value}
      placeholder={"Type here to filter body type"}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default SearchBar;
