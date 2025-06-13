import {useNavigate} from "react-router-dom";
import React from 'react';
import VoteEntrySkeleton from './VoteEntrySkeleton';
import VoteEntry from "./VoteEntry";

const PollVotes = ({pollData}: any) => {
    if (pollData == null) {
        return (
            <div className="flex flex-col gap-4">
                {
                    new Array(10).fill(0).map(_ => (
                        <VoteEntrySkeleton />
                    ))
                }
            </div>
        )
    }

    const votes = pollData.votes;
    const voteEntries = Object.values(votes || {}).sort((a: any, b: any) => b.count - a.count);

    if (voteEntries.length === 0) {
        return (
            <p className="text-gray-500">No votes have been cast yet.</p>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {
                voteEntries.map((voteEntry: any, index: number) => (
                    <VoteEntry voteEntry={voteEntry}/>
                ))
            }
        </div>
    )
}

export default PollVotes;
