interface ButtonProps {
  onClick: () => void;
  color?: string;
  text: string;
  isDisabled: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  color,
  text,
  isDisabled,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`mt-10 w-fit py-3 px-5 self-end rounded-lg ${
        color != null ? color : "bg-denim text-white"
      }`}
    >
      {text}
    </button>
  );
};
