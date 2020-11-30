import React from 'react'
import OpenConversation from '../openConversation'
import Sidebar from '../sidebar'
import { useConversations } from '../../contexts/ConversationsProvider'


export default function DashBoard({ id })  {
    const { selectedConversation } = useConversations()

    return (
        <div className='d-flex' style={{ height: '100vh' }}>
           <Sidebar id={id} />
           { selectedConversation && <OpenConversation />}
        </div>
    )
}
