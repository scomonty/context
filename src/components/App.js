import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
    state={ language: 'english'};

onLanguageChange = (language) => {
 this.setState({ language: language });
}

//set the vaule of .Provider property to change default value of createContext -->
    render() {
    return (
        <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
        </LanguageContext.Provider>
        </div>
    )
    }
}


export default App;