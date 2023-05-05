import { useState, useEffect } from 'react';

import CardList from '../components/card-list/card-list.component';
import SearchBox from '../components/search-box/search-box.component';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState(''); // [value. setValue]
  const [title, setTitle] = useState(''); // [value, setValue
  const [robots, setRobots] = useState([]); // [value, setValue]
  const [filteredRobots, setFilteredRobots] = useState(robots); // [value, setValue]

  console.log('rendered');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setRobots(users));
  }, []);

  useEffect(() => {
    const newFilteredRobots = robots.filter((robot) => {
      return robot.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredRobots(newFilteredRobots);
  }, [robots, searchField]);

  const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
  }

  return (
    <div className='App'>
    <h1 className='app-title'>ROBOTS</h1>

      <SearchBox 
        className='robots-search-box'
        onChangeHandler={onSearchChange} 
        placeholder={'search robots'} 
      />
      <CardList robots={filteredRobots} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
//     .then((users) => this.setState(() => {
//       return {monsters: users}
//     }
//     ));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value
//     .toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   }

//   render() {
//     console.log('render from AppJS');
//     const {monsters, searchField, } = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = 
//                 monsters.filter((monster) => {
//                   return monster.name.toLocaleLowerCase().includes(searchField);
//                 });

//     return (
//       <div className='App'>
//       <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox 
//           className='monsters-search-box'
//           onChangeHandler={onSearchChange} 
//           placeholder={'search monsters'} />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
