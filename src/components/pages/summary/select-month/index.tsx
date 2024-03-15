import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectMonth = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] ms-auto">
        <SelectValue placeholder="Select a month" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Month</SelectLabel>
          <SelectItem value="january">January</SelectItem>
          <SelectItem value="february">February</SelectItem>
          <SelectItem value="march">March</SelectItem>
          <SelectItem value="april">April</SelectItem>
          <SelectItem value="may">May</SelectItem>
          <SelectItem value="june">June</SelectItem>
          <SelectItem value="july">July</SelectItem>
          <SelectItem value="august">August</SelectItem>
          <SelectItem value="september">September</SelectItem>
          <SelectItem value="october">October</SelectItem>
          <SelectItem value="november">November</SelectItem>
          <SelectItem value="december">December</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectMonth;
