import React from 'react';

export default function Comment({ comment }) {
  const { text } = comment
  return (
    <li className='comment-container'>
      <span>{text}</span>
    </li>
  );
}