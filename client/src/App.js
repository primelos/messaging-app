import React from 'react'
import Login from './components/login'
import useLocalStorage from './hooks/localStorage';
import Dashboard from './components/dashboard'
import { ContactsProvider } from './contexts/ContactsProvider'
import { ConversationsProvider } from './contexts/ConversationsProvider';
import { SocketProvider } from './contexts/SocketProvider';

function App() {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return (
    <>
      {id ? dashboard : <Login onIdSubmit={setId}/>}
     
    </>
  );
}

export default App;
