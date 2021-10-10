import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

const App = () => {

  return (
    <div className="container">
      <header>
        <h1>
          Juan's Diesel Invoice Tracker
        </h1>
      </header>
      <main>
        <button>
          <p><i class="fas fa-plus"></i> Create New</p>
        </button>
      </main>
    </div>
  )
}

export default App;
