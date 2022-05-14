import { Link } from 'react-router-dom';

const style = {
  overflowY: 'scroll',
  maxHeight: '80vh',
  width: '40vw',
};

const CountriesList = ({ countries }) => {
  return (
    <div style={style}>
      {countries.map((country) => {
        return (
          <div key={country._id}>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            />
            <Link to={country.alpha3Code}>
              <p>{country.name.common}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default CountriesList;

// alpha2Code: "TO"
// alpha3Code: "TON"
// altSpellings: ['TO']
// area: 747
// borders: []
// capital: ["Nuku'alofa"]
// createdAt: "2022-05-14T20:20:39.592Z"
// currencies: {TOP: {…}}
// demonyms: {eng: {…}, fra: {…}}
// idd: {root: '+6', suffixes: Array(1)}
// independent: true
// landlocked: false
// languages: {eng: 'English', ton: 'Tongan'}
// latlng: (2) [-20, -175]
// name: {common: 'Tonga', official: 'Kingdom of Tonga', native: {…}}
// region: "Oceania"
// status: "officially-assigned"
// subregion: "Polynesia"
// tld: ['.to']
// translations: {ces: {…}, deu: {…}, est: {…}, fin: {…}, fra: {…}, …}
// unMember: true
// updatedAt: "2022-05-14T20:20:39.592Z"
// __v: 0
// _id: "62800f173893c40004bde4f5"
