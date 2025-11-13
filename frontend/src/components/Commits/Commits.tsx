import '../../index.css';
import type { Contribution } from './CommitTile';
import CommitTile from './CommitTile';
import { useState, useEffect } from 'react';


async function fetchContributions(): Promise<Contribution[]> {
  try {
    const response = await fetch('http://127.0.0.1:5000/contributions');
    if (!response.ok) throw new Error('Fetch failed with status ' + response.status);
    const data = await response.json();

    // backend returns either array directly or { contributionDays: [...] }
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.contributionDays)) return data.contributionDays;

    // fallback if structure unexpected
    return Array.from({ length: 7 }, () => ({
      date: 'N/A',
      contributionCount: 0,
      color: '#ebedf0',
    }));
  } catch (err) {
    console.error('Error fetching contributions:', err);
    return Array.from({ length: 7 }, () => ({
      date: 'N/A',
      contributionCount: 0,
      color: '#ebedf0',
    }));
  }
}

function Commits() {
    const [contributions, setContributions] = useState<Contribution[]>(
        Array.from({ length: 7 }, () => ({
        date: 'N/A',
        contributionCount: 0,
        color: '#ebedf0',
        }))
    );


useEffect(() => {
  const load = async () => {
    const data = await fetchContributions();
    console.log('[DEBUG] loaded contributions', data);
    setContributions(data);
  };

  load(); // immediate fetch
  const interval = setInterval(load, 100000);
  return () => clearInterval(interval);
}, []);

    console.log('Current contributions state:', contributions);

    const totalCommits = contributions.reduce(
        (acc, c) => acc + c.contributionCount,
        0
    );

    return (
        <div className="flex flex-row items-center gap-2">
        <span className="text-lg font-semibold">This Week</span>

        <div className="flex justify-center gap-2">
            {contributions.map((contrib, idx) => (
            <CommitTile key={idx} contribution={contrib} />
            ))}
        </div>

        <span className="text-sm font-medium">Total Commits: {totalCommits}</span>
        </div>
    );
}

export default Commits;
