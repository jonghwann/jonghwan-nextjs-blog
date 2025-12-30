const codeBlockStylish = ['#fc625d', '#fdbc40', '#35cd4b'];

export function CodeBlockHeader({ language }: { language: string }) {
  return (
    <div className="flex h-10 items-center justify-between rounded-t-[0.5rem] bg-[#3c3c3c] px-4 text-[#cfcfcf] text-sm">
      <div className="flex items-center gap-2">
        {codeBlockStylish.map((color) => (
          <div key={color} className="size-3 rounded-full" style={{ backgroundColor: color }} />
        ))}
      </div>

      {language !== 'text' && <span>{language.toUpperCase()}</span>}
    </div>
  );
}
