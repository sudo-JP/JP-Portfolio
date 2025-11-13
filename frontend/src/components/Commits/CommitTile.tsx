import '../../index.css';

export type Contribution = {
  date: string;
  contributionCount: number;
  color: string;
};

type CommitTileProps = {
  contribution: Contribution;
};

export default function CommitTile({ contribution }: CommitTileProps) {
  return (
    <div className="relative group">
      <div
        className="h-4 w-4 rounded-md"
        style={{ background: contribution.color }}
      />
      <span
        className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 
                   opacity-0 group-hover:opacity-100 
                   bg-gray-800 text-white text-xs rounded px-2 py-1 
                   pointer-events-none whitespace-nowrap
                   transition-opacity duration-200"
      >
        {contribution.contributionCount} contributions on {contribution.date} 
      </span>
    </div>
  );
}

