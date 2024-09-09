
const API_URL = 'http://localhost:8000'; 

export const createUser = async (name, email, password, contact_number, role) => {
  if(contact_number < 0){
    alert("Contact Number can not be in Negative")
  }
  else {
  try {
    const response = await fetch(`${API_URL}/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, contact_number, role }),
    });

    if (!response.ok) {
      throw new Error('Error creating user');
    }

    return response.json();
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}
};



export async function login(email, password) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
       
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error logging in:', error);
    throw error; 
  }
}

//'Authorization': `Bearer ${token}`;

export async function issueRequest(title, email) {
  try {
    const response = await fetch(`${API_URL}/user/issue`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, email })
    });
    if (!response.ok) {
      throw new Error('Book is not Available ');
    }
    const data =  await response.json();
    return data;
  } catch (error) {
    console.error('Error issuing request:', error);
    throw error; 
    }
}



export async function returnRequest(title, email) {
  try {
    const response = await fetch(`${API_URL}/user/return`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, email })
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error returning book:', error);
    throw error; 
  }
}



export async function create_Library(name) {
  const response = await fetch(`${API_URL}/owner/library`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });

  if (!response.ok) {
    const errorMessage = `Failed to create library: ${response.status}`;
    throw new Error(errorMessage);
  }

  return await response.json();
}




export async function Create_User(name, email, password, role) {
  try {
      const response = await fetch(`${API_URL}/createuser`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, password, role })
      });

      if (!response.ok) {
          throw new Error('Failed to create user');
      }

      return await response.json();
  } catch (error) {
      console.error('Error creating user:', error);
      throw error; 
  }
}


// api.js

export async function delete_User(email) {
  try {
      const response = await fetch(`${API_URL}/admin/deleteuser`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email })
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      return await response.json(); 
  } catch (error) {
      console.error('Error deleting user:', error);
      throw new Error('Failed to delete user. Please try again.');
  }
}



// api.js

async function createBook(isbn, libid, title, authors, publisher, version, totalCopies, availableCopies) {
  try {
      const response = await fetch(`${API_URL}/admin/createbook`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              isbn,
              libid,
              title,
              authors,
              publisher,
              version,
              total_copies: totalCopies,
              available_copies: availableCopies
          })
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      return await response.json();
  } catch (error) {
      console.error('Error creating book:', error);
      throw error; 
  }
}

export { createBook };
