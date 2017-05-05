import fetchData from '../fetch-data';

const allMembers = endpointURL => {
  return fetchData(endpointURL)
    .then(res => {
      return res.members.map(member => {
        return {
          id: member.id || null,
          firstName: member.first_name || '',
          middleName: member.middle_name || '',
          lastName: member.last_name || '',
          party: member.party || '',
          state: member.state || '',
          stateRank: member.state_rank || '',
          moreInfoUri: member.api_uri || null,
          contact: {
            social: {
              twitter: member.twitter_account || null,
              facebook: member.facebook_account || null,
              youtube: member.youtube_account || null,
            },
            website: member.url || null,
            address: member.office || null,
            phone: member.phone || null,
            fax: member.fax || null,
          },
          nextElectionYear: member.next_election || null,
          votes: {
            total: member.total_votes || null,
            present: member.total_present || null,
            missed: member.missed_votes || null,
            missedVotesPercentage: member.missed_votes_pct || null,
            votesWithPartyPercentage: member.votes_with_party_pct || null,
            allVotes: [],
          },
          bills: [],
        }
      });
    });
};


export default allMembers;