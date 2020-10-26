import React from 'react'
import { Link } from 'react-router-dom'



export default function Users({ users, loading }) {
  return (
    <div>
      {users.length === 0 && <div className="text-center pt-2">No results</div>}
      <div className="row mt-5">
        {users.map((user) => {
          return (
            <div key={user.id} className="col-3 pt-3 pb-3 ">
              <Link className="text-dark" to={`user/${user.id}`}>
                {user.login}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
