type Props = {
  label: string;
  selectedList: string[];
  setSelectedList: (newList: string[]) => void;
};

export const AsideItem = ({ label, selectedList, setSelectedList }: Props) => {
  const isSelected = selectedList.includes(label);

  function toggleChecked() {
    if (isSelected) {
      setSelectedList(selectedList.filter(i => i !== label));
    } else {
      setSelectedList([...selectedList, label]);
    }
  }

  return (
    <label
      className="flex items-center gap-2 py-2 px-4 cursor-pointer hover:bg-zinc-200 transition-colors"
    >
      <input type="checkbox"
        checked={isSelected}
        onChange={toggleChecked}
        className="accent-blue-900 w-4 h-4 cursor-pointer"
      />
      <span className="text-sm">{label}</span>
    </label>
  );
};
