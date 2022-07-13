import json 
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync

from .models import * 

class ChatConsumer(WebsocketConsumer): 
    def connect(self): 
        self.room_group_name = 'test'

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name, 
            self.channel_name
        )

        self.accept()
        print("User Connected!") 
        """
        # query data
        chat_history = Chat.objects.all()
        # organise data into a dict 
        data = []
        for chat in chat_history:
            sub_data = {
                "sender" : chat.sender.id, 
                "message" : chat.msg
            }  
            data.push(data)
        print(data)
        """
        self.send(text_data=json.dumps({
            'type' : 'connection_established', 
            'message': 'You are now connected!', 
        }))

    def receive(self, text_data):
        text_data_json = json.loads(text_data)     
        message = text_data_json['message']

        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,{
                'type' : 'chat_message', 
                'message' : message, 
            }
        )

    def chat_message(self, event): 
        message = event['message']

        self.send(text_data=json.dumps({
            'type' : 'chat', 
            'message' : message
        }))