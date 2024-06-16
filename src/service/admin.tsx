import axios from "axios"

export const fetchUsers = async () => {
    const response = await fetch('https://catfact.ninja/fact');
   
    return response.json();
  };