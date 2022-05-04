import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import SubscribeGroupList from '../SubscribeGroupList';
import SubscribeContainer from './style';
import api from '../../services/api';

const SubscribeGroupPopup = () => {
    const [isSearching, setIsSearching] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [input, setInput] = useState('');

    const searchGroups = () => {
        setIsSearching(true);
        api.get(`/groups/?search=${input}`)
            .then(response => response.data.results)
            .then(result => {
                setIsSearching(false)
                setSearchResults(result)
            })
    }

    return (
        <SubscribeContainer>
            <header>
                <input placeholder='Nome do grupo'
                    value={input}
                    onChange={e => setInput(e.target.value)} />
                <BsSearch onClick={searchGroups} />
            </header>
            <main>
                {isSearching ?
                    <p className='no-italic'> Buscando grupos... </p>
                    :
                    searchResults.length === 0 ?
                        <p> Nenhum resultado para sua busca </p>
                        :
                        <ul>
                            {searchResults.map((result, index) => {
                                return <SubscribeGroupList key={index} result={result} />
                            })}
                        </ul>
                }
            </main>
        </SubscribeContainer>
    )

}

export default SubscribeGroupPopup;