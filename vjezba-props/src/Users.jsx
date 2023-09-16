import React from 'react';
import PropTypes from 'prop-types'
const Users = ({users}) => {
    return (

       <div>
           {users.map((user) =>        
               <div>{user.ime } {user.prezime}</div>
            )}
       </div>
       
    );
};


Users.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            ime:PropTypes.string,
            prezime:PropTypes.string,
            dob:PropTypes.number
        })
    ) 
};
export default Users;