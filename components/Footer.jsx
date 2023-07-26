import React from 'react';

export default function Footer() {
  return (
    <footer className="padding-web h-72 border-t border-slate-500 border-opacity-30">
      <div className="flex-center flex-col mt-20">
        <ul>
          <li className="font-bold">We Have</li>
          <li>Movies</li>
          <li>Series</li>
          <li>Animes</li>
          <li>Tvs Shows</li>
        </ul>
        <small className="mt-10 py-5">2023 Copyright.</small>
      </div>
    </footer>
  );
}
