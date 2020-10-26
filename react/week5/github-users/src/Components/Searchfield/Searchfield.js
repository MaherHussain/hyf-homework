import React, { useState, useRef, useEffect } from "react";
import Users from "../Users";
import * as reactBootstarp from "react-bootstrap";
export default function Searchfield() {
  /* const [query,setQuery] = useState('') */
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  console.log();
  const onChangeHendle = (e) => {
    const query = e.target.value;

    setLoading(true);
    console.log(query);
    if (query !== "") {
      fetch(`https://api.github.com/search/users?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          if (query === "") {
            return;
          } else {
            setUsers(data.items);
            setLoading(false);
            console.log(users);
          }
        });
      console.log(loading);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <div className="container text-center pt-5">
      <input
        ref={inputRef}
        type="text"
        onChange={onChangeHendle}
        placeholder="search github users"
      />
      {loading ? (
        <div className="spinner">
          <reactBootstarp.Spinner animation="border" role="status">
           
          </reactBootstarp.Spinner>
          <div>loading.....</div>
        </div>
      ) : (
        <Users users={users} loading={loading} />
      )}
    </div>
  );
}
