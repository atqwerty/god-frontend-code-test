import React, { useState } from "react";
import { TextInput } from "vcc-ui";

const SearchBar: React.FC = ({ callback }) => {
  const [value, setValue] = useState("");

  return (
    <TextInput
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        callback(value);
      }}
    />
  );
};

export default SearchBar;
