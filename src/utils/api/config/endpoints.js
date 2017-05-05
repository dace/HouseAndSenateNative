export const endpoints = {
  members: {
    house: 'https://api.propublica.org/congress/v1/115/house/members.json',
    senate: 'https://api.propublica.org/congress/v1/115/senate/members.json',
  },
  bills: {
    house: {
      introduced: 'https://api.propublica.org/congress/v1/115/house/bills/introduced.json',
      major: 'https://api.propublica.org/congress/v1/115/house/bills/major.json',      
      passed: 'https://api.propublica.org/congress/v1/115/house/bills/passed.json',
      updated: 'https://api.propublica.org/congress/v1/115/house/bills/updated.json',
    },
    senate: {
      introduced: 'https://api.propublica.org/congress/v1/115/senate/bills/introduced.json',
      major: 'https://api.propublica.org/congress/v1/115/senate/bills/major.json', 
      passed: 'https://api.propublica.org/congress/v1/115/senate/bills/passed.json',
      updated: 'https://api.propublica.org/congress/v1/115/senate/bills/updated.json',
    }
  },
  votes: {
    house: {},
    senate: {},
  },
};

export default endpoints;