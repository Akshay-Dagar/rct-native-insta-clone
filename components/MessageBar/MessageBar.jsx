import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { clearMessage } from '../../Reducers/message'
import {Button, Text, View} from 'react-native'

const MessageBar = () => {
  const message = useSelector(state => state.message.value)
  const messageType = useSelector(state => state.message.type)       //to set background color to red or green or blue (for info)
  const dispatch = useDispatch()
  
  const handleClose = () => {
    dispatch(clearMessage())
  }
  
  return (
    message ? 
      <View className={`message-bar ${messageType === "Error" ? 'message-error' : messageType === 'Success' ? 'message-success' : 'message-info'}`}>
        <Text>{message}</Text>
        <Button onClick={handleClose}><AiOutlineClose /></Button>
      </View>
      : null
  )
}

export default MessageBar