import '../../index.css';
import type { Contribution } from './CommitTile.tsx';
import CommitTile from './CommitTile.tsx';
import { useState, useEffect } from 'react';


async function fetchContributions(): Promise<Contribution[]> {
  try {
    const response = await fetch('http://10.0.0.89:5050/contributions');
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
        setContributions(data);
    };

    load(); // immediate fetch
    const interval = setInterval(load, 100000);
    return () => clearInterval(interval);
    }, []);


    return (
        <div className="flex text-[#232136] flex-row items-center gap-6">

        <div className="flex justify-center gap-2">
            {contributions.map((contrib, idx) => (
            <CommitTile key={idx} contribution={contrib} />
            ))}
        </div>

        </div>
    );
}

export default Commits;
