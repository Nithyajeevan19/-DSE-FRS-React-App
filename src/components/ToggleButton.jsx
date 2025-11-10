export default function ToggleButton({ value, onChange, leftLabel, rightLabel }) {
  return (
    <div className="flex items-center justify-center my-3">
      <button
        onClick={() => onChange(false)}
        className={`px-4 py-2 rounded-l-full border 
          ${!value ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 border-purple-600'} 
          transition-all`}
      >
        {leftLabel}
      </button>
      <button
        onClick={() => onChange(true)}
        className={`px-4 py-2 rounded-r-full border-t border-b border-r 
          ${value ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 border-purple-600'} 
          transition-all`}
      >
        {rightLabel}
      </button>
    </div>
  );
}
