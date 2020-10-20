
import React, { useState } from "react";
import SearchResult from './SearchResult'
import {LoadingContext} from './LoaingContext'
 const  SearchField =(props) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
  
    
    


    const onChangeHandle = e => {
      const query = e.target.value;
        console.log(query);
        if(query !== "")
        {
            setLoading(true);
            const Url = `https://api.github.com/search/users?q=${query}`;
            fetch(Url)
            .then((res) => res.json())
            .then((data) => {
            console.log(Url);
            console.log(data.items);
                setLoading(false);
                setUsers(data.items);
                
            })
            .then(error => {
                console.log(error)
            });
        }
        console.log(loading);
    }
  
    return (
      <div>
        
        <LoadingContext.Provider value="loading.....">
          <input type="text" onChange={onChangeHandle} placeholder="search for users" />

          <SearchResult users={users} loading={loading} />
        </LoadingContext.Provider>
      </div>
    );
}
export default SearchField;