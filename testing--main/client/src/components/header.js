import React, { useState, useEffect } from 'react';

export default function Header() {
  const user = sessionStorage.getItem('username');
  return <div>Hi {user}</div>;
}
