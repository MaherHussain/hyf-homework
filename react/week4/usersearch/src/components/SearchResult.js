import React, { useContext } from "react";
import {LoadingContext} from './LoaingContext'

const SearchResult = (props) => {
    const {users} = props
    const {loading} = props
    const loadingText = useContext(LoadingContext)
    console.log(loading);
    return (
      <div className="users">
        {users.length === 0 && <div>No results</div>}
        {loading ? (<div>{ loadingText }</div>) :
        (users.map((user) => {
          return <div key={user.id}>{user.login}</div>;
        }))
        }
      </div>
    );
}
export default SearchResult