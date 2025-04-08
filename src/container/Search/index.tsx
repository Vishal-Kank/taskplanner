import { Input } from "@mui/material";

const Search = () => {
  return (
    <Input
      fullWidth
      disableUnderline
      sx={{
        border: "1px solid #DDD",
        borderRadius: "4px",
        padding: "8px 12px",
        fontSize: "0.85rem",
      }}
      inputProps={{ style: { padding: 0 } }}
      placeholder="Search Task"
    />
  );
};

export default Search;
