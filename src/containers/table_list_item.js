import React from 'react';

const TableListItem = ({ user, number }) => {
  const name = user.username;
  const image = user.img;
  const recent = user.recent;
  const allTime = user.alltime;
  const activity = user.lastUpdate.slice(0,10);

  return (
    <tr>
      <td>{number}</td>
      <td><img src={image} className="thumbnail" alt="user thumbnail" />&nbsp;<a href={`https://www.freecodecamp.org/${name}`} target='_blank'>{name}</a></td>
      <td>{recent}</td>
      <td>{allTime}</td>
      <td>{activity}</td>
    </tr>
  );
}

export default TableListItem;