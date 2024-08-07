import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchIcon from '@mui/icons-material/Search';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { ReactTags } from 'react-tag-autocomplete'
import { useCallback, useState } from 'react';
import { getTagSuggests } from '../../Function/APIController';
import './searchBar.css';
import { useDebounce } from 'react-use';
export function SearchBar() {
    const [selectedTags, setSelectedTags] = useState([]);

    const onAdd = useCallback((newTag) => {
        setSelectedTags([...selectedTags, newTag])
    }, [selectedTags]);

    const onDelete = useCallback((tagIndex) => {
        setSelectedTags(selectedTags.filter((_, i) => i !== tagIndex))
    }, [selectedTags]);

    const [suggestions, setSuggestions] = useState([]);
    const [inputValues, setInputValues] = useState('');


    const [, cancel] = useDebounce(
        () => {
            if (inputValues == null || inputValues === "") {
                setSuggestions([]);
                return;
            }
            getTagSuggests("JP", inputValues).then((response) => {
                setSuggestions(response.data.map(({ id, name, country_id }) => ({ value: name, label: name })));
            });            
        },
        1000,
        [inputValues],
    );

    const tmp = () => {
        return (
            <InputGroup className="mb-3" style={{ width: "70%" }}>
                <InputGroup.Text>
                    <SearchIcon />
                </InputGroup.Text>
                <Button>検索</Button>
            </InputGroup>
        );
    }


    return (
        <div className="my-3 search-bar-input-group" style={{ width: "70%" }}>
            <div className="search-bar-search-icon">
                <SearchIcon />
            </div>
            <div className="search-bar-reacttags-container">
                <ReactTags
                    classNames={{
                        root: 'search-bar-react-tags',
                        rootIsActive: 'is-active',
                        rootIsDisabled: 'is-disabled',
                        rootIsInvalid: 'is-invalid',
                        label: 'search-bar-react-tags__label',
                        tagList: 'search-bar-react-tags__list',
                        tagListItem: 'search-bar-react-tags__list-item',
                        tag: 'search-bar-react-tags__tag',
                        tagName: 'search-bar-react-tags__tag-name',
                        comboBox: 'search-bar-react-tags__combobox',
                        input: 'search-bar-react-tags__combobox-input',
                        listBox: 'search-bar-react-tags__listbox',
                        option: 'search-bar-react-tags__listbox-option',
                        optionIsActive: 'is-active',
                        highlight: 'search-bar-react-tags__listbox-option-highlight',
                    }}
                    placeholderText="タグを入力してください"
                    selected={selectedTags}
                    suggestions={suggestions}
                    onAdd={onAdd}
                    onDelete={onDelete}
                    allowNew={true}
                    noOptionsText="No matching countries"
                    onInput={(value)=>setInputValues(value)}
                    allowResize={true}
                />
            </div>
            <Button className="search-bar-button">検索</Button>
        </div>
    );
}