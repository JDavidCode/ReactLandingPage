interface FullButtonProps {
  title: string;
  action?: () => void;
  border?: boolean;
}

export default function FullButton({ title, action, border }: FullButtonProps) {
  return (
    <button
      className={`animate pointer rounded-lg w-full p-4 outline-none 
        ${border ? "border border-slate-600 bg-transparent text-slate-400 hover:bg-transparent hover:border-sky-700 hover:text-sky-700" : "border border-sky-700 bg-sky-700 text-white hover:bg-sky-800"}`}
      onClick={action ? action : undefined}
    >
      {title}
    </button>
  );
}
